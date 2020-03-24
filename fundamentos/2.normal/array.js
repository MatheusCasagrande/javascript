//aula 11
/*no JS os Arrays não são de tamanho fixo,
ou seja, podem varias o numero de posições
que ele possui podendo colocar até strings,
number,objects,booleans,etc misturados por 
conta de sua tipagem fraca */

const valores=[6.8, 9.9, 7.3, 8.2]
//mostra a variavel da posição inicial 0 e da 3 posição
console.log(valores[0], valores[3])

/*caso tente acessar uma posição inexistente 
no array, irá retorna undefined */
console.log(valores[4])

/*caso defina um valor para uma variavel
de uma posição mais avançada o sistema retorna
que há (quantidade de itens vazios) */
valores[6] = 3.3
console.log(valores)

/*para acessar a quantidade de posições 
existentes em um array se utiliza o 
.length */
console.log(valores.length)

//.push para adicionar elementos em um array
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

//.pop() retira o elemento de ultima posição do array e imprime ele
console.log(valores.pop())
console.log(valores)

//delete - exlui uma posição determinada do array
delete valores[0]
console.log(valores)

//em JS o array é do tipo object
console.log(typeof valores)