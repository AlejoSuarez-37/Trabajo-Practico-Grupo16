# creamos clases Cliente, Garage, Mecanico y Lavanderia
    const cliente = new Cliente();
    const garage = new Garage();
    const mecanico = new Mecanico();
    const lavanderia = new Lavanderia();
    const reporte = new Reporte();

# instanciamos un vehiculo y lo compramos
    const v1 = new Compacto("1234");
    garage.comprarVehiculo(v1);

# para reservarlo devemos crear fechas iniciales y finales, crear el evento con el vehiculo y especificar el garage 
    const f1 = new Date(2024, 11, 25);
    const f2 = new Date(2024, 11, 27);
    const e1 = new Evento(f1,f2,v1)
    cliente.reservar(e1,garage)

# para devolver un vehiculo especificamos los kilometros, el evento y el garage
    cliente.devolverVehiculo(200000,e1,garage)

# para realizar mantenimientos a un vehiculo seguimos la misma metodologia (no debe devolverse el vehiculo)
    const f3 = new Date(2024, 11, 25);
    const f4 = new Date(2024, 11, 26);
    const e2 = new Evento(f3,f4,v2)
    mecanico.realizarMantenimiento(e2,garage)

# para lavar un vehiculo creamos una fecha y se la pasamos a la lavanderia con el vehiculo y el garage
    const f5 = new Date(2024,12,25);
    lavanderia.limpiarVehiculo(f5,v1,garage);

# para hacer un reporte especificamos el garage
    reporte.vehiculoMasAlquilado(garage);

# para saber la ocupacion de la flota especificamos el garage y una fecha
    reporte.ocupacionDeLaFlota(new Date(2024, 11, 26),garage);

