

// NASA API
const count = 10;
const apiKey = 'EMggV1ZCF3rt2l75z2wc1NhxtcXicFJcXchARNpD';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray = [];

// Get 10 images from NASA API
async function getNasaPictures() {
  try {
    const response = await fetch(apiUrl);
    resultsArray = await response.json();
    console.log(resultsArray);
  } catch (error) {
    // Catch Error Here
    console.log(error);
  }
}

// On Load
getNasaPictures();

