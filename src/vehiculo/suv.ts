import TipoVehiculo from "./tipoVehiculo";

export default class SUV extends TipoVehiculo {
    public obtenerTipo(): string {
        return "SUV"
    }
}