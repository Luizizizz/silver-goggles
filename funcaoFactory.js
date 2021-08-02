function criarProduto(nome, preco) {
    return{
        nome,
        preco,
        desconto:0.1
    }
}
console.log(criarProduto("Notebook",2199.49))
console.log(criarProduto("Celular",519.99))
console.log(criarProduto("Ipad",1400.00))
console.log("teste1")
