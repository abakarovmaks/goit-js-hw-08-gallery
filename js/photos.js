import photos from "./data/gallary-items.js";

const galleryList = document.querySelector("ul.gallery");
const lightbox = document.querySelector(".lightbox");
const btn = document.querySelector('[data-action="close-lightbox"]');
const imageAttributes = document.querySelector(".lightbox__image");
const lightboxOverlay = document.querySelector(".lightbox__overlay");

galleryList.addEventListener("click", onOpenModal);
btn.addEventListener("click", onCloseModal);
lightboxOverlay.addEventListener("click", onCloseModal);

const createImage = (el, parent) => {
  const { preview, original, description } = el;
  const img = document.createElement("img");

  img.classList.add("gallery__image");
  img.dataset.source = preview;
  img.src = original;
  img.alt = description;

  parent.appendChild(img);
};

const createLink = (el, parent) => {
  const { original } = el;
  const link = document.createElement("a");

  link.classList.add("gallery__link");
  link.href = original;

  createImage(el, link);

  parent.appendChild(link);
};

const createItem = (el) => {
  const li = document.createElement("li");
  li.classList.add("gallery__item");

  createLink(el, li);

  return li;
};

const joinListItems = (arr) => {
  const items = arr.map((el) => createItem(el));

  galleryList.append(...items);
};

joinListItems(photos);

function onOpenModal(elem) {
  elem.preventDefault();

  window.addEventListener("keydown", onEscKeyPress);

  if (elem.target.nodeName === "IMG") {
    lightbox.classList.add("is-open");
    imageAttributes.src = elem.target.src;
    imageAttributes.alt = elem.target.alt;
  }
}

function onCloseModal() {
  window.removeEventListener("keydown", onEscKeyPress);
  lightbox.classList.remove("is-open");
  imageAttributes.removeAttribute("src");
  imageAttributes.removeAttribute("alt");
}

function onEscKeyPress(event) {
  if (event.code === "Escape") {
    onCloseModal();
  }
}
