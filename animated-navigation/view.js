
function updateView(){
  let app = document.getElementById('app');

  
 let html = `

 <!-- Menu overlay -->
  <div class="overlay ${model.class.overlay} overlay-slide-${model.class.overlaySlide}">
    <!-- Menu items -->
    <nav>
      <ul>
        <li id="nav-1" onclick="toggleNav()" class="slide-${model.class.slide}-1"><a href="#home">Home</a></li>
        <li id="nav-2" onclick="toggleNav()" class="slide-${model.class.slide}-2"><a href="#about">About</a></li>
        <li id="nav-3" onclick="toggleNav()" class="slide-${model.class.slide}-3"><a href="#projects">Projects</a></li>
        <li id="nav-4" onclick="toggleNav()" class="slide-${model.class.slide}-4"><a href="#skills">Skills</a></li>
        <li id="nav-5" onclick="toggleNav()" class="slide-${model.class.slide}-5"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </div>
<!-- Menu bars -->
  <div class="menu-bars ${model.class.menuBars}" onclick="toggleNav()">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </div>

<!-- Sections -->
  <section id="home" >
    <a href="#contact">Mikkel</a>
  </section>
  <section id="about">${aboutHtml()}</section>
  <section id="projects">${projectsHtml()}</section>
  <section id="skills">${skillsHtml()}</section>
  <section id="contact">${contactHtml()}</section>

`;

app.innerHTML = html;

AOS.init({
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  once: false, // whether animation should happen only once while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
});
  
  

}


function aboutHtml(){
  let html = `
  <div class="about-container">
        <div data-aos="fade-right" data-aos-delay="600" class="text-box-container">
        <h1>Om meg</h1>
        <div class="about-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, quis nam illo sit reiciendis neque molestias unde nihil et? Quasi deserunt quam ut tempore vel obcaecati totam, amet adipisci velit</div>
        </div>
        <div data-aos="fade-left" class="pic-container">
          <img src="./pics/mikkprtr.jpeg" alt="">
          <div class="pic-container-text"></div>
        </div>
        </div>
        `;
        return html;
}

function projectsHtml(){
  let html = `
<h1>Prosjekter</h1>
<div class="wrapper">
  <div class="searchBar">
    <input id="searchQueryInput" autocomplete="off" onchange="search(this.value)" type="text" class="searchQueryInput" placeholder="Søk.." value="${
      model.searchQuery
    }"/>
    <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
      <svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
      </svg>
    </button>
  </div>
  <div class="searchDropdown-content">${model.result || ""}</div>
     </div>
</div>


`;
return html;
}

function skillsHtml(){
  let html = `
  <h1 data-aos="fade-in">Styrker</h1>
`;
return html;
}

function contactHtml(){
  let html = `
  <div class="contact-wrapper">
    <h1 data-aos="zoom-out">Kontakt meg her</h1>
    <div data-aos="fade-up" data-aos-delay="600" class="social-icons">
    <a href="https://github.com/mikkeljebe/" target="_blank"><i class="fab fa-github"></i></a>
    <a href="https://www.linkedin.com/in/mikkeljebe/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
    <a href="https://www.twitter.com/mikkeljebe/" target="_blank"><i class="fab fa-twitter"></i></a>
    <a href="mailto: mikkel" target="_blank"><i class="fas fa-envelope"></i></a>
        </div>
  </div>
`;
return html;
}
