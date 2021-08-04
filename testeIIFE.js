(function () {
    var nome = "Felipe";
console.log(nome)
})();
// A variável nome não é acessível fora do escopo da expressão 
//console.log(nome) <---- erro

//Atribuir uma IIFE a uma variável não armazenará a função em si, mas o resultado da função.
/*var result = (function () {
    const nome = "Felipe";
    return nome;
})();
// Imediatamente gera a saída:
console.log(result);
//console.log(nome) continua dando erro*/
