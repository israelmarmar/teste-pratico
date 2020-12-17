export default class PageController {
  async index(req, res) {
    const pages = [
      { title: "Home", typeIcon: "Entypo", icon: "home", url: "page://home", content: [] },
      {
        title: "Camera",
        typeIcon: "FontAwesome",
        icon: "institution",
        url: "page://camera",
        content: [
          {
            type: "post",
            title: "Mensagens do Presidente",
            properties: { categories: ["messages"] },
          },
          {
            type: "post",
            title: "Notícias",
            properties: { categories: ["news"] },
          },
          {
            type: "post",
            title: "Horas e serviços",
            properties: { categories: ["schedules", "services"] },
          },
          {
            type: "post",
            title: "Taxas e Tarifários",
            properties: { categories: ["taxes"] },
          },
        ],
      },
      {
        title: "Comunicar",
        typeIcon: "Foundation",
        icon: "comments",
        url: "page://comunicar",
        content: [],
      },
      {
        title: "Proteção civil",
        typeIcon: "FontAwesome",
        icon: "warning",
        url: "page://protecao-civil",
        content: [],
      },
      { title: "Covid", typeIcon: "Fontisto", icon: "bandage", url: "page://covid", content: [] },
      {
        title: "Agenda",
        typeIcon: "MaterialCommunityIcons",
        icon: "calendar-multiselect",
        url: "page://agenda",
        content: [],
      },
    ];

    return res.json(pages);
  }
}
