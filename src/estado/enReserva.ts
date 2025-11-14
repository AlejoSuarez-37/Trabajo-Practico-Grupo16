import Vehiculo from "../vehiculo/vehiculo";
import EnMantenimiento from "./enMantenimiento";
import Estado from "./estado";

export default class EnReserva extends Estado {
    public reservar(v:Vehiculo, fechaInicio:Date, fechaFin:Date): void {
        this.colisiona(fechaInicio,fechaFin);
        this.getReservasPasadas().add(this);
        v.setEstado(new EnReserva(this.vehiculo,fechaInicio,fechaFin));
    }
    public mantener(v:Vehiculo, fechaInicio:Date, fechaFin:Date): void {
        this.colisiona(fechaInicio,fechaFin);
        this.getReservasPasadas().add(this);
        v.setEstado(new EnMantenimiento(this.vehiculo,fechaInicio,fechaFin)); 
    }
}