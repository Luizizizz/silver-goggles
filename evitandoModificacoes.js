//Object.preventExtensions, previne extensões em determinado objeto, previne criação de atributos
// mas não impede a exclusão dos mesmos
const produto = Object.preventExtensions({
    nome:'Qualquer',
    preco:1.89,
    tag:'promoção'
})

console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar'
delete produto.tag
console.log(produto)

//Object.seal tem objetivo de selar um objeto, sendo assim vc ñ consegue adicionar nem excluir atributos, apenas modifica-los
const pessoa = {nome:'Juliana', idade:35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))
console.log(pessoa)

//Object.freeze os atributos ficam 100% imutaveis e constantes, não da pra mexer, nem remover e nem adicionar atributos
