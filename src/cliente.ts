import Garage from "./garage";

export default class Cliente {
    public crearReserva(fechaInicio: Date, fechaFin: Date, garage: Garage, matricula: string):void {
        for (const vehiculo of garage.getVehiculos()){
            if (vehiculo.getMatricula() === matricula){
                garage.reservar(fechaInicio, fechaFin, vehiculo);
            }
        }
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
