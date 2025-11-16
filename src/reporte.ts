import Garage from "./garage";
import Vehiculo from "./vehiculo/vehiculo";

/**
 * Clase encargada de generar reportes y métricas
 * basadas en la actividad de los vehículos de un garage.
 *
 * Proporciona métodos para obtener vehículos más/menos alquilados,
 * más/menos rentables y el nivel de ocupación de la flota.
 */
export default class Reporte {

    /**
     * Obtiene el vehículo con mayor cantidad de alquileres realizados.
     *
     * @param {Garage} g - Garage del cual obtener la información.
     * @returns {Vehiculo} El vehículo que más veces fue alquilado.
     */
    public vehiculoMasAlquilado(g: Garage): Vehiculo {
        let mayorNumAlquileres: number = 0;
        let vehiculoMasAlquileres: Vehiculo | undefined;

        g.getVehiculos().forEach((value) => {
            if (value.getAlquileres() > mayorNumAlquileres) {
                mayorNumAlquileres = value.getAlquileres();
                vehiculoMasAlquileres = value;
            }
        });

        return vehiculoMasAlquileres!;
    }

    /**
     * Obtiene el vehículo con menor cantidad de alquileres realizados.
     *
     * Nota: Inicializa el contador en 0, por lo que devolverá
     * el primer vehículo que tenga **menos de 0 alquileres**, lo que en la práctica
     * puede requerir ajuste si se espera otro comportamiento.
     *
     * @param {Garage} g - Garage del cual obtener la información.
     * @returns {Vehiculo} El vehículo que menos veces fue alquilado.
     */
    public vehiculoMenosAlquilado(g: Garage): Vehiculo {
        let menorNumAlquileres: number = 0;
        let vehiculoMenosAlquileres: Vehiculo | undefined;

        g.getVehiculos().forEach((value) => {
            if (value.getAlquileres() < menorNumAlquileres) {
                menorNumAlquileres = value.getAlquileres();
                vehiculoMenosAlquileres = value;
            }
        });

        return vehiculoMenosAlquileres!;
    }

    /**
     * Obtiene el vehículo con mayor rentabilidad acumulada.
     *
     * @param {Garage} g - Garage del cual obtener la información.
     * @returns {Vehiculo} El vehículo más rentable.
     */
    public vehiculoMayorRentabilidad(g: Garage): Vehiculo {
        let mayorRentabilidad: number = 0;
        let vehiculoMayorRentabilidad: Vehiculo | undefined;

        g.getVehiculos().forEach((value) => {
            if (value.getRentabilidad() > mayorRentabilidad) {
                mayorRentabilidad = value.getRentabilidad();
                vehiculoMayorRentabilidad = value;
            }
        });

        return vehiculoMayorRentabilidad!;
    }

    /**
     * Obtiene el vehículo con menor rentabilidad acumulada.
     *
     * Nota: Inicializa la rentabilidad mínima en 0, por lo que
     * el método solo identificará vehículos con valores negativos.
     *
     * @param {Garage} g - Garage del cual obtener la información.
     * @returns {Vehiculo} El vehículo menos rentable.
     */
    public vehiculoMenorRentabilidad(g: Garage): Vehiculo {
        let menorRentabilidad: number = 0;
        let vehiculoMenorRentabilidad: Vehiculo | undefined;

        g.getVehiculos().forEach((value) => {
            if (value.getRentabilidad() < menorRentabilidad) {
                menorRentabilidad = value.getRentabilidad();
                vehiculoMenorRentabilidad = value;
            }
        });

        return vehiculoMenorRentabilidad!;
    }

    /**
     * Calcula el porcentaje de ocupación de la flota del garage
     * en una fecha determinada.
     *
     * Se considera que un vehículo está ocupado si tiene una reserva
     * cuya fecha de inicio y fin incluyan a la fecha consultada.
     *
     * @param {Date} d - Fecha para evaluar ocupación.
     * @param {Garage} g - Garage que contiene la flota.
     * @returns {number} Porcentaje de ocupación (entre 0 y 1).
     */
    public ocupacionDeLaFlota(d: Date, g: Garage): number {
        let cuenta: number = 0;

        g.getVehiculos().forEach((vehiculo) => {
            vehiculo.getReservasPasadas().forEach(value => {
                if (d >= value.getFechaInicio() && d <= value.getFechaFin()) {
                    cuenta++;
                }
            });
        });

        return cuenta / g.getVehiculos().size;
    }
}