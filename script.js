/* lista de quetões e respostas */
let respotas_fisica_mecanica_questao_1 = ["Um corpo em movimento sempre tende a diminuir sua velocidade até parar.", "Um corpo permanece em repouso ou em movimento retilíneo uniforme a menos que uma força resultante aja sobre ele.", "A força resultante sobre um corpo é diretamente proporcional à sua aceleração.", "A ação de uma força sobre um corpo gera uma força de reação com a mesma intensidade e direção, mas de sentido oposto.", "Nennhuma."]
let respotas_fisica_mecanica_questao_2 = ["", "", "", "", ""]
let respotas_fisica_mecanica_questao_3 = ["", "", "", "", ""]
let respotas_fisica_mecanica_questao_4 = ["", "", "", "", ""]
let respotas_fisica_mecanica_questao_5 = ["", "", "", "", ""]

let respotas_quimica_forcasintermoleculares_questao_1 = ["Forças de London (dispersão).", "Ligações de hidrogênio.", "Forças dipolo-dipolo.", "Interações íon-dipolo.", "Nenhuma."]
let respotas_quimica_forcasintermoleculares_questao_2 = ["HCl", "CH₄", "O₂", "H₂O", "CO₂"]
let respotas_quimica_forcasintermoleculares_questao_3 = ["CH₃CH₂OH (etanol)", "CH₄ (metano)", "N₂ (nitrogênio)", "CO₂ (dióxido de carbono)", "CCl₄ (tetracloreto de carbono)"]
let respotas_quimica_forcasintermoleculares_questao_4 = ["Metanol, porque forma ligações de hidrogênio.", "CO₂, porque é mais pesado.", "CO₂, porque é uma molécula apolar.", "Metanol, porque possui interações dipolo-dipolo.", "Ambas têm o mesmo ponto de ebulição."]
let respotas_quimica_forcasintermoleculares_questao_5 = ["CH₄", "NH₃", "CO₂", "CCl₄", "N₂"]

let respotas_portugues_oracoesfraseseperiodo_questao_1 = ["Um conjunto de palavras com sujeito e predicado.", "Qualquer enunciado que expressa sentido completo, com ou sem verbo.", "Um enunciado que sempre contém verbo.", "Um período composto por orações coordenadas.", "Todas as alternativas"]
let respotas_portugues_oracoesfraseseperiodo_questao_2 = ['"Que dia bonito!"', '"Vamos para a festa."', '"Silêncio na sala."', '"Boa sorte!"', "Nenhumas das alternativas está correta."]
let respotas_portugues_oracoesfraseseperiodo_questao_3 = ["A presença de mais de uma oração.", "Apenas uma oração.", "A ausência de verbos.", "A coordenação entre orações.", "Todas estão certas."]
let respotas_portugues_oracoesfraseseperiodo_questao_4 = ['"Choveu durante a tarde."', '"Fui ao cinema e depois jantei com meus amigos."', '"Silêncio na biblioteca."', '"Caminhei até o parque."', "Nenhuma das anteriores."]
let respotas_portugues_oracoesfraseseperiodo_questao_5 = ['"Comprei um livro porque adoro ler."', '"O sol brilha no horizonte."', '"Ele acordou cedo e saiu para trabalhar."', '"João e Maria foram ao parque."', "Somente a I e III"]



/* editar texto para alterar o nome da materia selecionada */
let materia_selecionada = document.getElementById("materia_selecionada")

/* linhas */
let linha = document.getElementById("linha")
let linha_2 = document.getElementById("linha_2")

/* botão apos clicar em uma materia para selecionar o conteudo de estudo */
let conteudo_1 = document.getElementById("conteudo_1")
let conteudo_2 = document.getElementById("conteudo_2")
let conteudo_3 = document.getElementById("conteudo_3")
conteudo_1.addEventListener("click", conteudo_1_click)


/* area para rodar video ou texto e para separar as questões */
let video_aula = document.getElementById("video_aula")
let area_questoes = document.getElementById("area_questoes")
let questao_1 = document.getElementById("questao_1")
let questao_2 = document.getElementById("questao_2")
let questao_3 = document.getElementById("questao_3")
let questao_4 = document.getElementById("questao_4")
let questao_5 = document.getElementById("questao_5")
questao_1.addEventListener("click", questao_1_click)
questao_2.addEventListener("click", questao_2_click)
questao_3.addEventListener("click", questao_3_click)
questao_4.addEventListener("click", questao_4_click)
questao_5.addEventListener("click", questao_5_click)

