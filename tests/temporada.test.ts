import TemporadaAlta from "../src/temporada/temporadaAlta";
import TemporadaMedia from "../src/temporada/temporadaMedia";
import TemporadaBaja from "../src/temporada/temporadaBaja";
import { Temporada } from "../src/temporada/temporada";

describe("Clases de Temporada", () => {

  const aplicarTemporada = (precioBase: number, temporada: Temporada): number => {
    return precioBase + precioBase * temporada.modificador;
  };

  describe("TemporadaAlta", () => {
    test("tiene un modificador de 0.2", () => {
      const temporada = new TemporadaAlta();

      expect(temporada.modificador).toBe(0.2);
    });

    test("aumenta el precio base un 20%", () => {
      const temporada = new TemporadaAlta();
      const precioBase = 1000;

      const precioFinal = aplicarTemporada(precioBase, temporada);

      expect(precioFinal).toBe(1200); // 1000 + 20%
    });
  });

  describe("TemporadaMedia", () => {
    test("tiene un modificador de 0", () => {
      const temporada = new TemporadaMedia();

      expect(temporada.modificador).toBe(0);
    });

    test("no modifica el precio base", () => {
      const temporada = new TemporadaMedia();
      const precioBase = 1000;

      const precioFinal = aplicarTemporada(precioBase, temporada);

      expect(precioFinal).toBe(1000);
    });
  });

  describe("TemporadaBaja", () => {
    test("tiene un modificador de -0.1", () => {
      const temporada = new TemporadaBaja();

      expect(temporada.modificador).toBe(-0.1);
    });

    test("reduce el precio base un 10%", () => {
      const temporada = new TemporadaBaja();
      const precioBase = 1000;

      const precioFinal = aplicarTemporada(precioBase, temporada);

      expect(precioFinal).toBe(900);
    });
  });
});
