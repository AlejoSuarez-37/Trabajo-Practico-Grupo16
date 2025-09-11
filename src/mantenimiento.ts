import Vehiculo from "./vehiculo/vehiculo";

export default class Mantenimiento {
    public realizarMantenimiento(vehiculo: Vehiculo):void {
        if(!vehiculo.estadoVehiculo.getEnReserva()){
            vehiculo.estadoVehiculo.setNecesitaMantenimiento(false);
        }
        else{
            console.log("El vehiculo esta en reserva.")
        }
    }
    public realizarLimpieza(vehiculo: Vehiculo):void {
        if(!vehiculo.estadoVehiculo.getEnReserva() && !vehiculo.estadoVehiculo.getNecesitaMantenimiento()){
            vehiculo.estadoVehiculo.setNecesitaLimpieza(false);
        }
        else{
            console.log("El vehiculo esta reservado o en mantenimiento.")
        }
        
    }
}