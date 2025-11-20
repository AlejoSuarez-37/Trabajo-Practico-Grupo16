import Vehiculo from "../vehiculo/vehiculo";
import Estado from "./estado";

export default class Disponible extends Estado {
    public reservar(fechaInicio:Date, fechaFin:Date): void {
        this.colisiona(fechaInicio,fechaFin);
        this.vehiculo.getRegDis().getRegistro().add(this);
        this.setContexto(this.vehiculo,fechaInicio,fechaFin);
    }
    public mantener(fechaInicio:Date, fechaFin:Date): void {
        this.colisiona(fechaInicio,fechaFin);
        this.vehiculo.getRegDis().getRegistro().add(this);
        this.setContexto(this.vehiculo,fechaInicio,fechaFin); 
    }
}