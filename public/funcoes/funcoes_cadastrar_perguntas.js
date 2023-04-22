// pegar titulo dp teste passado na url
const url = window.location.pathname
const parts = url.split('/')
const nomeTeste = parts[3]

// Pegear elemneto h1 para adiiconar o nome do teste no html
const nome = document.createTextNode(nomeTeste)
const h = document.getElementById("nome")

h.appendChild(nome)

var numPerguntaNova = 0
var numPerguntaTeste = 0

var titulo
var opAT
var opBT
var opCT
var opDT
var opET
var opCertaT

// função para pegar as perguntas do teste
async function getPerguntas() {
    try {
        const response = await fetch('http://localhost:8081')
        const data = await response.json();
        
        // pega as perguntas e alternativas do teste selecionado e chama a funcao de perguntas como true
        for(let teste of data) {
            if(teste.title === nomeTeste){
                var i;
                for(i=0; i<teste.perguntas.length; i++){
                    if(teste.perguntas[i].tituloDaPergunta != ''){
                        titulo = teste.perguntas[i].tituloDaPergunta
                        opAT = teste.perguntas[i].opcaoA
                        opBT = teste.perguntas[i].opcaoB
                        opCT = teste.perguntas[i].opcaoC
                        opDT = teste.perguntas[i].opcaoD
                        opET = teste.perguntas[i].opcaoE
                        opCertaT = teste.perguntas[i].resposta
                        addPergunta(true)
                    }
                }     
            }
        }
    }catch(erro) {
        console.log(erro);
    }
}

// funçao para adicionar novos campos de cadastro de perguntas no html
function addPergunta(b){

    // cria o html das perguntas
    const sec = document.getElementById("sec")
    const art = document.createElement("article")
    const formu = document.createElement("form")

    if(b){

      numPerguntaTeste++;

      art.setAttribute("id", "art"+numPerguntaTeste)
      const titlePergunta = document.createElement("input")
      titlePergunta.type = "text"
      titlePergunta.setAttribute("id", "pergunta"+numPerguntaTeste)
      titlePergunta.setAttribute("class", "op"+numPerguntaTeste)
      const txtPergunta = document.createElement("label")
      const textPergunta = document.createTextNode("Pergunta "+numPerguntaTeste)
      txtPergunta.setAttribute("for", "titlePergunta")
      const opA = document.createElement("input")
  
      opA.type = "text"
      opA.setAttribute("id", "opA"+numPerguntaTeste)
      opA.setAttribute("class", "op"+numPerguntaTeste)
      const txtopA = document.createElement("label")
      const textopA = document.createTextNode("Opcão A")
      txtopA.setAttribute("for", "opA"+numPerguntaTeste)
  
      const opB = document.createElement("input")
      opB.type = "text"
      opB.setAttribute("id", "opB"+numPerguntaTeste)
      opB.setAttribute("class", "op"+numPerguntaTeste)
      const txtopB = document.createElement("label")
      const textopB = document.createTextNode("Opcão B")
      txtopB.setAttribute("for", "opB"+numPerguntaTeste)
  
      const opC = document.createElement("input")
      opC.type = "text"
      opC.setAttribute("id", "opC"+numPerguntaTeste)
      opC.setAttribute("class", "op"+numPerguntaTeste)
      const txtopC = document.createElement("label")
      const textopC = document.createTextNode("Opcão C")
      txtopC.setAttribute("for", "opC"+numPerguntaTeste)
  
      const opD = document.createElement("input")
      opD.type = "text"
      opD.setAttribute("id", "opD"+numPerguntaTeste)
      opD.setAttribute("class", "op"+numPerguntaTeste)
      const txtopD = document.createElement("label")
      const textopD = document.createTextNode("Opcão D")
      txtopD.setAttribute("for", "opD"+numPerguntaTeste)
  
      const opE = document.createElement("input")
      opE.type = "text"
      opE.setAttribute("id", "opE"+numPerguntaTeste)
      opE.setAttribute("class", "op"+numPerguntaTeste)
      const txtopE = document.createElement("label")
      const textopE = document.createTextNode("Opcão E")
      txtopE.setAttribute("for", "opE"+numPerguntaTeste)
  
      const opCerta = document.createElement("input")
      opCerta.type = "text"
      opCerta.setAttribute("id", "opCerta"+numPerguntaTeste)
      opCerta.setAttribute("class", "op"+numPerguntaTeste)
      const txtopCerta = document.createElement("label")
      const textopCerta = document.createTextNode("Resposta Correta")
      txtopCerta.setAttribute("for", "opCerta"+numPerguntaTeste)
  

      opA.setAttribute("id", "opA"+numPerguntaTeste)
      opA.setAttribute("class", "op"+numPerguntaTeste)
      opA.setAttribute("value", opAT)
      opB.setAttribute("value", opBT)
      opC.setAttribute("value", opCT)
      opD.setAttribute("value", opDT)
      opE.setAttribute("value", opET)
      opCerta.setAttribute("value", opCertaT)
    }else{
      numPerguntaNova++;

      art.setAttribute("id", "art"+numPerguntaNova)
      const titlePergunta = document.createElement("input")
      titlePergunta.type = "text"
      titlePergunta.setAttribute("id", "pergunta"+numPerguntaNova)
      titlePergunta.setAttribute("class", "op"+numPerguntaNova)
      const txtPergunta = document.createElement("label")
      const textPergunta = document.createTextNode("Pergunta "+numPerguntaNova)
      txtPergunta.setAttribute("for", "titlePergunta")
      const opA = document.createElement("input")
  
      opA.type = "text"
      opA.setAttribute("id", "opA"+numPerguntaNova)
      opA.setAttribute("class", "op"+numPerguntaNova)
      const txtopA = document.createElement("label")
      const textopA = document.createTextNode("Opcão A")
      txtopA.setAttribute("for", "opA"+numPerguntaNova)
  
      const opB = document.createElement("input")
      opB.type = "text"
      opB.setAttribute("id", "opB"+numPerguntaNova)
      opB.setAttribute("class", "op"+numPerguntaNova)
      const txtopB = document.createElement("label")
      const textopB = document.createTextNode("Opcão B")
      txtopB.setAttribute("for", "opB"+numPerguntaNova)
  
      const opC = document.createElement("input")
      opC.type = "text"
      opC.setAttribute("id", "opC"+numPerguntaNova)
      opC.setAttribute("class", "op"+numPerguntaNova)
      const txtopC = document.createElement("label")
      const textopC = document.createTextNode("Opcão C")
      txtopC.setAttribute("for", "opC"+numPerguntaNova)
  
      const opD = document.createElement("input")
      opD.type = "text"
      opD.setAttribute("id", "opD"+numPerguntaNova)
      opD.setAttribute("class", "op"+numPerguntaNova)
      const txtopD = document.createElement("label")
      const textopD = document.createTextNode("Opcão D")
      txtopD.setAttribute("for", "opD"+numPerguntaNova)
  
      const opE = document.createElement("input")
      opE.type = "text"
      opE.setAttribute("id", "opE"+numPerguntaNova)
      opE.setAttribute("class", "op"+numPerguntaNova)
      const txtopE = document.createElement("label")
      const textopE = document.createTextNode("Opcão E")
      txtopE.setAttribute("for", "opE"+numPerguntaNova)
  
      const opCerta = document.createElement("input")
      opCerta.type = "text"
      opCerta.setAttribute("id", "opCerta"+numPerguntaNova)
      opCerta.setAttribute("class", "op"+numPerguntaNova)
      const txtopCerta = document.createElement("label")
      const textopCerta = document.createTextNode("Resposta Correta")
      txtopCerta.setAttribute("for", "opCerta"+numPerguntaNova)

    }

    txtPergunta.appendChild(textPergunta)
    txtopA.appendChild(textopA)
    txtopB.appendChild(textopB)
    txtopC.appendChild(textopC)
    txtopD.appendChild(textopD)
    txtopE.appendChild(textopE)
    txtopCerta.appendChild(textopCerta)

    formu.appendChild(txtPergunta)
    formu.appendChild(titlePergunta)
    formu.appendChild(txtopA)
    formu.appendChild(opA)
    formu.appendChild(txtopB)
    formu.appendChild(opB)
    formu.appendChild(txtopC)
    formu.appendChild(opC)
    formu.appendChild(txtopD)
    formu.appendChild(opD)
    formu.appendChild(txtopE)
    formu.appendChild(opE)
    formu.appendChild(txtopCerta)
    formu.appendChild(opCerta)
    
    art.appendChild(formu)
    sec.appendChild(art)
}

