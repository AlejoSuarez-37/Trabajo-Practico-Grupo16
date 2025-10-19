import Compacto from "../src/vehiculo/compacto"

describe("compacto", () => {
  test("compactotest es unna instancia de comnpacto", () => {
    const compactoTest = new Compacto("AAA111");
    
    expect(compactoTest).toBeInstanceOf(Compacto);

  });
});
