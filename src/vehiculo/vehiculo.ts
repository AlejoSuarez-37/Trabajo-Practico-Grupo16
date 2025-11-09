import { Temporada } from "../temporada/temporada";
import TemporadaMedia from "../temporada/temporadaMedia";
import Estado from "./estado";

export default abstract class Vehiculo {
    private matricula: string;
    private estado: Estado = new Estado();

    protected temporada: Temporada = new TemporadaMedia();

    constructor(matricula: string){
        this.matricula = matricula;
    }

    public getMatricula():string {
        return this.matricula;
    }
    public getEstado():Estado {
        return this.estado;
    }
    public setTemporada(t:Temporada):void {
        this.temporada = t;
    }
    
    public abstract obtenerTarifaReserva(dias: number, kilometros: number):number
    public abstract obtenerTarifaMantenimiento(dias: number):number
}