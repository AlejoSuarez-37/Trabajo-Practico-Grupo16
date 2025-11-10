import DisparadorMantenimeinto from "./check/disparadorMantenimiento";
import Evento from "./evento";
import Garage from "./garage";
import OperacionesInvalidas from "./check/operacionesInvalidas";


export default class Cliente {
    public reservar(evento: Evento, garage: Garage):void {
        if (!OperacionesInvalidas.vehiculoEnStock(evento.getVehiculo(),garage)){
            throw new Error("No Existe el vehiculo.");
        }
        if (!OperacionesInvalidas.estaDisponible(evento,garage)){
            throw new Error("No se puede reservar el vehiculo.");
        }
        garage.getReservas().add(evento);
    }

    public devolverVehiculo(kilometros: number, evento: Evento, garage: Garage):number {
        if (!OperacionesInvalidas.reservaEnReservas(garage,evento)){
            throw new Error("La reserva no existe.");
        }
        let tarifa:number = evento.getVehiculo().obtenerTarifaReserva(evento.getCantDias(),kilometros);
        evento.getVehiculo().getEstado().setNecesitaLimpieza(true);
        evento.getVehiculo().getEstado().aumentarAlquileresCompletados();
        evento.getVehiculo().getEstado().sumarKilometrosRecorridos(kilometros);

        evento.getVehiculo().getEstadisticas().sumarAlquiler();
        evento.getVehiculo().getEstadisticas().sumarRentabilidad(tarifa);
        
        DisparadorMantenimeinto.chequearEstado(evento.getVehiculo(),evento.getFechaFin(),garage);
        return tarifa;
    }
}
