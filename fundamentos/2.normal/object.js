//aula12
//raiz de um objeto
const prod1 = {};
/*um objeto pode ser criado vazio
e dpois irmos atribuindo as chaves
e valores nele como:
*/
prod1.nome = 'Celular Xiaomi MI 9';
prod1.preco = 1590.99;

console.log(prod1);

//podemos também criar um objeto em outro tipo de estrutura como:
const mercado = {
    nome: 'Zaffari',
    endereco: 'Rua Marechal Floriano',
    numero: 55,
    produto: {
        blabla: 1,
        produto: {
            blabla:2
        }
    }
}
//IMPORTANTE: separar por VIRGULAS as chaves.
console.log(mercado);

/*dentro de um mesmo objeto posso ter mais
de um objeto e com nomes repetidos desde que
não estejam dentro da mesmo 'classe' */