// 
const imageContainer = document.getElementById('img-container');
const loader = document.getElementById('loader');
const search = document.getElementById('search');

let ready = false;
let searchInput = '';
let imagesLoaded = 0;
let totalImages = 0;  
let photosArray = [];
let isInitialLoad = true;

// unsplash API
let initialCount = '5' 
const apiKey = 'pXtjM6FJE2ohJXaj0BvYHYMvpn2ioGKMRZjz3W5bArk';
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${initialCount}&query=${searchInput}`;

// set focus to searchbar
search.focus();

function updateApiuUrlWithNewCount(picCount){
  apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${picCount}&query=${searchInput}`;

}

// Check if all images were loaded
function imageLoaded(){
  imagesLoaded++;
if (imagesLoaded === totalImages){
  ready = true;
  loader.hidden = true;
}

}

// Get photos from unsplash api
async function getPhotos(){
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
    if (isInitialLoad){
      updateApiuUrlWithNewCount(30);
      isInitialLoad = false;

    }
    
  } catch (error) {
    console.log(error);
    
//  error here
  }
}

// Hjelpefunksjon for setartributes to DOM elements 
function setAttributes(element, attributes){
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}
// create elements for links and photos, add to dom
function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;
    
  photosArray.forEach((photo) => {
    // create <a> to link to unsplash
    const item = document.createElement('a');
   
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank', 

    });
    // create <img> for photo
    const img = document.createElement('img');
    
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    } );

    // Event listener, check when each is finished loading
    img.addEventListener('load', imageLoaded);

    // put <img> inside <a>, then put both inside imgageContainer element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}




// searchbutton
function searchPhotos(){
  imageContainer.innerHTML = '';
  loader.hidden = false;
  getPhotos();
}

// Check to see if scrolling near bottom of page, load more photos
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
    ready = false;
    getPhotos();
  }
  
})



