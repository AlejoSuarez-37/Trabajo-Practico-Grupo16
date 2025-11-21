import EnMantenimiento from "./enMantenimiento";
import Estado from "./estado";

export default class EnReserva extends Estado {
    public reservar(fechaInicio:Date, fechaFin:Date): void {
        if(this.colisiona(fechaInicio,fechaFin)){
            throw new Error("El vehiculo esta en reserva.");
        }
        this.vehiculo.getRegistroReserva().getRegistro().add(new EnReserva(this.vehiculo,fechaInicio,fechaFin));
        this.vehiculo.cambiarEstado(new EnReserva(this.vehiculo,fechaInicio,fechaFin));
    }
    public mantener(fechaInicio:Date, fechaFin:Date): void {
        if(this.colisiona(fechaInicio,fechaFin)){
            throw new Error("El vehiculo esta en reserva.");
        }
        this.vehiculo.cambiarEstado(new EnMantenimiento(this.vehiculo,fechaInicio,fechaFin));
    }
}