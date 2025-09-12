import Vehiculo from "./vehiculo/vehiculo";

export default class Mantenimiento {
    public realizarMantenimiento(vehiculo: Vehiculo):void {
        if(!vehiculo.getEstadoVehiculo().getEnReserva()){
            vehiculo.getEstadoVehiculo().setNecesitaMantenimiento(false);
        }
        else{
            console.log("El vehiculo esta en reserva.")
        }
    }
    public realizarLimpieza(vehiculo: Vehiculo):void {
        if(!vehiculo.getEstadoVehiculo().getEnReserva() && !vehiculo.getEstadoVehiculo().getNecesitaMantenimiento()){
            vehiculo.getEstadoVehiculo().setNecesitaLimpieza(false);
        }
        else{
            console.log("El vehiculo esta reservado o en mantenimiento.")
        }
        
    }
}