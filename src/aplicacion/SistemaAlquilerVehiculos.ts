import { RepositorioVehiculos } from "../repositorios/RepositorioVehiculos";
import { RepositorioReservas } from "../repositorios/RepositorioReservas";
import { RepositorioClientes } from "../repositorios/RepositorioClientes";
import { RepositorioMantenimientos } from "../repositorios/RepositorioMantenimientos";

import { ServicioPrecios } from "../servicios/ServicioPrecios";
import { ServicioMantenimiento } from "../servicios/ServicioMantenimiento";
import { ServicioEstadisticas } from "../servicios/ServicioEstadisticas";

import { Cliente } from "../dominio/clientes/Cliente";
import { Vehiculo } from "../dominio/vehiculos/Vehiculo";
import { Reserva } from "../dominio/reservas/Reserva";
import { RegistroMantenimiento } from "../dominio/mantenimiento/RegistroMantenimiento";

export class SistemaAlquilerVehiculos {
  constructor(
    private repositorioVehiculos: RepositorioVehiculos,
    private repositorioReservas: RepositorioReservas,
    private repositorioClientes: RepositorioClientes,
    private repositorioMantenimientos: RepositorioMantenimientos,
    private servicioPrecios: ServicioPrecios,
    private servicioMantenimiento: ServicioMantenimiento,
    private servicioEstadisticas: ServicioEstadisticas
  ) {}

  registrarCliente(cliente: Cliente): void {
    this.repositorioClientes.guardar(cliente);
  }

  registrarVehiculo(vehiculo: Vehiculo): void {
    this.repositorioVehiculos.guardar(vehiculo);
  }

  crearReserva(
    idReserva: string,
    idCliente: string,
    idVehiculo: string,
    fechaInicio: Date,
    fechaFin: Date
  ): Reserva {
    const cliente = this.repositorioClientes.buscarPorId(idCliente);
    if (!cliente) {
      throw new Error("Cliente no encontrado.");
    }

    const vehiculo = this.repositorioVehiculos.buscarPorId(idVehiculo);
    if (!vehiculo) {
      throw new Error("Vehículo no encontrado.");
    }

    if (vehiculo.nombreEstado !== "DISPONIBLE") {
      throw new Error("El vehículo no está disponible para ser alquilado.");
    }

    vehiculo.alquilar();
    vehiculo.alquileresDesdeMantenimiento++;

    const reserva = new Reserva(
      idReserva,
      cliente,
      vehiculo,
      fechaInicio,
      fechaFin
    );

    this.repositorioReservas.guardar(reserva);
    this.repositorioVehiculos.guardar(vehiculo);

    return reserva;
  }

  registrarDevolucion(
    idReserva: string,
    kilometrosRecorridos: number,
    nuevoKilometrajeVehiculo: number
  ): void {
    const reserva = this.repositorioReservas.buscarPorId(idReserva);
    if (!reserva) {
      throw new Error("Reserva no encontrada.");
    }

    const vehiculo = reserva.vehiculo;

    reserva.kilometrosRecorridos = kilometrosRecorridos;
    const costo = this.servicioPrecios.calcularCosto(reserva, kilometrosRecorridos);
    reserva.costoTotal = costo;
    reserva.completada = true;

    vehiculo.kilometrajeActual = nuevoKilometrajeVehiculo;
    vehiculo.devolver();

    if (this.servicioMantenimiento.necesitaMantenimiento(vehiculo)) {
      vehiculo.enviarAMantenimiento();
    }

    this.repositorioReservas.guardar(reserva);
    this.repositorioVehiculos.guardar(vehiculo);
  }

  finalizarMantenimientoVehiculo(
    idVehiculo: string,
    costoMantenimiento: number
  ): void {
    const vehiculo = this.repositorioVehiculos.buscarPorId(idVehiculo);
    if (!vehiculo) {
      throw new Error("Vehículo no encontrado.");
    }

    vehiculo.finalizarMantenimiento();

    const registro = new RegistroMantenimiento(
      `M-${Date.now()}`,
      vehiculo.id,
      new Date(),
      costoMantenimiento
    );

    this.repositorioMantenimientos.guardar(registro);
    this.repositorioVehiculos.guardar(vehiculo);
  }

  obtenerVehiculosMasYMenosAlquilados(desde: Date, hasta: Date) {
    return this.servicioEstadisticas.vehiculosMasYMenosAlquilados(
      this.repositorioReservas.obtenerTodos(),
      this.repositorioVehiculos.obtenerTodos(),
      desde,
      hasta
    );
  }

  obtenerVehiculosMasYMenosRentables(desde: Date, hasta: Date) {
    return this.servicioEstadisticas.vehiculosMasYMenosRentables(
      this.repositorioReservas.obtenerTodos(),
      this.repositorioVehiculos.obtenerTodos(),
      this.repositorioMantenimientos.obtenerTodos(),
      desde,
      hasta
    );
  }

  obtenerPorcentajeOcupacionFlota(instante: Date): number {
    return this.servicioEstadisticas.porcentajeOcupacionFlota(
      this.repositorioReservas.obtenerTodos(),
      this.repositorioVehiculos.obtenerTodos(),
      instante
    );
  }
}
