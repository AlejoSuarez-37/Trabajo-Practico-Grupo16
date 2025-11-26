# Cosas a corregir
    El garaje no debe de poder acceder al estado (agregar métodos mantener, reservar, devolver a Vehículo).
    Se debe disparar el mantenimiento y actualizar el tablero al cambiar de estado, no en el vehículo.

# ---Utilizaciond el programa---
# creamos clase Garage
    const garage = new Garage();

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

# para hacer un reporte creamos la calse del reporte deseado y especificamos el garage 
    let reporte = new VehiculoMasAlquilado();
    reporte.analizar(garage);
