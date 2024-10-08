/* lista de quetões e respostas ======================================================================================================*/
/* Física */
let respotas_fisica_mecanica_questao_1 = ["Um corpo em movimento sempre tende a diminuir sua velocidade até parar.", "Um corpo permanece em repouso ou em movimento retilíneo uniforme a menos que uma força resultante aja sobre ele.", "A força resultante sobre um corpo é diretamente proporcional à sua aceleração.", "A ação de uma força sobre um corpo gera uma força de reação com a mesma intensidade e direção, mas de sentido oposto.", "Nennhuma."]
let respotas_fisica_mecanica_questao_2 = ["10 m/s", "15 m/s", "20 m/s", "25 m/s", "30 m/s"]
let respotas_fisica_mecanica_questao_3 = ["2 m/s²", "3 m/s²", "4 m/s²", "5 m/s²", "6 m/s²"]
let respotas_fisica_mecanica_questao_4 = ["100 J", "200 J", "300 J", "400 J", "500 J"]
let respotas_fisica_mecanica_questao_5 = ["0 N", "2000 N", "4000 N", "6000 N", "8000 N"]

let respotas_fisica_cinematica_questao_1 = ["", "", "", "", ""]
let respotas_fisica_cinematica_questao_2 = ["", "", "", "", ""]
let respotas_fisica_cinematica_questao_3 = ["", "", "", "", ""]
let respotas_fisica_cinematica_questao_4 = ["", "", "", "", ""]
let respotas_fisica_cinematica_questao_5 = ["", "", "", "", ""]

/* Quimica */
let respotas_quimica_forcasintermoleculares_questao_1 = ["Forças de London (dispersão).", "Ligações de hidrogênio.", "Forças dipolo-dipolo.", "Interações íon-dipolo.", "Nenhuma."]
let respotas_quimica_forcasintermoleculares_questao_2 = ["HCl", "CH₄", "O₂", "H₂O", "CO₂"]
let respotas_quimica_forcasintermoleculares_questao_3 = ["CH₃CH₂OH (etanol)", "CH₄ (metano)", "N₂ (nitrogênio)", "CO₂ (dióxido de carbono)", "CCl₄ (tetracloreto de carbono)"]
let respotas_quimica_forcasintermoleculares_questao_4 = ["Metanol, porque forma ligações de hidrogênio.", "CO₂, porque é mais pesado.", "CO₂, porque é uma molécula apolar.", "Metanol, porque possui interações dipolo-dipolo.", "Ambas têm o mesmo ponto de ebulição."]
let respotas_quimica_forcasintermoleculares_questao_5 = ["CH₄", "NH₃", "CO₂", "CCl₄", "N₂"]

let respotas_quimica_estequiometria_questao_1 = ["2 mols", "4 mols", "6 mols", "8 mols", "10 mols"]
let respotas_quimica_estequiometria_questao_2 = ["1 mol", "2 mols", "3 mols", "4 mols", "6 mols"]
let respotas_quimica_estequiometria_questao_3 = ["11 g", "22 g", "44 g", "55 g", "66 g"]
let respotas_quimica_estequiometria_questao_4 = ["1,8 g", "3,6 g", "6,0 g", "9,0 g", "18,0 g"]
let respotas_quimica_estequiometria_questao_5 = ["11,2 L", "22,4 L", "33,6 L", "44,8 L", "56,0 L"]

/* Português */
let respotas_portugues_oracoesfraseseperiodo_questao_1 = ["Um conjunto de palavras com sujeito e predicado.", "Qualquer enunciado que expressa sentido completo, com ou sem verbo.", "Um enunciado que sempre contém verbo.", "Um período composto por orações coordenadas.", "Todas as alternativas"]
let respotas_portugues_oracoesfraseseperiodo_questao_2 = ['"Que dia bonito!"', '"Vamos para a festa."', '"Silêncio na sala."', '"Boa sorte!"', "Nenhumas das alternativas está correta."]
let respotas_portugues_oracoesfraseseperiodo_questao_3 = ["A presença de mais de uma oração.", "Apenas uma oração.", "A ausência de verbos.", "A coordenação entre orações.", "Todas estão certas."]
let respotas_portugues_oracoesfraseseperiodo_questao_4 = ['"Choveu durante a tarde."', '"Fui ao cinema e depois jantei com meus amigos."', '"Silêncio na biblioteca."', '"Caminhei até o parque."', "Nenhuma das anteriores."]
let respotas_portugues_oracoesfraseseperiodo_questao_5 = ['"Comprei um livro porque adoro ler."', '"O sol brilha no horizonte."', '"Ele acordou cedo e saiu para trabalhar."', '"João e Maria foram ao parque."', "Somente a I e III"]

/* editar texto para alterar o nome da materia selecionada =======================================================================================*/
let materia_selecionada = document.getElementById("materia_selecionada")

/* linhas */
let linha = document.getElementById("linha")
let linha_2 = document.getElementById("linha_2")

