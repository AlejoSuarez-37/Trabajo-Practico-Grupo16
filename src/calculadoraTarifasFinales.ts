import Reserva from "./reserva";

export default class CalculadoraTarifasFinales {
    public calcularTarifa(tarifaBase: number, reserva: Reserva, kilometros: number):number {
        reserva.getVehiculo().estadoVehiculo.setEnReserva(false);
        if(reserva.getTipoVehiculo() === "Compacto"){
            if((kilometros / reserva.getCantDias()) >= 100){
                return tarifaBase + (0.15 * kilometros);
            }
            else{
                return tarifaBase;
            }
        }
        if(reserva.getTipoVehiculo() === "Sedán"){
            return tarifaBase + (0.20 * kilometros);
        }
        if(reserva.getTipoVehiculo() === "SUV"){
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