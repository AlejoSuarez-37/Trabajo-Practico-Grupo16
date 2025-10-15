import Compacto from "../src/vehiculo/compacto";
import Sedan from "../src/vehiculo/sedán";
import SUV from "../src/vehiculo/suv";

describe("Vehículos: construcción básica", () => {
  test("Compacto mantiene matrícula", () => {
    const v = new Compacto("AAA111");
    expect(v.getMatricula()).toBe("AAA111");
  });
  test("Sedán mantiene matrícula", () => {
    const v = new Sedan("BBB222");
    expect(v.getMatricula()).toBe("BBB222");
  });
  test("SUV mantiene matrícula", () => {
    const v = new SUV("CCC333");
    expect(v.getMatricula()).toBe("CCC333");
  });
});

describe("Tarifas de reserva (documentadas por consigna)", () => {
  test("Compacto: base 30/día; cargo 0.15 por EXCESO sobre 100 km/día", () => {
    const v = new Compacto("AAA111");
    const total = v.obtenerTarifaReserva(1, 120);
    expect(total).toBe(33);
  });

  test("Compacto: 2 días, 150 km (promedio 75/día) no aplica km", () => {
    const v = new Compacto("AAA111");
    expect(v.obtenerTarifaReserva(2, 150)).toBe(60);
  });

  test("Sedán: 50/día + 0.20 por km (sin umbral)", () => {
    const v = new Sedan("BBB222");
    expect(v.obtenerTarifaReserva(3, 200)).toBe(3 * 50 + 0.20 * 200);
  });

  test("SUV: 80/día + 15/día; si supera 500 km, cobra 0.25 por EXCESO", () => {
    const v = new SUV("CCC333");
    // 
    const total = v.obtenerTarifaReserva(3, 550);
    expect(total).toBeCloseTo(297.5);
  });

  test("SUV: 2 días, 400 km (no supera 500 km) no cobra por km", () => {
    const v = new SUV("CCC333");
    expect(v.obtenerTarifaReserva(2, 400)).toBe(2 * 80 + 2 * 15);
  });
});

describe("Tarifas de mantenimiento", () => {
  test("Compacto: 20/día", () => {
    const v = new Compacto("AAA111");
    expect(v.obtenerTarifaMantenimiento(5)).toBe(100);
  });
  test("Sedán: 50/día", () => {
    const v = new Sedan("BBB222");
    expect(v.obtenerTarifaMantenimiento(2)).toBe(100);
  });
  test("SUV: 30/día", () => {
    const v = new SUV("CCC333");
    expect(v.obtenerTarifaMantenimiento(3)).toBe(90);
  });
});
