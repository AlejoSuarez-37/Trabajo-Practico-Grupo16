import { EstadoVehiculo } from "./EstadoVehiculo";
import { Vehiculo } from "../vehiculos/Vehiculo";
import { EstadoDisponible } from "./EstadoDisponible";

export class EstadoAlquilado implements EstadoVehiculo {
  public nombre = "EN_ALQUILER";

  alquilar(): void {
    throw new Error("El vehículo ya está alquilado.");
  }

  devolver(vehiculo: Vehiculo): void {
    vehiculo.cambiarEstado(new EstadoDisponible());
  }

  enviarAMantenimiento(): void {
    throw new Error("No se puede enviar a mantenimiento un vehículo que está alquilado.");
  }

  finalizarMantenimiento(): void {
    throw new Error("No se puede finalizar mantenimiento de un vehículo que está alquilado.");
  }
}
