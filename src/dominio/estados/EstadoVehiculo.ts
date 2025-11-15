import { Vehiculo } from "../vehiculos/Vehiculo";

export interface EstadoVehiculo {
   nombre: string;

  alquilar(vehiculo: Vehiculo): void;
  devolver(vehiculo: Vehiculo): void;
  enviarAMantenimiento(vehiculo: Vehiculo): void;
  finalizarMantenimiento(vehiculo: Vehiculo): void;
}
