export default abstract class Vehiculo {
    private matricula: string
    private enReserva: boolean
    private enMantenimiento: boolean
    private necesitaLimpieza: boolean

    constructor(){
        this.matricula = "";
        this.enReserva = false;
        this.enMantenimiento = false;
        this.necesitaLimpieza = false;
    }

    public setMatricula(value: string):void{
        this.matricula = value;
    }
    public getMatricula():string{
        return this.matricula;
    }
    public setEnReserva(value: boolean):void{
        this.enReserva = value;
    }
    public getEnReserva():boolean{
        return this.enReserva;
    }
    public setNecesitaMantenimiento(value: boolean):void{
        this.enMantenimiento = value;
    }
    public getNecesitaMantenimiento():boolean{
        return this.enMantenimiento;
    }
    public setNecesitaLimpieza(value: boolean):void{
        this.necesitaLimpieza = value;
    }
    public getNecesitaLimpieza():boolean{
        return this.necesitaLimpieza;
    }
    public abstract obtenerTipo(): string
}