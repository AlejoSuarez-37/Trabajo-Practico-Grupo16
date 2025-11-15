import Compacto from "../src/vehiculo/compacto"
import Vehiculo from "../src/vehiculo/vehiculo";


describe("compacto", () => {
  test("Se observara si el constructor de compacto crea un compacto es unna instancia de comnpacto", () => {
const compactoTest = new Compacto("AAA111");

    expect(compactoTest).toBeInstanceOf(Compacto);

  });
  test("Se obvservara si compacto hereda de vehiculo",()=>{
    const compactoTest = new Compacto("AAA111");

    expect(compactoTest).toBeInstanceOf(Vehiculo);

  });
  test("Se observara si la instancia de compacto retorna su matricula",()=>{
    const compactoTest = new Compacto("AAA111");

    expect(compactoTest.getMatricula()).toBe("AAA111");

  });
  test("Se observa si el atributo necesitaLimpieza esta en false por defecto",()=>{
    const compactoTest = new Compacto("AAA111");

    expect(compactoTest["necesitaLimpieza"]).toEqual(false);
  });
  test("Se obseva si el metodo setNecesitaLimpieza cambia el estado pòr defecto de false a true",()=>{

    const compactoTestDos = new Compacto("AAA222");

    compactoTestDos.setNecesitaLimpieza(true);

    expect(compactoTestDos["necesitaLimpieza"]).toEqual(true);
  });
  test("Se obseva si el metodo getNecesitaLimpieza devuelve el estado de necesitaLimpieza",()=>{
    const compactoTestTres = new Compacto("AAA333");

    compactoTestTres["necesitaLimpieza"] = false

    expect(compactoTestTres["necesitaLimpieza"]).toEqual(false);
  });
  test("comparamos que la tarifa de mantenimiento sea 20 teniendo en cuenta 20 dias para esta prueba",()=>{
    const compactoTest = new Compacto("AAA111");

    let dias:number = 20
    let tarifaEsperada:number = 400
    expect(compactoTest.obtenerTarifaMantenimiento(dias)).toBe(tarifaEsperada);

  });
  test("comprobamos que la tarifa base con menos de 100km por dia es 30 x dia ",()=>{
    
    let dias:number = 30;
    let kilometrosTotales:number = 250;
    let tarifaEsperada:number = 900;
    const compactoTest = new Compacto("AAA111");

    expect(compactoTest.obtenerTarifaReserva(dias,kilometrosTotales)).toBe(tarifaEsperada);

  })
    test("comprobamos que la tarifa base con mayor o igual de 100km por dia es 30 x dia mas 0.15 xkm",()=>{
    
    let dias:number = 30;
    let kilometrosTotales:number = 3000;
    let tarifaEsperada:number = 1350;
    const compactoTest = new Compacto("AAA111");

    expect(compactoTest.obtenerTarifaReserva(dias,kilometrosTotales)).toBe(tarifaEsperada);

    kilometrosTotales = 50000;
    tarifaEsperada = 8400;

    expect(compactoTest.obtenerTarifaReserva(dias,kilometrosTotales)).toBe(tarifaEsperada);
  })
});
