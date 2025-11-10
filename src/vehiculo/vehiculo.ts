import { Temporada } from "../temporada/temporada";
import TemporadaMedia from "../temporada/temporadaMedia";
import Estadisticas from "./estadisticas";
import Estado from "./estado";

export default abstract class Vehiculo {
    private matricula: string;
    private estado: Estado = new Estado();
    private estadisticas: Estadisticas = new Estadisticas();

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
    public getEstadisticas():Estadisticas {
        return this.estadisticas;
    }
    public setTemporada(t:Temporada):void {
        this.temporada = t;
    }
    
    public abstract obtenerTarifaReserva(dias: number, kilometros: number):number
    public abstract obtenerTarifaMantenimiento(dias: number):number
}