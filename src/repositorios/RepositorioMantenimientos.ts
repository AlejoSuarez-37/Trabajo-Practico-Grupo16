import { RegistroMantenimiento } from "../dominio/mantenimiento/RegistroMantenimiento";

export interface RepositorioMantenimientos {
  guardar(registro: RegistroMantenimiento): void;
  obtenerTodos(): RegistroMantenimiento[];
}
