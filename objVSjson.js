const obj = {a:1, b:2, c:3, soma() {return a+b+c}}
console.log(JSON.stringify(obj))
//É notavel que não é retornada a função soma, isto pois o JSON apenas armazena e não executa dados.
//E para criar um JSON é necessaria aspas duplas nas partes strings das variaveis e a simples para cobrir tudo igual veremos abaixo
console.log(JSON.parse('{"a":1, "b":2, "c":3}'))