import { Temporada } from "../temporada/temporada";
import Vehiculo from "./vehiculo";

export default class SUV extends Vehiculo {
    public obtenerTarifaReserva(dias: number, kilometros: number, temporada: Temporada): number {
        let tarifaBase: number = 80 * dias + ((30 * dias) * temporada.modificador);
        if (kilometros >= 500){
            return tarifaBase + (dias * 15) + (0.25 * kilometros);
        }
        else {
            return tarifaBase + (dias * 15);
        }
    }
    public obtenerTarifaMantenimiento(dias: number): number {
        return dias * 1000;
    }
}