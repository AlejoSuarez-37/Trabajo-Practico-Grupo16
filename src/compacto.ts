import TipoVehiculo from "./tipoVehiculo";

export default class Compacto extends TipoVehiculo {
    public obtenerTipo(): string {
        return "Compacto"
    }
}