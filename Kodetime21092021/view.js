function viewSelector() {
    let html = ``;
    html = navBar();
    const app = document.getElementById('app');
    // if (model.currentPage == 'Home') html += homeView();
    // else if (model.currentPage == 'About') html += aboutView();
    // else if (model.currentPage == 'Contact') html += contactView();
    // else { html += noPageFound(); }

    switch (model.currentPage) {
        case 'Home':
            html += homeView();
           break;
        case 'About':
            html += aboutView();
           break;
        case 'Contact':
            html += contactView();
            break;
        default:
            html = noPageFound();  
    }
    app.innerHTML = html;
}


function navBar() {
    let html = `
    <button onclick="changeView('Home')">Home</button>
    <button onclick="changeView('About')">About</button>
    <button onclick="changeView('Contact')">Contact</button>
    <br>
    `;
    return html;
}
