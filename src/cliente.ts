import Garage from "./garage";

export default class Cliente {
    public reservar(fechaInicio: Date, fechaFin: Date, garage: Garage, matricula: string):void {
        if (!garage.getVehiculos().has(matricula)){
            throw new Error("No Existe el vehiculo");
        }
        garage.crearReserva(fechaInicio, fechaFin,garage.getVehiculos().get(matricula)!);     
    }

    public devolverVehiculo(kilometros: number,garage: Garage, ticket: number):void {
        for (const reserva of garage.getReservas()){
            if (reserva.getTicket() === ticket){
                console.log(reserva.getVehiculo().obtenerTarifaReserva(reserva.getCantDias(),kilometros));
                reserva.getVehiculo().setNecesitaLimpieza(true);
            }
        }
    }
}
