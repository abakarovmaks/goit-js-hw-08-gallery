import photos from "./data/gallary-items.js";

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

const createLink = (el, parent) => {
  const { original } = el;
  const link = document.createElement("a");

  link.classList.add("gallary__link");
  link.href = original;

  createImage(el, link);

  parent.appendChild(link);
};

const createItem = (el) => {
  const li = document.createElement("li");
  li.classList.add("gallary__item");

  createLink(el, li);

  return li;
};
