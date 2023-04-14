const selectArqElement = document.getElementById('select_arq');
const detailItensArq = document.getElementById('detail_itens');
const descricaoArqElement = detailItensArq.querySelector('.primary_text_title');
const descArqElement = detailItensArq.querySelector('.primary_text_desc');
const caminhoArqElement = detailItensArq.querySelector('.primary_text_road');
const imagemArqElement = detailItensArq.querySelector('.primary_image img');
const secImagemArqElement = detailItensArq.querySelector('.secondary_image img');
const recebArqElement = detailItensArq.querySelector('.descReceb');
//const pgtoArqElement = detailItensArq.querySelector('.descPgto');

function updateDetailItens_arquivos(selectedOption_arq) {
  const selectedInfoArq = infoMapArq[selectedOption_arq];
  if (selectedInfoArq) {
    detailItensArq.style.display = 'block';
    descricaoArqElement.textContent = selectedInfoArq.desc_arq;
    caminhoArqElement.innerHTML = selectedInfoArq.lista_arq;
    imagemArqElement.src = selectedInfoArq.cls_image;
    secImagemArqElement.src = selectedInfoArq.cls_sec_imagem;
    descArqElement.textContent = selectedInfoArq.cls_desc;
    recebArqElement.textContent = selectedInfoArq.cls_descReceb;
    //pgtoArqElement.textContent = selectedInfoArq.cls_descPgto;
  } else {
    detailItensArq.style.display = 'none';
  }
}

selectArqElement.addEventListener('change', function(event_arq) {
  const selectedOptionArq = event_arq.target.value;
  updateDetailItens_arquivos(selectedOptionArq);
});
const initialOptionArq = selectArqElement.value;
updateDetailItens_arquivos(initialOptionArq);

document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    var select = document.getElementById("select_arq");
    select.value = "search_box";
    detailItens.style.display = 'none';
  }
});
