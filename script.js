const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

const imageCountToLoad = 10;
const apiKey = "GefjiXPZAd7tRdKL47hGwljvurKEvWBEvVRnlaPSQro";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${imageCountToLoad}&`;

let photosArray = [];
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;

function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
  }
}

function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;
  photosArray.forEach((photo) => {
    console.log(photo);
    const anchor = document.createElement("a");
    anchor.setAttribute("href", photo.links.html);
    anchor.setAttribute("target", "_blank");

    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);
    img.addEventListener("load", imageLoaded);

    anchor.appendChild(img);
    imageContainer.appendChild(anchor);
  });
}

//Get photos from API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch {}
}

//Implementing the endless scroll
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
    /*innerHeight = height of the display , scrollY = height from top of page till current scrolling, offsetHeight = height of everything in the body (including was is not on the view)*/
  ) {
    ready = false;
    getPhotos();
  }
});

getPhotos();
