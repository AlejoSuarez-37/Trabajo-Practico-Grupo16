import { Cliente } from "../dominio/clientes/Cliente";

export interface RepositorioClientes {
  guardar(cliente: Cliente): void;
  buscarPorId(id: string): Cliente | undefined;
  obtenerTodos(): Cliente[];
}
