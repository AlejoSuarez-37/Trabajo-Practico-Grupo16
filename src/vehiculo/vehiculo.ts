export default abstract class Vehiculo {
    private matricula: string;
    private necesitaLimpieza: boolean = false;

    constructor(matricula: string){
        this.matricula = matricula;
    }

    public getMatricula():string {
        return this.matricula;
    }
    public getNecesitaLimpieza():boolean {
        return this.necesitaLimpieza;
    }
    public setNecesitaLimpieza(value:boolean):void {
        this.necesitaLimpieza = value;
    }
    
    public abstract obtenerTarifaReserva(dias: number, kilometros: number):number
    public abstract obtenerTarifaMantenimiento(dias: number):number
}