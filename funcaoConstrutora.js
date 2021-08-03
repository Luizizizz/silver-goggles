function EscolherLanche(lanche) {
    this.lanche = lanche
    this.escolhaDoLanche = ()=>console.log(`O lanche escolhido foi ${lanche}`)
}
let xsalada = new EscolherLanche("xSalada")
xsalada.escolhaDoLanche()