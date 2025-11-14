import Vehiculo from "../vehiculo/vehiculo";

export default abstract class Estado{
    protected vehiculo: Vehiculo;
    private fechaInicio: Date;
    private fechaFin: Date;
    private disponiblePasados: Set<Estado> = new Set();
    private reservasPasadas: Set<Estado> = new Set();
    private mantenimientosPasados: Set<Estado> = new Set();

    constructor(vehiculo:Vehiculo, fechaInicio:Date, fechaFin:Date){
        this.vehiculo = vehiculo;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
    public setVehiculo(v:Vehiculo):void {
        this.vehiculo = v;
    }
    public getFechaInicio():Date {
        return this.fechaInicio;
    }
    public getFechaFin():Date {
        return this.fechaFin;
    }
    public getDisponiblePasados():Set<Estado> {
        return this.disponiblePasados;
    }
    public getReservasPasadas():Set<Estado> {
        return this.reservasPasadas;
    }
    public getMantenimientosPasados():Set<Estado> {
        return this.mantenimientosPasados;
    }

    
    abstract reservar(v:Vehiculo, fechaInicio:Date, fechaFin:Date):void
    abstract mantener(v:Vehiculo, fechaInicio:Date, fechaFin:Date):void
}