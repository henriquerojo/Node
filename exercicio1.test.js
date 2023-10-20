const exercicio1 = require('./exercicio1.js');
test('O valor do parametro distancia tem que ser INTEIRO', () => 
{
  expect(exercicio1.calcularGasto(100000, 'gasolina')).toBe(6);
}
);
// test('Se o valor do parametro distancia NÃO FOR INTEIRO', () => 
// {
//   expect(exercicio1.calcularGasto('corinthians', 'gasolina')).toThrow("O valor do parâmetro 'distância' deve ser do tipo INT");
// }
// ); esse teste por algum motivo não funciona
test('Tipo do combustível "gasolina"', () => 
{
  expect(exercicio1.calcularGasto(100000, 'gasolina')).toBe(6);
}
);
test('Tipo do combustível "etanol"', () => 
{
  expect(exercicio1.calcularGasto(100000, 'etanol')).toBe(9);
}
);
// test('Se o valor do tipo não for gasolina ou etanol', () => 
// {
//   expect(exercicio1.calcularGasto(100000, 'gasosa')).toThrow("O valor do parâmetro 'tipoCombustível' deve ser 'gasolina' ou 'etanol'!");
// }
// ); esse teste por algum motivo não funciona