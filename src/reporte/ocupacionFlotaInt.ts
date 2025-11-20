import Garage from "../garage";

export interface OcupacionDeLaFlotaI {
    analizar(d: Date, garage: Garage):number
}