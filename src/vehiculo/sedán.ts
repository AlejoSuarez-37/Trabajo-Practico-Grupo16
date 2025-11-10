import Vehiculo from "./vehiculo";

export default class Sedán extends Vehiculo {
    public obtenerTarifaReserva(dias: number, kilometros: number): number {
        return (50 * dias) + ((30 * dias) * this.temporada.modificador) + (0.20 * kilometros);
    }
    public obtenerTarifaMantenimiento(dias: number): number {
        return dias * 1000;
    }
}