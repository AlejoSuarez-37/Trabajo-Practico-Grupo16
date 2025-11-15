import { RepositorioClientes } from "./RepositorioClientes";
import { Cliente } from "../dominio/clientes/Cliente";

export class RepositorioClientesMemoria implements RepositorioClientes {
  private clientes = new Map<string, Cliente>();

  guardar(cliente: Cliente): void {
    this.clientes.set(cliente.id, cliente);
  }

  buscarPorId(id: string): Cliente | undefined {
    return this.clientes.get(id);
  }

  obtenerTodos(): Cliente[] {
    return Array.from(this.clientes.values());
  }
}
