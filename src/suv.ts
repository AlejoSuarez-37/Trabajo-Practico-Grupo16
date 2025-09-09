import Vehiculo from "./vehiculo";

export default class SUV extends Vehiculo {
    public obtenerTipo(): string {
        return "SUV"
    }
}