/* Botões das alternativas para responder questões */
let alternativas_area = document.getElementById("alternativas")
let alternativa_1 = document.getElementById("alternativa_1")
let alternativa_2 = document.getElementById("alternativa_2")
let alternativa_3 = document.getElementById("alternativa_3")
let alternativa_4 = document.getElementById("alternativa_4")
let alternativa_5 = document.getElementById("alternativa_5")

/* Botões principais das materias e icones */
let botao_fisica_materia = document.getElementById("fisica_icone_botao")
botao_fisica_materia.addEventListener("click", selecionado_fisica_materia)
let botao_quimica_materia = document.getElementById("quimica_icone_botao")
botao_quimica_materia.addEventListener("click", selecionado_quimica_materia)
let botao_portugues_materia = document.getElementById("portugues_icone_botao")
botao_portugues_materia.addEventListener("click", selecionado_portugues_materia)

/* index para localizar melhor qual conteudo e material foi selecionado atualmente */
var materia_atual = 0
var conteudo_atual = 0

/* Funções para quando selecionar uma materia */
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
    conteudo_1.style.width = `20em`
    conteudo_1.style.height = `2em`
    conteudo_1.innerText = `Forças Intermoleculares`
}
function selecionado_portugues_materia() {
    materia_atual = 3
    materia_selecionada.innerText = `Língua Portuguesa`
    linha.style.width = `90%`
    linha.style.height = `0.25em`
    conteudo_1.style.width = `20em`
    conteudo_1.style.height = `2em`
    conteudo_1.innerText = `Orações, Frases e Periodo`
}

