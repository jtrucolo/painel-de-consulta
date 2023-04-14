//CONSTANTES QUE BUSCAM DO HTML O QUE FOI SELECIONADO
const selectElement = document.getElementById('select_excel');
const detailItens = document.getElementById('detail_itens');
const caminhoElement = detailItens.querySelector('.primary_text_road');
const descricaoElement = detailItens.querySelector('.primary_text_title');
const descPgto = detailItens.querySelector('.primary_text_desc');
const imagemElement = detailItens.querySelector('.primary_image img');
const descReceb = detailItens.querySelector('.descReceb');
const imgReceb = detailItens.querySelector('.secondary_image img');


//CRIA AS INFORMAÇÕES DE CADA EMPRESA E SEUS DETALHES NA TELA
function updateDetailItens(selectedOption) {
  const selectedInfo = infoMap[selectedOption];
  if (selectedInfo) {
    detailItens.style.display = 'block';
    //CAMINHO PARA O IMPORTADOR
    caminhoElement.textContent = selectedInfo.caminho;
    //DESCRIÇÃO DA EMPRESA
    descricaoElement.textContent = selectedInfo.descricao;
    //VARIAVEL PARA PAGAMENTOS
    descPgto.textContent = selectedInfo.descPgto;
    //IMAGEM DOS RECEBIMENTOS
    imgReceb.src = selectedInfo.imgReceb;
    //DESCRIÇÃO DE RECEBIMENTO
    descReceb.textContent = selectedInfo.descReceb;
    //IMAGEM DE PAGAMENTO
    imagemElement.src = selectedInfo.imagem;
  } else {
    detailItens.style.display = 'none'; //QUANDO NÃO SELECIONAR NENHUMA OPÇÃO DO MENU NÃO EXIBE NADA
  }
}

//VERIFICA A ALTERAÇÃO DE OPÇÕES NO MENU
selectElement.addEventListener('change', function(event) {
  const selectedOption = event.target.value;
  updateDetailItens(selectedOption);
});
const initialOption = selectElement.value;
updateDetailItens(initialOption);

document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    var select = document.getElementById("select_excel");
    select.value = "search_box";
    detailItens.style.display = 'none';
  }
});
