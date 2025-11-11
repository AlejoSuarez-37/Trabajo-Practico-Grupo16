import Evento from "../evento";
import Garage from "../garage";
import Vehiculo from "../vehiculo/vehiculo";

export default class DisparadorMantenimeinto {
    static chequearEstado(v:Vehiculo,d:Date,g:Garage){
        const diaMasUno = new Date(d);
        diaMasUno.setDate(diaMasUno.getDate() + 1);
        const auxiliar = new Evento(d,diaMasUno,v);
        if(v.getEstado().necesitaMantenimiento(d)){
            g.getMantenimientos().add(auxiliar);
            v.getEstado().reset(d);
            v.getEstadisticas().restarRentabilidad(auxiliar.getVehiculo().obtenerTarifaMantenimiento(auxiliar.getCantDias()));
        }
    }
}