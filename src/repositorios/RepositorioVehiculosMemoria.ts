import { RepositorioVehiculos } from "./RepositorioVehiculos";
import { Vehiculo } from "../dominio/vehiculos/Vehiculo";

export class RepositorioVehiculosMemoria implements RepositorioVehiculos {
  private vehiculos = new Map<string, Vehiculo>();

  guardar(vehiculo: Vehiculo): void {
    this.vehiculos.set(vehiculo.id, vehiculo);
  }

  buscarPorId(id: string): Vehiculo | undefined {
    return this.vehiculos.get(id);
  }

  obtenerTodos(): Vehiculo[] {
    return Array.from(this.vehiculos.values());
  }
}
