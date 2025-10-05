import Calendario from "./calendario";
import Evento from "./evento";
import Compacto from "./vehiculo/compacto";
import Sedán from "./vehiculo/sedán";
import SUV from "./vehiculo/suv";
import Vehiculo from "./vehiculo/vehiculo";

export default class Garage {
    private vehiculos: Map<string,Vehiculo> = new Map();
    private mantenimientos: Set<Evento> = new Set();
    private reservas: Set<Evento> = new Set();
    private ticket:number = 1;

    public comprarCompacto(matricula: string):void {
        this.vehiculos.set(matricula, new Compacto(matricula));
    }
    public comprarSUV(matricula: string):void {
        this.vehiculos.set(matricula, new SUV(matricula));
    }
    public comprarSedán(matricula: string):void {
        this.vehiculos.set(matricula, new Sedán(matricula));
    }

    public crearReserva(fechaInicio: Date, fechaFin: Date, vehiculo: Vehiculo){
        if (Calendario.revisarCalendario(fechaInicio, fechaFin, vehiculo, this.reservas) && Calendario.revisarCalendario(fechaInicio, fechaFin, vehiculo, this.mantenimientos)){
            this.getReservas().add(new Evento(fechaInicio, fechaFin, vehiculo,this.ticket));
            console.log("Ticket:",this.ticket);
            this.ticket++;
        }
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
