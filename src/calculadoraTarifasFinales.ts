import Reserva from "./reserva";

export default class CalculadoraTarifasFinales {
    public calcularTarifa(tarifaBase: number, reserva: Reserva, kilometros: number):number {
        reserva.getVehiculo().setEnReserva(false);
        if(reserva.getVehiculo().obtenerTipo() === "Compacto"){
            if((kilometros / reserva.getCantDias()) >= 100){
                return tarifaBase + (0.15 * kilometros);
            }
            else{
                return tarifaBase;
            }
        }
        if(reserva.getVehiculo().obtenerTipo() === "Sedán"){
            return tarifaBase + (0.20 * kilometros);
        }
        if(reserva.getVehiculo().obtenerTipo() === "SUV"){
            if(kilometros >= 500){
                return tarifaBase + (reserva.getCantDias() * 15) + (0.25 * kilometros)
            }
            else{
                return tarifaBase + (reserva.getCantDias() * 15)
            }
        }
        else{
            return 0;
        }
    }
}