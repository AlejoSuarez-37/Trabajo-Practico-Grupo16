import Cliente from "./cliente"
import Garage from "./garage"
import Mecanico from "./mecanico"
import Compacto from "./vehiculo/compacto"
import Sedán from "./vehiculo/sedán"
import SUV from "./vehiculo/suv"


function main(){
    const cliente = new Cliente();
    const garage = new Garage();
    const mecanico = new Mecanico();

    const v1 = new Compacto("1234");
    const v2 = new SUV("5678");
    const v3 = new Sedán("4321");
    garage.comprarVehiculo(v1);
    garage.comprarVehiculo(v2);
    garage.comprarVehiculo(v3);
    
    const f1 = new Date(2024, 11, 25)
    const f2 = new Date(2024, 11, 27)
    cliente.reservar(f1,f2,v1,garage)
    cliente.devolverVehiculo(200000,1,garage)

    const f3 = new Date(2024, 11, 25)
    const f4 = new Date(2024, 11, 26)
    mecanico.realizarMantenimiento(f3,f4,v2,garage)
}
main()