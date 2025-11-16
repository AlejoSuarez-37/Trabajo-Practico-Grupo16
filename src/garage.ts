import { Temporada } from "./temporada/temporada";
import TemporadaMedia from "./temporada/temporadaMedia";
import Vehiculo from "./vehiculo/vehiculo";

export default class Garage {
    private temporada: Temporada = new TemporadaMedia();
    private vehiculos: Map<string,Vehiculo> = new Map();
    
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

    public reservar(vehiculo:Vehiculo, fechaInicio:Date, fechaFin:Date, kilometros:number):void {
        this.vehiculoEnStock(vehiculo);
        this.fechasValidas(fechaInicio,fechaFin);
        vehiculo.reservar(vehiculo,fechaInicio,fechaFin);
        vehiculo.actualizarTableroReserva(fechaInicio,fechaFin,kilometros,this.temporada);
    }
    public mantener(vehiculo:Vehiculo, fechaInicio:Date, fechaFin:Date):void {
        this.vehiculoEnStock(vehiculo);
        this.fechasValidas(fechaInicio,fechaFin);
        vehiculo.mantener(vehiculo,fechaInicio,fechaFin);
        vehiculo.actualizarTableroMantenimiento(fechaInicio,fechaFin);
    }
}
