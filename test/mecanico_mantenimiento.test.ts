/*import Compacto from "../src/vehiculo/compacto";
import Evento from "../src/evento";
import Calendario from "../src/calendario";
import Mecanico from "../src/mecanico";

const d = (s: string) => new Date(s);

describe("Mecánico y Mantenimiento", () => {
  test("programa mantenimiento y bloquea la disponibilidad en el rango", () => {
    const v = new Compacto("AAA111");
    const eventos = new Set<Evento>();
    const mec = new Mecanico("Taller 1");

    const ok = mec.realizarMantenimiento(v, d("2025-08-10"), d("2025-08-12"), eventos);
    expect(ok).toBe(true);

    expect(Calendario.estaDisponibleHoy(d("2025-08-11"), v, eventos)).toBe(false);
  });

  test("rechaza mantenimiento que se solapa con una reserva existente", () => {
    const v = new Compacto("AAA111");
    const eventos = new Set<Evento>();

    // Simulo una reserva existente
    eventos.add(new Evento(d("2025-09-01"), d("2025-09-03"), v, 1));

    const mec = new Mecanico("Taller 1");
    // Se solapa del 2 al 4 -> debería rechazar
    const ok = mec.realizarMantenimiento(v, d("2025-09-02"), d("2025-09-04"), eventos);
    expect(ok).toBe(false);
  });

  test("rechaza mantenimiento con fechas inválidas (inicio > fin)", () => {
    const v = new Compacto("AAA111");
    const eventos = new Set<Evento>();
    const mec = new Mecanico("Taller 1");

    const ok = mec.realizarMantenimiento(v, d("2025-10-05"), d("2025-10-04"), eventos);
    expect(ok).toBe(false);
  });
});
*/