import Calendario from "./calendario";
import Evento from "./evento";
import Garage from "./garage";
import Vehiculo from "./vehiculo/vehiculo";

export default class Mecanico{
    public realizarMantenimiento(fechaInicio: Date, fechaFin: Date, vehiculo: Vehiculo, garage: Garage):void {
        if (!garage.getVehiculos().has(vehiculo.getMatricula())){
            throw new Error("No Existe el vehiculo");
        }
        if (Calendario.revisarCalendario(fechaInicio, fechaFin, vehiculo, garage.getReservas()) && Calendario.revisarCalendario(fechaInicio, fechaFin, vehiculo, garage.getMantenimientos())){
            let evento = new Evento(fechaInicio, fechaFin, vehiculo);
            garage.getMantenimientos().add(evento);
            console.log(evento.getVehiculo().obtenerTarifaMantenimiento(evento.getCantDias()));
        }
    }
}