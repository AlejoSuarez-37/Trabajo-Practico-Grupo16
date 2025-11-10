import Evento from "../evento";
import Vehiculo from "../vehiculo/vehiculo";

export default class Calendario {
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
        return !temp.some(eventoTemp => 
            fecha >= eventoTemp.getFechaInicio() &&
            fecha <= eventoTemp.getFechaFin());
    }
}