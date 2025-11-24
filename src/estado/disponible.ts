import EnMantenimiento from "./enMantenimiento";
import EnReserva from "./enReserva";
import Estado from "./estado";

export default class Disponible extends Estado {
    public reservar(fechaInicio:Date, fechaFin:Date):void {
        if(!this.colisiona(fechaInicio,fechaFin)){
            this.vehiculo.getRegistroReserva().getRegistro().add(new EnReserva(this.vehiculo,fechaInicio,fechaFin));
            this.vehiculo.cambiarEstado(new EnReserva(this.vehiculo,fechaInicio,fechaFin));
        }
    }
    public mantener(fechaInicio:Date, fechaFin:Date):void {
        if(!this.colisiona(fechaInicio,fechaFin)){
        this.vehiculo.cambiarEstado(new EnMantenimiento(this.vehiculo,fechaInicio,fechaFin));
        }
    }
    public devolver(): void {
        throw new Error("El vehiculo esta disponible.");
    }
}