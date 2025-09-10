import TipoVehiculo from "./tipoVehiculo";

export default class Sedán extends TipoVehiculo {
    public obtenerTipo(): string {
        return "Sedán"
    }
}