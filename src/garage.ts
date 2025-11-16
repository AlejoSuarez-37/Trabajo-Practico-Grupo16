import { Temporada } from "./temporada/temporada";
import TemporadaMedia from "./temporada/temporadaMedia";
import Vehiculo from "./vehiculo/vehiculo";
/**
 * clase que guarda los vehiculos, sabe la temporada y puede reservar o mantener su flota 
 */
export default class Garage {
    private temporada: Temporada = new TemporadaMedia();
    private vehiculos: Map<string,Vehiculo> = new Map();
    /**
     * guarda los vehiculos pasados por parametro en su flota
     * @param vehiculo - el vehiculo a guardar
     */
    public comprarVehiculo(vehiculo:Vehiculo):void {
        this.vehiculos.set(vehiculo.getMatricula(), vehiculo);
    }
    public getVehiculos():Map<string,Vehiculo> {
        return this.vehiculos;
    }
    public setTemporada(t:Temporada):void {
        this.temporada = t;
    }
    private fechasValidas(fechaInicio:Date, fechaFin:Date):void {
        if (fechaInicio >= fechaFin){
            throw new Error("Fechas invalidas.");
        }
    }
    private vehiculoEnStock(v:Vehiculo):void {
        if(!this.vehiculos.has(v.getMatricula())){
            throw new Error("El vehiculo no existe.");
        }
    }
    /**
     * la funcion principal para reservar vehiculos
     * @param vehiculo - el vehiculo a reservar
     * @param fechaInicio la fecha de inicio de la reserva
     * @param fechaFin la fecha final de la reserva
     * @param kilometros los kilometros de la reserva
     */
    public reservar(vehiculo:Vehiculo, fechaInicio:Date, fechaFin:Date, kilometros:number):void {
        this.vehiculoEnStock(vehiculo);
        this.fechasValidas(fechaInicio,fechaFin);
        vehiculo.reservar(vehiculo,fechaInicio,fechaFin);
        vehiculo.actualizarTableroReserva(fechaInicio,fechaFin,kilometros,this.temporada);
    }
    /**
     * la funcion principal para mantener vehiculos
     * @param vehiculo el vehiculo a mantener
     * @param fechaInicio la fecha de inicio del mantenimiento
     * @param fechaFin la fecha final del mantenimiento
     */
    public mantener(vehiculo:Vehiculo, fechaInicio:Date, fechaFin:Date):void {
        this.vehiculoEnStock(vehiculo);
        this.fechasValidas(fechaInicio,fechaFin);
        vehiculo.mantener(vehiculo,fechaInicio,fechaFin);
        vehiculo.actualizarTableroMantenimiento(fechaInicio,fechaFin);
    }
}
