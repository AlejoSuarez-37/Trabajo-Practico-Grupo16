import Vehiculo from "./vehiculo/vehiculo"

export default class Evento {
    private fechaInicio: Date;
    private fechaFin: Date;
    private cantDias: number;
    private vehiculo: Vehiculo;
    
    constructor(fechaInicio: Date, fechaFin: Date, vehiculo: Vehiculo){
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.cantDias = 0;
        this.vehiculo = vehiculo;
        this.calcularCantDias();
    }

    public getCantDias():number {
        return this.cantDias;
    }
    public getVehiculo():Vehiculo {
        return this.vehiculo;
    }
    public getFechaInicio():Date {
        return this.fechaInicio;
    }
    public getFechaFin():Date {
        return this.fechaFin;
    }

    private calcularCantDias():void {
        const diffMiliseg = this.fechaFin.getTime() - this.fechaInicio.getTime();
        this.cantDias = Math.ceil(diffMiliseg / (1000 * 60 * 60 * 24));
    }
}