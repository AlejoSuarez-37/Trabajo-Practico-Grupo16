import Radar from "../src/check/radar";
import Garage from "../src/garage";
import Evento from "../src/evento";
import Compacto from "../src/vehiculo/compacto";

describe("Radar.flotaActiva", () => {
  const crearFecha = (anio: number, mes: number, dia: number, h = 0, m = 0) =>
    new Date(anio, mes - 1, dia, h, m);

  test("devuelve 0 cuando no hay reservas", () => {
    const garage = new Garage();
    const fecha = crearFecha(2024, 8, 1);

    const activa = Radar.flotaActiva(fecha, garage);

    expect(activa).toBe(0);
  });

  test("cuenta correctamente reservas que colisionan con el dia consultado", () => {
    const garage = new Garage();
    const vehiculo1 = new Compacto("AAA111");
    const vehiculo2 = new Compacto("BBB222");

    const reserva1 = new Evento(
      crearFecha(2024, 8, 4),
      crearFecha(2024, 8, 6),
      vehiculo1
    );

    const reserva2 = new Evento(
      crearFecha(2024, 8, 5),
      crearFecha(2024, 8, 5),
      vehiculo2
    );

    const reserva3 = new Evento(
      crearFecha(2024, 8, 1),
      crearFecha(2024, 8, 3),
      vehiculo1
    );

    garage.getReservas().add(reserva1);
    garage.getReservas().add(reserva2);
    garage.getReservas().add(reserva3);

    const fechaConsulta = crearFecha(2024, 8, 5, 10, 0);

    const activa = Radar.flotaActiva(fechaConsulta, garage);

    expect(activa).toBe(2);
  });

  test("considera como colision cuando la reserva empieza exactamente a las 00:00 o termina a las 23:59 de ese mismo dia", () => {
    const garage = new Garage();
    const vehiculo = new Compacto("AAA111");

    const inicio = crearFecha(2024, 9, 10, 0, 0);
    const fin = crearFecha(2024, 9, 10, 23, 59);

    const reserva = new Evento(inicio, fin, vehiculo);
    garage.getReservas().add(reserva);

    const fechaConsulta = crearFecha(2024, 9, 10, 12, 0);

    const activa = Radar.flotaActiva(fechaConsulta, garage);

    expect(activa).toBe(1);
  });
});
