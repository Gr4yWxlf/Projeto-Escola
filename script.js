
let materia_selecionada = document.getElementById("materia_selecionada")

let linha = document.getElementById("linha")
let linha_2 = document.getElementById("linha_2")

let conteudo_1 = document.getElementById("conteudo_1")
let conteudo_2 = document.getElementById("conteudo_2")
let conteudo_3 = document.getElementById("conteudo_3")
conteudo_1.addEventListener("click", conteudo_1_click)




let botao_fisica_materia = document.getElementById("fisica_icone_botao")
botao_fisica_materia.addEventListener("click", selecionado_fisica_materia)
let botao_quimica_materia = document.getElementById("quimica_icone_botao")
botao_quimica_materia.addEventListener("click", selecionado_quimica_materia)

var materia_atual = 0
var conteudo_atual = 0

function selecionado_fisica_materia() {
    materia_atual = 1
    materia_selecionada.innerText = `Física`
    linha.style.width = `90%`
    linha.style.height = `0.25em`
    conteudo_1.style.width = `45%`
    conteudo_1.style.height = `2em`
    conteudo_1.innerText = `Mecânica`
    conteudo_2.style.width = `45%`
    conteudo_2.style.height = `2em`
    conteudo_2.innerText = `Cinemática`
    conteudo_3.style.width = `45%`
    conteudo_3.style.height = `2em`
    conteudo_3.innerText = `Velocidade Escalar Média e Instantânea`
}
function selecionado_quimica_materia() {
    materia_atual = 2
    materia_selecionada.innerText = `Química`
    conteudo_1.style.width = `0%`
    conteudo_1.style.height = `0em`
    conteudo_1.innerText = ``
    conteudo_2.style.width = `0%`
    conteudo_2.style.height = `0em`
    conteudo_2.innerText = ``
    conteudo_3.style.width = `0%`
    conteudo_3.style.height = `0em`
    conteudo_3.innerText = ``
}

function conteudo_1_click() {
    if (materia_atual == 1) {
        linha_2.style.width = `90%`
        linha_2.style.height = `0.25em`
    } else {
        linha_2.style.width = `0%`
        linha_2.style.height = `0em`
    }
}