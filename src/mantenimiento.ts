import Vehiculo from "./vehiculo";

export default class Mantenimiento {
    public realizarMantenimiento(vehiculo: Vehiculo):void {
        if(!vehiculo.getEnReserva()){
            vehiculo.setNecesitaMantenimiento(false);
        }
        else{
            console.log("El vehiculo esta en reserva.")
        }
    }
    public realizarLimpieza(vehiculo: Vehiculo):void {
        if(!vehiculo.getEnReserva() && !vehiculo.getNecesitaMantenimiento()){
            vehiculo.setNecesitaLimpieza(false);
        }
        else{
            console.log("El vehiculo esta reservado o en mantenimiento.")
        }
        
    }
}