import Vehiculo from "../vehiculo/vehiculo";


export default abstract class Estado{
    protected vehiculo: Vehiculo;
    private fechaInicio: Date;
    private fechaFin: Date;

    constructor(v:Vehiculo,fechaInicio:Date,fechaFin:Date){
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
    
    public colisiona(fechaInicio:Date, fechaFin:Date):boolean {
        if(fechaInicio >= this.fechaFin && fechaFin >= this.fechaFin){
            return false;
        }
        return true;
    }

    abstract reservar(fechaInicio:Date, fechaFin:Date):void
    abstract mantener(fechaInicio:Date, fechaFin:Date):void
    abstract devolver():void
}