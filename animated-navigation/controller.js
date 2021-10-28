
function toggleNav(){
  model.class.overlay
  // toggle Menu bars open/closed
  if ( model.class.menuBars == 'turn') {model.class.menuBars = 'turn-back'} else {model.class.menuBars = 'turn'};
  // Toggle: menu active 
  if ( model.class.overlay == '') {model.class.overlay = 'overlay-active'} else {model.class.overlay = ''};

  if(model.class.overlay == 'overlay-active'){
    // Animate in - overlay
    model.class.overlaySlide = 'right';
    // Animate in - nav items
    navAnimation('out', 'in');
  } else {
    // Animate out overlay
    model.class.overlaySlide = 'left';
    // Animate out - nav items
    navAnimation('in', 'out');
  }
  updateView();
}

// Control Navigation Animation 
function navAnimation(direction2, direction1) {
  if ( model.class.slide == direction2) {model.class.slide = direction1} else {model.class.slide = direction2};
}

function search(searchTerm){
  model.searchQuery = searchTerm;
    let filteredData = linker
    .filter(elements => elements.tittel && elements.link)
    .filter(element => 
      element.link.toLowerCase().includes(searchTerm.toLowerCase())|| 
      element.tittel.toLowerCase().includes(searchTerm.toLowerCase()));

  model.result = `<ul id="myUL">`;
  for (let i = 0; i < filteredData.length; i++) {
    model.result +=  `<li class="a"><a href="${filteredData[i].link}">${filteredData[i].tittel}</a></li>`;
  };
  
  if (filteredData.length == 0) {
    model.result +=  `<li">Ingen treff</li>`;
  };

  model.result += `</ul>`;
  console.log(model.result);
  
  updateView();
};

