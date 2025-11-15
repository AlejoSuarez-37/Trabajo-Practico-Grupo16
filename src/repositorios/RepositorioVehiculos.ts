import { Vehiculo } from "../dominio/vehiculos/Vehiculo";

export interface RepositorioVehiculos {
  guardar(vehiculo: Vehiculo): void;
  buscarPorId(id: string): Vehiculo | undefined;
  obtenerTodos(): Vehiculo[];
}
