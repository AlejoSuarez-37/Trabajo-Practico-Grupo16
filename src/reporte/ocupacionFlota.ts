import Garage from "../garage";
import { OcupacionFlotaI } from "./OcupacionFlotaInt";

export default class OcupacionFlota implements OcupacionFlotaI {
    /**
     * retorna la cantidad de vehiculos activos en una fecha determinada
     * @param fecha - Fecha a consultar
     * @param garage - Garage del cual obtener la información.
     * @returns cantidad de flota activa
     */
    public analizar(garage:Garage,fecha:Date):number {
        let cuenta:number = 0;
        garage.getVehiculos().forEach((vehiculo,key) => {
            vehiculo.getRegistroReserva().getRegistro().forEach((value) => {
                if(fecha >= value.getFechaInicio() && fecha <= value.getFechaFin()){
                    cuenta++;
                }
            })
        });
    return cuenta;
    }
}