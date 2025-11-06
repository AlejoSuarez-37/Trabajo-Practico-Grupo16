import Calendario from "./calendario";
import Evento from "./evento";
import Garage from "./garage";

export default class Mecanico{
    public realizarMantenimiento(evento: Evento, garage: Garage):void {
        if (!garage.getVehiculos().has(evento.getVehiculo().getMatricula())){
            throw new Error("No Existe el vehiculo");
        }
        if (Calendario.revisarCalendario(evento,garage.getReservas()) && Calendario.revisarCalendario(evento,garage.getMantenimientos())){
            garage.getMantenimientos().add(evento);
            console.log(evento.getVehiculo().obtenerTarifaMantenimiento(evento.getCantDias()));
        }
    }
}