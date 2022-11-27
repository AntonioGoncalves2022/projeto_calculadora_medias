const form = document.getElementById("form-atividade");
const imgAprovado = '<img src="./Imagens/aprovado.png" alt= "Emoji celebrando" />';
const imgReprovado = '<img src="./Imagens/reprovado.png" alt= "Emoji decepcionado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class= "resultado Aprovado">Aprovado</span>';
const spanReprovado = '<span class= "resultado Reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima: "));

let linhas = "";

form.addEventListener("submit",function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById("nome-atividade");
    const inputNotaAtividade = document.getElementById("nota-atividade");

    if (atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida`);
    }else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    
        let linha = `<tr>`;
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
    }

    inputNomeAtividade.value = "";
    inputNotaAtividade.value = "";
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById("média-final-valor").innerHTML = mediaFinal.toFixed(2);
    document.getElementById("média-final-resultado").innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaDasnotas = 0;

    for(let i = 0; i < notas.length; i++) {
        somaDasnotas += notas[i];
    }
    return somaDasnotas / notas.length;
}