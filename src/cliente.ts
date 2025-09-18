import Calendario from "./calendario";
import Evento from "./evento";
import Compacto from "./vehiculo/compacto";
import Sedán from "./vehiculo/sedán";
import SUV from "./vehiculo/suv";
import Vehiculo from "./vehiculo/vehiculo";

export default class Cliente {
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

    public crearReserva(fechaInicio: Date, fechaFin: Date, matricula: string):void {
        for (const vehiculo of this.vehiculos){
            if (vehiculo.getMatricula() === matricula){
                let calendario = new Calendario()
                if (calendario.revisarCalendario(fechaInicio, fechaFin, this.reservas) && calendario.revisarCalendario(fechaInicio, fechaFin, this.mantenimientos)){
                    this.reservas.push(new Evento(fechaInicio, fechaFin, vehiculo,this.ticket));
                    console.log("Ticket:",this.ticket);
                    this.ticket++;
                }
            }
        }
    }

    public devolverVehiculo(kilometros: number, ticket: number):void {
        for (const reserva of this.reservas){
            if (reserva.getTicket() === ticket){
                console.log(reserva.getVehiculo().obtenerTarifaReserva(reserva.getCantDias(),kilometros));
                reserva.getVehiculo().setNecesitaLimpieza(true);
            }
        }
    }

    public realizarMantenimiento(fechaInicio: Date, fechaFin: Date, matricula: string):void {
        for (const vehiculo of this.vehiculos){
            if (vehiculo.getMatricula() === matricula){
                let calendario = new Calendario()
                if (calendario.revisarCalendario(fechaInicio, fechaFin, this.reservas) && calendario.revisarCalendario(fechaInicio, fechaFin, this.mantenimientos)){
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
                let calendario = new Calendario()
                if (calendario.estaDisponibleHoy(fecha,this.reservas) && calendario.estaDisponibleHoy(fecha,this.mantenimientos)){
                    console.log("Se ha limpiado el vehiculo.");
                }
            }
        }
    }
}
