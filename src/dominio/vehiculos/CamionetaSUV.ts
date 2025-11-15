import { Vehiculo } from "./Vehiculo";
import { TipoVehiculo } from "./TipoVehiculo";

export class CamionetaSUV extends Vehiculo {
  constructor(
    id: string,
    patente: string,
    tarifaBasePorDia = 80,
    kilometrajeActual = 0,
    kilometrajeUltimoMantenimiento = 0,
    fechaUltimoMantenimiento = new Date()
  ) {
    super(
      id,
      patente,
      TipoVehiculo.CAMIONETA_SUV,
      tarifaBasePorDia,
      kilometrajeActual,
      kilometrajeUltimoMantenimiento,
      fechaUltimoMantenimiento
    );
  }

  calcularCostoBase(dias: number, kilometrosRecorridos: number): number {
    const costoBase = dias * this.tarifaBasePorDia;
    const costoSeguro = 15 * dias;
    let extraPorKm = 0;

    if (kilometrosRecorridos > 500) {
      const kmExtra = kilometrosRecorridos - 500;
      extraPorKm = kmExtra * 0.25;
    }

    return costoBase + costoSeguro + extraPorKm;
  }
}
