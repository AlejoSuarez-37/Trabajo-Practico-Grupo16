import Compacto from "../src/vehiculo/compacto"
import Garage from "../src/garage"

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
        gar.reservar(v1,new Date(2024,10,10),new Date(2024,10,15),100);
        expect(v1.getRegRes().getRegistro().size).toBe(1);
    });
    it("mantener", () => {
        gar.comprarVehiculo(v1);
        gar.mantener(v1,new Date(2024,10,10),new Date(2024,10,15));
        expect(v1.getRegMan().getRegistro().size).toBe(1);
    });
    it("", () => {
        gar.comprarVehiculo(v1);
        gar.reservar(v1,new Date(2024,10,10),new Date(2024,10,15),100);
        gar.reservar(v1,new Date(2024,10,20),new Date(2024,10,25),100);
        gar.mantener(v1,new Date(2024,10,1),new Date(2024,10,3));
    })
})