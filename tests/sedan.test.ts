import Sedan from "../src/vehiculo/sedán"
import Vehiculo from "../src/vehiculo/vehiculo";



describe("Sedan", () => {
  test("Se observara si el constructor de Sedan crea un Sedan es unna instancia de comnpacto", () => {
    const SedanTest = new Sedan("AAA111");

    expect(SedanTest).toBeInstanceOf(Sedan);

  });
  test("Se obvservara si Sedan hereda de vehiculo",()=>{

    const SedanTest = new Sedan("AAA111");

    expect(SedanTest).toBeInstanceOf(Vehiculo);

  });
  test("Se observara si la instancia de Sedan retorna su matricula",()=>{

    const SedanTest = new Sedan("AAA111");

    expect(SedanTest.getMatricula()).toBe("AAA111");

  });
  test("Se observa si el atributo necesitaLimpieza esta en false por defecto",()=>{
    const SedanTest = new Sedan("AAA111");

    expect(SedanTest["necesitaLimpieza"]).toEqual(false);
  });
  test("Se obseva si el metodo setNecesitaLimpieza cambia el estado pòr defecto de false a true",()=>{


    const SedanTestDos = new Sedan("AAA222");

    SedanTestDos.setNecesitaLimpieza(true);

    expect(SedanTestDos["necesitaLimpieza"]).toEqual(true);
  });
  test("Se obseva si el metodo getNecesitaLimpieza devuelve el estado de necesitaLimpieza",()=>{

    const SedanTestTres = new Sedan("AAA333");

    SedanTestTres["necesitaLimpieza"] = false;

    expect(SedanTestTres["necesitaLimpieza"]).toEqual(false);
  });
  test("comparamos que la tarifa de mantenimiento sea 50 teniendo en cuenta 20 dias para esta prueba",()=>{

    const SedanTest = new Sedan("AAA111");    
    let dias:number = 20;
    let tarifaEsperada:number = 1000;
    expect(SedanTest.obtenerTarifaMantenimiento(dias)).toBe(tarifaEsperada);

  });
    test("comprobamos que la tarifa base con mayor o igual de 20 dias y 10km es 1002",()=>{
    
    const SedanTest = new Sedan("AAA111");
    let dias:number = 20;
    let kilometrosTotales:number = 10;
    let tarifaEsperada:number = 1002;

    expect(SedanTest.obtenerTarifaReserva(dias,kilometrosTotales)).toBe(tarifaEsperada);

  });

});
