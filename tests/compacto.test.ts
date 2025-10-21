import Compacto from "../src/vehiculo/compacto"
import Vehiculo from "../src/vehiculo/vehiculo";
const compactoTest = new Compacto("AAA111");



describe("compacto", () => {
  test("Se observara si el constructor de compacto crea un compacto es unna instancia de comnpacto", () => {

    
    expect(compactoTest).toBeInstanceOf(Compacto);

  });
  test("Se obvservara si compacto hereda de vehiculo",()=>{
    expect(compactoTest).toBeInstanceOf(Vehiculo)
  });
});
