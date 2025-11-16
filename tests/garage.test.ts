import Disponible from "../src/estado/disponible";
import Estado from "../src/estado/estado";
import Compacto from "../src/vehiculo/compacto";
import Sedán from "../src/vehiculo/sedán";
import SUV from "../src/vehiculo/suv";
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
    })
})