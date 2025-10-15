import Compacto from "../src/vehiculo/compacto";
import Sedan from "../src/vehiculo/sedán";
import SUV from "../src/vehiculo/suv";

describe("Vehículos - creación", () => {
  test("crea Compacto con matrícula", () => {
    const v = new Compacto("ABC123");
    expect(v.getMatricula()).toBe("ABC123");
  });
  test("crea Sedán con matrícula", () => {
    const v = new Sedan("DEF456");
    expect(v.getMatricula()).toBe("DEF456");
  });
  test("crea SUV con matrícula", () => {
    const v = new SUV("GHI789");
    expect(v.getMatricula()).toBe("GHI789");
  });
});

describe("Tarifas según consigna", () => {
  test("Compacto: $30/día y solo cobra $0.15/km por EXCESO sobre 100 km por día", () => {
    const v = new Compacto("AAA111");
    const total = v.obtenerTarifaReserva(1, 120);
    expect(total).toBe(33);
  });

  test("Compacto: 2 días, 150 km (promedio 75km/día) no aplica cargo por km", () => {
    const v = new Compacto("AAA111");
    expect(v.obtenerTarifaReserva(2, 150)).toBe(60);
  });

  test("Sedán: $50/día + $0.20 por km, sin límite diario", () => {
    const v = new Sedan("BBB222");
    expect(v.obtenerTarifaReserva(3, 200)).toBe(3*50 + 0.20*200);
  });

  test("SUV: $80/día + $15/día de seguro. Si supera 500 km en total, cobra $0.25 SOLO sobre el EXCESO", () => {
    const v = new SUV("CCC333");
    const total = v.obtenerTarifaReserva(3, 550);
    expect(total).toBeCloseTo(297.5);
  });

  test("SUV: 2 días, 400 km (no supera 500 km), no cobra por km", () => {
    const v = new SUV("CCC333");
    const total = v.obtenerTarifaReserva(2, 400);
    expect(total).toBe(2*80 + 2*15);
  });
});
