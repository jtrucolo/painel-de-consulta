const selectAltElement = document.getElementById('select_conci');
const detailItensAlt = document.getElementById('detail_itens');
const descricaoAltElement = detailItensAlt.querySelector('.primary_text_title');
const caminhoAltElement = detailItensAlt.querySelector('.primary_text_road');
const imagemAltElement = detailItensAlt.querySelector('.primary_image img');
const descRecebAlt = detailItensAlt.querySelector('.descReceb');
const imgRecebAlt = detailItensAlt.querySelector('.secondary_image img');
const descPgtoAlt = detailItensAlt.querySelector('.descPgto');

function updateDetailItens_conciliador(selectedOption) {
  const selectedInfoAlt = infoMap_conci[selectedOption];
  if (selectedInfoAlt) {
    detailItensAlt.style.display = 'block';
    descricaoAltElement.textContent = selectedInfoAlt.descricao_conci;
    caminhoAltElement.textContent = selectedInfoAlt.caminho_conci;
    imagemAltElement.src = selectedInfoAlt.imagem_conci;
    imgRecebAlt.src = selectedInfoAlt.cls_imagem;
    descRecebAlt.textContent = selectedInfoAlt.cls_text;   
  } else {
    detailItensAlt.style.display = 'none';
  }
}

selectAltElement.addEventListener('change', function(event) {
  const selectedOptionAlt = event.target.value;
  updateDetailItens_conciliador(selectedOptionAlt);
});
const initialOptionAlt = selectAltElement.value;
updateDetailItens_conciliador(initialOptionAlt);

document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    var select = document.getElementById("select_conci");
    select.value = "search_box";
    detailItens.style.display = 'none';
  }
});
