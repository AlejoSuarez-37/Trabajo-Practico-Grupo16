import Vehiculo from "./vehiculo/vehiculo"

export default class Evento {
    private fechaInicio: Date;
    private fechaFin: Date;
    private cantDias: number;
    private vehiculo: Vehiculo;
    private ticket: number;
    
    constructor(fechaInicio: Date, fechaFin: Date, vehiculo: Vehiculo, ticket: number){
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.cantDias = 0;
        this.vehiculo = vehiculo;
        this.ticket = ticket;
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
    public getTicket():number {
        return this.ticket;
    }

    private calcularCantDias():void {
        const diffMiliseg = this.fechaFin.getTime() - this.fechaInicio.getTime();
        this.cantDias = Math.ceil(diffMiliseg / (1000 * 60 * 60 * 24));
    }
}