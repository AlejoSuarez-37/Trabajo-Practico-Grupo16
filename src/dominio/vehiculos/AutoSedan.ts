import { Vehiculo } from "./Vehiculo";
import { TipoVehiculo } from "./TipoVehiculo";

export class AutoSedan extends Vehiculo {
  constructor(
    id: string,
    patente: string,
    tarifaBasePorDia = 50,
    kilometrajeActual = 0,
    kilometrajeUltimoMantenimiento = 0,
    fechaUltimoMantenimiento = new Date()
  ) {
    super(
      id,
      patente,
      TipoVehiculo.AUTO_SEDAN,
      tarifaBasePorDia,
      kilometrajeActual,
      kilometrajeUltimoMantenimiento,
      fechaUltimoMantenimiento
    );
  }

  calcularCostoBase(dias: number, kilometrosRecorridos: number): number {
    const costoBase = dias * this.tarifaBasePorDia;
    const extraPorKm = kilometrosRecorridos * 0.2;
    return costoBase + extraPorKm;
  }
}
