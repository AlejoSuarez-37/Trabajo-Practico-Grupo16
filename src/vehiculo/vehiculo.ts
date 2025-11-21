import { Temporada } from "../temporada/temporada";
import Estado from "../estado/estado";
import Disponible from "../estado/disponible";
import EnReserva from "../estado/enReserva";
import EnMantenimiento from "../estado/enMantenimiento";
import Registo from "../registro/registro";
import RegistroReserva from "../registro/registroReserva";


export default abstract class Vehiculo {
    private matricula: string;
    private estado:Estado;
    private registroReserva: Registo;
    private kilometrosRecorridos: number = 0;
    private ultimoMantenimeinto: Date = new Date();
    private alquileresDesdeMantenimiento: number = 0;
    private necesitaLimpieza: boolean = false;
    private alquileresTotales: number = 0;
    private rentabilidad: number = 0;

    constructor(matricula: string){
        this.matricula = matricula;
        this.estado = new Disponible(this,new Date(),new Date());
        this.registroReserva = new RegistroReserva();
    }

    public cambiarEstado(estado:Estado):void {
        this.estado = estado;
    }
    public getEstado():Estado {
        return this.estado;
    }
    public getMatricula():string {
        return this.matricula;
    }
    public colisiona(fechaInicio:Date,fechaFin:Date){
        this.estado.colisiona(fechaInicio,fechaFin);
    }
    public getRegistroReserva():Registo {
        return this.registroReserva;
    }
    public sumarKilometrosRecorridos(n:number):void {
        this.kilometrosRecorridos += n;
    }
    public aumentarAlquileresMantenimiento():void {
        this.alquileresDesdeMantenimiento++;
    }
    public getAlquileresDesdeMantenimiento():number {
        return this.alquileresDesdeMantenimiento;
    }
    public getNecesitaLimpieza():boolean {
        return this.necesitaLimpieza;
    }
    public limpiar():void {
        this.necesitaLimpieza = false;
    }
    public ensuciar():void {
        this.necesitaLimpieza = true;
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
    public resetTablero(d:Date):void {
        this.kilometrosRecorridos = 0;
        this.alquileresDesdeMantenimiento = 0;
        this.ultimoMantenimeinto = d;
    }
    public necesitaMantenimiento(dF:Date):boolean {
        let value:boolean = false;
        const dI = this.ultimoMantenimeinto;
        const diferenciaMeses = (dF.getFullYear()-dI.getFullYear()) * 12 + (dF.getMonth()-dI.getMonth());
        if (this.kilometrosRecorridos > 10000 ||
            this.alquileresDesdeMantenimiento >= 5 ||
            diferenciaMeses > 12){
            value = true;
        }
        return value;
    }
    public dispararMantenimiento(d:Date){
        const d2 = new Date(d);
        d2.setDate(d2.getDate() + 1);
        if(this.necesitaMantenimiento(d)){
            this.estado.mantener(d,d2);
            this.resetTablero(d);
            this.restarRentabilidad(this.obtenerTarifaMantenimiento(1));
        }
    }
    private calcularCantDias(fechaInicio:Date, fechaFin:Date):number {
        const diffMiliseg = fechaFin.getTime() - fechaInicio.getTime();
        return Math.ceil(diffMiliseg / (1000 * 60 * 60 * 24));
    }
    public actualizarTableroReserva(fechaInicio:Date, fechaFin:Date, kilometros:number, temporada:Temporada):void {
        this.aumentarAlquileresMantenimiento();
        this.sumarKilometrosRecorridos(kilometros);
        this.sumarAlquiler();
        this.ensuciar();
        this.sumarRentabilidad(this.obtenerTarifaReserva(this.calcularCantDias(fechaInicio,fechaFin),kilometros,temporada));
        this.dispararMantenimiento(fechaFin);
    }
    public actualizarTableroMantenimiento(fechaInicio:Date, fechaFin:Date):void {
        this.restarRentabilidad(this.obtenerTarifaMantenimiento(this.calcularCantDias(fechaInicio,fechaFin)));
        this.resetTablero(fechaFin);
    }
    
    public abstract obtenerTarifaReserva(dias: number, kilometros: number, temporada: Temporada):number
    public abstract obtenerTarifaMantenimiento(dias: number):number
}