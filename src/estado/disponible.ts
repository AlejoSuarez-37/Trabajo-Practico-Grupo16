import Vehiculo from "../vehiculo/vehiculo";
import Estado from "./estado";

export default class Disponible extends Estado {
    public reservar(v: Vehiculo, fechaInicio:Date, fechaFin:Date): void {
        this.colisiona(fechaInicio,fechaFin);
        this.vehiculo.getRegDis().getRegistro().add(this);
        this.setContexto(this.vehiculo,fechaInicio,fechaFin);
    }
    public mantener(v: Vehiculo, fechaInicio:Date, fechaFin:Date): void {
        this.colisiona(fechaInicio,fechaFin);
        this.vehiculo.getRegDis().getRegistro().add(this);
        this.setContexto(this.vehiculo,fechaInicio,fechaFin); 
    }
    public getEstado(d:Date) {
        if(d >= this.getFechaInicio() && d <= this.getFechaFin()){
            return this;
        }
    }
}