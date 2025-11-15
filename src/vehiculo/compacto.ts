import { Temporada } from "../temporada/temporada";
import Vehiculo from "./vehiculo";

export default class Compacto extends Vehiculo {
    public obtenerTarifaReserva(dias: number, kilometros: number, temporada: Temporada): number {
        let tarifaBase:number = 30 * dias + ((30 * dias) * temporada.modificador);
        if ((kilometros / dias) >= 100){
            return tarifaBase + (0.15 * kilometros);
        }
        else {
            return tarifaBase;
        }
    }
    public obtenerTarifaMantenimiento(dias: number): number {
        return dias * 1000;
    }
}