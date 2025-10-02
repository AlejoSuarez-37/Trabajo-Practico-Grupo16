import Calendario from "./calendario";
import Evento from "./evento";
import Compacto from "./vehiculo/compacto";
import Sedán from "./vehiculo/sedán";
import SUV from "./vehiculo/suv";
import Vehiculo from "./vehiculo/vehiculo";

export default class Garage {
    private vehiculos: Array<Vehiculo> = new Array();
    private mantenimientos: Array<Evento> = new Array();
    private reservas: Array<Evento> = new Array();
    private ticket:number = 1;

    public comprarCompacto(matricula: string):void {
        this.vehiculos.push(new Compacto(matricula));
    }
    public comprarSUV(matricula: string):void {
        this.vehiculos.push(new SUV(matricula));
    }
    public comprarSedán(matricula: string):void {
        this.vehiculos.push(new Sedán(matricula));
    }

    public realizarMantenimiento(fechaInicio: Date, fechaFin: Date,garage: Garage, matricula: string):void {
        for (const vehiculo of garage.getVehiculos()){
            if (vehiculo.getMatricula() === matricula){
                if (Calendario.revisarCalendario(fechaInicio, fechaFin, this.reservas) && Calendario.revisarCalendario(fechaInicio, fechaFin, this.mantenimientos)){
                    this.mantenimientos.push(new Evento(fechaInicio,fechaFin,vehiculo,this.ticket));
                    console.log("Ticket:",this.ticket);
                    this.ticket++;
                }
            }
        }
    }

    public terminarMantenimiento(ticket: number):void {
        for (const mantenimiento of this.mantenimientos){
            if (mantenimiento.getTicket() === ticket){
                console.log(mantenimiento.getVehiculo().obtenerTarifaMantenimiento(mantenimiento.getCantDias()))
            }
        }
    }

    public limpiarVehiculo(fecha: Date, matricula: string):void {
        for (const vehiculo of this.vehiculos){
            if (vehiculo.getMatricula() === matricula && vehiculo.getNecesitaLimpieza()){
                if (Calendario.estaDisponibleHoy(fecha,this.reservas) && Calendario.estaDisponibleHoy(fecha,this.mantenimientos)){
                    console.log("Se ha limpiado el vehiculo.");
                }
            }
        }
    }

    public reservar(fechaInicio: Date, fechaFin: Date, vehiculo: Vehiculo){
        if (Calendario.revisarCalendario(fechaInicio, fechaFin, this.reservas) && Calendario.revisarCalendario(fechaInicio, fechaFin, this.mantenimientos)){
            this.getReservas().push(new Evento(fechaInicio, fechaFin, vehiculo,this.ticket));
            console.log("Ticket:",this.ticket);
            this.ticket++;
        }
    }

    public getVehiculos():Array<Vehiculo> {
        return this.vehiculos;
    }
    public getReservas():Array<Evento> {
        return this.reservas;
    }
    public getMantenimientos():Array<Evento> {
        return this.mantenimientos;
    }
}
