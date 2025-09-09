import CalculadoraTarifasBase from "./calculadoraTarifasBase";
import CalculadoraTarifasFinales from "./calculadoraTarifasFinales";
import Compacto from "./compacto"
import Mantenimiento from "./mantenimiento";
import Reserva from "./reserva"
import Sedán from "./sedán";
import SUV from "./suv";

function main(){
    const calculadoraTarifasBase = new CalculadoraTarifasBase();
    const calculadoraTarifasFinales = new CalculadoraTarifasFinales();
    const mantenimiento = new Mantenimiento();

    // creamos un compacto
    const compacto1 = new Compacto();
    const reservaCompacto1 = new Reserva();
    // creamos la reserva
    reservaCompacto1.crearReserva(3, 20, compacto1);
    // calculamos la tarifa base
    let tarifaBaseCompacto = calculadoraTarifasBase.calcularTarifa(reservaCompacto1);
    console.log(tarifaBaseCompacto);
    // calculamos la tarifa final
    let tarifaFinalCompacto = calculadoraTarifasFinales.calcularTarifa(tarifaBaseCompacto, reservaCompacto1, 100);
    console.log(tarifaFinalCompacto);

    
    const sedán1 = new Sedán();
    const reservaSedán1 = new Reserva();
    reservaSedán1.crearReserva(5, 30, sedán1);
    let tarifaBaseSedán = calculadoraTarifasBase.calcularTarifa(reservaSedán1);
    console.log(tarifaBaseSedán);
    let tarifaFinalSedán = calculadoraTarifasFinales.calcularTarifa(tarifaBaseSedán, reservaSedán1, 500);
    console.log(tarifaFinalSedán);


    const suv1 = new SUV();
    const reservaSUV1 = new Reserva();
    reservaSUV1.crearReserva(10, 20, suv1);
    let tarifaBaseSUV = calculadoraTarifasBase.calcularTarifa(reservaSUV1);
    console.log(tarifaBaseSUV);
    let tarifaFinalSUV = calculadoraTarifasFinales.calcularTarifa(tarifaBaseSUV, reservaSUV1, 200);
    console.log(tarifaFinalSUV);


    // creamos una sedan que necesita mantenimiento
    const sedán2 = new Sedán()
    sedán2.setNecesitaMantenimiento(true);
    sedán2.setNecesitaLimpieza(true);
    const reservaSedán2 = new Reserva()
    // no nos deja reservarla
    reservaSedán2.crearReserva(10, 20, sedán2);
    // le damos mantenimiento
    mantenimiento.realizarMantenimiento(sedán2);
    reservaSedán2.crearReserva(10, 20, sedán2);
    // le falta la limpieza
    mantenimiento.realizarLimpieza(sedán2);
    reservaSedán2.crearReserva(10, 20, sedán2);

}
main()