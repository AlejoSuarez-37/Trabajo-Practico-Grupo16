/*import Compacto from "../src/vehiculo/compacto";
import Sedan from "../src/vehiculo/sedán";
import SUV from "../src/vehiculo/suv";
import Evento from "../src/evento";
import Calendario from "../src/calendario";
import Garage from "../src/garage";
import Cliente from "../src/cliente";

const d = (s: string) => new Date(s);

describe("Cliente + Reservas", () => {
  test("reserva si el vehículo está disponible y genera evento", () => {
    const g = new Garage();
    const v = new Compacto("AAA111");
    g.agregarVehiculo(v);

    const c = new Cliente("Alejo");
    const eventos = new Set<Evento>();

    const ok = c.reservar(g, v, d("2025-11-01"), d("2025-11-03"), eventos);
    expect(ok).toBe(true);

    const libre = Calendario.estaDisponibleHoy(d("2025-11-02"), v, eventos);
    expect(libre).toBe(false);

    const existe = Array.from(eventos).some(e =>
      e.getVehiculo() === v &&
      e.getFechaInicio().getTime() === d("2025-11-01").getTime() &&
      e.getFechaFin().getTime() === d("2025-11-03").getTime()
    );
    expect(existe).toBe(true);
  });

  test("impide reservar dos veces fechas solapadas para el mismo vehículo", () => {
    const g = new Garage();
    const v = new Sedan("BBB222");
    g.agregarVehiculo(v);
    const c1 = new Cliente("Alejo");
    const c2 = new Cliente("Luis");
    const eventos = new Set<Evento>();

    expect(c1.reservar(g, v, d("2025-12-01"), d("2025-12-05"), eventos)).toBe(true);
    // Se solapa del 3 al 6 -> debería rechazar
    expect(c2.reservar(g, v, d("2025-12-03"), d("2025-12-06"), eventos)).toBe(false);
  });

  test("calcula costo total según el vehículo seleccionado", () => {
    const g = new Garage();
    const suv = new SUV("CCC333");
    g.agregarVehiculo(suv);
    const c = new Cliente("Alejo");
    const eventos = new Set<Evento>();


    const ok = c.reservar(g, suv, d("2026-01-10"), d("2026-01-12"), eventos, 550);
    expect(ok).toBe(true);

    const costo = c.calcularCosto(suv, d("2026-01-10"), d("2026-01-12"), 550);
    expect(costo).toBeCloseTo(297.5);
  });

  test("devolver vehículo libera la fecha", () => {
    const g = new Garage();
    const v = new Compacto("AAA111");
    g.agregarVehiculo(v);
    const c = new Cliente("Alejo");
    const eventos = new Set<Evento>();

    expect(c.reservar(g, v, d("2025-11-10"), d("2025-11-12"), eventos)).toBe(true);

    expect(Calendario.estaDisponibleHoy(d("2025-11-11"), v, eventos)).toBe(false);

    const devuelto = c.devolverVehiculo(g, v, eventos);
    expect(devuelto).toBe(true);

    expect(Calendario.estaDisponibleHoy(d("2025-11-11"), v, eventos)).toBe(true);
  });
});
*/