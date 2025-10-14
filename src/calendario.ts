import Evento from "./evento";
import Vehiculo from "./vehiculo/vehiculo";

export default  class Calendario {
    // static revisarCalendario(fechaInicio: Date, fechaFin: Date, vehiculo: Vehiculo, eventos: Set<Evento>):boolean {
    //     let value: boolean = true;
    //     for (const evento of eventos){
    //         if (evento.getVehiculo() === vehiculo){
    //             if ((fechaFin > evento.getFechaInicio() && fechaFin < evento.getFechaFin()) || 
    //                 (fechaInicio < evento.getFechaFin() && fechaInicio > evento.getFechaInicio()) || 
    //                 (fechaInicio > fechaFin)){
    //                     value = false;
    //             }
    //         }
    //     }
    //     return value;
    // }

    static revisarCalendario(evento: Evento,  eventos: Set<Evento>){
        let value: boolean = true;
        for (const eventoR of eventos){
            if (eventoR.getVehiculo() === evento.getVehiculo()){
                if ((evento.getFechaFin() > eventoR.getFechaInicio() && evento.getFechaFin() < eventoR.getFechaFin()) || 
                    (evento.getFechaInicio() < eventoR.getFechaFin() && evento.getFechaInicio() > eventoR.getFechaInicio()) || 
                    (evento.getFechaInicio() > evento.getFechaFin())){
                        value = false;
                }
            }
        }
        return value;
    }

    static estaDisponibleHoy(fecha: Date, vehiculo: Vehiculo, eventos: Set<Evento>):boolean{
        let value:boolean = true;
        for (const evento of eventos){
            if ((evento.getVehiculo() === vehiculo) && 
                (fecha > evento.getFechaFin() || fecha < evento.getFechaInicio())){
                    value = false;
            }
        }
        return value;
    }
}