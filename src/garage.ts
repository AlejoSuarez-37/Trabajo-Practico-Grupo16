import Calendario from "./calendario";
import Evento from "./evento";
import Vehiculo from "./vehiculo/vehiculo";

export default class Garage {
    private vehiculos: Map<string,Vehiculo> = new Map();
    private mantenimientos: Set<Evento> = new Set();
    private reservas: Set<Evento> = new Set();

    public comprarVehiculo(vehiculo: Vehiculo):void {
        this.vehiculos.set(vehiculo.getMatricula(), vehiculo);
    }

    public limpiarVehiculo(fecha: Date, vehiculo: Vehiculo):void {
        if (!this.vehiculos.has(vehiculo.getMatricula())){
            throw new Error("No Existe el vehiculo");
        }
        if (vehiculo.getNecesitaLimpieza()){
            if (Calendario.estaDisponibleHoy(fecha, vehiculo, this.reservas) && Calendario.estaDisponibleHoy(fecha, vehiculo, this.mantenimientos)){
                console.log("Se ha limpiado el vehiculo.");
            }
        }
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
}
