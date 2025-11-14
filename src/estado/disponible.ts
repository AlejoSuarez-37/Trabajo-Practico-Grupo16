import Vehiculo from "../vehiculo/vehiculo";
import EnMantenimiento from "./enMantenimiento";
import EnReserva from "./enReserva";
import Estado from "./estado";

export default class Disponible extends Estado {
    public reservar(v:Vehiculo, fechaInicio:Date, fechaFin:Date): void {
        if(this.colisiona(this.getReservasPasadas(),fechaInicio,fechaFin)){
            throw new Error("El vehiculo esta en reserva.");
        }
        if(this.colisiona(this.getMantenimientosPasados(),fechaInicio,fechaFin)){
            throw new Error("El vehiculo esta en mantenimiento.");
        }
        this.getDisponiblePasados().add(this);
        v.setEstado(new EnReserva(this.vehiculo,fechaInicio,fechaFin));
    }
    public mantener(v: Vehiculo, fechaInicio:Date, fechaFin:Date): void {
        if(this.colisiona(this.getReservasPasadas(),fechaInicio,fechaFin)){
            throw new Error("El vehiculo esta en reserva.");
        }
        if(this.colisiona(this.getMantenimientosPasados(),fechaInicio,fechaFin)){
            throw new Error("El vehiculo esta en mantenimiento.");
        }
        this.getDisponiblePasados().add(this);
        v.setEstado(new EnMantenimiento(this.vehiculo,fechaInicio,fechaFin));  
    }
}