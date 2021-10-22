
function updateView(){
  let app = document.getElementById('app');
 let html = `

 <!-- Menu overlay -->
  <div class="overlay overlay-slide-left" id="overlay">
    <!-- Menu items -->
    <nav>
      <ul>
        <li id="nav-1" onclick="toggleNav()" class="slide-out-1"><a href="#home">Home</a></li>
        <li id="nav-2" onclick="toggleNav()" class="slide-out-2"><a href="#about">About</a></li>
        <li id="nav-3" onclick="toggleNav()" class="slide-out-3"><a href="#projects">Projects</a></li>
        <li id="nav-4" onclick="toggleNav()" class="slide-out-4"><a href="#skills">Skills</a></li>
        <li id="nav-5" onclick="toggleNav()" class="slide-out-5"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </div>
<!-- Menu bars -->
  <div class="menu-bars" id="menu-bars" onclick="toggleNav()">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </div>

<!-- Sections -->
  <section id="home" >
    <a href="#contact" target="#contact">Mikkel</a>
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
<h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">Prosjekter</h1>
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
  <h1 data-aos="zoom-out">Kontakt meg her</h1>
`;
return html;
}

