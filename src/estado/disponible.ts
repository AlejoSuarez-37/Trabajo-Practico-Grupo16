import Vehiculo from "../vehiculo/vehiculo";
import EnMantenimiento from "./enMantenimiento";
import EnReserva from "./enReserva";
import Estado from "./estado";

export default class Disponible extends Estado {
    public reservar(v:Vehiculo, fechaInicio:Date, fechaFin:Date): void {
        this.colisiona(fechaInicio,fechaFin);
        this.getDisponiblePasados().add(this);
        v.setEstado(new EnReserva(this.vehiculo,fechaInicio,fechaFin));
    }
    public mantener(v: Vehiculo, fechaInicio:Date, fechaFin:Date): void {
        this.colisiona(fechaInicio,fechaFin);
        this.getDisponiblePasados().add(this);
        v.setEstado(new EnMantenimiento(this.vehiculo,fechaInicio,fechaFin));  
    }
}