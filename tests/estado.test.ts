import EnMantenimiento from "../src/estado/enMantenimiento";
import EnReserva from "../src/estado/enReserva";
import Compacto from "../src/vehiculo/compacto";

describe("tests sobre clase estado y sus hijas", () => {
    let v = new Compacto("1234");
    beforeEach(() => {v = new Compacto("1234")});

    it("reservar", () => {
        v.getEstado().reservar(new Date(2024,10,10),new Date(2024,10,15));
        expect(v.getEstado()).toBeInstanceOf(EnReserva);
    });
    it("mantener", () => {
        v.getEstado().mantener(new Date(2024,10,17),new Date(2024,15,19));
        expect(v.getEstado()).toBeInstanceOf(EnMantenimiento);
    });
    it("cambio de estado en secuencia sin errores", () => {
        v.getEstado().reservar(new Date(2024,10,10),new Date(2024,10,12));
        v.getEstado().mantener(new Date(2024,10,15),new Date(2024,10,20));
        expect(v.getEstado()).toBeInstanceOf(EnMantenimiento);
    });
    it("cambio de secuencia con errores", () => {
        v.getEstado().reservar(new Date(2024,10,10),new Date(2024,10,12));
        expect(() => v.getEstado().mantener(new Date(2024,10,10),new Date(2024,10,12))).toThrow(new Error("El vehiculo esta en reserva."));
    });
})