import { Temporada } from "./temporada/temporada";
import TemporadaMedia from "./temporada/temporadaMedia";
import Vehiculo from "./vehiculo/vehiculo";

export default class Garage {
    private temporada: Temporada = new TemporadaMedia();
    private vehiculos: Map<string,Vehiculo> = new Map();
    
    public comprarVehiculo(vehiculo:Vehiculo):void {
        this.vehiculos.set(vehiculo.getMatricula(), vehiculo);
    }
    public vehiculoEnStock(v:Vehiculo):void {
        if(!this.vehiculos.has(v.getMatricula())){
            throw new Error("El vehiculo no existe.")
        }
    }
    public getVehiculos():Map<string,Vehiculo> {
        return this.vehiculos;
    }
    public setTemporada(t:Temporada):void {
        this.temporada = t;
    }
    public calcularTarifaReserva(vehiculo:Vehiculo, dias:number, kilometros:number):number {
        this.vehiculoEnStock(vehiculo);
        return vehiculo.obtenerTarifaReserva(dias,kilometros,this.temporada);
    }
    public calcularTarifaMantenimiento(vehiculo:Vehiculo, dias:number):number{
        this.vehiculoEnStock(vehiculo);
        return vehiculo.obtenerTarifaMantenimiento(dias);
    }
    public calcularCantDias(fechaInicio:Date, fechaFin:Date):number {
        const diffMiliseg = fechaFin.getTime() - fechaInicio.getTime();
        return Math.ceil(diffMiliseg / (1000 * 60 * 60 * 24));
    }
    public fechasValidas(fechaInicio:Date, fechaFin:Date):void {
        if (fechaInicio >= fechaFin){
            throw new Error("Fechas invalidas.");
        }
    }

    public reservar(vehiculo:Vehiculo, fechaInicio:Date, fechaFin:Date, kilometros:number):void {
        this.vehiculoEnStock(vehiculo);
        this.fechasValidas(fechaInicio,fechaFin);
        vehiculo.reservar(vehiculo,fechaInicio,fechaFin);
        vehiculo.aumentarAlquileresCompletados();
        vehiculo.sumarKilometrosRecorridos(kilometros);
        vehiculo.sumarAlquiler();
        vehiculo.sumarRentabilidad(vehiculo.obtenerTarifaReserva(this.calcularCantDias(fechaInicio,fechaFin),kilometros,this.temporada));
        vehiculo.dispararMantenimiento(fechaFin);
    }
    public mantener(vehiculo:Vehiculo, fechaInicio:Date, fechaFin:Date):void {
        this.vehiculoEnStock(vehiculo);
        this.fechasValidas(fechaInicio,fechaFin);
        vehiculo.mantener(vehiculo,fechaInicio,fechaFin);
        vehiculo.restarRentabilidad(vehiculo.obtenerTarifaMantenimiento(this.calcularCantDias(fechaInicio,fechaFin)));
        vehiculo.resetTablero(fechaFin);
    }

}
