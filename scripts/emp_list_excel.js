//SCRIPT PARA CRIAR OS OBJETOS "EMPRESA"

const info857 = {
    descricao: 'Empresa 857 PRO SERVICOS EIRELI utiliza arquivos de Excel para Pagamentos e Recebimentos sendo que para os 2 Modelos de importadores é utilizado o mesmo arquivo.',
    caminho: 'Caminho para o Importador: M:\\Fisc_Contabil\\EMPRESAS\\01 - EMPRESAS ATIVAS E INATIVAS\\857 PRO SERVICOS EIRELI\\-Novo Importador-',
    descPgto: 'Arquivo para o Importador',
    imagem: './assets/emp_arquivos/excelClass/857_arq/857.jpg'
  
  };
  
  const infoAeg = {
    descricao: 'Empresa AEG COMÉRCIO DE SISTEMAS DE AQUECIMENTO LTDA utiliza arquivos Excel para Recebimento sendo o modelo Francesinha Sicredi.',
    caminho: 'Caminho para o Importador: M:\\Fisc_Contabil\\EMPRESAS\\01 - EMPRESAS ATIVAS E INATIVAS\\AEG COMÉRCIO DE SISTEMAS DE AQUECIMENTO LTDA\\Novo Importador',
    descPgto: 'Arquivo para o Importador',
    imagem: './assets/emp_arquivos/excelClass/AEG_arq/aeg.jpg'
  };
  
  const infoAgriperin = {
    descricao: 'Empresa Agriperin Solucoes em Pulverizadores utiliza arquivos Excel para Recebimento sendo o modelo Francesinha Sicredi.',
    caminho: 'Caminho para o Importador: M:\\Fisc_Contabil\\EMPRESAS\\01 - EMPRESAS ATIVAS E INATIVAS\\Agriperin Solucoes em Pulverizadores\\--- Importador Novo ---\\ImportadorFranscesinhaSicredi',
    descPgto: 'Arquivo para o Importador',
    imagem: './assets/emp_arquivos/excelClass/AEG_arq/aeg.jpg'
  };
  
  const infoArcari = {
    descricao: 'Empresa Arcari Empreend. Imob. Ltda utiliza arquivos Excel para Recebimento e Pagamentos.',
    caminho: 'Caminho para o Importador: M:\\Fisc_Contabil\\EMPRESAS\\01 - EMPRESAS ATIVAS E INATIVAS\\Arcari Empreend. Imob. Ltda\\ARQUIVOS IMPORTAÇÃO\\Importador Novo',
    //CONDICIONAL PARA CRIAR ARQUIVOS DE RECEBIMENTO E PAGAMENTO
    descPgto: 'Arquivo para Pagamento.', 
    imagem: './assets/emp_arquivos/excelClass/Arcari_arq/arcari.jpg',
    descReceb: 'Arquivo para Recebimento',
    imgReceb: './assets/emp_arquivos/excelClass/Arcari_arq/arcariReceb.jpg' 
  };

  const infoArg = {
    descricao: 'Empresa ARG Mangueiras utiliza arquivos Excel para Recebimento e Pagamento',
    caminho: 'Caminho para o Importador: M:\\Fisc_Contabil\EMPRESAS\\01 - EMPRESAS ATIVAS E INATIVAS\\ARG Mangueiras\\--- Importador ---',
    //CONDICIONAL PARA CRIAR ARQUIVOS DE RECEBIMENTO E PAGAMENTO
    descPgto: 'Arquivo para Pagamento.', 
    imagem: './assets/emp_arquivos/excelClass/ARG_arq/argPgto.jpg',
    descReceb: 'Arquivo para Recebimento',
    imgReceb: './assets/emp_arquivos/excelClass/ARG_arq/argReceb.jpg' 
  }

  const infoAtiva = {
    descricao: 'Empresa Ativa Empreendimentos Imobiliarios utiliza arquivos Excel para Pagamentos.',
    caminho: 'Caminho para o Importador: M:\\Fisc_Contabil\\EMPRESAS\\01 - EMPRESAS ATIVAS E INATIVAS\\Ativa Empreendimentos Imobiliarios\\ImportarAPagar',
    descPgto: 'Arquivo para o Importador',descPgto: 'Arquivo para o Importador',

    imagem: './assets/emp_arquivos/excelClass/Ativa_arq/ativaPgto.jpg'
  }

  const infoBalen = {
    descricao: 'Empresa BALEN ADVOCACIA SOCIEDADE DE ADVOGADOS utiliza arquivos Excel para Caixa e Unicred.',
    caminho: 'Caminho para o Importador: M:\\Fisc_Contabil\\EMPRESAS\\01 - EMPRESAS ATIVAS E INATIVAS\\BALEN ADVOCACIA SOCIEDADE DE ADVOGADOS\\Importador',
    //CONDICIONAO DOS ARQUIVOS E INFORMAÇÕES
    descPgto: 'Arquivo Caixa.', 
    imagem: './assets/emp_arquivos/excelClass/Balen_arq/balenCaixa.jpg',
    descReceb: 'Arquivo Unicred.',
    imgReceb: './assets/emp_arquivos/excelClass/Balen_arq/balenUnicred.jpg'
  }
  
  const infoBarreiro = {
    descricao: 'Empresa Barreiro e Wawzeniak Ltda utiliza arquivos Excel para Recebimento.',
    caminho: 'Caminho para o Importador: M:\\Fisc_Contabil\\EMPRESAS\\01 - EMPRESAS ATIVAS E INATIVAS\\Barreiro e Wawzeniak Ltda\\NovoImportador',
    descPgto: 'Arquivo para o Importador',descPgto: 'Arquivo para o Importador',

    imagem: './assets/emp_arquivos/excelClass/Barreiro_arq/recebimentosMes.jpg',
  }

  const infoBR470 = {
    descricao: 'Empresa Restaurante BR 470 utiliza arquivos Excel para Recebimento de Cartão de Crédito e Francesinha Sicredi.',
    caminho: 'Caminho para o Importador: M:\\Fisc_Contabil\\EMPRESAS\\01 - EMPRESAS ATIVAS E INATIVAS\\Restaurante BR 470\\Importador',
    //CONDICIONAL PARA CRIAR ARQUIVOS DE RECEBIMENTO E PAGAMENTO
    descPgto: 'Arquivo Recebimento Cartão de Crédito .', 
    imagem: './assets/emp_arquivos/excelClass/BR470_arq/cartaoCredito.jpg',
    descReceb: 'Arquivo Francesinha Sicredi',
    imgReceb: './assets/emp_arquivos/excelClass/BR470_arq/franSicredi.jpg'
  }

  const infoBuffon = {
    descricao: 'Empresa Buffon utiliza arquivos Txt para Pagamentos e Recebimentos.',
    caminho: 'Caminho para o Importador: M:\\Fisc_Contabil\\EMPRESAS\\01 - EMPRESAS ATIVAS E INATIVAS\\Vanderlei Buffon\\Novo Importador',
    //CONDICIONAL PARA CRIAR ARQUIVOS DE RECEBIMENTO E PAGAMENTO
    descPgto: 'Arquivo para Pagamentos.', 
    imagem: './assets/emp_arquivos/excelClass/Buffon_arq/buffonPgto.jpg',
    descReceb: 'Arquivo para Recebimentos.',
    imgReceb: './assets/emp_arquivos/excelClass/Buffon_arq/buffonReceb.jpg'
  }

  const infoCacaPesca = {
    descricao: 'Empresa Clube de Caça e Pesca Santo Huberto arquivos Excel para Pagamentos.',
    caminho: 'Caminho para o Importador: M:\\Fisc_Contabil\\EMPRESAS\\01 - EMPRESAS ATIVAS E INATIVAS\\Clube de Caça e Pesca Santo Huberto\\NovoImportador',
    descPgto: 'Arquivo para o Importador',descPgto: 'Arquivo para o Importador',

    imagem: './assets/emp_arquivos/excelClass/cacaPesca_arq/pagamento.jpg',
  }

  const infoCasaA = {
    descricao: 'Empresa CASA A utiliza arquivos Excel para Pagamentos e Recebimentos sendo que para ambos os importadores o arquivo segue o mesmo Layout.',
    caminho: 'Caminho para o Importador: M:\\Fisc_Contabil\\EMPRESAS\\01 - EMPRESAS ATIVAS E INATIVAS\\CASA A INDÚSTRIA DE MÓVEIS LTDA\ARQUIVOS IMPORTAÇÃO\\Importador CASA A',
    descPgto: 'Arquivo para o Importador',descPgto: 'Arquivo para o Importador',

    imagem: './assets/emp_arquivos/excelClass/casaA_arq/pagamento.jpg',
  }

  const infoCasaMadeiras = {
    descricao: 'Empresa Casa das Madeiras utiliza arquivos Excel para Francesinha Sicredi.',
    caminho: 'Caminho para o Importador: M:\\Fisc_Contabil\\EMPRESAS\\01 - EMPRESAS ATIVAS E INATIVAS\\Casa das Madeiras\\Extratos\\Importação',
    descPgto: 'Arquivo para o Importador',descPgto: 'Arquivo para o Importador',

    imagem: './assets/emp_arquivos/excelClass/casaMadeiras_arq/franSicredi.jpg',
  }

  const infoVetvida = {
    descricao: 'Empresa Clinica Veterinaria Vetvida utiliza arquivos Excel para Pagamentos e Recebimentos, sendo que a empresa possui uma variação do importador para importação Anual ou Mensal.',
    caminho: 'Caminho para o Importador: M:\Fisc_Contabil\\EMPRESAS\\01 - EMPRESAS ATIVAS E INATIVAS\\CLINICA VETERINARIA VETVIDA LTDA\\Importador',
    descPgto: 'Arquivo para o Importador',descPgto: 'Arquivo para o Importador',

    imagem: './assets/emp_arquivos/excelClass/Vetvida_arq/pgto_receb.jpg',
  }

  const infoGemate = {
    descricao: 'Empresa  utiliza arquivos Excel para Pagamentos.',
    caminho: 'Caminho para o Importador: M:\\Fisc_Contabil\\EMPRESAS\\01 - EMPRESAS ATIVAS E INATIVAS\\Construtora Gamate Ltda\\Importador\\ImportarAPagar',
    descPgto: 'Arquivo para o Importador',descPgto: 'Arquivo para o Importador',

    imagem: './assets/emp_arquivos/excelClass/Gemate_arq/pagamento.jpg',
  }

  const infoCristoRei = {
    descricao: 'Empresa CRISTO REI MATERIAIS ELETRICOS LTDA Excel para Pagamentos e Recebimentos.',
    caminho: 'Caminho para o Importador: M:\\Fisc_Contabil\\EMPRESAS\\01 - EMPRESAS ATIVAS E INATIVAS\\CRISTO REI MATERIAIS ELETRICOS LTDA\\NovoImportador',
    //CONDICIONAL PARA CRIAR ARQUIVOS DE RECEBIMENTO E PAGAMENTO
    descPgto: 'Arquivo para Pagamentos.', 
    imagem: './assets/emp_arquivos/excelClass/cristoRei_arq/pagamento.jpg',
    descReceb: 'Arquivo para Recebimentos.',
    imgReceb: './assets/emp_arquivos/excelClass/cristoRei_arq/Recebimento.jpg'
  }

  const infoDiFiori = {
    descricao: 'Empresa Essencia Di Fiori utiliza arquivos Excel para Recebimento sendo o modelo Francesinha Sicredi.',
    caminho: 'Caminho para o Importador: M:\\Fisc_Contabil\\EMPRESAS\\01 - EMPRESAS ATIVAS E INATIVAS\\Essencia Di Fiori\\ImportadorFranscesinhaSicredi',
    descPgto: 'Arquivo para o Importador',descPgto: 'Arquivo para o Importador',

    imagem: './assets/emp_arquivos/excelClass/diFiori_arq/franSicredi.jpg'
  }

  const infoGpComercio = {
    descricao: 'Empresa GP Comércio Varejista de Móveis Eireli Excel para Pagamentos e Recebimentos.',
    caminho: 'Caminho para o Importador: M:\\Fisc_Contabil\\EMPRESAS\\01 - EMPRESAS ATIVAS E INATIVAS\\GP Comércio Varejista de Móveis Eireli- antes Gioconda Pozza\\Importador',
    //CONDICIONAL PARA CRIAR ARQUIVOS DE RECEBIMENTO E PAGAMENTO
    descPgto: 'Arquivo para Pagamentos.', 
    imagem: './assets/emp_arquivos/excelClass/GpComercio_arq/pagamento.jpg',
    descReceb: 'Arquivo para Recebimentos.',
    imgReceb: './assets/emp_arquivos/excelClass/GpComercio_arq/Recebimento.jpg'
  }
  
  const infoGWN = {
    descricao: 'Empresa GWN Indústria e Comércio Ltda Excel para Conciliaçao e Txt  Pagamentos e Recebimentos.',
    caminho: 'Caminho para o Importador: M:\\Fisc_Contabil\\EMPRESAS\\01 - EMPRESAS ATIVAS E INATIVAS\\GWN Indústria e Comércio Ltda\\NovoImportador',
    //CONDICIONAL PARA CRIAR ARQUIVOS DE RECEBIMENTO E PAGAMENTO
    descPgto: 'Arquivo para Pagamentos e Recebimentos.', 
    imagem: './assets/emp_arquivos/excelClass/GWN_arq/pagamento.jpg',
    descReceb: 'Arquivo para Conciliação.',
    imgReceb: './assets/emp_arquivos/excelClass/GWN_arq/conciliacao.jpg'
  }

  const infoIcehot = {
    descricao: 'Empresa Icehot Comunicação Ltda utiliza arquivos Excel para Recebimento sendo o modelo Francesinha Sicredi.',
    caminho: 'Caminho para o Importador: M:\\Fisc_Contabil\\EMPRESAS\\01 - EMPRESAS ATIVAS E INATIVAS\\Icehot Comunicação Ltda\\NovoImportador',
    descPgto: 'Arquivo para o Importador',
    imagem: './assets/emp_arquivos/excelClass/icehot_arq/franSicredi.jpg'
  }

  const infoInviseg = {
    descricao: 'Empresa INVISEG ASSESSORIA EM SEGURANÇA utiliza arquivos Excel para Recebimento sendo o modelo Francesinha Sicredi.',
    caminho: 'Caminho para o Importador: M:\\Fisc_Contabil\\EMPRESAS\\01 - EMPRESAS ATIVAS E INATIVAS\\INVISEG ASSESSORIA EM SEGURANÇA E MEDICINA DO\\Novo Importador',
    descPgto: 'Arquivo para o Importador',
    imagem: './assets/emp_arquivos/excelClass/inviseg_arq/franSicredi.jpg'
  }

  const infoKfuri = {
    descricao: 'Empresa Kfuri & Filhos Ltda Excel para Pagamentos e Recebimentos.',
    caminho: 'Caminho para o Importador: M:\\Fisc_Contabil\\EMPRESAS\\01 - EMPRESAS ATIVAS E INATIVAS\\Kfuri & Filhos Ltda\\NovoImportador',
    //CONDICIONAL PARA CRIAR ARQUIVOS DE RECEBIMENTO E PAGAMENTO
    descPgto: 'Arquivo para Pagamentos.', 
    imagem: './assets/emp_arquivos/excelClass/kfuri_arq/pagamento.jpg',
    descReceb: 'Arquivo para Recebimentos.',
    imgReceb: './assets/emp_arquivos/excelClass/kfuri_arq/recebimento.jpg'
  }

  const infoAnderle = {
    descricao: 'Empresa Mecânica Anderle utiliza arquivos Excel para Pagamentos.',
    caminho: 'Caminho para o Importador: M:\\Fisc_Contabil\\EMPRESAS\\01 - EMPRESAS ATIVAS E INATIVAS\\Mecânica Anderle\\ARQUIVOS IMPORTAÇÃO\\Importador',
    descPgto: 'Arquivo para o Importador',
    imagem: './assets/emp_arquivos/excelClass/Anderle_arq/pagamento.jpg'
  }

  const infoGrepar = {
    descricao: 'Empresa Mercado de Alimentos Grepar Ltda utiliza arquivos Excel para Parcelas de Clientes.',
    caminho: 'Caminho para o Importador: M:\\Fisc_Contabil\\EMPRESAS\\01 - EMPRESAS ATIVAS E INATIVAS\\Mercado de Alimentos Grepar Ltda\\Importador Baixa de Parcelas',
    descPgto: 'Arquivo para o Importador',
    imagem: './assets/emp_arquivos/excelClass/Grepar_arq/parcelas.jpg'
  }

  const infoPadel = {
    descricao: 'Empresa Padel Pro utiliza arquivos Excel para Relatorio do Mes e Pix.',
    caminho: 'Caminho para o Importador: M:\\Fisc_Contabil\\EMPRESAS\\01 - EMPRESAS ATIVAS E INATIVAS\\Padel Pro\\ImportadorRecibos',
    //CONDICIONAO DOS ARQUIVOS E INFORMAÇÕES
    descPgto: 'Arquivo de Relatorio Mensal.', 
    imagem: './assets/emp_arquivos/excelClass/Padel_arq/mesRelat.jpg',
    descReceb: 'Arquivo de Relatorio de Pix.',
    imgReceb: './assets/emp_arquivos/excelClass/Padel_arq/pixRelat.jpg'
  }

  const infoReypel = {
    descricao: 'Empresa Reypel Importadora de Máquinas Ltda utiliza arquivos Excel para Recebimentos e Pagamentos dos bancos Itau e Banrisul, Equivalencias e Dinheiro, tanto para sua Matriz quando para Filial.',
    caminho: 'Caminho para o Importador: M:\\Fisc_Contabil\\EMPRESAS\01 - EMPRESAS ATIVAS E INATIVAS\\Reypel Importadora de Máquinas Ltda\\Novo Importador',
    //CONDICIONAO DOS ARQUIVOS E INFORMAÇÕES
    descPgto: 'Arquivo de Bancos.', 
    imagem: './assets/emp_arquivos/excelClass/Reypel_arq/arquivo_bancos.jpg',
    descReceb: 'Arquivo de Equivalencias.',
    imgReceb: './assets/emp_arquivos/excelClass/Reypel_arq/equivalencia.jpg'
  }

  const infoServlar = {
    descricao: 'Empresa Servlar utiliza arquivos Excel para Recebimento sendo o modelo Francesinha Sicredi.',
    descPgto: 'Arquivo para o Importador',
    caminho: 'Caminho para o Importador: M:\\Fisc_Contabil\\EMPRESAS\\01 - EMPRESAS ATIVAS E INATIVAS\\Servlar\\NovoImportador',
    imagem: './assets/emp_arquivos/excelClass/Servlar_arq/recebimento.jpg'
  }

  const infoTatum = {
    descricao: 'Empresa Tatum Agência de Publicidade e Propaganda Eireli utiliza arquivos Excel para Recebimento sendo o modelo Francesinha Sicredi.',
    caminho: 'Caminho para o Importador: M:\\Fisc_Contabil\\EMPRESAS\\01 - EMPRESAS ATIVAS E INATIVAS\\Tatum Agência de Publicidade e Propaganda Eireli\\Novo Importador',
    descPgto: 'Arquivo para o Importador',
    imagem: './assets/emp_arquivos/excelClass/Tatum_arq/franSicredi.jpg'
  }

  const infoTransmaria = {
    descricao: 'Empresa Transmaria Transportes Ltda utiliza arquivos Excel para Recebimento sendo o modelo Francesinha Sicredi.',
    caminho: 'Caminho para o Importador: M:\\Fisc_Contabil\\EMPRESAS\\01 - EMPRESAS ATIVAS E INATIVAS\\Transmaria Transportes Ltda\\NovoImportador',
    descPgto: 'Arquivo para o Importador',
    imagem: './assets/emp_arquivos/excelClass/Transmaria_arq/franSicredi.jpg'
  }

  const infoVinhedos = {
    descricao: 'Empresa Vinhedos Transportes Ltda utiliza arquivos Txt para Pagamentos.',
    caminho: 'Caminho para o Importador: M:\\Fisc_Contabil\\EMPRESAS\\01 - EMPRESAS ATIVAS E INATIVAS\\Vinhedos Transportes Ltda\\NovoImportador',
    descPgto: 'Arquivo para o Importador',
    imagem: './assets/emp_arquivos/excelClass/Vinhedos_arq/pagamento.jpg'
  }

  const infoNicolao = {
    descricao: 'Empresa NICOLAO & MATOS LTDA & FILIAIS utiliza arquivos Excel para Recebimentos e Pagamentos de Matriz e Filial.',
    caminho: 'Caminhos para os Arquivos: M:\\Fisc_Contabil\\EMPRESAS\\01 - EMPRESAS ATIVAS E INATIVAS\\NICOLAO & MATOS LTDA & FILIAIS\\Contabilidade\\12-2022',
    descPgto: 'Arquivo para o Importador',
    imagem: './assets/emp_arquivos/excelClass/nicolao_arq/pgto.jpg'
  };

  const infoMap = {
    'search_box': null,
    '857 PRO SERVICOS EIRELI': info857,
    'AEG COMÉRCIO DE SISTEMAS DE AQUECIMENTO LTDA': infoAeg,
    'Agriperin Solucoes em Pulverizadores' : infoAgriperin,
    'Empresa Arcari Empreend. Imob. Ltda' : infoArcari,
    'ARG Mangueiras' : infoArg,
    'Ativa Empreendimentos Imobiliarios' : infoAtiva,
    'BALEN ADVOCACIA SOCIEDADE DE ADVOGADOS' : infoBalen,
    'Barreiro e Wawzeniak Ltda' : infoBarreiro,
    'Restaurante BR 470' : infoBR470,
    'Buffon' : infoBuffon,
    'Clube de Caça e Pesca Santo Huberto' : infoCacaPesca,
    'CASA A' : infoCasaA,
    'Casa das Madeiras' : infoCasaMadeiras,
    'Clinica Veterinaria Vetvida' : infoVetvida,
    'Construtora Gamate Ltda' : infoGemate,
    'CRISTO REI MATERIAIS ELETRICOS LTDA' : infoCristoRei,
    'Essencia Di Fiori' : infoDiFiori,
    'GP Comércio Varejista de Móveis Eireli' : infoGpComercio,
    'GWN Indústria e Comércio Ltda' : infoGWN,
    'Icehot Comunicação Ltda' : infoIcehot,
    'INVISEG ASSESSORIA EM SEGURANÇA' : infoInviseg,
    'Kfuri & Filhos Ltda' : infoKfuri,
    'Mecânica Anderle' : infoAnderle,
    'Mercado de Alimentos Grepar Ltda' : infoGrepar,
    'Padel Pro' : infoPadel,
    'Reypel Importadora de Máquinas Ltda' : infoReypel,
    'Servlar' : infoServlar,
    'Tatum Agência de Publicidade e Propaganda Eireli' : infoTatum,
    'Transmaria Transportes Ltda' : infoTransmaria,
    'Vinhedos Transportes Ltda' : infoVinhedos,
    'NICOLAO & MATOS LTDA & FILIAIS': infoNicolao
  };