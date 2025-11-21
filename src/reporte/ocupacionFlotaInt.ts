import Garage from "../garage";

export interface OcupacionFlotaI {
    analizar(garage:Garage,fecha:Date):number
}