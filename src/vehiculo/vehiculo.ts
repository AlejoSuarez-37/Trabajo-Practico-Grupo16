import { Temporada } from "../temporada/temporada";
import Estado from "../estado/estado";
import Disponible from "../estado/disponible";
import Registo from "../registro/registro";
import RegistroReserva from "../registro/registroReserva";

/**
 * clase Vehiculo central a la cual se le puede cambiar el estado, 
 * actualizar sus metricas o obtener la tarifa de algun servicio.
 */
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
    /**
     * funcion de interacion del Estado sobre el vehiculo contexto
     * @param estado el estado al que se desea cambiar
     */
    public cambiarEstado(estado:Estado):void {
        this.estado = estado;
    }
    public getEstado():Estado {
        return this.estado;
    }
    public getMatricula():string {
        return this.matricula;
    }
    
    /**
     * funcion para obtener el registro de las reservas (lo utiliza OcupacionFlota)
     * @returns el registro de reservas
     */
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

    /**
     * funcion para resetar el tablero despues de un mantenimiento
     * @param d dia final del mantenimiento
     */
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
    /**
     * funcion que utiliza las funciones internas del Vehiculo para alterar sus metricas segun una reserva
     */
    public actualizarTableroReserva(fechaInicio:Date, fechaFin:Date, kilometros:number, temporada:Temporada):void {
        this.aumentarAlquileresMantenimiento();
        this.sumarKilometrosRecorridos(kilometros);
        this.sumarAlquiler();
        this.ensuciar();
        this.sumarRentabilidad(this.obtenerTarifaReserva(this.calcularCantDias(fechaInicio,fechaFin),kilometros,temporada));
        this.dispararMantenimiento(fechaFin);
    }
    /**
     * funcion que utiliza las funciones internas del Vehiculo para alterar sus metricas segun un mantenimiento
     */
    public actualizarTableroMantenimiento(fechaInicio:Date, fechaFin:Date):void {
        this.restarRentabilidad(this.obtenerTarifaMantenimiento(this.calcularCantDias(fechaInicio,fechaFin)));
        this.resetTablero(fechaFin);
    }
    /**
     * funcion para obtener una tarifa de reserva
     * @param temporada la temporada (el vehiculo no la sabe, solo sabe que se le pasara una temporada)
     */
    public abstract obtenerTarifaReserva(dias: number, kilometros: number, temporada: Temporada):number
    /**
     * funcion para obtener una tarifa de mantenimiento
     */
    public abstract obtenerTarifaMantenimiento(dias: number):number
}