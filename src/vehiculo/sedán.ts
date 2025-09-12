import Vehiculo from "./vehiculo";

export default class Sedán extends Vehiculo {
    public obtenerTarifa(dias: number, kilometros: number): number {
        return (50 * dias) + (0.20 * kilometros);
    }
}