import Compacto from "../src/vehiculo/compacto"
import Garage from "../src/garage"
import EnReserva from "../src/estado/enReserva";
import EnMantenimiento from "../src/estado/enMantenimiento";
import Disponible from "../src/estado/disponible";

describe("tests sobre el garage", () => {
    let v1 = new Compacto("1234");
    let gar = new Garage();
    beforeEach(() => {
        v1 = new Compacto("1234"),
        gar = new Garage()
    });
    
    it("comprarVehiculo", () => {
        gar.comprarVehiculo(v1);
        expect(gar.getVehiculos().size).toBe(1);
    });
    it("reservar", () => {
        gar.comprarVehiculo(v1);
        gar.reservar(v1,new Date(2026,10,10),new Date(2026,10,15),100);
        expect(v1.getEstado()).toBeInstanceOf(EnReserva);
    });
    it("mantener", () => {
        gar.comprarVehiculo(v1);
        gar.mantener(v1,new Date(2026,10,10),new Date(2026,10,15));
        expect(v1.getEstado()).toBeInstanceOf(EnMantenimiento);
    });
    it("devolver", () => {
        gar.comprarVehiculo(v1);
        gar.reservar(v1,new Date(2026,10,10),new Date(2026,10,15),100);
        gar.devolver(v1);
        expect(v1.getEstado()).toBeInstanceOf(Disponible);
    });
})