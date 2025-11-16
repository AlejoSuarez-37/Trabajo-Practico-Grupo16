import Disponible from "../src/estado/disponible";
import EnMantenimiento from "../src/estado/enMantenimiento";
import EnReserva from "../src/estado/enReserva";
import Compacto from "../src/vehiculo/compacto";

describe("tests sobre registros", () => {
    let v = new Compacto("1234");
    beforeEach(() => {v = new Compacto("1234")});

    it("sumar una reserva al registro", () => {
        v.getRegRes().getRegistro().add(new EnReserva(v));
        expect(v.getRegRes().getRegistro().size).toBe(1);
    });
    it("sumar un mantenimiento al registro", () => {
        v.getRegMan().getRegistro().add(new EnMantenimiento(v));
        expect(v.getRegMan().getRegistro().size).toBe(1);
    });
    it("sumar disponibles al registro", () => {
        v.getRegDis().getRegistro().add(new Disponible(v));
        expect(v.getRegDis().getRegistro().size).toBe(1);
    });
})