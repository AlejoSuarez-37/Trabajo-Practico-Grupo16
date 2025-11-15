import { RepositorioMantenimientos } from "./RepositorioMantenimientos";
import { RegistroMantenimiento } from "../dominio/mantenimiento/RegistroMantenimiento";

export class RepositorioMantenimientosMemoria implements RepositorioMantenimientos {
  private registros: RegistroMantenimiento[] = [];

  guardar(registro: RegistroMantenimiento): void {
    this.registros.push(registro);
  }

  obtenerTodos(): RegistroMantenimiento[] {
    return [...this.registros];
  }
}
