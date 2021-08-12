function Aula(nome, VideoId) {
    this.nome = nome
    this.VideoID = VideoId
}
const Aula1 = new Aula('Bem Vindo', 123)// o operador new acessaria o f.prototype
const Aula2 = new Aula('Introdução', 456)

console.log(Aula1, Aula2)

//simulando new
function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype//O f.prototype esta acessando o prototipo do objeto, por isso que o new acessa a o que tem no objeto e o instancia
    // acessamos o prototipo através de um obj vazio criado acima
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Introdução', 456)
console.log(aula3, aula4)
