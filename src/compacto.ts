import Vehiculo from "./vehiculo";

export default class Compacto extends Vehiculo {
    public obtenerTipo(): string {
        return "Compacto"
    }
}