import Evento from "../src/evento";
import Calendario from "../src/calendario";
import Compacto from "../src/vehiculo/compacto";

function d(s: string){ return new Date(s); }

describe("Evento", () => {
  test("calcula cantDias con ceil sobre diferencia de fechas", () => {
    const v = new Compacto("AAA111");
    const e = new Evento(d("2025-10-01"), d("2025-10-03"), v, 10);
    expect(e.getCantDias()).toBe(2);

    const e2 = new Evento(new Date("2025-10-01T10:00:00Z"), new Date("2025-10-02T01:00:00Z"), v, 11);
    expect(e2.getCantDias()).toBe(1);
  });
});

describe("Calendario.revisarCalendario", () => {
  test("permite reserva si no hay solapamiento", () => {
    const v = new Compacto("AAA111");
    const eventos = new Set<Evento>([
      new Evento(d("2025-10-01"), d("2025-10-03"), v, 1),
    ]);
    const ok = Calendario.revisarCalendario(d("2025-10-04"), d("2025-10-05"), v, eventos);
    expect(ok).toBe(true);
  });

  test("rechaza reserva si fechas se solapan", () => {
    const v = new Compacto("AAA111");
    const eventos = new Set<Evento>([
      new Evento(d("2025-10-01"), d("2025-10-03"), v, 1),
    ]);
    const ok = Calendario.revisarCalendario(d("2025-10-02"), d("2025-10-04"), v, eventos);
    expect(ok).toBe(false);
  });

  test("rechaza si fechaInicio > fechaFin", () => {
    const v = new Compacto("AAA111");
    const eventos = new Set<Evento>();
    const ok = Calendario.revisarCalendario(d("2025-10-10"), d("2025-10-09"), v, eventos);
    expect(ok).toBe(false);
  });
});

describe("Calendario.estaDisponibleHoy", () => {
  test("devuelve true si fecha esta fuera de cualquier evento del vehiculo", () => {
    const v = new Compacto("AAA111");
    const eventos = new Set<Evento>([
      new Evento(d("2025-10-01"), d("2025-10-03"), v, 1),
    ]);
    const libre = Calendario.estaDisponibleHoy(d("2025-10-05"), v, eventos);
    expect(libre).toBe(true);
  });

  test("devuelve false si fecha cae dentro de un evento del vehiculo", () => {
    const v = new Compacto("AAA111");
    const eventos = new Set<Evento>([
      new Evento(d("2025-10-01"), d("2025-10-03"), v, 1),
    ]);
    const libre = Calendario.estaDisponibleHoy(d("2025-10-02"), v, eventos);
    expect(libre).toBe(false);
  });
});

