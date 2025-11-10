import Radar from "./check/radar";
import Garage from "./garage";
import Compacto from "./vehiculo/compacto";
import Vehiculo from "./vehiculo/vehiculo";

export default class Reporte {
    public vehiculoMasAlquilado(g: Garage):Vehiculo{
        let mayorNumAlquileres:number = 0;
        let vehiculoMasAlquileres:Vehiculo = new Compacto("");
        g.getVehiculos().forEach((value,key) => {
            if(value.getEstadisticas().getAlquileres() > mayorNumAlquileres){
                mayorNumAlquileres = value.getEstadisticas().getAlquileres();
                vehiculoMasAlquileres = value;
            }
        })
        return vehiculoMasAlquileres;
    }
    public vehiculoMenosAlquilado(g: Garage):Vehiculo{
        let menorNumAlquileres:number = 0;
        let vehiculoMenosAlquileres:Vehiculo = new Compacto("");
        g.getVehiculos().forEach((value,key) => {
            if(value.getEstadisticas().getAlquileres() < menorNumAlquileres){
                menorNumAlquileres = value.getEstadisticas().getAlquileres();
                vehiculoMenosAlquileres = value;
            }
        })
        return vehiculoMenosAlquileres;
    }
    public vehiculoMayorRentabilidad(g: Garage):Vehiculo{
        let mayorRentabilidad:number = 0;
        let vehiculoMayorRentabilidad:Vehiculo = new Compacto("");
        g.getVehiculos().forEach((value,key) => {
            if(value.getEstadisticas().getRentabilidad() > mayorRentabilidad){
                mayorRentabilidad = value.getEstadisticas().getRentabilidad();
                vehiculoMayorRentabilidad = value;
            }
        })
        return vehiculoMayorRentabilidad;
    }
    public vehiculoMenorRentabilidad(g: Garage){
        let menorRentabilidad:number = 0;
        let vehiculoMenorRentabilidad:Vehiculo = new Compacto("");
        g.getVehiculos().forEach((value,key) => {
            if(value.getEstadisticas().getRentabilidad() < menorRentabilidad){
                menorRentabilidad = value.getEstadisticas().getRentabilidad();
                vehiculoMenorRentabilidad = value;
            }
        })
        return vehiculoMenorRentabilidad;
    }
    public ocupacionDeLaFlota(d: Date, g: Garage):number{
        return Radar.flotaActiva(d,g) / g.getVehiculos().size;
    }
}