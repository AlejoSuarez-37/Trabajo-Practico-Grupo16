import Cliente from "./cliente"
import Evento from "./evento"
import Garage from "./garage"
import Lavanderia from "./lavanderia"
import Mecanico from "./mecanico"
import Reporte from "./reporte"
import Compacto from "./vehiculo/compacto"
import Sedán from "./vehiculo/sedán"
import SUV from "./vehiculo/suv"


function main(){
    // armamos las clases
    const cliente = new Cliente();
    const garage = new Garage();
    const mecanico = new Mecanico();
    const lavanderia = new Lavanderia();
    const reporte = new Reporte();

    // creamos los vehiculos y los compramos
    const v1 = new Compacto("1234");
    const v2 = new SUV("5678");
    const v3 = new Sedán("4321");
    garage.comprarVehiculo(v1);
    garage.comprarVehiculo(v2);
    garage.comprarVehiculo(v3);

    // reservamos un vehiculo
    const f1 = new Date(2024, 11, 25);
    const f2 = new Date(2024, 11, 27);
    const e1 = new Evento(f1,f2,v1);
    cliente.reservar(e1,garage);
    console.log(cliente.devolverVehiculo(200000,e1,garage));

    // le damos mantenimiento a un otro vehiculo
    const f3 = new Date(2024, 11, 25);
    const f4 = new Date(2024, 11, 29);
    const e2 = new Evento(f3,f4,v2);

    console.log(mecanico.realizarMantenimiento(e2,garage));
    // limpiamos el vehiculo reservado
    const f5 = new Date(2024,12,25);
    lavanderia.limpiarVehiculo(f5,v1,garage);

    // reporte del vehiculo con mas alquiler
    console.log(reporte.vehiculoMasAlquilado(garage).getMatricula());

    // reporte de ocupacion de la flota
    console.log(reporte.ocupacionDeLaFlota(new Date(2024, 11, 26),garage));
}
main()