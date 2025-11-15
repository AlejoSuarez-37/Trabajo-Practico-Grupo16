import { TipoTemporada } from "./TipoTemporada";

export class PeriodoTemporada {
  constructor(
    public readonly nombre: string,
    public readonly tipo: TipoTemporada,
    public readonly fechaInicio: Date,
    public readonly fechaFin: Date
  ) {}

  incluye(fecha: Date): boolean {
    return fecha >= this.fechaInicio && fecha <= this.fechaFin;
  }
}
