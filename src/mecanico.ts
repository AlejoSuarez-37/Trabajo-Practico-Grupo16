import Evento from "./evento";
import Garage from "./garage";
import OperacionesInvalidas from "./modif/operacionesInvalidas";

export default class Mecanico{
    public realizarMantenimiento(evento: Evento, garage: Garage):void {
        if (!OperacionesInvalidas.vehiculoEnStock(evento.getVehiculo(),garage)){
            throw new Error("No Existe el vehiculo.");
        }
        if (!OperacionesInvalidas.estaDisponible(evento,garage)){
            throw new Error("No se puede realizar mantenimiento al vehiculo.");
        }
        garage.getMantenimientos().add(evento);
        evento.getVehiculo().getEstado().setUltimoMantenimeinto(evento.getFechaFin());
        console.log(evento.getVehiculo().obtenerTarifaMantenimiento(evento.getCantDias())+'$');
    }
}