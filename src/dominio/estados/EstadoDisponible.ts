import { EstadoVehiculo } from "./EstadoVehiculo";
import { Vehiculo } from "../vehiculos/Vehiculo";
import { EstadoAlquilado } from "./EstadoAlquilado";
import { EstadoEnMantenimiento } from "./EstadoEnMantenimiento";

export class EstadoDisponible implements EstadoVehiculo {
  public nombre = "DISPONIBLE";

  alquilar(vehiculo: Vehiculo): void {
    vehiculo.cambiarEstado(new EstadoAlquilado());
  }

  devolver(): void {
    throw new Error("El vehículo ya está disponible, no se puede devolver.");
  }

  enviarAMantenimiento(vehiculo: Vehiculo): void {
    vehiculo.cambiarEstado(new EstadoEnMantenimiento());
  }

  finalizarMantenimiento(): void {
    throw new Error("El vehículo está disponible, no hay mantenimiento en curso.");
  }
}
