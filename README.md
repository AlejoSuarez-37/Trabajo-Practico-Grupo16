# creamos clases Cliente, Garage y Mecanico
    const cliente = new Cliente();
    const garage = new Garage();
    const mecanico = new Mecanico();

# instanciamos al menos un vehiculo y lo compramos
    const v1 = new Compacto("1234");
    garage.comprarVehiculo(v1);
    
# para reservarlo devemos crear fechas iniciales y finales; y especificar el garage 
    const f1 = new Date(2024, 11, 25);
    const f2 = new Date(2024, 11, 27);
    cliente.reservar(f1,f2,v1,garage);
    cliente.devolverVehiculo(200000,1,garage);

# para realizar mantenimientos a un vehiculo seguimos la misma metodologia
    const f3 = new Date(2024, 11, 25);
    const f4 = new Date(2024, 11, 26);
    mecanico.realizarMantenimiento(f3,f4,v2,garage);

