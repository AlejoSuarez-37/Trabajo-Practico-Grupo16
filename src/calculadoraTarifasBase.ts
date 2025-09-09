import Reserva from "./reserva";

export default class CalculadoraTarifasBase {
    public calcularTarifa(reserva: Reserva): number {
        if(reserva.getVehiculo().obtenerTipo() === "Compacto"){
            return 30 * reserva.getCantDias();
        }
        if(reserva.getVehiculo().obtenerTipo() === "Sedán"){
            return 50 * reserva.getCantDias();
        }
        if(reserva.getVehiculo().obtenerTipo() === "SUV"){
            return 80 * reserva.getCantDias();
        }
        else {
            console.log("El Vehiculo no esta en la base de datos.");
            return 0;
        }
    }
}