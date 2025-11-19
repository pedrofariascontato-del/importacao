export interface Benefit {
  id: string;
  icon: string;
  title: string;
  highlight?: string;
}

export const benefitsData: Benefit[] = [
  {
    id: "1",
    icon: "business",
    title: "Fornecedores Reais",
    highlight: "Acesso Direto",
  },
  {
    id: "2",
    icon: "storefront",
    title: "Canton Fair + Yiwu",
    highlight: "Maiores Feiras",
  },
  {
    id: "3",
    icon: "shield-checkmark",
    title: "Suporte 24/7",
    highlight: "30 Dias Completos",
  },
  {
    id: "4",
    icon: "people",
    title: "Empresários BR",
    highlight: "Networking",
  },
  {
    id: "5",
    icon: "cash",
    title: "Técnicas Avançadas",
    highlight: "Negociação",
  },
  {
    id: "6",
    icon: "airplane",
    title: "Tudo Incluso",
    highlight: "Sem Surpresas",
  },
];
