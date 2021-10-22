function updateViewVotePage(){
  document.getElementById('app').innerHTML = `
  <button onclick='goToOptionsPage()'>Legg til alternativer</button>
  <button onclick='goToResultsPage()'>Resultater</button>
  <hr>

  <div class="vote-container">  
  ${createVotesHtml()}
  </div>
`
}

function createVotesHtml(){
  let html = `<h2>${model.question}</h2><div class="btn-container">`;

  for(let i in model.options){
    let option = model.options[i];
    html += `<div class="btn" onclick="vote(${i})"
          style="background-color: ${option.color}"
          >
          ${option.text.toUpperCase()}
          </div>
      
      `
  } 
  html += `</div>`
  return html;
};