/* Funções ao selecionar um dos conteudos */
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
    if (materia_atual == 3) {
        conteudo_atual = 1;
        creditos.style.marginTop = `5%`;
        linha_2.style.width = `90%`;
        linha_2.style.height = `0.25em`;
        video_aula.innerHTML = `<iframe id="video" src="https://www.youtube.com/embed/L-HyRNdfIhU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
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

/* Funções para as questões */
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
    if (materia_atual == 3) {
        if (conteudo_atual == 1) {
            video_aula.innerHTML = `<div id="questoes"><p id="pergunta_1">O que é uma frase?</p></div>`
            alternativas_area.style.width = `75%`
            alternativas_area.style.height = `30vw`
            alternativa_1.innerText = `A) ${respotas_portugues_oracoesfraseseperiodo_questao_1[0]}`
            alternativa_2.innerText = `B) ${respotas_portugues_oracoesfraseseperiodo_questao_1[1]}`
            alternativa_3.innerText = `C) ${respotas_portugues_oracoesfraseseperiodo_questao_1[2]}`
            alternativa_4.innerText = `D) ${respotas_portugues_oracoesfraseseperiodo_questao_1[3]}`
            alternativa_5.innerText = `E) ${respotas_portugues_oracoesfraseseperiodo_questao_1[4]}`
        }
    }
}
function questao_2_click() {
    if (materia_atual == 1) {
        if (conteudo_atual == 1) {
            video_aula.innerHTML = `<div id="questoes"><p id="pergunta_1"></p></div>`
            alternativas_area.style.width = `75%`
            alternativas_area.style.height = `30vw`
            alternativa_1.innerText = `A) ${respotas_fisica_mecanica_questao_2[0]}`
            alternativa_2.innerText = `B) ${respotas_fisica_mecanica_questao_2[1]}`
            alternativa_3.innerText = `C) ${respotas_fisica_mecanica_questao_2[2]}`
            alternativa_4.innerText = `D) ${respotas_fisica_mecanica_questao_2[3]}`
            alternativa_5.innerText = `E) ${respotas_fisica_mecanica_questao_2[4]}`
        }
    }
    if (materia_atual == 2) {
        if (conteudo_atual == 1) {
            video_aula.innerHTML = `<div id="questoes"><p id="pergunta_1">(UFRJ) Qual das seguintes substâncias apresenta forças intermoleculares do tipo dipolo-dipolo?</p></div>`
            alternativas_area.style.width = `75%`
            alternativas_area.style.height = `30vw`
            alternativa_1.innerText = `A) ${respotas_quimica_forcasintermoleculares_questao_2[0]}`
            alternativa_2.innerText = `B) ${respotas_quimica_forcasintermoleculares_questao_2[1]}`
            alternativa_3.innerText = `C) ${respotas_quimica_forcasintermoleculares_questao_2[2]}`
            alternativa_4.innerText = `D) ${respotas_quimica_forcasintermoleculares_questao_2[3]}`
            alternativa_5.innerText = `E) ${respotas_quimica_forcasintermoleculares_questao_2[4]}`
        }
    }
    if (materia_atual == 3) {
        if (conteudo_atual == 1) {
            video_aula.innerHTML = `<div id="questoes"><p id="pergunta_1">Qual das opções a seguir é um exemplo de oração?</p></div>`
            alternativas_area.style.width = `75%`
            alternativas_area.style.height = `30vw`
            alternativa_1.innerText = `A) ${respotas_portugues_oracoesfraseseperiodo_questao_2[0]}`
            alternativa_2.innerText = `B) ${respotas_portugues_oracoesfraseseperiodo_questao_2[1]}`
            alternativa_3.innerText = `C) ${respotas_portugues_oracoesfraseseperiodo_questao_2[2]}`
            alternativa_4.innerText = `D) ${respotas_portugues_oracoesfraseseperiodo_questao_2[3]}`
            alternativa_5.innerText = `E) ${respotas_portugues_oracoesfraseseperiodo_questao_2[4]}`
        }
    }
}
function questao_3_click() {
    if (materia_atual == 1) {
        if (conteudo_atual == 1) {
            video_aula.innerHTML = `<div id="questoes"><p id="pergunta_1"></p></div>`
            alternativas_area.style.width = `75%`
            alternativas_area.style.height = `30vw`
            alternativa_1.innerText = `A) ${respotas_fisica_mecanica_questao_3[0]}`
            alternativa_2.innerText = `B) ${respotas_fisica_mecanica_questao_3[1]}`
            alternativa_3.innerText = `C) ${respotas_fisica_mecanica_questao_3[2]}`
            alternativa_4.innerText = `D) ${respotas_fisica_mecanica_questao_3[3]}`
            alternativa_5.innerText = `E) ${respotas_fisica_mecanica_questao_3[4]}`
        }
    }
    if (materia_atual == 2) {
        if (conteudo_atual == 1) {
            video_aula.innerHTML = `<div id="questoes"><p id="pergunta_1">(ENEM) Qual das seguintes substâncias apresenta ligações de hidrogênio como a principal força intermolecular?</p></div>`
            alternativas_area.style.width = `75%`
            alternativas_area.style.height = `30vw`
            alternativa_1.innerText = `A) ${respotas_quimica_forcasintermoleculares_questao_3[0]}`
            alternativa_2.innerText = `B) ${respotas_quimica_forcasintermoleculares_questao_3[1]}`
            alternativa_3.innerText = `C) ${respotas_quimica_forcasintermoleculares_questao_3[2]}`
            alternativa_4.innerText = `D) ${respotas_quimica_forcasintermoleculares_questao_3[3]}`
            alternativa_5.innerText = `E) ${respotas_quimica_forcasintermoleculares_questao_3[4]}`
        }
    }
    if (materia_atual == 3) {
        if (conteudo_atual == 1) {
            video_aula.innerHTML = `<div id="questoes"><p id="pergunta_1">O que caracteriza um período simples?</p></div>`
            alternativas_area.style.width = `75%`
            alternativas_area.style.height = `30vw`
            alternativa_1.innerText = `A) ${respotas_portugues_oracoesfraseseperiodo_questao_3[0]}`
            alternativa_2.innerText = `B) ${respotas_portugues_oracoesfraseseperiodo_questao_3[1]}`
            alternativa_3.innerText = `C) ${respotas_portugues_oracoesfraseseperiodo_questao_3[2]}`
            alternativa_4.innerText = `D) ${respotas_portugues_oracoesfraseseperiodo_questao_3[3]}`
            alternativa_5.innerText = `E) ${respotas_portugues_oracoesfraseseperiodo_questao_3[4]}`
        }
    }
}
function questao_4_click() {
    if (materia_atual == 1) {
        if (conteudo_atual == 1) {
            video_aula.innerHTML = `<div id="questoes"><p id="pergunta_1"></p></div>`
            alternativas_area.style.width = `75%`
            alternativas_area.style.height = `30vw`
            alternativa_1.innerText = `A) ${respotas_fisica_mecanica_questao_4[0]}`
            alternativa_2.innerText = `B) ${respotas_fisica_mecanica_questao_4[1]}`
            alternativa_3.innerText = `C) ${respotas_fisica_mecanica_questao_4[2]}`
            alternativa_4.innerText = `D) ${respotas_fisica_mecanica_questao_4[3]}`
            alternativa_5.innerText = `E) ${respotas_fisica_mecanica_questao_4[4]}`
        }
    }
    if (materia_atual == 2) {
        if (conteudo_atual == 1) {
            video_aula.innerHTML = `<div id="questoes"><p id="pergunta_1">(Unicamp) Considere duas substâncias, o metanol (CH₃OH) e o dióxido de carbono (CO₂). Qual delas possui maior ponto de ebulição e por quê?</p></div>`
            alternativas_area.style.width = `75%`
            alternativas_area.style.height = `30vw`
            alternativa_1.innerText = `A) ${respotas_quimica_forcasintermoleculares_questao_4[0]}`
            alternativa_2.innerText = `B) ${respotas_quimica_forcasintermoleculares_questao_4[1]}`
            alternativa_3.innerText = `C) ${respotas_quimica_forcasintermoleculares_questao_4[2]}`
            alternativa_4.innerText = `D) ${respotas_quimica_forcasintermoleculares_questao_4[3]}`
            alternativa_5.innerText = `E) ${respotas_quimica_forcasintermoleculares_questao_4[4]}`
        }
    }
    if (materia_atual == 3) {
        if (conteudo_atual == 1) {
            video_aula.innerHTML = `<div id="questoes"><p id="pergunta_1">Em qual das alternativas há um período composto?</p></div>`
            alternativas_area.style.width = `75%`
            alternativas_area.style.height = `30vw`
            alternativa_1.innerText = `A) ${respotas_portugues_oracoesfraseseperiodo_questao_4[0]}`
            alternativa_2.innerText = `B) ${respotas_portugues_oracoesfraseseperiodo_questao_4[1]}`
            alternativa_3.innerText = `C) ${respotas_portugues_oracoesfraseseperiodo_questao_4[2]}`
            alternativa_4.innerText = `D) ${respotas_portugues_oracoesfraseseperiodo_questao_4[3]}`
            alternativa_5.innerText = `E) ${respotas_portugues_oracoesfraseseperiodo_questao_4[4]}`
        }
    }
}
function questao_5_click() {
    if (materia_atual == 1) {
        if (conteudo_atual == 1) {
            video_aula.innerHTML = `<div id="questoes"><p id="pergunta_1"></p></div>`
            alternativas_area.style.width = `75%`
            alternativas_area.style.height = `30vw`
            alternativa_1.innerText = `A) ${respotas_fisica_mecanica_questao_5[0]}`
            alternativa_2.innerText = `B) ${respotas_fisica_mecanica_questao_5[1]}`
            alternativa_3.innerText = `C) ${respotas_fisica_mecanica_questao_5[2]}`
            alternativa_4.innerText = `D) ${respotas_fisica_mecanica_questao_5[3]}`
            alternativa_5.innerText = `E) ${respotas_fisica_mecanica_questao_5[4]}`
        }
    }
    if (materia_atual == 2) {
        if (conteudo_atual == 1) {
            video_aula.innerHTML = `<div id="questoes"><p id="pergunta_1">(FUVEST) Entre as moléculas abaixo, qual apresenta as forças intermoleculares mais fortes?</p></div>`
            alternativas_area.style.width = `75%`
            alternativas_area.style.height = `30vw`
            alternativa_1.innerText = `A) ${respotas_quimica_forcasintermoleculares_questao_5[0]}`
            alternativa_2.innerText = `B) ${respotas_quimica_forcasintermoleculares_questao_5[1]}`
            alternativa_3.innerText = `C) ${respotas_quimica_forcasintermoleculares_questao_5[2]}`
            alternativa_4.innerText = `D) ${respotas_quimica_forcasintermoleculares_questao_5[3]}`
            alternativa_5.innerText = `E) ${respotas_quimica_forcasintermoleculares_questao_5[4]}`
        }
    }
    if (materia_atual == 3) {
        if (conteudo_atual == 1) {
            video_aula.innerHTML = `<div id="questoes"><p id="pergunta_1">Qual das seguintes frases contém uma oração subordinada?</p></div>`
            alternativas_area.style.width = `75%`
            alternativas_area.style.height = `30vw`
            alternativa_1.innerText = `A) ${respotas_portugues_oracoesfraseseperiodo_questao_5[0]}`
            alternativa_2.innerText = `B) ${respotas_portugues_oracoesfraseseperiodo_questao_5[1]}`
            alternativa_3.innerText = `C) ${respotas_portugues_oracoesfraseseperiodo_questao_5[2]}`
            alternativa_4.innerText = `D) ${respotas_portugues_oracoesfraseseperiodo_questao_5[3]}`
            alternativa_5.innerText = `E) ${respotas_portugues_oracoesfraseseperiodo_questao_5[4]}`
        }
    }
}
let creditos = document.getElementById("creditos")
