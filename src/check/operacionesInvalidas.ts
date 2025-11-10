import Calendario from "./calendario";
import Evento from "../evento";
import Garage from "../garage";
import Vehiculo from "../vehiculo/vehiculo";

export default class OperacionesInvalidas {
    static estaDisponible(e: Evento, g: Garage):boolean{
        return  Calendario.revisarCalendario(e,g.getReservas()) &&
                Calendario.revisarCalendario(e,g.getMantenimientos());
    }
    static estaDisponibleHoy(d: Date, v: Vehiculo, g: Garage):boolean{
        return  Calendario.estaDisponibleHoy(d,v,g.getReservas()) && 
                Calendario.estaDisponibleHoy(d,v,g.getMantenimientos());
    }
    static vehiculoEnStock(v: Vehiculo, g: Garage):boolean{
        return g.getVehiculos().has(v.getMatricula());
    }
    static reservaEnReservas(g: Garage, e: Evento):boolean {
        return g.getReservas().has(e);
    }
    static eventoValido(e: Evento):boolean {
        return e.getFechaFin() >= e.getFechaInicio();
    }
}