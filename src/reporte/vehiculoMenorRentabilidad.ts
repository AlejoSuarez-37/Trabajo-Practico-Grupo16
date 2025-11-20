import Garage from "../garage";
import Compacto from "../vehiculo/compacto";
import Vehiculo from "../vehiculo/vehiculo";
import { Reporte } from "./reporteInt";

export default class VehiculoMenorRentabilidad implements Reporte {
    /**
     * Obtiene el vehículo con menor rentabilidad acumulada.
     *
     * @param } g - Garage del cual obtener la información.
     * @returns El vehículo menos rentable.
     */
    public analizar(garage: Garage):string {
        let menorRentabilidad:number = 0;
        let vehiculoMenorRentabilidad:Vehiculo = new Compacto("");
        garage.getVehiculos().forEach((value,key) => {
            if(value.getRentabilidad() <= menorRentabilidad){
                menorRentabilidad = value.getRentabilidad();
                vehiculoMenorRentabilidad = value;
            }
        });
        return vehiculoMenorRentabilidad.getMatricula();
    }
}