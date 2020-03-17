//aula9
const nome = 'Matheus'
//concatenação normal
const concatenacao = 'Olá ' + nome + ' !'

//concatenação com template = ` ${variavel}`
const template = `
    Olá senhor 
    ${nome}
        Seja muito bem-vindo!
    `
/*ele considera todo o tipo de espaços sem a
necessidade de utilizar .concat ou +
*/

console.log(concatenacao, template)

//o template também suporta expressões

console.log(`1 + 1 = ${1 + 1}`)
//porém só é realizada a soma do que se encontra dentro do ${}

//podemos ultilizar uma função dentro de um template
const up = texto => texto.toUpperCase()
//função para deixar MAIUSCULA as letras

console.log(`Atenção ${up('cuidado !')}`)