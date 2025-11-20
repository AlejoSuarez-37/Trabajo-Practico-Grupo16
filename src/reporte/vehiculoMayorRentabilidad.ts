import Garage from "../garage";
import Compacto from "../vehiculo/compacto";
import Vehiculo from "../vehiculo/vehiculo";
import { Reporte } from "./reporteInt";

export default class VehiculoMayorRentabilidad implements Reporte {
    /**
     * Obtiene el vehículo con mayor rentabilidad acumulada.
     *
     * @param - Garage del cual obtener la información.
     * @returns - Vehículo más rentable.
     */
    public analizar(garage: Garage):string {
        let mayorRentabilidad:number = 0;
        let vehiculoMayorRentabilidad:Vehiculo = new Compacto("");
        garage.getVehiculos().forEach((value,key) => {
            if(value.getRentabilidad() >= mayorRentabilidad){
                mayorRentabilidad = value.getRentabilidad();
                vehiculoMayorRentabilidad = value;
            }
        });
        return vehiculoMayorRentabilidad.getMatricula();
    }
}