# creamos objetos para las calculadoras(CalculadoraTarifasBase() y CalculadoraTarifasFinales())
    const calculadoraTarifasBase = new CalculadoraTarifasBase();
    const calculadoraTarifasFinales = new CalculadoraTarifasFinales();

# creamos el objeto del tipo Mantenimiento() para hacer mantenimiento a los vehiculos
    const mantenimiento = new Mantenimiento();  

# creamos vehiculos vehiculos del tipo que deseamos(Compacto(), sedán(), SUV())
    const compacto = new Compacto()
# le asignamos una matricula de tipo string
    compacto.setMatricula("1234");

# creamos una reserva
    const reservaCompacto = new Reserva();
# y en la reserva le especificamos la fecha de inicio, la fecha final, el vehiculo deseado y el tipo de vehiculo
    reservaCompacto.crearReserva(3, 20, compacto, compacto.obtenerTipo());

# calculamos la tarifa base para el vehiculo reservado
    let tarifaBaseCompacto = calculadoraTarifasBase.calcularTarifa(reservaCompacto);
# y luego la tarifa final cuando querramos devolverlo
    let tarifaFinalCompacto = calculadoraTarifasFinales.calcularTarifa(tarifaBaseCompacto, reservaCompacto1, 100);

tener en cuenta que mientras esta en reserva no se puede crear una reserva del mismo vehiculo, realizar mantenimiento ni mandar a limpiar

# para hacer mantenimiento debemos especificar que lo necesita
    sedán.setNecesitaMantenimiento(true);
    sedán.setNecesitaLimpieza(true);
# y le damos el mantenimiento necesario
    mantenimiento.realizarMantenimiento(sedán);
    mantenimiento.realizarLimpieza(sedán);
