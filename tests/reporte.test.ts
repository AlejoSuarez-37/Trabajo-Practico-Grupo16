import Garage from "../src/garage"
import Compacto from "../src/vehiculo/compacto";
import VehiculoMasAlquilado from "../src/reporte/vehiculoMasAlquilado"
import VehiculoMenosAlquilado from "../src/reporte/vehiculoMenosAlquilado"

describe("tests sobre reportes", () => {
    let gar = new Garage();
    let v1 = new Compacto("123");
    let v2 = new Compacto("321");
    let v3 = new Compacto("567");
    beforeEach(() => {
        gar = new Garage();
        v1 = new Compacto("123");
        v2 = new Compacto("321");
        v3 = new Compacto("567");
        gar.comprarVehiculo(v1);
        gar.comprarVehiculo(v2);
        gar.comprarVehiculo(v3);
        gar.reservar(v1,new Date(2024,10,1),new Date(2024,10,5),100);
        gar.reservar(v1,new Date(2024,10,10),new Date(2024,10,15),100);
        gar.reservar(v2,new Date(2024,10,1),new Date(2024,10,5),100);
    });
    it("VehiculoMasAlquilado", () => {
        let repo = new VehiculoMasAlquilado();
        expect(repo.analizar(gar)).toBe("123");
    });
    it("VehiculoMasAlquilado", () => {
        let repo = new VehiculoMenosAlquilado();
        expect(repo.analizar(gar)).toBe("567");
    });
})