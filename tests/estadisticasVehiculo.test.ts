import Disponible from "../src/estado/disponible";
import EnMantenimiento from "../src/estado/enMantenimiento";
import EnReserva from "../src/estado/enReserva";
import Estado from "../src/estado/estado";
import TemporadaMedia from "../src/temporada/temporadaMedia";
import Compacto from "../src/vehiculo/compacto"


describe("Manipulacion de las estadisticas de un vehiculo", () => {
    let v = new Compacto("1234");
    beforeEach(() => {v = new Compacto("1234")});

    it("Sumar un alquiler", () => {
        v.sumarAlquiler();
        expect(v.getAlquileres()).toBe(1);
    });
    it("sumar un alquiler para mantenimiento", () => {
        v.aumentarAlquileresMantenimiento();
        expect(v.getAlquileresDesdeMantenimiento()).toBe(1);
    });
    it("Sumar y restar Rentabilidad", () => {
        v.sumarRentabilidad(30);
        v.restarRentabilidad(20);
        expect(v.getRentabilidad()).toBe(10);
    });
    it("actualizar tablero con parametros que requieren un mantenimiento", () => {
        v.actualizarTableroReserva(new Date(2026,10,10),new Date(2026,10,15),10001,new TemporadaMedia());
        expect(v.getEstado()).toBeInstanceOf(EnMantenimiento);
    });
    it("actualizar tablero con parametros que no requieren un mantenimiento", () => {
        v.actualizarTableroReserva(new Date(),new Date(),10,new TemporadaMedia());
        expect(v.getEstado()).toBeInstanceOf(Disponible);
    });
    it("Funcion logica de disparador de mantenimiento", () => {
        v.sumarKilometrosRecorridos(20000);
        expect(v.necesitaMantenimiento(new Date())).toBe(true);
    });
    it("actualizar tablero mantenimiento", () => {
        v.actualizarTableroMantenimiento(new Date(2024,10,10), new Date(2024,10,15));
        expect(v.getRentabilidad()).toBe(-5000);
    });
    it("Ensuciar el vehiculo", () => {
        v.ensuciar();
        expect(v.getNecesitaLimpieza()).toBe(true);
    });
    it("Limpiar el vehiculo", () => {
        v.limpiar();
        expect(v.getNecesitaLimpieza()).toBe(false)
    });
    it("Resetear el tablero", () => {
        v.aumentarAlquileresMantenimiento();
        v.resetTablero(new Date());
        expect(v.getAlquileresDesdeMantenimiento()).toBe(0);
    });
})