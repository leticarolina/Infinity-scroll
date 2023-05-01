const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = []; //variable is 'let' because the photos are going to change. GLOBAL VARIABLE

// API Url
const count = 10;
const apiKey = "GefjiXPZAd7tRdKL47hGwljvurKEvWBEvVRnlaPSQro";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// // Helper function to set Attributes like title, html on DOM Elements
// function setAttributes(element,attributes) {
//     for (const key in attributes) {
//      element.setAttribute(key, attributes[key]);
//     }
// }

//Create html Element for Links and Photos, add to DOM
function displayPhotos() {
  //Run function for each object in photosArray
  photosArray.forEach((photo) => {
    //create <a> element to link to Unsplash using createElement
    const item = document.createElement("a");
    //setting attributes and values for the html element created using setAttribute
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");
    //create <img> element for each photo
    const img = document.createElement("img");
    //setting the atrribute and values for the html created
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);
    // putting <img> inside <a> element, and then putting both inside the ImageContainer variable using appendChild
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

//Get photos from API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    //Catch error
  }
}

//Targets for the API
// alt_description;
// links.html;
// urls.regular;

//On Load to run the function
getPhotos();
