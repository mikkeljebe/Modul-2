function updateViewResultsPage(){
  document.getElementById('app').innerHTML = `
  <button onclick='goToVotePage()'>Til stemme-siden</button>
  <hr>
  Resultater:
  
  <div class="res-container">  
  ${createResultsHtml()}
  </div>
  
`
}

function createResultsHtml(){
  let sortedResults = Array.from(model.options);
  sortedResults.sort((a, b) => b.voteCount - a.voteCount);
  console.log(sortedResults);
  
  
  
  let html = ``;
  for(let i in sortedResults){
    let arr = sortedResults[i];
    
    html += `
      <div class="res-btn" style="
        background-color:${arr.color};
        width: 100px;
        height:${arr.voteCount*40}px;
        ">${model.options[i].text.toUpperCase()}<br>fikk ${arr.voteCount} stemmer</div>

      `
  } return html;
};
  
 