/* botão apos clicar em uma materia para selecionar o conteudo de estudo ========================================================================*/
let conteudo_1 = document.getElementById("conteudo_1")
let conteudo_2 = document.getElementById("conteudo_2")
let conteudo_3 = document.getElementById("conteudo_3")
conteudo_1.addEventListener("click", conteudo_1_click)
conteudo_2.addEventListener("click", conteudo_2_click)


/* area para rodar video ou texto e para separar as questões ====================================================================================*/
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

/* Botões das alternativas para responder questões ============================================================================================*/
let alternativas_area = document.getElementById("alternativas")
let alternativa_1 = document.getElementById("alternativa_1")
let alternativa_2 = document.getElementById("alternativa_2")
let alternativa_3 = document.getElementById("alternativa_3")
let alternativa_4 = document.getElementById("alternativa_4")
let alternativa_5 = document.getElementById("alternativa_5")

/* Botões principais das materias e icones ===================================================================================================*/
let botao_fisica_materia = document.getElementById("fisica_icone_botao")
botao_fisica_materia.addEventListener("click", selecionado_fisica_materia)
let botao_quimica_materia = document.getElementById("quimica_icone_botao")
botao_quimica_materia.addEventListener("click", selecionado_quimica_materia)
let botao_portugues_materia = document.getElementById("portugues_icone_botao")
botao_portugues_materia.addEventListener("click", selecionado_portugues_materia)

/* index para localizar melhor qual conteudo e material foi selecionado atualmente ===========================================================*/
var materia_atual = 0
var conteudo_atual = 0
var questao_atual = 0

/* Funções para quando selecionar uma materia ================================================================================================*/
function selecionado_fisica_materia() {
    materia_atual = 1
    materia_selecionada.innerText = `Física`

    linha.style.width = `90%`
    linha.style.height = `0.25em`

    botao_fisica_materia.style.backgroundColor = `rgb(120, 120, 120)`
    botao_quimica_materia.style.backgroundColor = `rgb(255, 255, 255)`
    botao_portugues_materia.style.backgroundColor = `rgb(255, 255, 255)`

    conteudo_1.style.backgroundColor = `rgb(255, 255, 255)`
    conteudo_2.style.backgroundColor = `rgb(255, 255, 255)`

    questao_1.style.backgroundColor = `rgb(255, 255, 255)`
    questao_2.style.backgroundColor = `rgb(255, 255, 255)`
    questao_3.style.backgroundColor = `rgb(255, 255, 255)`
    questao_4.style.backgroundColor = `rgb(255, 255, 255)`
    questao_5.style.backgroundColor = `rgb(255, 255, 255)`

    conteudo_1.style.width = `20em`
    conteudo_1.style.height = `2em`
    conteudo_1.innerText = `Mecânica`
    conteudo_2.style.width = `20em`
    conteudo_2.style.height = `2em`
    conteudo_2.innerText = `Cinemática`
}
function selecionado_quimica_materia() {
    materia_atual = 2
    materia_selecionada.innerText = `Química`

    linha.style.width = `90%`
    linha.style.height = `0.25em`

    botao_fisica_materia.style.backgroundColor = `rgb(255, 255, 255)`
    botao_quimica_materia.style.backgroundColor = `rgb(120, 120, 120)`
    botao_portugues_materia.style.backgroundColor = `rgb(255, 255, 255)`

    conteudo_1.style.backgroundColor = `rgb(255, 255, 255)`
    conteudo_2.style.backgroundColor = `rgb(255, 255, 255)`

    questao_1.style.backgroundColor = `rgb(255, 255, 255)`
    questao_2.style.backgroundColor = `rgb(255, 255, 255)`
    questao_3.style.backgroundColor = `rgb(255, 255, 255)`
    questao_4.style.backgroundColor = `rgb(255, 255, 255)`
    questao_5.style.backgroundColor = `rgb(255, 255, 255)`

    conteudo_1.style.width = `20em`
    conteudo_1.style.height = `2em`
    conteudo_1.innerText = `Forças Intermoleculares`
    conteudo_2.style.width = `20em`
    conteudo_2.style.height = `2em`
    conteudo_2.innerText = `Estequiometria`
}
function selecionado_portugues_materia() {
    materia_atual = 3
    materia_selecionada.innerText = `Língua Portuguesa`

    linha.style.width = `90%`
    linha.style.height = `0.25em`

    botao_fisica_materia.style.backgroundColor = `rgb(255, 255, 255)`
    botao_quimica_materia.style.backgroundColor = `rgb(255, 255, 255)`
    botao_portugues_materia.style.backgroundColor = `rgb(120, 120, 120)`

    conteudo_1.style.backgroundColor = `rgb(255, 255, 255)`
    conteudo_2.style.backgroundColor = `rgb(255, 255, 255)`

    questao_1.style.backgroundColor = `rgb(255, 255, 255)`
    questao_2.style.backgroundColor = `rgb(255, 255, 255)`
    questao_3.style.backgroundColor = `rgb(255, 255, 255)`
    questao_4.style.backgroundColor = `rgb(255, 255, 255)`
    questao_5.style.backgroundColor = `rgb(255, 255, 255)`

    conteudo_1.style.width = `20em`
    conteudo_1.style.height = `2em`
    conteudo_1.innerText = `Orações, Frases e Periodo`
    conteudo_2.style.width = `0em`
    conteudo_2.style.height = `0em`
    conteudo_2.innerText = ``
}

