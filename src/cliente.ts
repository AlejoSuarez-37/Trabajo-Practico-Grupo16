import Reserva from "./reserva";
import Compacto from "./vehiculo/compacto";
import Sedán from "./vehiculo/sedán";
import SUV from "./vehiculo/suv";
import Vehiculo from "./vehiculo/vehiculo";

export default class Cliente {
    private vehiculos: Array<Vehiculo> = new Array();
    private reservas: Map<string, Reserva> = new Map();

    public comprarCompacto(matricula: string):void {
        this.vehiculos.push(new Compacto(matricula));
    }
    public comprarSUV(matricula: string):void {
        this.vehiculos.push(new SUV(matricula));
    }
    public comprarSedán(matricula: string):void {
        this.vehiculos.push(new Sedán(matricula));
    }
}