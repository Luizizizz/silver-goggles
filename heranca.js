//cadeia de prototipos(prototipe chains)
const avo = {
    atr1:'A'
}
const pai = {
    __proto__:avo,
    atr2:'B',
    atr3: 'Não vai aparecer isso quando chamar no filho pois ele vai puxar o valor do atr3 mais próximo'
}
const filho = {
    __proto__:pai,
    atr3:'C'
}
console.log(filho.atr1, filho.atr2, filho.atr3)