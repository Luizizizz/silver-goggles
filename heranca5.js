function Aula(nome, VideoId) {
    this.nome = nome
    this.VideoID = VideoId
}
const Aula1 = new Aula('Bem Vindo', 123)
const Aula2 = new Aula('Introdução', 456)

console.log(Aula1, Aula2)

//simulando new
//function Novo