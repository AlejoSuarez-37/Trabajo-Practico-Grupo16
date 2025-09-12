import SUV from "./vehiculo/suv";
import Vehiculo from "./vehiculo/vehiculo"

export default class Reserva {
    private cantDias: number
    private vehiculo: Vehiculo

    constructor(){
        this.cantDias = 0;
        this.vehiculo = new SUV();
    }

    public getCantDias():number {
        return this.cantDias;
    }
    public getVehiculo():Vehiculo {
        return this.vehiculo;
    }

    public crearReserva(fechaInicio: number, fechaFin: number, vehiculo: Vehiculo): void{
        if(vehiculo.getEstadoVehiculo().esReservable()){
            this.cantDias = fechaFin - fechaInicio;
            this.vehiculo = vehiculo;
            vehiculo.getEstadoVehiculo().setEnReserva(true);
            console.log("Vehiculo reservado exitosamente.");
        }
        else {
            console.log("No es posible reservar el vehiculo en este momento.");
        }
    }
}