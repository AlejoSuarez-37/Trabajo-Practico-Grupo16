import Vehiculo from "../vehiculo/vehiculo";


export default abstract class Estado{
    protected vehiculo: Vehiculo;
    private fechaInicio: Date;
    private fechaFin: Date;

    constructor(v:Vehiculo){
        this.fechaInicio = new Date();
        this.fechaFin = new Date();
        this.vehiculo = v;
    }
    public setContexto(v:Vehiculo,fechaInicio:Date,fechaFin:Date):void {
        this.vehiculo = v;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
    public getFechaInicio():Date {
        return this.fechaInicio;
    }
    public getFechaFin():Date {
        return this.fechaFin;
    }
    public getVehiculo():Vehiculo {
        return this.vehiculo;
    }
    
    public colisiona(fechaInicio:Date, fechaFin:Date):void {
        this.vehiculo.getRegRes().getRegistro().forEach(value =>{
            if (fechaInicio >= value.getFechaInicio() && fechaInicio <= value.getFechaFin() ||
                fechaFin <= value.getFechaFin() && fechaFin >= value.getFechaInicio() ||
                fechaInicio <= value.getFechaInicio() && fechaFin >= value.getFechaFin()){
                    throw new Error("El vehiculo esta en reserva.");
            }
        });
        this.vehiculo.getRegMan().getRegistro().forEach(value =>{
            if (fechaInicio >= value.getFechaInicio() && fechaInicio <= value.getFechaFin() ||
                fechaFin <= value.getFechaFin() && fechaFin >= value.getFechaInicio() ||
                fechaInicio <= value.getFechaInicio() && fechaFin >= value.getFechaFin()){
                    throw new Error("El vehiculo esta en mantenimiento.");
            }
        });
    }
    public colisionaReservas(fechaInicio:Date,fechaFin:Date):boolean {
        this.vehiculo.getRegRes().getRegistro().forEach(value =>{
            if (fechaInicio >= value.getFechaInicio() && fechaInicio <= value.getFechaFin() ||
                fechaFin <= value.getFechaFin() && fechaFin >= value.getFechaInicio() ||
                fechaInicio <= value.getFechaInicio() && fechaFin >= value.getFechaFin()){
                    return true;
            }
        });
        return false;
    }

    abstract reservar(v:Vehiculo, fechaInicio:Date, fechaFin:Date):void
    abstract mantener(v:Vehiculo, fechaInicio:Date, fechaFin:Date):void
}