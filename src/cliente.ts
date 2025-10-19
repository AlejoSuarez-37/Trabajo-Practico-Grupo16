import Calendario from "./calendario";
import Evento from "./evento";
import Garage from "./garage";
import Vehiculo from "./vehiculo/vehiculo";

export default class Cliente {
    // public reservar(fechaInicio: Date, fechaFin: Date, vehiculo: Vehiculo, garage: Garage):void {
    //     if (!garage.getVehiculos().has(vehiculo.getMatricula())){
    //         throw new Error("No Existe el vehiculo");
    //     }
    //     if (Calendario.revisarCalendario(fechaInicio, fechaFin, vehiculo, garage.getReservas()) && Calendario.revisarCalendario(fechaInicio, fechaFin, vehiculo, garage.getMantenimientos())){
    //         garage.getReservas().add(new Evento(fechaInicio, fechaFin, vehiculo,garage.getTicket()));
    //         console.log("Ticket:",garage.getTicket());
    //         garage.plusTicket();
    //     }
    // }

    public reservar(evento: Evento, garage: Garage):void {
        if (!garage.getVehiculos().has(evento.getVehiculo().getMatricula())){
            throw new Error("No Existe el vehiculo");
        }
        if (Calendario.revisarCalendario(evento,garage.getReservas()) && Calendario.revisarCalendario(evento,garage.getMantenimientos())){
            garage.getReservas().add(evento);
        }
    }

    // public devolverVehiculo(kilometros: number, ticket: number, garage: Garage):void {
    //     for (const reserva of garage.getReservas()){
    //         if (reserva.getTicket() === ticket){
    //             console.log(reserva.getVehiculo().obtenerTarifaReserva(reserva.getCantDias(),kilometros));
    //             reserva.getVehiculo().setNecesitaLimpieza(true);
    //         }
    //     }
    // }

    public devolverVehiculo(kilometros: number, evento: Evento, garage: Garage):void {
        for (const reserva of garage.getReservas()){
            if (reserva === evento){
                console.log(reserva.getVehiculo().obtenerTarifaReserva(reserva.getCantDias(),kilometros));
                reserva.getVehiculo().setNecesitaLimpieza(true);
            }
        }
    }
}
