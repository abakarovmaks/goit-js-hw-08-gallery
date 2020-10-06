import photos from "./gallary-items.js";
console.log(photos);

const gallaryEl = document.createElement("li");
gallaryEl.classList.add("gallery__item");

const linkEl = document.createElement("a");
linkEl.href = photos.preview;
linkEl.classList.add("gallery__link");
