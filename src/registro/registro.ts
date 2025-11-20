import Estado from "../estado/estado";

export default abstract class Registo {
    protected registro: Set<Estado> = new Set();
    public abstract getRegistro():Set<Estado>
}