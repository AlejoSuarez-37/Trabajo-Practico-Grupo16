import Vehiculo from "../vehiculo/vehiculo";
import EnReserva from "./enReserva";
import Estado from "./estado";

export default class EnMantenimiento extends Estado {
    public reservar(fechaInicio:Date, fechaFin:Date): void {
        this.colisiona(fechaInicio,fechaFin);
        this.vehiculo.getRegMan().getRegistro().add(this);
        this.setContexto(this.vehiculo,fechaInicio,fechaFin);
    }
    public mantener(fechaInicio:Date, fechaFin:Date): void {
        this.colisiona(fechaInicio,fechaFin);
        this.vehiculo.getRegMan().getRegistro().add(this);
        this.setContexto(this.vehiculo,fechaInicio,fechaFin);
    }
}