import SUV from "./vehiculo/suv";
import Vehiculo from "./vehiculo/vehiculo"

export default class Reserva {
    private cantDias: number
    private tipoVehiculo: string
    private vehiculo: Vehiculo

    constructor(){
        this.cantDias = 0;
        this.tipoVehiculo = "";
        this.vehiculo = new SUV();
    }

    public getCantDias():number {
        return this.cantDias;
    }
    public getTipoVehiculo():string {
        return this.tipoVehiculo;
    }
    public getVehiculo():Vehiculo {
        return this.vehiculo;
    }

    public crearReserva(fechaInicio: number, fechaFin: number, vehiculo: Vehiculo, tipoVehiculo: string): void{
        if(vehiculo.estadoVehiculo.esReservable()){
            this.cantDias = fechaFin - fechaInicio;
            this.tipoVehiculo = tipoVehiculo;
            this.vehiculo = vehiculo;
            vehiculo.estadoVehiculo.setEnReserva(true)
            console.log("Vehiculo reservado exitosamente.");
        }
        else {
            console.log("No es posible reservar el vehiculo en este momento.");
        }
    }
}