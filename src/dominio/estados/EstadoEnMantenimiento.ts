import { EstadoVehiculo } from "./EstadoVehiculo";
import { Vehiculo } from "../vehiculos/Vehiculo";
import { EstadoDisponible } from "./EstadoDisponible";

export class EstadoEnMantenimiento implements EstadoVehiculo {
  public nombre = "EN_MANTENIMIENTO";

  alquilar(): void {
    throw new Error("No se puede alquilar un vehículo en mantenimiento.");
  }

  devolver(): void {
    throw new Error("No se puede devolver un vehículo en mantenimiento.");
  }

  enviarAMantenimiento(): void {
    throw new Error("El vehículo ya está en mantenimiento.");
  }

  finalizarMantenimiento(vehiculo: Vehiculo): void {
    vehiculo.cambiarEstado(new EstadoDisponible());
    vehiculo.alquileresDesdeMantenimiento = 0;
    vehiculo.kilometrajeUltimoMantenimiento = vehiculo.kilometrajeActual;
    vehiculo.fechaUltimoMantenimiento = new Date();
  }
}
