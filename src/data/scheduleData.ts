export interface ScheduleDay {
  id: string;
  title: string;
  content: string;
}

export const scheduleData: ScheduleDay[] = [
  {
    id: "1",
    title: "Dias 07 a 10/04 – Embarque Brasil → Shanghai",
    content:
      "📍 DIA 07/04:\n• Embarque no aeroporto internacional do Brasil\n• Voo com destino a Shanghai (escala conforme companhia aérea)\n• Assistência completa no embarque e check-in\n• Acesso ao VIP Lounge antes do voo\n\n📍 DIA 10/04:\n• Chegada ao Aeroporto Internacional de Pudong, Shanghai\n• Transfer privado para hotel 4 estrelas no centro de Shanghai\n• Check-in e tempo para descanso\n• 18h: Reunião de boas-vindas no lobby do hotel\n• 19h30: Jantar de integração em restaurante chinês tradicional\n• Apresentação da equipe e overview completo do roteiro",
  },
  {
    id: "2",
    title: "Dias 10 a 13/04 – Primeiros Dias em Shanghai",
    content:
      "📍 DIA 11/04:\n• Manhã: Café da manhã e briefing do dia\n• 9h-12h: Visita ao South Bund Fabric Market (mercado de tecidos)\n• 14h-17h: Tour pelo Qipu Road Market (roupas e acessórios)\n• Noite: Workshop sobre negociação e cultura empresarial chinesa\n\n📍 DIA 12/04:\n• Manhã: Reuniões com fornecedores pré-selecionados de eletrônicos\n• Tarde: Visita a showrooms de fornecedores na região de Pudong\n• Sessão com tradutor especializado em negociações\n• Noite livre para explorar Nanjing Road\n\n📍 DIA 13/04:\n• Manhã: Tour cultural - The Bund, Yu Garden, Old Town\n• Tarde: Shanghai Tower (observatório) e Xintiandi\n• 17h: Networking com empresários brasileiros estabelecidos na China\n• 20h: Preparação para viagem a Guangzhou",
  },
  {
    id: "3",
    title: "Dias 13 a 20/04 – Guangzhou (Semana 1) - Canton Fair",
    content:
      "📍 DIA 13/04:\n• Voo interno Shanghai → Guangzhou (1h30)\n• Check-in hotel 4 estrelas próximo ao Canton Fair Complex\n• Briefing sobre a Canton Fair e organização dos dias\n\n📍 DIAS 14-17/04 (Canton Fair - Fase 1):\n• 9h-18h: Imersão na Canton Fair todos os dias\n• Setores: Eletrônicos, Elétricos, Ferragens, Máquinas\n• Acompanhamento personalizado de guia bilíngue\n• Mapeamento de fornecedores do seu nicho\n• Coleta de cartões, catálogos e amostras\n• Noites: Jantares com fornecedores selecionados\n\n📍 DIAS 18-19/04:\n• Visitas exclusivas a 3-4 fábricas já mapeadas na feira\n• Inspeção de processos produtivos\n• Negociações com tradutores especializados\n• Workshop: Logística, pagamentos e inspeção de qualidade\n\n📍 DIA 20/04:\n• Workshop prático: Como fazer pedidos, MOQ, amostras\n• Tarde: Preparação para Hong Kong",
  },
  {
    id: "4",
    title: "Dias 20 a 22/04 – Experiência em Hong Kong",
    content:
      "📍 DIA 20/04:\n• Transfer terrestre Guangzhou → Hong Kong (2h)\n• Passagem pela fronteira Shenzhen/Hong Kong\n• Check-in hotel 4 estrelas em Kowloon\n• Tarde livre: Tsim Sha Tsui, Avenue of Stars\n• Noite: Ladies Market e Temple Street Night Market\n\n📍 DIA 21/04:\n• Manhã: Reunião com agente de logística e freight forwarder\n• Tarde: Visita ao Victoria Peak e Stanley Market\n• Workshop sobre shipping, impostos e desembaraço no Brasil\n• Jantar em restaurante com vista para o skyline\n\n📍 DIA 22/04:\n• Manhã: Mong Kok e Sham Shui Po (mercados eletrônicos)\n• Tarde: Tempo livre para compras ou passeios\n• 17h: Transfer de retorno para Guangzhou",
  },
  {
    id: "5",
    title: "Dias 22 a 28/04 – Guangzhou (Semana 2) - Canton Fair Fase 2",
    content:
      "📍 DIAS 23-26/04 (Canton Fair - Fase 2):\n• 9h-18h: Continuação da Canton Fair\n• Setores: Casa & Decoração, Presentes, Têxteis, Brinquedos\n• Foco em novos fornecedores e produtos complementares\n• Sessões de negociação com fornecedores já prospectados\n\n📍 DIAS 27-28/04:\n• Visitas a fábricas para revisão de produtos negociados\n• Fechamento de pedidos e contratos\n• Sessões individuais de mentoria sobre seu projeto\n• Workshop: Importação, impostos, RADAR, desembaraço aduaneiro\n• Preparação de toda documentação necessária",
  },
  {
    id: "6",
    title: "Dias 28 a 30/04 – Macau (Descanso e Cultura)",
    content:
      "📍 DIA 28/04:\n• Transfer Guangzhou → Macau (ferry 1h ou carro 2h)\n• Check-in hotel 4 estrelas região central\n• Tarde: Tour pelas Ruínas de São Paulo e Senado Square\n• Noite: Experiência gastronômica com culinária macaense\n\n📍 DIA 29/04:\n• Manhã: Templo A-Ma, Fortaleza do Monte\n• Tarde: Venetian Macao, City of Dreams, cassinos\n• Noite livre para explorar a vida noturna\n\n📍 DIA 30/04:\n• Manhã: Coloane Village e praias\n• 14h: Transfer de retorno para Guangzhou\n• Noite: Descanso e preparação para semana final",
  },
  {
    id: "7",
    title: "Dias 30/04 a 06/05 – Guangzhou (Semana 3) - Consolidação",
    content:
      "📍 DIAS 01-03/05:\n• Revisão completa de todos os contratos e acordos\n• Visitas finais a fábricas para inspeção de produtos\n• Sessões individuais: planejamento do seu negócio\n• Verificação de amostras e confirmação de pedidos\n\n📍 DIAS 04-05/05:\n• Workshop: Branding, embalagem e posicionamento\n• Workshop: Marketing para produtos importados\n• Estratégias de venda: varejo, e-commerce, B2B\n• Networking final: troca de experiências do grupo\n\n📍 DIA 06/05:\n• Manhã: Tempo livre para últimas compras\n• Tarde: Preparação para viagem a Yiwu\n• Transfer ou voo para Yiwu",
  },
  {
    id: "8",
    title: "Dias 06 a 10/05 – Yiwu (Maior Mercado Atacadista do Mundo)",
    content:
      "📍 DIA 06/05:\n• Chegada em Yiwu (trem ou voo)\n• Check-in hotel 4 estrelas próximo ao Yiwu Market\n• Briefing sobre o Yiwu International Trade City\n• Noite: Jantar e descanso para dia intenso\n\n📍 DIAS 07-09/05 (Yiwu Market Imersão):\n• Exploração dos 5 distritos do Yiwu Market:\n  - Distrito 1: Flores, brinquedos, eletrônicos\n  - Distrito 2: Ferragens, ferramentas, acessórios auto\n  - Distrito 3: Cosméticos, bags, acessórios moda\n  - Distrito 4: Calçados, meias, tecidos\n  - Distrito 5: Têxteis, cama/mesa/banho\n• Guias especializados por setor do seu interesse\n• Mais de 75.000 fornecedores para explorar\n• Negociações diretas com fabricantes\n• Workshop: Como usar agentes de compra e consolidadores\n\n📍 DIA 10/05:\n• Manhã: Últimas negociações e compras\n• Tarde: Jantar de despedida com toda a equipe\n• Cerimônia de entrega de certificados\n• Transfer para Shanghai",
  },
  {
    id: "9",
    title: "Dias 10 a 11/05 – Retorno Shanghai → Brasil",
    content:
      "📍 DIA 10/05:\n• Chegada em Shanghai\n• Check-in hotel próximo ao aeroporto de Pudong\n• Reunião final de encerramento:\n  - Revisão de tudo que foi aprendido\n  - Próximos passos para cada participante\n  - Grupo de suporte pós-imersão\n  - Network e contatos úteis\n• Entrega oficial dos certificados de participação\n\n📍 DIA 11/05:\n• Transfer para Aeroporto Internacional de Pudong\n• Acesso ao VIP Lounge\n• Assistência completa no check-in\n• Embarque com destino ao Brasil\n• Chegada no Brasil (mesmo dia ou dia seguinte conforme escala)",
  },
];
