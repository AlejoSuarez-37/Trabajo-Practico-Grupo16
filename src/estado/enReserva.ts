import Vehiculo from "../vehiculo/vehiculo";
import EnMantenimiento from "./enMantenimiento";
import Estado from "./estado";

export default class EnReserva extends Estado {
    public reservar(fechaInicio:Date, fechaFin:Date): void {
        this.colisiona(fechaInicio,fechaFin);
        this.vehiculo.getRegRes().getRegistro().add(this);
        this.setContexto(this.vehiculo,fechaInicio,fechaFin);
    }
    public mantener(fechaInicio:Date, fechaFin:Date): void {
        this.colisiona(fechaInicio,fechaFin);
        this.vehiculo.getRegRes().getRegistro().add(this);
        this.setContexto(this.vehiculo,fechaInicio,fechaFin);
    }
}