function  getPreco(imposto = 0, moeda = "R$"){
    return `${moeda}${this.preco*(1-this.desc)*(1+imposto)}`
}
const produto = {
    nome:"Notebook",
    preco:4599,
    desc:0.2,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())
console.log(getPreco.call(produto, 0.17, "$"))
console.log(getPreco.apply(produto,[0.17, "$"]))