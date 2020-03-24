//aula 8
//a string abaixo possui 8 posições, sempre começa na poisção 0
const aluno = "Matheus21"

//mostra o caracter da 4 posição da string
console.log(aluno.charAt(4))

//se for colocado uma posição inexistente, retorna o valor null
console.log("O valor é: "+ aluno.charAt(10))

//charCodeAt retorna o valor da tabela UniCode
console.log(aluno.charCodeAt(3))

//indexOf retorna a posição do caractere informado
console.log(aluno.indexOf("e"))
console.log(aluno.indexOf(1))

//substring retorna a string apartir da posição informada
console.log(aluno.substring(2))
//podendo informar a posição inicial e final
console.log(aluno.substring(2, 6))

//concatenação
console.log('Aluno '.concat(aluno) + "!")

//função de substituição
console.log(aluno.replace(21, " Gênio"))
//expressão regular Regex
console.log(aluno.replace(/\d/g, " G "))//\d para digitos, g - flag global para todos

//convertendo uma string em um array
//.split e após isso colocar o separadores
console.log('Matheus, Giordana, Joaninha, Bud, Stella'.split(','))
