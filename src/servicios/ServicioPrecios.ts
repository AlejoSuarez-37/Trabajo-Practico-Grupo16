import { Reserva } from "../dominio/reservas/Reserva";
import { CalendarioTemporadas } from "../dominio/temporadas/CalendarioTemporadas";
import { TipoTemporada } from "../dominio/temporadas/TipoTemporada";

export class ServicioPrecios {
  constructor(private readonly calendarioTemporadas: CalendarioTemporadas) {}

  calcularCosto(reserva: Reserva, kilometrosRecorridos: number): number {
    const dias = reserva.obtenerCantidadDias();
    const fechaInicio = reserva.fechaInicio;
    const tipoTemporada = this.calendarioTemporadas.obtenerTipoTemporada(fechaInicio);

    const costoBase = reserva.vehiculo.calcularCostoBase(dias, kilometrosRecorridos);
    const factorTemporada = this.obtenerFactorTemporada(tipoTemporada);

    return costoBase * factorTemporada;
  }

  private obtenerFactorTemporada(tipo: TipoTemporada): number {
    switch (tipo) {
      case TipoTemporada.BAJA:
        return 0.9; // -10%
      case TipoTemporada.ALTA:
        return 1.2; // +20%
      case TipoTemporada.MEDIA:
      default:
        return 1;
    }
  }
}
