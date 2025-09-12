import Vehiculo from "./vehiculo";

export default class SUV extends Vehiculo {
    public obtenerTarifa(dias: number, kilometros: number): number {
        let tarifaBase: number = 80 * dias;
        if (kilometros >= 500){
            return tarifaBase + (dias * 15) + (0.25 * kilometros);
        }
        else {
            return tarifaBase + (dias * 15);
        }
    }
}