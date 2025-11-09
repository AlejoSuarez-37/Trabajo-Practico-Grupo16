import DisparadorMantenimeinto from "./modif/disparadorMantenimiento";
import Evento from "./evento";
import Garage from "./garage";
import OperacionesInvalidas from "./modif/operacionesInvalidas";


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

    public devolverVehiculo(kilometros: number, evento: Evento, garage: Garage):void {
        for (const reserva of garage.getReservas()){
            if (reserva === evento){
                console.log(reserva.getVehiculo().obtenerTarifaReserva(reserva.getCantDias(),kilometros)+'$');
                reserva.getVehiculo().getEstado().setNecesitaLimpieza(true);
                evento.getVehiculo().getEstado().aumentarAlquileresCompletados();
                evento.getVehiculo().getEstado().sumarKilometrosRecorridos(kilometros);
                DisparadorMantenimeinto.chequearEstado(evento.getVehiculo(),evento.getFechaFin(),garage);
                
            }
        }
    }
}
