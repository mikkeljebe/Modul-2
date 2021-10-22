function goToVotePage() {
  model.app.currentPage = "vote";
  updateView();
}

function addOption() {
  model.options.push({
    text: model.inputs.optionsPage.newOption,
    color: model.inputs.optionsPage.color,
    voteCount: 0,
  });
  model.inputs.optionsPage.newOption ='';
  updateView();
}
