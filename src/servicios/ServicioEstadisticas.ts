import { Reserva } from "../dominio/reservas/Reserva";
import { Vehiculo } from "../dominio/vehiculos/Vehiculo";
import { RegistroMantenimiento } from "../dominio/mantenimiento/RegistroMantenimiento";

export interface ResultadoRentabilidad {
  vehiculo: Vehiculo;
  rentabilidad: number;
}

export class ServicioEstadisticas {
  vehiculosMasYMenosAlquilados(
    reservas: Reserva[],
    vehiculos: Vehiculo[],
    desde: Date,
    hasta: Date
  ): { masAlquilado: Vehiculo | null; menosAlquilado: Vehiculo | null } {
    const contador = new Map<string, number>();

    reservas.forEach(r => {
      if (r.fechaInicio >= desde && r.fechaFin <= hasta) {
        const id = r.vehiculo.id;
        contador.set(id, (contador.get(id) ?? 0) + 1);
      }
    });

    if (contador.size === 0) {
      return { masAlquilado: null, menosAlquilado: null };
    }

    let idMas = "";
    let idMenos = "";
    let max = -Infinity;
    let min = Infinity;

    contador.forEach((cantidad, id) => {
      if (cantidad > max) {
        max = cantidad;
        idMas = id;
      }
      if (cantidad < min) {
        min = cantidad;
        idMenos = id;
      }
    });

    const masAlquilado = vehiculos.find(v => v.id === idMas) ?? null;
    const menosAlquilado = vehiculos.find(v => v.id === idMenos) ?? null;

    return { masAlquilado, menosAlquilado };
  }

  vehiculosMasYMenosRentables(
    reservas: Reserva[],
    vehiculos: Vehiculo[],
    registros: RegistroMantenimiento[],
    desde: Date,
    hasta: Date
  ): { masRentable: ResultadoRentabilidad | null; menosRentable: ResultadoRentabilidad | null } {
    const ingresos = new Map<string, number>();
    const costos = new Map<string, number>();

    reservas.forEach(r => {
      if (r.completada && r.fechaInicio >= desde && r.fechaFin <= hasta) {
        const id = r.vehiculo.id;
        ingresos.set(id, (ingresos.get(id) ?? 0) + r.costoTotal);
      }
    });

    registros.forEach(reg => {
      if (reg.fecha >= desde && reg.fecha <= hasta) {
        costos.set(reg.idVehiculo, (costos.get(reg.idVehiculo) ?? 0) + reg.costo);
      }
    });

    if (vehiculos.length === 0) {
      return { masRentable: null, menosRentable: null };
    }

    const lista: ResultadoRentabilidad[] = vehiculos.map(v => {
      const ing = ingresos.get(v.id) ?? 0;
      const cos = costos.get(v.id) ?? 0;
      return { vehiculo: v, rentabilidad: ing - cos };
    });

    let masRentable: ResultadoRentabilidad | null = null;
    let menosRentable: ResultadoRentabilidad | null = null;

    for (const r of lista) {
      if (!masRentable || r.rentabilidad > masRentable.rentabilidad) {
        masRentable = r;
      }
      if (!menosRentable || r.rentabilidad < menosRentable.rentabilidad) {
        menosRentable = r;
      }
    }

    return { masRentable, menosRentable };
  }

  porcentajeOcupacionFlota(
    reservas: Reserva[],
    vehiculos: Vehiculo[],
    instante: Date
  ): number {
    const total = vehiculos.length;
    if (total === 0) return 0;

    const enAlquiler = reservas.filter(r => {
      return r.fechaInicio <= instante && r.fechaFin >= instante && !r.completada;
    }).length;

    return (enAlquiler / total) * 100;
  }
}
