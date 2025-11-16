import Disponible from "../src/estado/disponible";
import EnMantenimiento from "../src/estado/enMantenimiento";
import EnReserva from "../src/estado/enReserva";
import Estado from "../src/estado/estado";
import Compacto from "../src/vehiculo/compacto";

describe("tests sobre clase estado y sus hijas", () => {
    let v = new Compacto("1234");
    beforeEach(() => {v = new Compacto("1234")});

    it("reservar", () => {
        v.reservar(v,new Date(2024,10,10),new Date(2024,10,15));
        expect(() => v.colisiona(new Date(2024,10,13),new Date(2024,10,13))).toThrow(new Error("El vehiculo esta en reserva."));
    });
    it("mantener", () => {
        v.mantener(v,new Date(2024,10,17),new Date(2024,15,19));
        expect(() => v.colisiona(new Date(2024,15,19),new Date(2024,15,19))).toThrow(new Error("El vehiculo esta en mantenimiento."));
    });
    it("cambio de estado en secuencia sin errores", () => {
        v.reservar(v,new Date(2024,10,10),new Date(2024,10,12));
        v.mantener(v,new Date(2024,10,15),new Date(2024,10,20));
        expect(() => v.colisiona(new Date(2024,10,16),new Date(2024,10,16))).toThrow(new Error("El vehiculo esta en mantenimiento."));
    });
})