/* Funções ao selecionar um dos conteudos ===================================================================================================*/
function conteudo_1_click() {
    conteudo_1.style.backgroundColor = `rgb(120, 120, 120)`
    conteudo_2.style.backgroundColor = `rgb(255, 255, 255)`
    
    questao_1.style.backgroundColor = `rgb(255, 255, 255)`
    questao_2.style.backgroundColor = `rgb(255, 255, 255)`
    questao_3.style.backgroundColor = `rgb(255, 255, 255)`
    questao_4.style.backgroundColor = `rgb(255, 255, 255)`
    questao_5.style.backgroundColor = `rgb(255, 255, 255)`
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
function conteudo_2_click() {
    conteudo_1.style.backgroundColor = `rgb(255, 255, 255)`
    conteudo_2.style.backgroundColor = `rgb(120, 120, 120)`

    questao_1.style.backgroundColor = `rgb(255, 255, 255)`
    questao_2.style.backgroundColor = `rgb(255, 255, 255)`
    questao_3.style.backgroundColor = `rgb(255, 255, 255)`
    questao_4.style.backgroundColor = `rgb(255, 255, 255)`
    questao_5.style.backgroundColor = `rgb(255, 255, 255)`
    if (materia_atual == 1) {
        conteudo_atual = 2;

        creditos.style.marginTop = `5%`;

        linha_2.style.width = `90%`;
        linha_2.style.height = `0.25em`;

        video_aula.innerHTML = `<iframe id="video" src="https://www.youtube.com/embed/D6gB4jnx9Wc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        
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
        conteudo_atual = 2;

        creditos.style.marginTop = `5%`;

        linha_2.style.width = `90%`;
        linha_2.style.height = `0.25em`;

        video_aula.innerHTML = `<iframe id="video" src="https://www.youtube.com/embed/deBaO49N1H8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        
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

/* Funções para as questões  =================================================================================================================*/
/* ====================================================== QUESTÃO 1 ====================================================== */
function questao_1_click() {
    questao_atual = 1
    questao_1.style.backgroundColor = `rgb(120, 120, 120)`
    questao_2.style.backgroundColor = `rgb(255, 255, 255)`
    questao_3.style.backgroundColor = `rgb(255, 255, 255)`
    questao_4.style.backgroundColor = `rgb(255, 255, 255)`
    questao_5.style.backgroundColor = `rgb(255, 255, 255)`
    if (materia_atual == 1) {
        /* ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ FISICA ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ */
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
        if (conteudo_atual == 2) {
            video_aula.innerHTML = `<div id="questoes"><p id="pergunta_1">Um ciclista percorre 120 km em 4 horas. Qual foi sua velocidade média durante o percurso?</p></div>`
            alternativas_area.style.width = `75%`
            alternativas_area.style.height = `30vw`
            alternativa_1.innerText = `A) ${respotas_fisica_cinematica_questao_1[0]}`
            alternativa_2.innerText = `B) ${respotas_fisica_cinematica_questao_1[1]}`
            alternativa_3.innerText = `C) ${respotas_fisica_cinematica_questao_1[2]}`
            alternativa_4.innerText = `D) ${respotas_fisica_cinematica_questao_1[3]}`
            alternativa_5.innerText = `E) ${respotas_fisica_cinematica_questao_1[4]}`
        }
    }
    if (materia_atual == 2) {
        /* ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ QUIMICA¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ */
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
        if (conteudo_atual == 2) {
            video_aula.innerHTML = `<div id="questoes"><p id="pergunta_1">(ENEM) Uma reação de combustão completa do metano (CH₄) em oxigênio produz dióxido de carbono (CO₂) e água (H₂O). Qual é a quantidade de dióxido de carbono (em mols) formada pela queima completa de 4 mols de metano? <br> Reação: CH₄ + 2O₂ → CO₂ + 2H₂O</p></div>`
            alternativas_area.style.width = `75%`
            alternativas_area.style.height = `30vw`
            alternativa_1.innerText = `A) ${respotas_quimica_estequiometria_questao_1[0]}`
            alternativa_2.innerText = `B) ${respotas_quimica_estequiometria_questao_1[1]}`
            alternativa_3.innerText = `C) ${respotas_quimica_estequiometria_questao_1[2]}`
            alternativa_4.innerText = `D) ${respotas_quimica_estequiometria_questao_1[3]}`
            alternativa_5.innerText = `E) ${respotas_quimica_estequiometria_questao_1[4]}`
        }
    }
    if (materia_atual == 3) {
        /* ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ PORTUGUES ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ */
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
/* ====================================================== QUESTÃO 2 ====================================================== */
function questao_2_click() {
    questao_atual = 2
    questao_1.style.backgroundColor = `rgb(255, 255, 255)`
    questao_2.style.backgroundColor = `rgb(120, 120, 120)`
    questao_3.style.backgroundColor = `rgb(255, 255, 255)`
    questao_4.style.backgroundColor = `rgb(255, 255, 255)`
    questao_5.style.backgroundColor = `rgb(255, 255, 255)`
    if (materia_atual == 1) {
        /* ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ FISICA ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ */
        if (conteudo_atual == 1) {
            video_aula.innerHTML = `<div id="questoes"><p id="pergunta_1">Um carro parte do repouso e acelera uniformemente a 2 m/s² durante 10 segundos. Qual é a velocidade final do carro?</p></div>`
            alternativas_area.style.width = `75%`
            alternativas_area.style.height = `30vw`
            alternativa_1.innerText = `A) ${respotas_fisica_mecanica_questao_2[0]}`
            alternativa_2.innerText = `B) ${respotas_fisica_mecanica_questao_2[1]}`
            alternativa_3.innerText = `C) ${respotas_fisica_mecanica_questao_2[2]}`
            alternativa_4.innerText = `D) ${respotas_fisica_mecanica_questao_2[3]}`
            alternativa_5.innerText = `E) ${respotas_fisica_mecanica_questao_2[4]}`
        }
        if (conteudo_atual == 2) {
            video_aula.innerHTML = `<div id="questoes"><p id="pergunta_1">Um carro está a 15 m/s e desacelera uniformemente a 2 m/s². Em quanto tempo ele para completamente?</p></div>`
            alternativas_area.style.width = `75%`
            alternativas_area.style.height = `30vw`
            alternativa_1.innerText = `A) ${respotas_fisica_cinematica_questao_2[0]}`
            alternativa_2.innerText = `B) ${respotas_fisica_cinematica_questao_2[1]}`
            alternativa_3.innerText = `C) ${respotas_fisica_cinematica_questao_2[2]}`
            alternativa_4.innerText = `D) ${respotas_fisica_cinematica_questao_2[3]}`
            alternativa_5.innerText = `E) ${respotas_fisica_cinematica_questao_2[4]}`
        }
    }
    if (materia_atual == 2) {
        /* ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ QUIMICA ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ */
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
        if (conteudo_atual == 2) {
            video_aula.innerHTML = `<div id="questoes"><p id="pergunta_1">(FUVEST) Considerando a reação entre o alumínio (Al) e o cloro (Cl₂) para formar cloreto de alumínio (AlCl₃), qual a quantidade de mols de cloro necessária para reagir com 2 mols de alumínio? <br> Reação: 2Al + 3Cl₂ → 2AlCl₃</p></div>`
            alternativas_area.style.width = `75%`
            alternativas_area.style.height = `30vw`
            alternativa_1.innerText = `A) ${respotas_quimica_estequiometria_questao_2[0]}`
            alternativa_2.innerText = `B) ${respotas_quimica_estequiometria_questao_2[1]}`
            alternativa_3.innerText = `C) ${respotas_quimica_estequiometria_questao_2[2]}`
            alternativa_4.innerText = `D) ${respotas_quimica_estequiometria_questao_2[3]}`
            alternativa_5.innerText = `E) ${respotas_quimica_estequiometria_questao_2[4]}`
        }
    }
    if (materia_atual == 3) {
        /* ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ PORTUGUES ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ */
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
/* ====================================================== QUESTÃO 3 ====================================================== */
function questao_3_click() {
    questao_atual = 3
    questao_1.style.backgroundColor = `rgb(255, 255, 255)`
    questao_2.style.backgroundColor = `rgb(255, 255, 255)`
    questao_3.style.backgroundColor = `rgb(120, 120, 120)`
    questao_4.style.backgroundColor = `rgb(255, 255, 255)`
    questao_5.style.backgroundColor = `rgb(255, 255, 255)`
    if (materia_atual == 1) {
        /* ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ FISICA ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ */
        if (conteudo_atual == 1) {
            video_aula.innerHTML = `<div id="questoes"><p id="pergunta_1">Um objeto de massa 5 kg é puxado por uma força constante de 20 N sobre uma superfície sem atrito. Qual é a aceleração do objeto?</p></div>`
            alternativas_area.style.width = `75%`
            alternativas_area.style.height = `30vw`
            alternativa_1.innerText = `A) ${respotas_fisica_mecanica_questao_3[0]}`
            alternativa_2.innerText = `B) ${respotas_fisica_mecanica_questao_3[1]}`
            alternativa_3.innerText = `C) ${respotas_fisica_mecanica_questao_3[2]}`
            alternativa_4.innerText = `D) ${respotas_fisica_mecanica_questao_3[3]}`
            alternativa_5.innerText = `E) ${respotas_fisica_mecanica_questao_3[4]}`
        }
        if (conteudo_atual == 2) {
            video_aula.innerHTML = `<div id="questoes"><p id="pergunta_1">Um trem viaja com velocidade constante de 60 km/h. Quanto tempo ele demora para percorrer 90 km?</p></div>`
            alternativas_area.style.width = `75%`
            alternativas_area.style.height = `30vw`
            alternativa_1.innerText = `A) ${respotas_fisica_cinematica_questao_3[0]}`
            alternativa_2.innerText = `B) ${respotas_fisica_cinematica_questao_3[1]}`
            alternativa_3.innerText = `C) ${respotas_fisica_cinematica_questao_3[2]}`
            alternativa_4.innerText = `D) ${respotas_fisica_cinematica_questao_3[3]}`
            alternativa_5.innerText = `E) ${respotas_fisica_cinematica_questao_3[4]}`
        }
    }
    if (materia_atual == 2) {
        /* ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ QUIMICA ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ */
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
        if (conteudo_atual == 2) {
            video_aula.innerHTML = `<div id="questoes"><p id="pergunta_1">(UNICAMP) Sabendo que a decomposição térmica do carbonato de cálcio (CaCO₃) forma óxido de cálcio (CaO) e dióxido de carbono (CO₂), qual é a massa de dióxido de carbono formada a partir da decomposição de 100 g de carbonato de cálcio? <br> (Massa molar: CaCO₃ = 100 g/mol, CO₂ = 44 g/mol) <br> Reação: CaCO₃ → CaO + CO₂</p></div>`
            alternativas_area.style.width = `75%`
            alternativas_area.style.height = `30vw`
            alternativa_1.innerText = `A) ${respotas_quimica_estequiometria_questao_3[0]}`
            alternativa_2.innerText = `B) ${respotas_quimica_estequiometria_questao_3[1]}`
            alternativa_3.innerText = `C) ${respotas_quimica_estequiometria_questao_3[2]}`
            alternativa_4.innerText = `D) ${respotas_quimica_estequiometria_questao_3[3]}`
            alternativa_5.innerText = `E) ${respotas_quimica_estequiometria_questao_3[4]}`
        }
    }
    if (materia_atual == 3) {
        /* ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ PORTUGUES ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ */
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
/* ====================================================== QUESTÃO 4 ====================================================== */
function questao_4_click() {
    questao_atual = 4
    questao_1.style.backgroundColor = `rgb(255, 255, 255)`
    questao_2.style.backgroundColor = `rgb(255, 255, 255)`
    questao_3.style.backgroundColor = `rgb(255, 255, 255)`
    questao_4.style.backgroundColor = `rgb(120, 120, 120)`
    questao_5.style.backgroundColor = `rgb(255, 255, 255)`
    if (materia_atual == 1) {
        /* ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ FISICA ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ */
        if (conteudo_atual == 1) {
            video_aula.innerHTML = `<div id="questoes"><p id="pergunta_1">Um bloco de 10 kg é levantado verticalmente a uma altura de 5 metros. Sabendo que a aceleração da gravidade é 9,8 m/s², qual foi o trabalho realizado pela força que levantou o bloco?</p></div>`
            alternativas_area.style.width = `75%`
            alternativas_area.style.height = `30vw`
            alternativa_1.innerText = `A) ${respotas_fisica_mecanica_questao_4[0]}`
            alternativa_2.innerText = `B) ${respotas_fisica_mecanica_questao_4[1]}`
            alternativa_3.innerText = `C) ${respotas_fisica_mecanica_questao_4[2]}`
            alternativa_4.innerText = `D) ${respotas_fisica_mecanica_questao_4[3]}`
            alternativa_5.innerText = `E) ${respotas_fisica_mecanica_questao_4[4]}`
        }
        if (conteudo_atual == 2) {
            video_aula.innerHTML = `<div id="questoes"><p id="pergunta_1">Um carro parte do repouso e acelera uniformemente a 3 m/s². Qual a distância percorrida em 10 segundos?</p></div>`
            alternativas_area.style.width = `75%`
            alternativas_area.style.height = `30vw`
            alternativa_1.innerText = `A) ${respotas_fisica_cinematica_questao_4[0]}`
            alternativa_2.innerText = `B) ${respotas_fisica_cinematica_questao_4[1]}`
            alternativa_3.innerText = `C) ${respotas_fisica_cinematica_questao_4[2]}`
            alternativa_4.innerText = `D) ${respotas_fisica_cinematica_questao_4[3]}`
            alternativa_5.innerText = `E) ${respotas_fisica_cinematica_questao_4[4]}`
        }
    }
    if (materia_atual == 2) {
        /* ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ QUIMICA ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ */
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
        if (conteudo_atual == 2) {
            video_aula.innerHTML = `<div id="questoes"><p id="pergunta_1">(PUC-SP) Qual é a massa de água formada quando 18 g de glicose (C₆H₁₂O₆) sofrem combustão completa? <br> (Massa molar: C₆H₁₂O₆ = 180 g/mol, H₂O = 18 g/mol) <br> Reação: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O</p></div>`
            alternativas_area.style.width = `75%`
            alternativas_area.style.height = `30vw`
            alternativa_1.innerText = `A) ${respotas_quimica_estequiometria_questao_4[0]}`
            alternativa_2.innerText = `B) ${respotas_quimica_estequiometria_questao_4[1]}`
            alternativa_3.innerText = `C) ${respotas_quimica_estequiometria_questao_4[2]}`
            alternativa_4.innerText = `D) ${respotas_quimica_estequiometria_questao_4[3]}`
            alternativa_5.innerText = `E) ${respotas_quimica_estequiometria_questao_4[4]}`
        }
    }
    if (materia_atual == 3) {
        /* ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ PORTUGUES ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ */
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
/* ====================================================== QUESTÃO 5 ====================================================== */
function questao_5_click() {
    questao_atual = 5
    questao_1.style.backgroundColor = `rgb(255, 255, 255)`
    questao_2.style.backgroundColor = `rgb(255, 255, 255)`
    questao_3.style.backgroundColor = `rgb(255, 255, 255)`
    questao_4.style.backgroundColor = `rgb(255, 255, 255)`
    questao_5.style.backgroundColor = `rgb(120, 120, 120)`
    if (materia_atual == 1) {
        /* ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ FISICA ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ */
        if (conteudo_atual == 1) {
            video_aula.innerHTML = `<div id="questoes"><p id="pergunta_1">Um caminhão de 2000 kg viaja a uma velocidade constante de 20 m/s. Qual é a força resultante sobre o caminhão?</p></div>`
            alternativas_area.style.width = `75%`
            alternativas_area.style.height = `30vw`
            alternativa_1.innerText = `A) ${respotas_fisica_mecanica_questao_5[0]}`
            alternativa_2.innerText = `B) ${respotas_fisica_mecanica_questao_5[1]}`
            alternativa_3.innerText = `C) ${respotas_fisica_mecanica_questao_5[2]}`
            alternativa_4.innerText = `D) ${respotas_fisica_mecanica_questao_5[3]}`
            alternativa_5.innerText = `E) ${respotas_fisica_mecanica_questao_5[4]}`
        }
        if (conteudo_atual == 2) {
            video_aula.innerHTML = `<div id="questoes"><p id="pergunta_1">Um objeto é solto de uma altura de 20 m. Desprezando a resistência do ar, qual o tempo de queda (g = 10 m/s²)?</p></div>`
            alternativas_area.style.width = `75%`
            alternativas_area.style.height = `30vw`
            alternativa_1.innerText = `A) ${respotas_fisica_cinematica_questao_5[0]}`
            alternativa_2.innerText = `B) ${respotas_fisica_cinematica_questao_5[1]}`
            alternativa_3.innerText = `C) ${respotas_fisica_cinematica_questao_5[2]}`
            alternativa_4.innerText = `D) ${respotas_fisica_cinematica_questao_5[3]}`
            alternativa_5.innerText = `E) ${respotas_fisica_cinematica_questao_5[4]}`
        }
    }
    if (materia_atual == 2) {
        /* ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ QUIMICA ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ */
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
        if (conteudo_atual == 2) {
            video_aula.innerHTML = `<div id="questoes"><p id="pergunta_1">(UERJ) O gás oxigênio é obtido pela decomposição do peróxido de hidrogênio (H₂O₂) de acordo com a reação: <br> Reação: 2H₂O₂ → 2H₂O + O₂ <br> Se 68 g de peróxido de hidrogênio (massa molar: H₂O₂ = 34 g/mol) se decompõem, qual é o volume de oxigênio liberado nas CNTP? (1 mol de gás nas CNTP ocupa 22,4 L)</p></div>`
            alternativas_area.style.width = `75%`
            alternativas_area.style.height = `30vw`
            alternativa_1.innerText = `A) ${respotas_quimica_estequiometria_questao_5[0]}`
            alternativa_2.innerText = `B) ${respotas_quimica_estequiometria_questao_5[1]}`
            alternativa_3.innerText = `C) ${respotas_quimica_estequiometria_questao_5[2]}`
            alternativa_4.innerText = `D) ${respotas_quimica_estequiometria_questao_5[3]}`
            alternativa_5.innerText = `E) ${respotas_quimica_estequiometria_questao_5[4]}`
        }
    }
    if (materia_atual == 3) {
        /* ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ PORTUGUES ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ */
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

/* VERIFICAR QUESTÃO SE ESTÁ CORRETA! ================================================================================================*/
alternativa_1.addEventListener("click", respondido_alternativa_1)
alternativa_2.addEventListener("click", respondido_alternativa_2)
alternativa_3.addEventListener("click", respondido_alternativa_3)
alternativa_4.addEventListener("click", respondido_alternativa_4)
alternativa_5.addEventListener("click", respondido_alternativa_5)

/*if (resposta_1 == `A) ${respotas_fisica_mecanica_questao_1[0]}`) {
        window.alert("correto")
    }*/
function respondido_alternativa_1() {
    var resposta_1 = alternativa_1.innerText || alternativa_1.textContent;
    /* ~~~~~~~~~~~~~~~~ FISICA ~~~~~~~~~~~~~~~*/
    if (materia_atual == 1) {
        /* ~~~~~~~~~~~~~~~~ MECANICA ~~~~~~~~~~~~~~~*/
        if (conteudo_atual == 1) {
            if (questao_atual == 1) {

            }
            if (questao_atual == 2) {
                
            }
            if (questao_atual == 3) {
                
            }
            if (questao_atual == 4) {
                
            }
            if (questao_atual == 5) {
                
            }
        }
        /* ~~~~~~~~~~~~~~~~ CINEMATICA ~~~~~~~~~~~~~~~*/
        if (conteudo_atual == 2) {
            if (questao_atual == 1) {

            }
            if (questao_atual == 2) {
                
            }
            if (questao_atual == 3) {
                
            }
            if (questao_atual == 4) {
                
            }
            if (questao_atual == 5) {
                
            }
        }
    }
    /* ~~~~~~~~~~~~~~~~ QUIMICA ~~~~~~~~~~~~~~~*/
    if (materia_atual == 2) {
        /* ~~~~~~~~~~~~~~~~ INTERMOLECULARES ~~~~~~~~~~~~~~~*/
        if (conteudo_atual == 1) {
            if (questao_atual == 1) {

            }
            if (questao_atual == 2) {
                
            }
            if (questao_atual == 3) {
                
            }
            if (questao_atual == 4) {
                
            }
            if (questao_atual == 5) {
                
            }
        }
        /* ~~~~~~~~~~~~~~~~ ESTIQUIOMETRIA ~~~~~~~~~~~~~~~*/
        if (conteudo_atual == 2) {
            if (questao_atual == 1) {

            }
            if (questao_atual == 2) {
                
            }
            if (questao_atual == 3) {
                
            }
            if (questao_atual == 4) {
                
            }
            if (questao_atual == 5) {
                
            }
        }   
    }
    /* ~~~~~~~~~~~~~~~~ PORTUGUES ~~~~~~~~~~~~~~~*/
    if (materia_atual == 3) {
        /* ~~~~~~~~~~~~~~~~ ORAÇÕES ~~~~~~~~~~~~~~~*/
        if (conteudo_atual == 1) {
            if (questao_atual == 1) {

            }
            if (questao_atual == 2) {
                
            }
            if (questao_atual == 3) {
                
            }
            if (questao_atual == 4) {
                
            }
            if (questao_atual == 5) {
                
            }
        }
    }
}

/* ~~~~~~~~~~~~~~~~ ======================================================================================================== ~~~~~~~~~~~~~~~*/
function respondido_alternativa_2() {
    var resposta_2 = alternativa_2.innerText || alternativa_2.textContent;
    if (materia_atual == 1) {
        if (conteudo_atual == 1) {
            if (questao_atual == 1) {

            }
            if (questao_atual == 2) {
                
            }
            if (questao_atual == 3) {
                
            }
            if (questao_atual == 4) {
                
            }
            if (questao_atual == 5) {
                
            }
        }
        if (conteudo_atual == 2) {
            if (questao_atual == 1) {

            }
            if (questao_atual == 2) {
                
            }
            if (questao_atual == 3) {
                
            }
            if (questao_atual == 4) {
                
            }
            if (questao_atual == 5) {
                
            }
        }
    }
    if (materia_atual == 2) {
        if (conteudo_atual == 1) {
            if (questao_atual == 1) {

            }
            if (questao_atual == 2) {
                
            }
            if (questao_atual == 3) {
                
            }
            if (questao_atual == 4) {
                
            }
            if (questao_atual == 5) {
                
            }
        }
        if (conteudo_atual == 2) {
            if (questao_atual == 1) {

            }
            if (questao_atual == 2) {
                
            }
            if (questao_atual == 3) {
                
            }
            if (questao_atual == 4) {
                
            }
            if (questao_atual == 5) {
                
            }
        }
    }
    if (materia_atual == 3) {
        if (conteudo_atual == 1) {
            if (questao_atual == 1) {

            }
            if (questao_atual == 2) {
                
            }
            if (questao_atual == 3) {
                
            }
            if (questao_atual == 4) {
                
            }
            if (questao_atual == 5) {
                
            }
        }
    }
}
function respondido_alternativa_3() {
    var resposta_3 = alternativa_3.innerText || alternativa_2.textContent;
    if (materia_atual == 1) {
        if (conteudo_atual == 1) {
            if (questao_atual == 1) {

            }
            if (questao_atual == 2) {
                
            }
            if (questao_atual == 3) {
                
            }
            if (questao_atual == 4) {
                
            }
            if (questao_atual == 5) {
                
            }
        }
        if (conteudo_atual == 2) {
            if (questao_atual == 1) {

            }
            if (questao_atual == 2) {
                
            }
            if (questao_atual == 3) {
                
            }
            if (questao_atual == 4) {
                
            }
            if (questao_atual == 5) {
                
            }
        }
    }
    if (materia_atual == 2) {
        if (conteudo_atual == 1) {
            if (questao_atual == 1) {

            }
            if (questao_atual == 2) {
                
            }
            if (questao_atual == 3) {
                
            }
            if (questao_atual == 4) {
                
            }
            if (questao_atual == 5) {
                
            }
        }
        if (conteudo_atual == 2) {

        }
    }
    if (materia_atual == 3) {
        if (conteudo_atual == 1) {
            if (questao_atual == 1) {

            }
            if (questao_atual == 2) {
                
            }
            if (questao_atual == 3) {
                
            }
            if (questao_atual == 4) {
                
            }
            if (questao_atual == 5) {
                
            }
        }
    }
}
function respondido_alternativa_4() {
    var resposta_4 = alternativa_4.innerText || alternativa_3.textContent;
    if (materia_atual == 1) {
        if (conteudo_atual == 1) {
            if (questao_atual == 1) {

            }
            if (questao_atual == 2) {
                
            }
            if (questao_atual == 3) {
                
            }
            if (questao_atual == 4) {
                
            }
            if (questao_atual == 5) {
                
            }
        }
        if (conteudo_atual == 2) {
            if (questao_atual == 1) {

            }
            if (questao_atual == 2) {
                
            }
            if (questao_atual == 3) {
                
            }
            if (questao_atual == 4) {
                
            }
            if (questao_atual == 5) {
                
            }
        }
    }
    if (materia_atual == 2) {
        if (conteudo_atual == 1) {
            if (questao_atual == 1) {

            }
            if (questao_atual == 2) {
                
            }
            if (questao_atual == 3) {
                
            }
            if (questao_atual == 4) {
                
            }
            if (questao_atual == 5) {
                
            }
        }
        if (conteudo_atual == 2) {
            if (questao_atual == 1) {

            }
            if (questao_atual == 2) {
                
            }
            if (questao_atual == 3) {
                
            }
            if (questao_atual == 4) {
                
            }
            if (questao_atual == 5) {
                
            }
        }
    }
    if (materia_atual == 3) {
        if (conteudo_atual == 1) {
            if (questao_atual == 1) {

            }
            if (questao_atual == 2) {
                
            }
            if (questao_atual == 3) {
                
            }
            if (questao_atual == 4) {
                
            }
            if (questao_atual == 5) {
                
            }
        }
    }
}
function respondido_alternativa_5() {
    var resposta_5 = alternativa_5.innerText || alternativa_5.textContent;
    if (materia_atual == 1) {
        if (conteudo_atual == 1) {
            if (questao_atual == 1) {

            }
            if (questao_atual == 2) {
                
            }
            if (questao_atual == 3) {
                
            }
            if (questao_atual == 4) {
                
            }
            if (questao_atual == 5) {
                
            }
        }
        if (conteudo_atual == 2) {
            if (questao_atual == 1) {

            }
            if (questao_atual == 2) {
                
            }
            if (questao_atual == 3) {
                
            }
            if (questao_atual == 4) {
                
            }
            if (questao_atual == 5) {
                
            }
        }
    }
    if (materia_atual == 2) {
        if (conteudo_atual == 1) {
            if (questao_atual == 1) {

            }
            if (questao_atual == 2) {
                
            }
            if (questao_atual == 3) {
                
            }
            if (questao_atual == 4) {
                
            }
            if (questao_atual == 5) {
                
            }
        }
        if (conteudo_atual == 2) {
            if (questao_atual == 1) {

            }
            if (questao_atual == 2) {
                
            }
            if (questao_atual == 3) {
                
            }
            if (questao_atual == 4) {
                
            }
            if (questao_atual == 5) {
                
            }
        }
    }
    /* ~~~~~~~~~~~~~~~~ PORTUGUES ~~~~~~~~~~~~~~~*/
    if (materia_atual == 3) {
        /* ~~~~~~~~~~~~~~~~ ORAÇÕES ~~~~~~~~~~~~~~~*/
        if (conteudo_atual == 1) {
            if (questao_atual == 1) {

            }
            if (questao_atual == 2) {
                
            }
            if (questao_atual == 3) {
                
            }
            if (questao_atual == 4) {
                
            }
            if (questao_atual == 5) {
                
            }
        }
    }
}

let creditos = document.getElementById("creditos")
