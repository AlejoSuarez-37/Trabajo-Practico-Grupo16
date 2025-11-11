import Garage from "./garage";
import OperacionesInvalidas from "./check/operacionesInvalidas";
import Vehiculo from "./vehiculo/vehiculo";

export default class Lavanderia {
    public limpiarVehiculo(d: Date, v: Vehiculo, g: Garage):void{
        if(!OperacionesInvalidas.vehiculoEnStock(v,g)){
            throw new Error("No existe el vehiculo.");
        }
        if(!OperacionesInvalidas.estaDisponibleHoy(d,v,g)){
            throw new Error("No se puede lavar el vehiculo.");
        }
        if(v.getEstado().getNecesitaLimpieza()){
            v.getEstado().setNecesitaLimpieza(false);
            console.log("Se ha limpiado el vehiculo.");
        }
    }
}