import Estado from "../estado/estado";
import Vehiculo from "../vehiculo/vehiculo";

export default abstract class Registo {
    protected registro: Set<Estado> = new Set();
    public abstract getRegistro():Set<Estado>
}