import Mantenimiento from "./mantenimiento";
import Reserva from "./reserva"
import Compacto from "./vehiculo/compacto";
import Sedán from "./vehiculo/sedán";
import SUV from "./vehiculo/suv";

function main(){
    const mantenimiento = new Mantenimiento();

    // // creamos un compacto
    // const compacto1 = new Compacto();
    // compacto1.setMatricula("1234");
    // const reservaCompacto1 = new Reserva();
    // // creamos la reserva
    // reservaCompacto1.crearReserva(3, 20, compacto1, compacto1.obtenerTipo());
    // // calculamos la tarifa base
    // let tarifaBaseCompacto = calculadoraTarifasBase.calcularTarifa(reservaCompacto1);
    // console.log(tarifaBaseCompacto);
    // // calculamos la tarifa final
    // let tarifaFinalCompacto = calculadoraTarifasFinales.calcularTarifa(tarifaBaseCompacto, reservaCompacto1, 100);
    // console.log(tarifaFinalCompacto);

    
    // const sedán1 = new Sedán();
    // sedán1.setMatricula("4567");
    // const reservaSedán1 = new Reserva();
    // reservaSedán1.crearReserva(5, 30, sedán1, sedán1.obtenerTipo());
    // let tarifaBaseSedán = calculadoraTarifasBase.calcularTarifa(reservaSedán1);
    // console.log(tarifaBaseSedán);
    // let tarifaFinalSedán = calculadoraTarifasFinales.calcularTarifa(tarifaBaseSedán, reservaSedán1, 500);
    // console.log(tarifaFinalSedán);


    // const suv1 = new SUV();
    // suv1.setMatricula("4321");
    // const reservaSUV1 = new Reserva();
    // reservaSUV1.crearReserva(10, 20, suv1, suv1.obtenerTipo());
    // let tarifaBaseSUV = calculadoraTarifasBase.calcularTarifa(reservaSUV1);
    // console.log(tarifaBaseSUV);
    // let tarifaFinalSUV = calculadoraTarifasFinales.calcularTarifa(tarifaBaseSUV, reservaSUV1, 200);
    // console.log(tarifaFinalSUV);


    // // creamos una sedan que necesita mantenimiento
    // const sedán2 = new Sedán()
    // sedán2.setMatricula("4567");
    // sedán2.estadoVehiculo.setNecesitaMantenimiento(true);
    // sedán2.estadoVehiculo.setNecesitaLimpieza(true);
    // const reservaSedán2 = new Reserva()
    // // no nos deja reservarla
    // reservaSedán2.crearReserva(10, 20, sedán2, sedán2.obtenerTipo());
    // // le damos mantenimiento
    // mantenimiento.realizarMantenimiento(sedán2);
    // reservaSedán2.crearReserva(10, 20, sedán2, sedán2.obtenerTipo());
    // // le falta la limpieza
    // mantenimiento.realizarLimpieza(sedán2);
    // reservaSedán2.crearReserva(10, 20, sedán2, sedán2.obtenerTipo());
}
main()