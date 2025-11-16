import Estado from "../src/estado/estado";
import Disponible from "../src/estado/disponible"
import TemporadaMedia from "../src/temporada/temporadaMedia";
import Compacto from "../src/vehiculo/compacto";
import Sedan from "../src/vehiculo/sedán";
import SUV from "../src/vehiculo/suv";
import Sedán from "../src/vehiculo/sedán";


describe("Vehículos - creación", () => {
  it("crea Compacto con matrícula", () => {
    const v = new Compacto("ABC123");
    expect(v.getMatricula()).toBe("ABC123");
  });
  it("crea Sedán con matrícula", () => {
    const v = new Sedan("DEF456");
    expect(v.getMatricula()).toBe("DEF456");
  });
  it("crea SUV con matrícula", () => {
    const v = new SUV("GHI789");
    expect(v.getMatricula()).toBe("GHI789");
  });
});

describe("Tarifas alquiler", () => {
  it("Compacto: $30/día y solo cobra $0.15/km por KILOMETRO sobre 100 km por día", () => {
    const v = new Compacto("AAA111");
    const total = v.obtenerTarifaReserva(1,120,new TemporadaMedia());
    expect(total).toBe(48);
  });

  it("Compacto: 2 días, 150 km (promedio 75km/día) no aplica cargo por km", () => {
    const v = new Compacto("AAA111");
    expect(v.obtenerTarifaReserva(2,150,new TemporadaMedia())).toBe(60);
  });

  it("Sedán: $50/día + $0.20 por km, sin límite diario", () => {
    const v = new Sedan("BBB222");
    expect(v.obtenerTarifaReserva(3,200,new TemporadaMedia())).toBe(3*50 + 0.20*200);
  });

  it("SUV: $80/día + $15/día de seguro. Si supera 500 km en total, cobra $0.25 sobre el KILOMETROS", () => {
    const v = new SUV("CCC333");
    const total = v.obtenerTarifaReserva(3,550,new TemporadaMedia());
    expect(total).toBeCloseTo(422.5);
  });

  it("SUV: 2 días, 400 km (no supera 500 km), no cobra por km", () => {
    const v = new SUV("CCC333");
    const total = v.obtenerTarifaReserva(2,400,new TemporadaMedia());
    expect(total).toBe(2*80 + 2*15);
  });
});

describe("Tarifas mantenimento", () => {
  it("Compacto: 3 dias de mantenimiento", () => {
    const v = new Compacto("AAA111");
    expect(v.obtenerTarifaMantenimiento(3)).toBe(3000);
  })
  it("SUV: 5 dias de mantenimiento", () => {
    const v = new SUV("AAA111");
    expect(v.obtenerTarifaMantenimiento(5)).toBe(5000);
  })
  it("Sedán: 7 dias de mantenimiento", () => {
    const v = new Sedán("AAA111");
    expect(v.obtenerTarifaMantenimiento(7)).toBe(7000);
  })
});
