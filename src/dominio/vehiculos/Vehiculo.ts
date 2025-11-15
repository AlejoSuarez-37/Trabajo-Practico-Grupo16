import { TipoVehiculo } from "./TipoVehiculo";
import { EstadoVehiculo } from "../estados/EstadoVehiculo";
import { EstadoDisponible } from "../estados/EstadoDisponible";

export abstract class Vehiculo {
  private estado: EstadoVehiculo;

  constructor(
    public id: string,
    public patente: string,
    public tipo: TipoVehiculo,
    public tarifaBasePorDia: number,
    public kilometrajeActual: number,
    public kilometrajeUltimoMantenimiento: number,
    public fechaUltimoMantenimiento: Date,
    public alquileresDesdeMantenimiento: number = 0
  ) {
    this.estado = new EstadoDisponible();
  }

  get nombreEstado(): string {
    return this.estado.nombre;
  }

  cambiarEstado(nuevoEstado: EstadoVehiculo): void {
    this.estado = nuevoEstado;
  }

  alquilar(): void {
    this.estado.alquilar(this);
  }

  devolver(): void {
    this.estado.devolver(this);
  }

  enviarAMantenimiento(): void {
    this.estado.enviarAMantenimiento(this);
  }

  finalizarMantenimiento(): void {
    this.estado.finalizarMantenimiento(this);
  }
  
  abstract calcularCostoBase(dias: number, kilometrosRecorridos: number): number;
}
