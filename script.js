// Unplash API
const count = 10;
const apiKey = 'o5LaPdkiFTwnKgoEWVOH1wWSfWBJRfYjYdCddA_bCko';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get Photos from Unsplash 
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // Catch Error Here...
  }
}

getPhotos();