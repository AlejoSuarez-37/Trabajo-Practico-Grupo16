/*import Compacto from "../src/vehiculo/compacto";
import Sedan from "../src/vehiculo/sedán";
import SUV from "../src/vehiculo/suv";
import Garage from "../src/garage";
import Calendario from "../src/calendario";
import Evento from "../src/evento";

const d = (s: string) => new Date(s);

describe("Garage", () => {
  test("agrega vehículos y evita duplicados por matrícula", () => {
    const g = new Garage();
    const a = new Compacto("AAA111");
    const b = new Compacto("AAA111"); // misma matrícula

    const ok1 = g.agregarVehiculo(a);
    const ok2 = g.agregarVehiculo(b); // debe fallar por duplicado

    expect(ok1).toBe(true);
    expect(ok2).toBe(false);
  });

  test("devuelve disponibles por fecha (sin solapamientos)", () => {
    const g = new Garage();
    const v1 = new Compacto("AAA111");
    const v2 = new Sedan("BBB222");
    const v3 = new SUV("CCC333");
    g.agregarVehiculo(v1);
    g.agregarVehiculo(v2);
    g.agregarVehiculo(v3);

    // Hay una reserva existente de v2 del 1 al 3
    const eventos = new Set<Evento>([
      new Evento(d("2025-10-01"), d("2025-10-03"), v2, 1),
    ]);

    const libres = g.obtenerDisponibles(d("2025-10-04"), d("2025-10-05"), eventos);
    expect(libres).toEqual(expect.arrayContaining([v1, v2, v3]));
    expect(libres.length).toBe(3);

    // Si busco del 2 al 4, v2 no debería estar
    const libres2 = g.obtenerDisponibles(d("2025-10-02"), d("2025-10-04"), eventos);
    expect(libres2).toEqual(expect.arrayContaining([v1, v3]));
    expect(libres2).not.toEqual(expect.arrayContaining([v2]));
  });

  test("filtra disponibles por tipo (ej. solo Compacto)", () => {
    const g = new Garage();
    const v1 = new Compacto("AAA111");
    const v2 = new Sedan("BBB222");
    g.agregarVehiculo(v1);
    g.agregarVehiculo(v2);

    const eventos = new Set<Evento>();
    const compactos = g.obtenerDisponiblesPorTipo("Compacto", d("2025-10-10"), d("2025-10-12"), eventos);
    expect(compactos).toEqual([v1]);
  });
});
*/