import Estado from "../estado/estado";
import Registo from "./registro";

export default class RegistoDisponible extends Registo {
    public getRegistro(): Set<Estado> {
        return this.registro;
    }
}