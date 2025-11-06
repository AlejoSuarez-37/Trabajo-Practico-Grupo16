import Calendario from "./calendario";
import Evento from "./evento";
import Garage from "./garage";
import Vehiculo from "./vehiculo/vehiculo";

export default class Cliente {
    public reservar(evento: Evento, garage: Garage):void {
        if (!garage.getVehiculos().has(evento.getVehiculo().getMatricula())){
            throw new Error("No Existe el vehiculo");
        }
        if (Calendario.revisarCalendario(evento,garage.getReservas()) && Calendario.revisarCalendario(evento,garage.getMantenimientos())){
            garage.getReservas().add(evento);
        }
    }

    public devolverVehiculo(kilometros: number, evento: Evento, garage: Garage):void {
        for (const reserva of garage.getReservas()){
            if (reserva === evento){
                console.log(reserva.getVehiculo().obtenerTarifaReserva(reserva.getCantDias(),kilometros));
                reserva.getVehiculo().setNecesitaLimpieza(true);
            }
        }
    }
}
