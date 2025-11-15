import OperacionesInvalidas from "../src/check/operacionesInvalidas";
import Garage from "../src/garage";
import Evento from "../src/evento";
import Compacto from "../src/vehiculo/compacto";

describe("OperacionesInvalidas", () => {
  const crearFecha = (anio: number, mes: number, dia: number) =>
    new Date(anio, mes - 1, dia);

  test("estaDisponible devuelve true si no hay reservas ni mantenimientos que se superpongan", () => {
    const garage = new Garage();
    const vehiculo = new Compacto("AAA111");

    const nuevoEvento = new Evento(
      crearFecha(2024, 4, 10),
      crearFecha(2024, 4, 15),
      vehiculo
    );

    const disponible = OperacionesInvalidas.estaDisponible(nuevoEvento, garage);

    expect(disponible).toBe(true);
  });

  test("estaDisponible devuelve false si hay una reserva que se superpone", () => {
    const garage = new Garage();
    const vehiculo = new Compacto("AAA111");

    const reservaExistente = new Evento(
      crearFecha(2024, 4, 10),
      crearFecha(2024, 4, 15),
      vehiculo
    );
    garage.getReservas().add(reservaExistente);

    const nuevoEvento = new Evento(
      crearFecha(2024, 4, 12),
      crearFecha(2024, 4, 14),
      vehiculo
    );

    const disponible = OperacionesInvalidas.estaDisponible(nuevoEvento, garage);

    expect(disponible).toBe(false);
  });

  test("estaDisponibleHoy devuelve false si el vehiculo esta reservado o en mantenimiento ese dia", () => {
    const garage = new Garage();
    const vehiculo = new Compacto("AAA111");

    const fechaInicio = crearFecha(2024, 5, 1);
    const fechaFin = crearFecha(2024, 5, 5);
    const reserva = new Evento(fechaInicio, fechaFin, vehiculo);

    garage.getReservas().add(reserva);

    const fechaConsulta = crearFecha(2024, 5, 3);

    const disponible = OperacionesInvalidas.estaDisponibleHoy(
      fechaConsulta,
      vehiculo,
      garage
    );

    expect(disponible).toBe(false);
  });

  test("vehiculoEnStock devuelve true si el vehiculo esta en el garage", () => {
    const garage = new Garage();
    const vehiculo = new Compacto("AAA111");

    garage.comprarVehiculo(vehiculo);

    expect(OperacionesInvalidas.vehiculoEnStock(vehiculo, garage)).toBe(true);
  });

  test("vehiculoEnStock devuelve false si el vehiculo no esta en el garage", () => {
    const garage = new Garage();
    const vehiculo = new Compacto("AAA111");

    expect(OperacionesInvalidas.vehiculoEnStock(vehiculo, garage)).toBe(false);
  });

  test("reservaEnReservas devuelve true cuando el evento esta en las reservas", () => {
    const garage = new Garage();
    const vehiculo = new Compacto("AAA111");

    const evento = new Evento(
      crearFecha(2024, 6, 1),
      crearFecha(2024, 6, 3),
      vehiculo
    );

    garage.getReservas().add(evento);

    expect(OperacionesInvalidas.reservaEnReservas(garage, evento)).toBe(true);
  });

  test("reservaEnReservas devuelve false cuando el evento no esta en las reservas", () => {
    const garage = new Garage();
    const vehiculo = new Compacto("AAA111");

    const evento = new Evento(
      crearFecha(2024, 6, 1),
      crearFecha(2024, 6, 3),
      vehiculo
    );

    expect(OperacionesInvalidas.reservaEnReservas(garage, evento)).toBe(false);
  });

  test("eventoValido devuelve true si fechaFin es igual o despues a fechaInicio", () => {
    const vehiculo = new Compacto("AAA111");

    const evento = new Evento(
      crearFecha(2024, 7, 1),
      crearFecha(2024, 7, 5),
      vehiculo
    );

    expect(OperacionesInvalidas.eventoValido(evento)).toBe(true);
  });

  test("eventoValido devuelve false si fechaFin es anterior a fechaInicio", () => {
    const vehiculo = new Compacto("AAA111");

    const eventoInvalido = new Evento(
      crearFecha(2024, 7, 10),
      crearFecha(2024, 7, 5),
      vehiculo
    );

    expect(OperacionesInvalidas.eventoValido(eventoInvalido)).toBe(false);
  });
});
