import Compacto from "../src/vehiculo/compacto"
import Vehiculo from "../src/vehiculo/vehiculo";
const compactoTest = new Compacto("AAA111");
const compactoTestDos = new Compacto("AAA222");
const compactoTestTres = new Compacto("AAA333");


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


    compactoTestDos.setNecesitaLimpieza(true);

    expect(compactoTestDos["necesitaLimpieza"]).toEqual(true);
  })
  test("Se obseva si el metodo getNecesitaLimpieza devuelve el estado de necesitaLimpieza",()=>{

    compactoTestTres["necesitaLimpieza"] = false

    expect(compactoTestTres["necesitaLimpieza"]).toEqual(false);
  })
  test("comparamos que la tarifa de mantenimiento sea 20 teniendo en cuenta 20 dias para esta prueba",()=>{
    
    let dias:number = 20
    let tarifaEsperada:number = 400
    expect(compactoTest.obtenerTarifaMantenimiento(dias)).toBe(tarifaEsperada);

  })
});
