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

    static revisarCalendario(evento: Evento, eventos: Set<Evento>):boolean{
        const array = Array.from(eventos);
        const temp: Evento[] = array.filter((eventoTemp: Evento) => eventoTemp.getVehiculo() === evento.getVehiculo());
        return !temp.some(eventoTemp => 
            evento.getFechaInicio() <= eventoTemp.getFechaFin() &&
            evento.getFechaFin() >= eventoTemp.getFechaInicio());
    }

    static estaDisponibleHoy(fecha: Date, vehiculo: Vehiculo, eventos: Set<Evento>):boolean{
        const array = Array.from(eventos);
        const temp: Evento[] = array.filter((eventoTemp: Evento) => eventoTemp.getVehiculo() === vehiculo);
        return temp.some(eventoTemp => 
            fecha >= eventoTemp.getFechaInicio() &&
            fecha <= eventoTemp.getFechaFin());
    }
}