import Garage from "./garage";
import Vehiculo from "./vehiculo/vehiculo";

export default class Reporte {
    public vehiculoMasAlquilado(g: Garage):Vehiculo {
        let mayorNumAlquileres:number = 0;
        let vehiculoMasAlquileres:Vehiculo;
        g.getVehiculos().forEach((value,key) => {
            if(value.getAlquileres() > mayorNumAlquileres){
                mayorNumAlquileres = value.getAlquileres();
                vehiculoMasAlquileres = value;
            }
        });
        return vehiculoMasAlquileres!;
    }
    public vehiculoMenosAlquilado(g: Garage):Vehiculo {
        let menorNumAlquileres:number = 0;
        let vehiculoMenosAlquileres:Vehiculo;
        g.getVehiculos().forEach((value,key) => {
            if(value.getAlquileres() < menorNumAlquileres){
                menorNumAlquileres = value.getAlquileres();
                vehiculoMenosAlquileres = value;
            }
        });
        return vehiculoMenosAlquileres!;
    }
    public vehiculoMayorRentabilidad(g: Garage):Vehiculo {
        let mayorRentabilidad:number = 0;
        let vehiculoMayorRentabilidad:Vehiculo;
        g.getVehiculos().forEach((value,key) => {
            if(value.getRentabilidad() > mayorRentabilidad){
                mayorRentabilidad = value.getRentabilidad();
                vehiculoMayorRentabilidad = value;
            }
        });
        return vehiculoMayorRentabilidad!;
    }
    public vehiculoMenorRentabilidad(g: Garage):Vehiculo {
        let menorRentabilidad:number = 0;
        let vehiculoMenorRentabilidad:Vehiculo;
        g.getVehiculos().forEach((value,key) => {
            if(value.getRentabilidad() < menorRentabilidad){
                menorRentabilidad = value.getRentabilidad();
                vehiculoMenorRentabilidad = value;
            }
        });
        return vehiculoMenorRentabilidad!;
    }
    public ocupacionDeLaFlota(d: Date, g: Garage):number {
        let cuenta:number = 0;
        g.getVehiculos().forEach((vehiculo,key) => {
            vehiculo.getEstado().getReservasPasadas().forEach(value => {
                if (d >= value.getFechaInicio() && d <= value.getFechaFin()){
                    cuenta++;
                }
            })
        });
        return cuenta / g.getVehiculos().size;
    }
}