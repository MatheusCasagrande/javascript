//aula6
//declarando uma variavel inteira
const peso1 = 1.0
//outra forma também
const peso2 = Number('2.0')

console.log(peso1, peso2)
//retorna uma TRUEorFALSE sobre o valor se é Inteiro ou não
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.786

const total = (avaliacao1 * peso1) + (avaliacao2 * peso2)
const media = total / (peso1 + peso2)

console.log(media)
//formatando as casas decimais de uma forma simples, apenas na sua impressão, sem alterar o valor da variavel
console.log(media.toFixed(2))//numero de casas decimais

console.log(media.toString(2))//alterando em string para numberos binários

//apesar de imprimir de diferentes formas a variavel continua sendo do tipo number
console.log(typeof media)