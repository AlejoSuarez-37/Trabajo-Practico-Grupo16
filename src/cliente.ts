import Garage from "./garage";
import Vehiculo from "./vehiculo/vehiculo";

export default class Cliente {
    public reservar(fechaInicio: Date, fechaFin: Date, vehiculo: Vehiculo, garage: Garage):void {
        if (!garage.getVehiculos().has(vehiculo.getMatricula())){
            throw new Error("No Existe el vehiculo");
        }
        garage.crearReserva(fechaInicio, fechaFin, vehiculo);
    }

    public devolverVehiculo(kilometros: number, ticket: number, garage: Garage):void {
        for (const reserva of garage.getReservas()){
            if (reserva.getTicket() === ticket){
                console.log(reserva.getVehiculo().obtenerTarifaReserva(reserva.getCantDias(),kilometros));
                reserva.getVehiculo().setNecesitaLimpieza(true);
            }
        }
    }
}
