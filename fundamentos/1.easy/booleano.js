//aula10
/*
lembrando de utilizar LET somente 
quando a variavel irá mudar
assim priorizando sempre o CONST
*/
//declarando a variavel FALSE retorna false
let isAtivo = false
console.log(isAtivo)
//declarando a variavel true retorna true
isAtivo = true
console.log(isAtivo)

isAtivo = 1
// ! é utilizada para negar algo
console.log(!isAtivo)
//podendo também ser utilizada a !! negando a negação
console.log(!!isAtivo)

console.log('Situações TRUE:')
console.log(!!3)
console.log(!!-9)
console.log(!!' ')//apartir de um caractere ou espaço em branco
console.log(!!'a')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo=true))

console.log('Situações FALSE:')
console.log(!!0)
console.log(!!'')//vazio é false
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo=false))

console.log('Conclusões finais:')
/*ele irá procurar o verdadeiro entre todos 
e retornar TRUE se acha-lo, caso não ele 
retorna FALSE
*/
console.log(!!(0 || null || '' || ' '))

//exemplo de utilização
//caso a variavel nome esteja vazia ele retorna Desconhecido
let nome = ''
console.log('Nome do Gênio: '.concat(nome || 'Desconhecido'))
//caso esteja com um nome irá retorna-lo
nome = 'Matheus'
console.log('Nome do Gênio: '.concat(nome || 'Desconhecido'))