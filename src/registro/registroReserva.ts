import Estado from "../estado/estado";
import Registo from "./registro";

export default class RegistroReserva extends Registo {
    public getRegistro():Set<Estado> {
        return this.registro;
    }
}