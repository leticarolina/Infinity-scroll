# Infinity Scroll

## Table of contents

- [The Project](#the-project)
- [Link](#link)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Author](#author)

### The project

Infinity Scroll is a page to display endless high quality images, each picture has a hook to the Unsplash page with more information about the shot and the photograper.

Enjoy some good pictures!

### Link

- Live Site URL: [https://leticarolina.github.io/Infinity-scroll/](https://leticarolina.github.io/Infinity-scroll/)

### Built with

- HTML5
- CSS
- JavaScript

### What I learned

The main topic I had to work on getting this page running was figuring out the endless scrolling condition and the solution found for it was creating a boolean and setting the initial value to false, after all the pictures of the count are perfectly loaded it be set to true, also a window event listener was created to fire after scrollY reaches a certain height.

```
let ready = false;
let totalImages = 0;

//when the count equals the total images ready will be true and imagesLoaded reset
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
  }
}

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


```

## Author

Leticia Azevedo.
