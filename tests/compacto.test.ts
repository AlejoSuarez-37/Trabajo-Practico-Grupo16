import Compacto from "../src/vehiculo/compacto"
import Vehiculo from "../src/vehiculo/vehiculo";
const compactoTest = new Compacto("AAA111");



describe("compacto", () => {
  test("Se observara si el constructor de compacto crea un compacto es unna instancia de comnpacto", () => {

    expect(compactoTest).toBeInstanceOf(Compacto);

  });
  test("Se obvservara si compacto hereda de vehiculo",()=>{

    expect(compactoTest).toBeInstanceOf(Vehiculo);

  });
  test("Se observara si la instancia de compacto retorna su matricula",()=>{

    expect(compactoTest.getMatricula()).toBe("AAA111");

  })
  test("Se observa si el atributo necesitaLimpieza esta en false por defecto",()=>{

    expect(compactoTest["necesitaLimpieza"]).toEqual(false);
  })
  test("Se obseva si el metodo setNecesitaLimpieza cambia el estado pòr defecto de false a true",()=>{
    const compactoTestDos = new Compacto("AAA222");

    compactoTestDos.setNecesitaLimpieza(true);

    expect(compactoTestDos["necesitaLimpieza"]).toEqual(true);
  })
    test("Se obseva si el metodo getNecesitaLimpieza devuelve el estado de necesitaLimpieza",()=>{
    const compactoTestTres = new Compacto("AAA333");

    compactoTestTres["necesitaLimpieza"] = false

    expect(compactoTestTres["necesitaLimpieza"]).toEqual(false);
  })
});
