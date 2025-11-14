import { Temporada } from "../temporada/temporada";
import Estado from "../estado/estado";


export default abstract class Vehiculo {
    private matricula: string;
    private estado: Estado;
    private kilometrosRecorridos: number = 0;
    private ultimoMantenimeinto: Date = new Date();
    private alquileresCompletadosDesdeMantenimiento: number = 0;
    private necesitaLimpieza: boolean = false;
    private alquileresTotales: number = 0;
    private rentabilidad: number = 0;

    constructor(matricula: string, estado: Estado){
        this.matricula = matricula;
        this.estado = estado;
    }

    public getMatricula():string {
        return this.matricula;
    }
    public setEstado(e: Estado):void {
        this.estado = e;
    }
    public reservar(v:Vehiculo, fechaInicio:Date, fechaFin:Date):void {
        this.estado.reservar(v,fechaInicio,fechaFin);
    }
    public mantener(v:Vehiculo, fechaInicio:Date, fechaFin:Date):void {
        this.estado.mantener(v,fechaInicio,fechaFin);
    }
    public sumarKilometrosRecorridos(n:number):void {
        this.kilometrosRecorridos += n;
    }
    public aumentarAlquileresCompletados():void {
        this.alquileresCompletadosDesdeMantenimiento++;
    }
    public getNecesitaLimpieza():boolean {
        return this.necesitaLimpieza;
    }
    public limpiar():void {
        this.necesitaLimpieza = false;
    }
    public resetTablero(d:Date):void {
        this.kilometrosRecorridos = 0;
        this.alquileresCompletadosDesdeMantenimiento = 0;
        this.ultimoMantenimeinto = d;
    }
    private necesitaMantenimiento(dF:Date):boolean {
        let value:boolean = false
        const dI = this.ultimoMantenimeinto;
        const diferenciaMeses = (dF.getFullYear()-dI.getFullYear()) * 12 + (dF.getMonth()-dI.getMonth());
        if (this.kilometrosRecorridos > 10000 ||
            this.alquileresCompletadosDesdeMantenimiento >= 5 ||
            diferenciaMeses > 12){
            value = true;
        }
        return value;
    }
    public sumarAlquiler():void {
        this.alquileresTotales++;
    }
    public getAlquileres():number {
        return this.alquileresTotales;
    }
    public sumarRentabilidad(n: number):void {
        this.rentabilidad += n;
    }
    public restarRentabilidad(n: number):void {
        this.rentabilidad -= n;
    }
    public getRentabilidad():number {
        return this.rentabilidad;
    }
    public dispararMantenimiento(d:Date){
        const d2 = new Date(d);
        d2.setDate(d2.getDate() + 1);
        if(this.necesitaMantenimiento(d)){
            this.estado.mantener(this,d,d2);
            this.resetTablero(d);
            this.restarRentabilidad(this.obtenerTarifaMantenimiento(1));
        }
    }
    public getReservasPasadas():Set<Estado> {
        return this.estado.getReservasPasadas();
    }
    
    public abstract obtenerTarifaReserva(dias: number, kilometros: number, temporada: Temporada):number
    public abstract obtenerTarifaMantenimiento(dias: number):number
}