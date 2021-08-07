//cadeia de prototipos(prototipe chains)
const avo = {
    atr1:'A'
}
const pai = {
    __proto__:avo,
    atr2:'B',
    atr3: 'Não vai aparecer isso quando chamar no filho pois ele vai puxar o valor do atr3 mais próximo, isso se chama shadowing'
}
const filho = {
    __proto__:pai,
    atr3:'C'
}
console.log(filho.atr1, filho.atr2, filho.atr3)

const carro = {
 velAtual:0,
    velMax:200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
     return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}
const ferrari = {
  modelo: 'F40',
    velMax:324//isso é shadowing visto que vai desconsiderar o valor padrão que é 200 e passa a ser 324, o 200 vai ser sombreado
}

const volvo = {
 modelo:'V40',
 status() {
     return `${this.modelo}: ${super.status()}` //O super vai chamar o status do prototipo pai
 }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari)

volvo.acelerarMais(120)
console.log(volvo.status())