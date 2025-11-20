import Garage from "../garage";
import Compacto from "../vehiculo/compacto";
import Vehiculo from "../vehiculo/vehiculo";
import { Reporte } from "./reporteInt";

export default class VehiculoMasAlquilado implements Reporte {
    /**
     * Obtiene el vehículo con mayor cantidad de alquileres realizados.
     *
     * @param {Garage} g - Garage del cual obtener la información.
     * @returns {Vehiculo} El vehículo que más veces fue alquilado.
     */
    public analizar(garage:Garage):string {
        let mayorNumAlquileres:number = 0;
        let vehiculoMasAlquileres:Vehiculo = new Compacto("");
        garage.getVehiculos().forEach((value,key) => {
            if(value.getAlquileres() >= mayorNumAlquileres){
                mayorNumAlquileres = value.getAlquileres();
                vehiculoMasAlquileres = value;
            }
        });
        return vehiculoMasAlquileres.getMatricula();
    }
}