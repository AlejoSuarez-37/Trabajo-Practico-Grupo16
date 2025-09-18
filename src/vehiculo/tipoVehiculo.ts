import Vehiculo from "./vehiculo";

export default abstract class TipoVehiculo extends Vehiculo{
    public abstract obtenerTipo(): string
}