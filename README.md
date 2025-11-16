# creamos clases Garage y reporte
    const garage = new Garage();
    const reporte = new Reporte();

# instanciamos un vehiculo y lo compramos
    const v1 = new Compacto("1234");
    garage.comprarVehiculo(v1);

# para reservarlo devemos crear fechas iniciales y finales
    const f1 = new Date(2024, 11, 25);
    const f2 = new Date(2024, 11, 27);
    garage.reservar(v1, f1, f2, 100);

# para realizar mantenimientos a un vehiculo seguimos la misma metodologia (sin los kilometros)
    const f3 = new Date(2024, 11, 25);
    const f4 = new Date(2024, 11, 26);
    garage.mantener(v1, f1, f2)

# para hacer un reporte especificamos el garage
    reporte.vehiculoMasAlquilado(garage);

# para saber la ocupacion de la flota especificamos el garage y una fecha
    reporte.ocupacionDeLaFlota(new Date(2024, 11, 26),garage);

