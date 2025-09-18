import Evento from "./evento";

export default class Calendario {
    public revisarCalendario(fechaInicio: Date, fechaFin: Date, eventos: Array<Evento>):boolean {
        let value: boolean = true;
        for (const evento of eventos){
            if ((fechaFin > evento.getFechaInicio() && fechaFin < evento.getFechaFin()) || 
                (fechaInicio < evento.getFechaFin() && fechaInicio > evento.getFechaInicio()) || 
                (fechaInicio > fechaFin)){
                    value = false;
            }
        }
        return value;
    }
    public estaDisponibleHoy(fecha: Date, eventos: Array<Evento>):boolean{
        let value:boolean = true;
        for (const evento of eventos){
            if (!(fecha > evento.getFechaFin() || fecha < evento.getFechaInicio())){
                value = false;
            }
        }
        return value;
    }
}