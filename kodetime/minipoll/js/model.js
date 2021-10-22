const model = {
  question: "Hvordan var handleopplevelsen din?",
  app: {
    currentPage: "vote", //addOptions
  },
  inputs: {
    votePage: {},
    optionsPage: {
      newOption: "",
      color: 'grey',
    },
  },

  options: [
    { text: "Bra", color: "green", voteCount: 0},
    { text: "Middels", color: "yellow", voteCount: 0},
    { text: "Dårlig", color: "red", voteCount: 0},
  ],
};
