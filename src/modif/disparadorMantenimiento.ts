import Evento from "../evento";
import Garage from "../garage";
import Vehiculo from "../vehiculo/vehiculo";

export default class DisparadorMantenimeinto {
    static chequearEstado(v:Vehiculo,d:Date,g:Garage){
        const auxiliar = new Date(d);
        auxiliar.setDate(auxiliar.getDate() + 1);
        if(v.getEstado().necesitaMantenimiento(d)){
            g.getMantenimientos().add(new Evento(d,auxiliar,v));
            v.getEstado().setUltimoMantenimeinto(d);
        }
    }
}