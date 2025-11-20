import Garage from "../garage";
import { OcupacionDeLaFlotaI } from "./ocupacionFlotaInt";

export default class OcupacionDeLaFlota implements OcupacionDeLaFlotaI {
    /**
     * retorna la cantidad de vehiculos activo en una fecha determinada
     * @param d - Dia a consultar
     * @param g - Garage del cual obtener la información.
     * @returns cantidad de flota activa
     */
    public analizar(d: Date, garage: Garage):number {
        let cuenta:number = 0;
        garage.getVehiculos().forEach((vehiculo,key) => {
            vehiculo.getRegRes().getRegistro().forEach(value => {
                if(value.colisionaReservas(d,d)){
                    cuenta++;
                }
            });
        });
    return cuenta;
    }
}