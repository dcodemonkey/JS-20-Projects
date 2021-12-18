const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// Unplash API
const count = 30;
const apiKey = 'o5LaPdkiFTwnKgoEWVOH1wWSfWBJRfYjYdCddA_bCko';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Check if all images were loaded
function imageLoad() {
  imagesLoaded++;
  // console.log(imagesLoaded);
  if(imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
    // console.log('ready =', ready);
  }
}

// Helper function to set attributes on DOM Elements

function setAttributes(element, attributes) {
  for(const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Create Element for Links and Photos, Add to DOM
function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;
  // console.log('Total Images: ', totalImages);
  // Run forEach for each object in PhotosArray
  photosArray.forEach((photo) => {
    // Create <a></a> to link to Unplash
    const item = document.createElement('a');
    // item.setAttribute('href', photo.links.html);
    // item.setAttribute('target', '_blank');
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    });
    // Create img for photo
    const img = document .createElement('img');
    // img.setAttribute('src', photo.urls.regular);
    // if(!photo.alt_description){
    //   photo.alt_description = "A Beautiful image from Unplash";
    // } else{
    //   img.setAttribute('alt', photo.alt_description);
    // }
    // img.setAttribute('title', photo.alt_description);
    let altText = photo.alt_description;
    if(!altText) {
      altText = "A Beatiful image from Unplash... :)";
    } else{
      altText = photo.alt_description;
    }
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: altText,
    });
    // Event Listener, check when each image is finished loading
    img.addEventListener('load', imageLoad);
    // Put <img> iside <a></a> element, then put both inside imageContainer Element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get Photos from Unsplash 
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    // console.log(photosArray);
    displayPhotos();
  } catch (error) {
    // Catch Error Here...
  }
}

// Check to see if scrolling near bottom of page , Load more photos
window.addEventListener('scroll', ()=> {
  if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
    //  console.log('window.innerHeight:', window.innerHeight);
    //  console.log('window.scrollY:', window.scrollY);
    //  console.log('window.innerHeight + scrollY:', window.scrollY + window.innerHeight);
    //  console.log('document.body.offsetHeight - 1000:', document.body.offsetHeight - 1000);
    ready = false;
    getPhotos();
  }
})

// On Load
getPhotos();