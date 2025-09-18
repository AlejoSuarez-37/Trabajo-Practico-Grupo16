import Cliente from "./cliente"

function main(){
    const cliente = new Cliente();
    cliente.comprarCompacto("1234");
    cliente.comprarSUV("4321");
    cliente.comprarSedán("567");

    const fecha1 = new Date("2025-09-15");
    const fecha2 = new Date("2025-09-20");
    cliente.crearReserva(fecha1,fecha2,"1234");
    cliente.devolverVehiculo(500,1);

    const fecha3 = new Date("2025-09-22");
    cliente.limpiarVehiculo(fecha3,"1234");

    const fecha4 = new Date("2025-09-23");
    const fecha5 = new Date("2025-09-26");
    cliente.realizarMantenimiento(fecha4,fecha5,"1234");
    cliente.terminarMantenimiento(2);
}
main()