import Vehiculo from "../vehiculo/vehiculo";
import EnMantenimiento from "./enMantenimiento";
import Estado from "./estado";

export default class EnReserva extends Estado {
    public reservar(v:Vehiculo, fechaInicio:Date, fechaFin:Date): void {
        this.getReservasPasadas().forEach(value =>{
            if (fechaInicio >= value.getFechaInicio() && fechaInicio <= value.getFechaFin() ||
                fechaFin <= value.getFechaFin() && fechaFin >= value.getFechaInicio() ||
                fechaInicio <= value.getFechaInicio() && fechaFin >= value.getFechaFin()){
                    throw new Error("El vehiculo esta en reserva.");
            }
        });
        this.getMantenimientosPasados().forEach(value =>{
            if (fechaInicio >= value.getFechaInicio() && fechaInicio <= value.getFechaFin() ||
                fechaFin <= value.getFechaFin() && fechaFin >= value.getFechaInicio() ||
                fechaInicio <= value.getFechaInicio() && fechaFin >= value.getFechaFin()){
                    throw new Error("El vehiculo esta en mantenimiento.");
            }
        });
        this.getDisponiblePasados().forEach(value =>{
            if (fechaInicio >= value.getFechaInicio() && fechaInicio <= value.getFechaFin() ||
                fechaFin <= value.getFechaFin() && fechaFin >= value.getFechaInicio() ||
                fechaInicio <= value.getFechaInicio() && fechaFin >= value.getFechaFin()){
                    this.getReservasPasadas().add(this);
                    v.setEstado(new EnReserva(this.vehiculo,fechaInicio,fechaFin));
            }
        }); 
    }
    public mantener(v:Vehiculo, fechaInicio:Date, fechaFin:Date): void {
        this.getReservasPasadas().forEach(value =>{
            if (fechaInicio >= value.getFechaInicio() && fechaInicio <= value.getFechaFin() ||
                fechaFin <= value.getFechaFin() && fechaFin >= value.getFechaInicio() ||
                fechaInicio <= value.getFechaInicio() && fechaFin >= value.getFechaFin()){
                    throw new Error("El vehiculo esta en reserva.");
            }
        });
        this.getMantenimientosPasados().forEach(value =>{
            if (fechaInicio >= value.getFechaInicio() && fechaInicio <= value.getFechaFin() ||
                fechaFin <= value.getFechaFin() && fechaFin >= value.getFechaInicio() ||
                fechaInicio <= value.getFechaInicio() && fechaFin >= value.getFechaFin()){
                    throw new Error("El vehiculo esta en mantenimiento.");
            }
        });
        this.getDisponiblePasados().forEach(value =>{
            if (fechaInicio >= value.getFechaInicio() && fechaInicio <= value.getFechaFin() ||
                fechaFin <= value.getFechaFin() && fechaFin >= value.getFechaInicio() ||
                fechaInicio <= value.getFechaInicio() && fechaFin >= value.getFechaFin()){
                    this.getReservasPasadas().add(this);
                    v.setEstado(new EnMantenimiento(this.vehiculo,fechaInicio,fechaFin));
            }
        }); 
    }
}