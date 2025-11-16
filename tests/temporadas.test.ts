import TemporadaMedia from "../src/temporada/temporadaMedia";
import TemporadaBaja from "../src/temporada/temporadaBaja";
import TemporadaAlta from "../src/temporada/temporadaAlta"
import Compacto from "../src/vehiculo/compacto";

describe("tests temporadas", () => {
    let v = new Compacto("1234");
    beforeEach(() => {v = new Compacto("1234")});

    it("calculo de tarifa con temporada media", () => {
        expect(v.obtenerTarifaReserva(10,100,new TemporadaMedia())).toBe(300);
    });
    it("calculo de tarifa con temporada baja", () => {
        expect(v.obtenerTarifaReserva(10,100,new TemporadaBaja())).toBe(270);
    });
    it("calculo de tarifa con temporada alta", () => {
        expect(v.obtenerTarifaReserva(10,100,new TemporadaAlta())).toBe(360);
    });
})