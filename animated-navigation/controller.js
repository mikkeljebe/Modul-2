
function toggleNav() {

  // toggle Menu bars open/closed
  if (model.class.menuBars == 'turn') { model.class.menuBars = 'turn-back';
  } else { model.class.menuBars = 'turn';};
  
  // Toggle: menu active 
  if (model.class.overlay == '') { model.class.overlay = 'overlay-active'; } else { model.class.overlay = ''; };

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
function navAnimation(direction1, direction2) {
  if (model.class.slide == '') { model.class.slide = direction1 };
  if (model.class.slide == direction1) { model.class.slide = direction2 } else { model.class.slide = direction1 };
  setTimeout(function () {model.class.slide = "";}, 1000);
}

function search(searchTerm) {
    let filteredData = linker;
  model.searchQuery = searchTerm;
  console.log('kjørere');
  

  if (searchTerm.length > 0) {
    filteredData = linker
      .filter(elements => elements.tittel && elements.link)
      .filter(element =>
        element.link.toLowerCase().includes(searchTerm.toLowerCase()) ||
        element.tittel.toLowerCase().includes(searchTerm.toLowerCase())); 
  }
  console.log(filteredData);


  model.result = `<ul id="myUL">`;
  for (let i = 0; i < filteredData.length; i++) {
    model.result +=  `<li class="a"><a href="${filteredData[i].link}">${filteredData[i].tittel}</a></li>`;
  };
  
  if (filteredData.length == 0) {
    model.result +=  `<li">Ingen treff</li>`;
  };

  model.result += `</ul>`;
  
  updateView();
};


