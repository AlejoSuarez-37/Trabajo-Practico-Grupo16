import { RepositorioReservas } from "./RepositorioReservas";
import { Reserva } from "../dominio/reservas/Reserva";

export class RepositorioReservasMemoria implements RepositorioReservas {
  private reservas = new Map<string, Reserva>();

  guardar(reserva: Reserva): void {
    this.reservas.set(reserva.id, reserva);
  }

  buscarPorId(id: string): Reserva | undefined {
    return this.reservas.get(id);
  }

  obtenerTodos(): Reserva[] {
    return Array.from(this.reservas.values());
  }
}
