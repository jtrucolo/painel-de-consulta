// obter os elementos select
var selectArq = document.getElementById("select_arq");
var selectExcel = document.getElementById("select_excel");
var selectConci = document.getElementById("select_conci");

// adicionar um listener para detectar mudanças em selectArq
selectArq.addEventListener("change", function() {
  // voltar selectExcel e selectConci para a primeira opção
  selectExcel.selectedIndex = 0;
  selectConci.selectedIndex = 0;
});

// adicionar um listener para detectar mudanças em selectExcel
selectExcel.addEventListener("change", function() {
  // voltar selectArq e selectConci para a primeira opção
  selectArq.selectedIndex = 0;
  selectConci.selectedIndex = 0;
});

// adicionar um listener para detectar mudanças em selectConci
selectConci.addEventListener("change", function() {
  // voltar selectArq e selectExcel para a primeira opção
  selectArq.selectedIndex = 0;
  selectExcel.selectedIndex = 0;
});