import { Cliente } from "../clientes/Cliente";
import { Vehiculo } from "../vehiculos/Vehiculo";

export class Reserva {
  public kilometrosRecorridos: number = 0;
  public costoTotal: number = 0;
  public completada: boolean = false;

  constructor(
    public id: string,
    public cliente: Cliente,
    public vehiculo: Vehiculo,
    public fechaInicio: Date,
    public fechaFin: Date
  ) {}

  obtenerCantidadDias(): number {
    const diffMs = this.fechaFin.getTime() - this.fechaInicio.getTime();
    const dias = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    return dias > 0 ? dias : 1;
  }
}
