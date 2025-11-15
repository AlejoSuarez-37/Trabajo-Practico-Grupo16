import { Vehiculo } from "../dominio/vehiculos/Vehiculo";

export class ServicioMantenimiento {
  private MAX_KM = 10000;
  private MAX_ALQUILERES = 5;
  private MAX_MESES = 12;

  necesitaMantenimiento(vehiculo: Vehiculo): boolean {
    const kmDesdeMantenimiento =
      vehiculo.kilometrajeActual - vehiculo.kilometrajeUltimoMantenimiento;

    const hoy = new Date();
    const meses =
      (hoy.getFullYear() - vehiculo.fechaUltimoMantenimiento.getFullYear()) * 12 +
      (hoy.getMonth() - vehiculo.fechaUltimoMantenimiento.getMonth());

    const superaKm = kmDesdeMantenimiento >= this.MAX_KM;
    const superaAlquileres = vehiculo.alquileresDesdeMantenimiento >= this.MAX_ALQUILERES;
    const superaTiempo = meses >= this.MAX_MESES;

    return superaKm || superaAlquileres || superaTiempo;
  }
}
