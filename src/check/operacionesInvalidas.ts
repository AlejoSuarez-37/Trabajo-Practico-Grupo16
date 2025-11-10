import Calendario from "./calendario";
import Evento from "../evento";
import Garage from "../garage";
import Vehiculo from "../vehiculo/vehiculo";

export default class OperacionesInvalidas {
    static estaDisponible(e: Evento, g: Garage):boolean{
        let value:boolean = false;
        if (Calendario.revisarCalendario(e,g.getReservas()) &&
            Calendario.revisarCalendario(e,g.getMantenimientos())){
                value = true;
        }
        return value;
    }
    static estaDisponibleHoy(d: Date, v: Vehiculo, g: Garage):boolean{
        let value:boolean = false;
        if (Calendario.estaDisponibleHoy(d,v,g.getReservas()) &&
            Calendario.estaDisponibleHoy(d,v,g.getMantenimientos())){
                value = true;
        }
        return value;
    }
    static vehiculoEnStock(v: Vehiculo, g: Garage):boolean{
        let value:boolean = false;
        if(g.getVehiculos().has(v.getMatricula())){
            value = true;
        }
        return value;
    }
    static reservaEnReservas(g: Garage, e: Evento):boolean {
        let value:boolean = false;
        if(g.getReservas().has(e)){
            value = true;
        }
        return value;
    }
}