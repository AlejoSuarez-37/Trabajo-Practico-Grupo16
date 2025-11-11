import Evento from "./evento";
import Garage from "./garage";
import OperacionesInvalidas from "./check/operacionesInvalidas";

export default class Mecanico{
    public realizarMantenimiento(evento: Evento, garage: Garage):number {
        if (!OperacionesInvalidas.vehiculoEnStock(evento.getVehiculo(),garage)){
            throw new Error("No Existe el vehiculo.");
        }
        if (!OperacionesInvalidas.estaDisponible(evento,garage)){
            throw new Error("No se puede realizar mantenimiento al vehiculo.");
        }
        if (!OperacionesInvalidas.eventoValido(evento)){
            throw new Error("El evento no tiene fechas validas.");
        }
        let tarifa:number = evento.getVehiculo().obtenerTarifaMantenimiento(evento.getCantDias());
        garage.getMantenimientos().add(evento);
        evento.getVehiculo().getEstado().reset(evento.getFechaFin());
        evento.getVehiculo().getEstadisticas().restarRentabilidad(tarifa);
        return tarifa;
    }
}