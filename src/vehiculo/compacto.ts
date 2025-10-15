import Vehiculo from "./vehiculo";

export default class Compacto extends Vehiculo {
    public obtenerTarifaReserva(dias: number, kilometros: number): number {
        let tarifaBase: number = 30 * dias;
        if ((kilometros / dias) >= 100){
            return tarifaBase + (0.15 * kilometros);
        }
        else {
            return tarifaBase;
        }
    }
    public obtenerTarifaMantenimiento(dias: number): number {
        return dias * 20;
    }
}