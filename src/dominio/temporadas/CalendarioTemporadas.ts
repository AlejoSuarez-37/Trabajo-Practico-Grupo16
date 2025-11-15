import { TipoTemporada } from "./TipoTemporada";
import { PeriodoTemporada } from "./PeriodoTemporada";

export class CalendarioTemporadas {
  private periodos: PeriodoTemporada[] = [];

  agregarPeriodo(periodo: PeriodoTemporada): void {
    this.periodos.push(periodo);
  }

  obtenerTipoTemporada(fecha: Date): TipoTemporada {
    const encontrado = this.periodos.find(p => p.incluye(fecha));
    return encontrado ? encontrado.tipo : TipoTemporada.MEDIA;
  }
}
