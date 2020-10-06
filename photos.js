import photos from "./gallary-items.js";
console.log(photos);

const makeGalleryCards = function ({ original, preview, description }) {
  const mainUl = document.querySelector("js-gallery");

  const gallaryEl = document.createElement("li");
  gallaryEl.classList.add("gallery__item");

  const linkEl = document.createElement("a");
  linkEl.href = original;
  linkEl.classList.add("gallery__link");

  const imageEl = document.createElement("img");
  imageEl.classList.add("gallery__image");
  imageEl.src = preview;
  imageEl.dataset = original;
  imageEl.alt = description;

  mainUl.append(gallaryEl, linkEl, imageEl);
  return mainUl;
};

console.log(makeGalleryCards[0]);
