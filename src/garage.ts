import Evento from "./evento";
import { Temporada } from "./temporada/temporada";
import Vehiculo from "./vehiculo/vehiculo";

export default class Garage {
    private vehiculos: Map<string,Vehiculo> = new Map();
    private mantenimientos: Set<Evento> = new Set();
    private reservas: Set<Evento> = new Set();

    public comprarVehiculo(vehiculo: Vehiculo):void {
        this.vehiculos.set(vehiculo.getMatricula(), vehiculo);
    }

    public getVehiculos():Map<string,Vehiculo> {
        return this.vehiculos;
    }
    public getReservas():Set<Evento> {
        return this.reservas;
    }
    public getMantenimientos():Set<Evento> {
        return this.mantenimientos;
    }
    public setTemporada(t:Temporada):void {
        this.vehiculos.forEach((value,key) => {
            value.setTemporada(t);
        })
    }
}
