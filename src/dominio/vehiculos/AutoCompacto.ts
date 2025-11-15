import { Vehiculo } from "./Vehiculo";
import { TipoVehiculo } from "./TipoVehiculo";

export class AutoCompacto extends Vehiculo {
  constructor(
    id: string,
    patente: string,
    tarifaBasePorDia = 30,
    kilometrajeActual = 0,
    kilometrajeUltimoMantenimiento = 0,
    fechaUltimoMantenimiento = new Date()
  ) {
    super(
      id,
      patente,
      TipoVehiculo.AUTO_COMPACTO,
      tarifaBasePorDia,
      kilometrajeActual,
      kilometrajeUltimoMantenimiento,
      fechaUltimoMantenimiento
    );
  }

  calcularCostoBase(dias: number, kilometrosRecorridos: number): number {
    const costoBase = dias * this.tarifaBasePorDia;
    const kmPorDia = kilometrosRecorridos / dias;

    if (kmPorDia > 100) {
      const kmExtra = kilometrosRecorridos - 100 * dias;
      return costoBase + kmExtra * 0.15;
    }

    return costoBase;
  }
}
