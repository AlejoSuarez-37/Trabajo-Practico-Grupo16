import Garage from "../garage";
import Compacto from "../vehiculo/compacto";
import Vehiculo from "../vehiculo/vehiculo";
import { Reporte } from "./reporteInt";

export default class VehiculoMenosAlquilado implements Reporte {
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
    public analizar(garage: Garage):string {
        let menorNumAlquileres:number = 0;
        let vehiculoMenosAlquileres:Vehiculo = new Compacto("");
        garage.getVehiculos().forEach((value,key) => {
            if(value.getAlquileres() <= menorNumAlquileres){
                menorNumAlquileres = value.getAlquileres();
                vehiculoMenosAlquileres = value;
            }
        });
        return vehiculoMenosAlquileres.getMatricula();
    }
}
