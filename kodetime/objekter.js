// For hver side:
// Hvilke data mã vi ha i modellen for à kunne tegne opp
// dette skjermbildet? Query
// Hva kan man gjore i dette skjermbilde? Hvordan skal det vises
// i modellen? Command
// Alle inputfelter pá siden trenger et eget felt i modellen

const model = {
  // tilstand app
  app: { currentPage: "productPage", currentUser: null },

  // inputfelter til hver side
  inputs: {
    productPage: {
      productId: 1,
      searchText: "",
      postNo: "",
      isCompare: false,
      imageIndex: 2,
      colorIndex: 0,
    },
  },

  // data
  users: [
    { name: "per", pwd: "123" },
    { name: "per", pwd: "123" },
    { name: "per", pwd: "123" },
  ],
  Orders: [
    {
      customer: "per",
      orderLines: [
        { productId: 1, count: 1 },
        { productId: 1, count: 2 },
      ],
    },
  ],

  shoppingCart: [
    { productId: 1, count: 1 },
    { productId: 1, count: 2 },
  ],
  products: [
    {
      id: 1,
      title: " Sony WH-H910 tradlose hodetelefoner",
      description: "Stóyreduksjon med Dual Noise Sensor + 35 timers",
      productNo: 1149495,
      colors: [
        { text: "Sort", code: "black" },
        { text: "Blà", code: "#4F7183" },
      ],
      brandLogo: "https://www.komplett.no/mfglogo/SONY.gif",
      price: 2190,
      categoryId: 2,
    },
  ],

  categories: [
    { name: "TV, lyd & bilde", id: 1 },
    { name: "Hodetelefoner", id: 2, parentId: 1 },
    { name: "Trâdlose-hodetelefoner", id: 3, parentId: 2 },
  ],
};
