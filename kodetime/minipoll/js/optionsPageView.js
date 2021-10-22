function updateViewOptionsPage(){
  document.getElementById('app').innerHTML = `
  <button onclick='goToVotePage()'>Til stemme-siden</button>
  <hr>
  Nåværende alternativer:
  
  <ul>  
  ${createOptionsHtml()}
  </ul>
  Nytt alternativ: <br>
  <input 
    type="txt" 
    oninput="model.inputs.optionsPage.newOption = this.value"
    value="${model.inputs.optionsPage.newOption}"
    />
    <input type="color" oninput="model.inputs.optionsPage.color = this.value">
  <button onclick="addOption()">Legg til</button>
`
}

function createOptionsHtml(){
  let html = ``;
  for(let i in model.options){
    let option = model.options[i];
    html += `
      <li style="color: ${option.color}">
          ${option.text.toUpperCase()}
      </li>
      `
  } return html;
};
  
