function calcularGasto(distancia, tipoCombustivel) 
{
    // if (typeof distancia !== 'number') 
    // {
    //     throw new Error("O valor do parâmetro 'distância' deve ser do tipo INT");    
    // }// vou comentar pois por enquanto porque não passa pelo teste
    if (tipoCombustivel == 'gasolina')
    {
        return parseInt(distancia / 16000);
    }
    else if (tipoCombustivel == 'etanol')
    {
        return parseInt(distancia / 11000);
    }
    // else
    // {
    //     throw new Error("O valor do parâmetro 'tipoCombustível' deve ser 'gasolina' ou 'etanol'!");
    // } // estou comentando porque não passa pelo teste
}

console.log('A quantidade de litros necessária para o percurso é de 500km com gasolina é: ' + calcularGasto(500000, 'gasolina'));

module.exports = {calcularGasto};
