import Evento from "../evento";
import Garage from "../garage";

export default class Radar {
    static flotaActiva(fecha: Date, garage: Garage):number {
        const diaInicio = new Date(fecha);
        diaInicio.setHours(0, 0, 0, 0);
        const diaFin = new Date(fecha);
        diaFin.setHours(23, 59, 59, 999);
        let eventosQueColisionan:number = 0;
        for(const reserva of garage.getReservas()){
            if(this.colisionaConDia(reserva,diaInicio,diaFin)){
                eventosQueColisionan++;
            }
        }
        return eventosQueColisionan;
    }
    
    private static colisionaConDia(evento: Evento, diaInicio: Date, diaFin: Date): boolean {
        return (
        (evento.getFechaInicio() >= diaInicio && evento.getFechaInicio() <= diaFin) || 
        (evento.getFechaFin() >= diaInicio && evento.getFechaFin() <= diaFin) || 
        (evento.getFechaInicio() <= diaInicio && evento.getFechaFin() >= diaFin) || 
        (evento.getFechaInicio() >= diaInicio && evento.getFechaFin() <= diaFin)  
        );
    }
}