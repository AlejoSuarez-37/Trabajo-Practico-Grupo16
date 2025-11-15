import { Reserva } from "../dominio/reservas/Reserva";

export interface RepositorioReservas {
  guardar(reserva: Reserva): void;
  buscarPorId(id: string): Reserva | undefined;
  obtenerTodos(): Reserva[];
}
