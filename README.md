# creamos la clase cliente con:
    const cliente = new Cliente();
# creamos un vehiculo con:
    cliente.comprarCompacto("1234");

# si queremos reservar el vehiculo devemos crear dos constantes de tipo Date para el dia inicial y el final respectivamente:
    const fecha1 = new Date("2025-09-15");
    const fecha2 = new Date("2025-09-20");  
# creamos la reserva:
    cliente.crearReserva(fecha1,fecha2,"1234");
# nos daran un ticket para devolverlo:
    cliente.devolverVehiculo(500,1);

# si queremos limpiar un vehiculo creamos la fecha de limpieza:
    const fecha3 = new Date("2025-09-22");
# y lo limpiamos con la fecha y la matricula:
    cliente.limpiarVehiculo(fecha3,"1234");

# si queremos dar mantenimiento creamos fechas iniciales y finales:
    const fecha4 = new Date("2025-09-23");
    const fecha5 = new Date("2025-09-26");
# realizamos el mantenimiento:
    cliente.realizarMantenimiento(fecha4,fecha5,"1234");
# y con el ticket le damos fin al mantenimiento:
    cliente.terminarMantenimiento(2);
