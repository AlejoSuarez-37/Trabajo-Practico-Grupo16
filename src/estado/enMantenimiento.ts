import Disponible from "./disponible";
import EnReserva from "./enReserva";
import Estado from "./estado";

export default class EnMantenimiento extends Estado {
    public reservar(fechaInicio:Date, fechaFin:Date): void {
        throw new Error("El vehiculo esta en mantenimiento.");
    }
    public mantener(fechaInicio:Date, fechaFin:Date):void {
        throw new Error("El vehiculo esta en mantenimiento.");
    }
    public devolver(): void {
        this.vehiculo.cambiarEstado(new Disponible(this.vehiculo,this.getFechaFin(),this.getFechaFin()));
    }
}