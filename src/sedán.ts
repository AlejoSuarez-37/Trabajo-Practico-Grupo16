import Vehiculo from "./vehiculo";

export default class Sedán extends Vehiculo {
    public obtenerTipo(): string {
        return "Sedán"
    }
}