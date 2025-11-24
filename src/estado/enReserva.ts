import Disponible from "./disponible";
import EnMantenimiento from "./enMantenimiento";
import Estado from "./estado";

export default class EnReserva extends Estado {
    public reservar(fechaInicio:Date, fechaFin:Date): void {
        throw new Error("El vehiculo esta en reserva.");
    }
    public mantener(fechaInicio:Date, fechaFin:Date): void {
        throw new Error("El vehiculo esta en reserva.");
    }
    public devolver(): void {
        this.vehiculo.cambiarEstado(new Disponible(this.vehiculo,this.getFechaFin(),this.getFechaFin()));
    }
}