function salvarPergunta(){
    let listPerguntas = [] // lista de perguntas

    //função para pergar valor da html e adicionar na lista, formato json
    for(let i=1; i<=numPergunta; i++) { //para cada pergunta criada faça
        var perguntas = document.querySelectorAll(".op"+i)
        const test =  {// salvar os valores nos campos coerentes
            "tituloDaPergunta": perguntas[0].value,
            "opcaoA": perguntas[1].value,
            "opcaoB": perguntas[2].value,
            "opcaoC": perguntas[3].value,
            "opcaoD": perguntas[4].value,
            "opcaoE": perguntas[5].value,
            "resposta": perguntas[6].value
        }

        listPerguntas.push(test) // adiciona na lista
    }

    
    fetch('http://localhost:8081/')
    .then(response => response.json())
    .then(data => {

        // Parse the JSON data into a JavaScript object
        data = JSON.parse(JSON.stringify(data));
        // console.log(teste)
        for(let teste of data) {
            if(teste.title == nomeTeste) {
                if(teste.perguntas == "") {
                    teste.perguntas = listPerguntas
                } else {
                    for(let i=0; i<teste.perguntas.length; i++) {
                        listPerguntas.push(teste.perguntas[i])
                    }

                    teste.perguntas = listPerguntas
                }
            }
        }

        // Convert the JavaScript object back to JSON format
        const newJson = JSON.stringify(data);

        // Write the new JSON data back to the file
        fetch('http://localhost:8081/add', {
        method: 'PUT',
        body: newJson,
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(response => console.log('Data inserted successfully!'))
        .catch(error => console.error('Error:', error));
    }).then()
    .catch(error => console.error('Error:', error));
}   

getPerguntas()