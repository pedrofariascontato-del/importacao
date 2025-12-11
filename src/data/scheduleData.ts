export interface ScheduleDay {
  id: string;
  title: string;
  content: string;
  icon?: string;
  color?: string;
  dates?: string;
}

export const scheduleData: ScheduleDay[] = [
  {
    id: "1",
    title: "Embarque Brasil → Shanghai",
    dates: "07/04",
    icon: "airplane",
    color: "#D00000",
    content:
      "📍 DIA 07/04:\n• Embarque no Aeroporto Internacional de São Paulo (GRU)\n• Assistência dedicada e acesso ao VIP Lounge\n• Voo ao destino final Shanghai (escala conforme companhia aérea)",
  },
  {
    id: "2",
    title: "Ambientação em Shanghai",
    dates: "10/04",
    icon: "business",
    color: "#0F1B2A",
    content:
      "📍 DIA 10/04:\n• Chegada ao Aeroporto Internacional de Pudong\n• Transfer privado e check-in em hotel 4 estrelas no centro de Shanghai\n• Dia livre para descanso e aclimatação ao fuso horário",
  },
  {
    id: "3",
    title: "Explorando Shanghai",
    dates: "11 a 12/04",
    icon: "location",
    color: "#1A8F5A",
    content:
      "📍 DIA 11/04 - Dia livre com sugestões:\n• Sugestão 01: South Bund Fabric Market, Qipu Road Market, Shanghai Tower, Xintiandi\n• Sugestão 02: Yu Garden, Cidade Antiga (Old Town), Tianzifang\n• Sugestão 03: Oriental Pearl Tower, People's Square\n\n📍 DIA 12/04:\n• Manhã livre\n• Passeio de barco com shuttle incluso (necessário adquirir ingresso na hora)\n• Noite livre para explorar Nanjing Road",
  },
  {
    id: "4",
    title: "Preparação para Guangzhou",
    dates: "13/04",
    icon: "airplane",
    color: "#F2C400",
    content:
      "📍 DIA 13/04:\n• Preparação para deslocamento à Guangzhou\n• Voo interno Shanghai → Guangzhou\n• Transfer para Foshan e check-in em hotel 4 estrelas",
  },
  {
    id: "5",
    title: "Guangzhou - Semana 1 | Canton Fair Fase 1",
    dates: "14 a 19/04",
    icon: "storefront",
    color: "#D00000",
    content:
      "📍 DIA 14/04:\n• Manhã: Reunião de alinhamento para contextualização da participação na Canton Fair:\n  - Procedimentos de importação\n  - RADAR e habilitação do importador\n  - Regras de desembaraço aduaneiro\n  - Estrutura tributária para bens industriais e de consumo\n\n📍 DIA 15/04:\n• Primeira imersão na maior feira de negócios da China\n• Exploração dos setores de interesse e prospecção de fornecedores\n\n📍 DIA 16/04:\n• Feira durante o dia\n• Noite: jantar incluso em restaurante internacional (Mr. Rock)\n\n📍 DIA 17/04:\n• Imersão à Canton Fair\n• Atividades de prospecção e avaliação de produtos\n\n📍 DIA 18/04:\n• Visita à Canton Fair pela manhã\n• Após encerramento da feira, visita cultural ao Templo Dafo\n• Conhecendo a espiritualidade e arquitetura tradicional chinesa\n• Momento de reflexão e imersão cultural\n\n📍 DIA 19/04:\n• Canton Fair pela manhã\n• Noite: Commuting Electronic Shopping (tecnologia, eletrônicos e varejo de consumo)",
  },
  {
    id: "6",
    title: "Experiência em Hong Kong",
    dates: "20 a 22/04",
    icon: "location",
    color: "#1A8F5A",
    content:
      "📍 DIA 20/04:\n• Transfer terrestre Foshan → Hong Kong (4h)\n• Check-in em hotel 4 estrelas em Kowloon\n• Sugestões de visitas: Tsim Sha Tsui, Avenue of Stars, Ladies Market e Temple Street Night Market\n\n📍 DIA 21/04:\n• Passeio ao Porto de Hong Kong com apresentação\n• Tarde/noite livre com sugestões: Victoria Peak e Stanley Market\n\n📍 DIA 22/04:\n• Transfer de retorno a Foshan (4h)\n• Tarde: Apresentação sobre as categorias de produtos da segunda fase da feira (bens de consumo e decoração), com revisão tributária aplicada a cada segmento\n• Objetivo: aprofundar critérios de seleção e análise de viabilidade comercial, alinhados ao portfólio da Zoveno",
  },
  {
    id: "7",
    title: "Guangzhou - Semana 2 | Canton Fair Fase 2",
    dates: "23 a 27/04",
    icon: "cart",
    color: "#0F1B2A",
    content:
      "📍 DIA 23/04:\n• Primeiro dia de imersão na segunda semana de Canton Fair\n• Exploração dos setores da Fase 2\n\n📍 DIA 24/04:\n• Visita à Canton Fair pela manhã\n• Após encerramento da feira, passeio com shuttle incluso (necessário adquirir ingresso na hora)\n\n📍 DIA 25/04:\n• Imersão na Canton Fair\n• Prospecção e negociações com fornecedores\n\n📍 DIA 26/04:\n• Imersão na Canton Fair\n• Continuação das atividades de prospecção\n\n📍 DIA 27/04:\n• Após a feira, visita ao shopping Commuting Electronic Shopping em Guangzhou\n• Exploração de tecnologia e eletrônicos de consumo\n• Oportunidades de compras para revenda ou uso pessoal",
  },
  {
    id: "8",
    title: "Macau - Descanso e Cultura",
    dates: "28 a 30/04",
    icon: "happy",
    color: "#F2C400",
    content:
      "📍 DIA 28/04:\n• Transfer terrestre Hotel Foshan → Macau\n• Check-in hotel 5 estrelas\n• Tarde/noite livres com sugestão: Senado Square, Ruínas de São Paulo\n\n📍 DIA 29/04 - Dia livre com sugestões:\n• Sugestão 01: Templo A-Ma, Fortaleza do Monte, The Venetian Macao, Cassinos em Cotai\n• Sugestão 02: Cotai Strip, The Venetian Macao, The Londoner, City of Dreams, Macau Tower\n\n📍 DIA 30/04:\n• Transfer de retorno a Foshan (4h)\n• Tarde: Atualização técnica voltada aos produtos da terceira fase (têxtil, moda e artigos diversos), com enfoque em impostos e potenciais barreiras comerciais\n• Objetivo: orientar negociações e validação de fornecedores com foco na sustentabilidade financeira do produto no Brasil",
  },
  {
    id: "9",
    title: "Guangzhou - Semana 3 | Canton Fair Fase 3 & Consolidação",
    dates: "01 a 05/05",
    icon: "checkmark-circle",
    color: "#D00000",
    content:
      "📍 DIA 01/05:\n• Primeiro dia de imersão na terceira semana de Canton Fair\n• Últimos dias de prospecção, cotações e negociações\n\n📍 DIA 02/05:\n• Visita à Canton Fair pela manhã\n• Após encerramento da feira, passeio no River Cruise com shuttle incluso (necessário adquirir ingresso na hora)\n\n📍 DIA 03/05:\n• Imersão na Canton Fair\n• Continuação das atividades de prospecção e negociação\n\n📍 DIA 04/05:\n• Imersão na Canton Fair\n• Finalização de negociações e fechamento de contratos\n\n📍 DIA 05/05:\n• Última visita ao mercado eletrônico de Guangzhou\n• Consolidação das oportunidades",
  },
  {
    id: "10",
    title: "Yiwu - Maior Mercado Atacadista do Mundo",
    dates: "06 a 09/05",
    icon: "globe",
    color: "#1A8F5A",
    content:
      "📍 DIA 06/05:\n• Transfer Foshan → Aeroporto Guangzhou → Yiwu\n• Check-in em hotel 5 estrelas\n• Noite livre\n\n📍 DIA 07/05:\n• Manhã: Exploração dos 5 distritos do Yiwu Market:\n  - Distrito 1: Flores, brinquedos, eletrônicos\n  - Distrito 2: Ferragens, ferramentas, acessórios auto\n  - Distrito 3: Cosméticos, bags, acessórios moda\n  - Distrito 4: Calçados, meias, tecidos\n  - Distrito 5: Têxteis, cama/mesa/banho\n• Noite com shuttle para Night Market\n\n📍 DIA 08/05:\n• Manhã: Exploração dos 5 distritos do Yiwu Market:\n  - Distrito 1: Flores, brinquedos, eletrônicos\n  - Distrito 2: Ferragens, ferramentas, acessórios auto\n  - Distrito 3: Cosméticos, bags, acessórios moda\n  - Distrito 4: Calçados, meias, tecidos\n  - Distrito 5: Têxteis, cama/mesa/banho\n• Noite: Jantar e shuttle incluso ao restaurante Ariana\n\n📍 DIA 09/05:\n• Último dia livre para exploração dos 5 distritos do Yiwu Market:\n  - Distrito 1: Flores, brinquedos, eletrônicos\n  - Distrito 2: Ferragens, ferramentas, acessórios auto\n  - Distrito 3: Cosméticos, bags, acessórios moda\n  - Distrito 4: Calçados, meias, tecidos\n  - Distrito 5: Têxteis, cama/mesa/banho\n• Tarde: Ida ao Yiwu Temple com shuttle incluso",
  },
  {
    id: "11",
    title: "Retorno Shanghai → Brasil",
    dates: "10/05",
    icon: "home",
    color: "#0F1B2A",
    content:
      "📍 DIA 10/05:\n• Transfer Yiwu → Aeroporto de Shanghai\n• VIP Lounge e assistência no check-in\n• Embarque com destino ao Brasil\n• Chegada ao Brasil conforme escala prevista",
  },
];
