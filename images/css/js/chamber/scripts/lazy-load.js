// Progressive loading images


// Get all images with data src attribute
const imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
};

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};


// First check to see if Intersection Observer is supported
if ('IntersectionObserver' in window) {
  const imgObserver = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgOptions);


// Loop through each image an check status and load if necessary
  imagesToLoad.forEach((img) => {
    imgObserver.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => { 
    // Just load all images if not supported
    loadImages(img);
  });
}
