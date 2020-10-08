import photos from "./data/gallary-items.js";
console.log(photos);

const galleryList = document.querySelector("ul.gallery");
const lightbox = document.querySelector(".lightbox");
const btn = document.querySelector('[data-action="close-lightbox"]');

const createImage = (el, parent) => {
  const { preview, original, description } = el;
  const img = document.createElement("img");

  img.classList.add("gallery__image");
  img.dataset.source = original;
  img.src = preview;
  img.alt = description;

  parent.appendChild(img);
};
