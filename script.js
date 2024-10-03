let respotas_fisica_mecanica_questao_1 = ["Um corpo em movimento sempre tende a diminuir sua velocidade até parar.", "Um corpo permanece em repouso ou em movimento retilíneo uniforme a menos que uma força resultante aja sobre ele.", "A força resultante sobre um corpo é diretamente proporcional à sua aceleração.", "A ação de uma força sobre um corpo gera uma força de reação com a mesma intensidade e direção, mas de sentido oposto.", "Nennhuma."]
let respotas_quimica_forcasintermoleculares_questao_1 = ["Forças de London (dispersão).", "Ligações de hidrogênio.", "Forças dipolo-dipolo.", "Interações íon-dipolo.", "Nenhuma."]


let materia_selecionada = document.getElementById("materia_selecionada")

let linha = document.getElementById("linha")
let linha_2 = document.getElementById("linha_2")

let conteudo_1 = document.getElementById("conteudo_1")
let conteudo_2 = document.getElementById("conteudo_2")
let conteudo_3 = document.getElementById("conteudo_3")
conteudo_1.addEventListener("click", conteudo_1_click)

let video_aula = document.getElementById("video_aula")
let area_questoes = document.getElementById("area_questoes")
let questao_1 = document.getElementById("questao_1")
let questao_2 = document.getElementById("questao_2")
let questao_3 = document.getElementById("questao_3")
let questao_4 = document.getElementById("questao_4")
let questao_5 = document.getElementById("questao_5")
questao_1.addEventListener("click", questao_1_click)

let alternativas_area = document.getElementById("alternativas")
let alternativa_1 = document.getElementById("alternativa_1")
let alternativa_2 = document.getElementById("alternativa_2")
let alternativa_3 = document.getElementById("alternativa_3")
let alternativa_4 = document.getElementById("alternativa_4")
let alternativa_5 = document.getElementById("alternativa_5")


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
    conteudo_1.style.width = `20em`
    conteudo_1.style.height = `2em`
    conteudo_1.innerText = `Mecânica`
}
function selecionado_quimica_materia() {
    materia_atual = 2
    materia_selecionada.innerText = `Química`
    linha.style.width = `90%`
    linha.style.height = `0.25em`
    conteudo_1.style.width = `20%`
    conteudo_1.style.height = `2em`
    conteudo_1.innerText = `Forças Intermoleculares`
}

function conteudo_1_click() {
    if (materia_atual == 1) {
        conteudo_atual = 1;
        creditos.style.marginTop = `5%`;
        linha_2.style.width = `90%`;
        linha_2.style.height = `0.25em`;
        video_aula.innerHTML = `<iframe id="video" src="https://www.youtube.com/embed/f1prnafhQtE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        area_questoes.style.width = `30%`;
        area_questoes.style.height = `35vw`;
        questao_1.innerText = `Questão - 1`;
        questao_2.innerText = `Questão - 2`;
        questao_3.innerText = `Questão - 3`;
        questao_4.innerText = `Questão - 4`;
        questao_5.innerText = `Questão - 5`;
        alternativas_area.style.width = `0%`;
        alternativas_area.style.height = `0em`;
        alternativa_1.innerText = ``;
        alternativa_2.innerText = ``;
        alternativa_3.innerText = ``;
        alternativa_4.innerText = ``;
        alternativa_5.innerText = ``;
    }
    if (materia_atual == 2) {
        conteudo_atual = 1;
        creditos.style.marginTop = `5%`;
        linha_2.style.width = `90%`;
        linha_2.style.height = `0.25em`;
        video_aula.innerHTML = `<iframe id="video" src="https://www.youtube.com/embed/fJIadgJQzHw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        area_questoes.style.width = `30%`;
        area_questoes.style.height = `35vw`;
        questao_1.innerText = `Questão - 1`;
        questao_2.innerText = `Questão - 2`;
        questao_3.innerText = `Questão - 3`;
        questao_4.innerText = `Questão - 4`;
        questao_5.innerText = `Questão - 5`;
        alternativas_area.style.width = `0%`;
        alternativas_area.style.height = `0em`;
        alternativa_1.innerText = ``;
        alternativa_2.innerText = ``;
        alternativa_3.innerText = ``;
        alternativa_4.innerText = ``;
        alternativa_5.innerText = ``;
    }
}


function questao_1_click() {
    if (materia_atual == 1) {
        if (conteudo_atual == 1) {
            video_aula.innerHTML = `<div id="questoes"><p id="pergunta_1">Qual das alternativas abaixo descreve corretamente a Primeira Lei de Newton (Lei da Inércia)?</p></div>`
            alternativas_area.style.width = `75%`
            alternativas_area.style.height = `30vw`
            alternativa_1.innerText = `A) ${respotas_fisica_mecanica_questao_1[0]}`
            alternativa_2.innerText = `B) ${respotas_fisica_mecanica_questao_1[1]}`
            alternativa_3.innerText = `C) ${respotas_fisica_mecanica_questao_1[2]}`
            alternativa_4.innerText = `D) ${respotas_fisica_mecanica_questao_1[3]}`
            alternativa_5.innerText = `E) ${respotas_fisica_mecanica_questao_1[4]}`
        }
    }
    if (materia_atual == 2) {
        if (conteudo_atual == 1) {
            video_aula.innerHTML = `<div id="questoes"><p id="pergunta_1">Qual das alternativas a seguir corresponde à força intermolecular mais forte?</p></div>`
            alternativas_area.style.width = `75%`
            alternativas_area.style.height = `30vw`
            alternativa_1.innerText = `A) ${respotas_quimica_forcasintermoleculares_questao_1[0]}`
            alternativa_2.innerText = `B) ${respotas_quimica_forcasintermoleculares_questao_1[1]}`
            alternativa_3.innerText = `C) ${respotas_quimica_forcasintermoleculares_questao_1[2]}`
            alternativa_4.innerText = `D) ${respotas_quimica_forcasintermoleculares_questao_1[3]}`
            alternativa_5.innerText = `E) ${respotas_quimica_forcasintermoleculares_questao_1[4]}`
        }
    }
}

let creditos = document.getElementById("creditos")
