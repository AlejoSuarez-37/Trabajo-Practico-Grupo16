import Garage from "../garage";
/**
 * interfaz que define todos los reportes (menos el de ocupacion de la flota)
 */
export interface Reporte {
    analizar(garage:Garage):string
}