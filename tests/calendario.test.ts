import Calendario from "../src/check/calendario";
import Evento from "../src/evento";
import Compacto from "../src/vehiculo/compacto";

describe("Calendario.revisarCalendario", () => {
  const crearFecha = (anio: number, mes: number, dia: number) =>
    new Date(anio, mes - 1, dia);

  test("devuelve true cuando no haya eventos cargados", () => {
    const vehiculo = new Compacto("AAA111");
    const eventos = new Set<Evento>();

    const nuevoEvento = new Evento(
      crearFecha(2024, 1, 10),
      crearFecha(2024, 1, 15),
      vehiculo
    );

    const disponible = Calendario.revisarCalendario(nuevoEvento, eventos);

    expect(disponible).toBe(true);
  });

  test("devuelve true si los eventos existentes pertenecen a otro vehiculo", () => {
    const vehiculo1 = new Compacto("AAA111");
    const vehiculo2 = new Compacto("BBB222");

    const eventos = new Set<Evento>();
    eventos.add(
      new Evento(
        crearFecha(2024, 1, 10),
        crearFecha(2024, 1, 15),
        vehiculo1
      )
    );

    const nuevoEvento = new Evento(
      crearFecha(2024, 1, 12),
      crearFecha(2024, 1, 14),
      vehiculo2
    );

    const disponible = Calendario.revisarCalendario(nuevoEvento, eventos);

    expect(disponible).toBe(true);
  });

  test("devuelve false cuando el nuevo evento se superponga con uno que ya existe", () => {
    const vehiculo = new Compacto("AAA111");

    const eventos = new Set<Evento>();
    eventos.add(
      new Evento(
        crearFecha(2024, 1, 10),
        crearFecha(2024, 1, 15),
        vehiculo
      )
    );

    const nuevoEvento = new Evento(
      crearFecha(2024, 1, 12),
      crearFecha(2024, 1, 14),
      vehiculo
    );

    const disponible = Calendario.revisarCalendario(nuevoEvento, eventos);

    expect(disponible).toBe(false);
  });

  test("si hay colision cuando el nuevo evento empieza exactamente el mismo día que termina otro", () => {
    const vehiculo = new Compacto("AAA111");

    const eventos = new Set<Evento>();
    eventos.add(
      new Evento(
        crearFecha(2024, 1, 10),
        crearFecha(2024, 1, 15),
        vehiculo
      )
    );

    const nuevoEvento = new Evento(
      crearFecha(2024, 1, 15),
      crearFecha(2024, 1, 20),
      vehiculo
    );

    const disponible = Calendario.revisarCalendario(nuevoEvento, eventos);

    expect(disponible).toBe(false);
  });

  test("no hay colision cuando el nuevo evento empieza después de que termine el anterior", () => {
    const vehiculo = new Compacto("AAA111");

    const eventos = new Set<Evento>();
    eventos.add(
      new Evento(
        crearFecha(2024, 1, 10),
        crearFecha(2024, 1, 15),
        vehiculo
      )
    );

    const nuevoEvento = new Evento(
      crearFecha(2024, 1, 16),
      crearFecha(2024, 1, 20),
      vehiculo
    );

    const disponible = Calendario.revisarCalendario(nuevoEvento, eventos);

    expect(disponible).toBe(true);
  });
});

describe("Calendario.estaDisponibleHoy", () => {
  const crearFecha = (anio: number, mes: number, dia: number) =>
    new Date(anio, mes - 1, dia);

  test("devuelve true si el vehiculo no tiene eventos para esa fecha", () => {
    const vehiculo = new Compacto("AAA111");
    const eventos = new Set<Evento>();

    const fechaConsulta = crearFecha(2024, 2, 1);

    const disponible = Calendario.estaDisponibleHoy(
      fechaConsulta,
      vehiculo,
      eventos
    );

    expect(disponible).toBe(true);
  });

  test("devuelve false si la fecha esta dentro de un evento del mismo vehiculo", () => {
    const vehiculo = new Compacto("AAA111");
    const eventos = new Set<Evento>();

    eventos.add(
      new Evento(
        crearFecha(2024, 2, 1),
        crearFecha(2024, 2, 5),
        vehiculo
      )
    );

    const fechaConsulta = crearFecha(2024, 2, 3);

    const disponible = Calendario.estaDisponibleHoy(
      fechaConsulta,
      vehiculo,
      eventos
    );

    expect(disponible).toBe(false);
  });

  test("devuelve true si hay eventos en esa fecha pero de otro vehiculo", () => {
    const vehiculo1 = new Compacto("AAA111");
    const vehiculo2 = new Compacto("BBB222");
    const eventos = new Set<Evento>();

    eventos.add(
      new Evento(
        crearFecha(2024, 2, 1),
        crearFecha(2024, 2, 5),
        vehiculo1
      )
    );

    const fechaConsulta = crearFecha(2024, 2, 3);

    const disponible = Calendario.estaDisponibleHoy(
      fechaConsulta,
      vehiculo2,
      eventos
    );

    expect(disponible).toBe(true);
  });
});
