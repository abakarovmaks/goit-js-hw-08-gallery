import photos from "./data/gallary-items.js";

const galleryList = document.querySelector("ul.gallery");
const lightbox = document.querySelector(".lightbox");
const btn = document.querySelector('[data-action="close-lightbox"]');
const imageDeleteSrc = document.querySelector(".lightbox__image");

galleryList.addEventListener("click", onOpenModal);
btn.addEventListener("click", onCloseModal);
document.body.addEventListener("click", onBackdropClick);

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
    lightbox.querySelector(".lightbox__image").src = elem.target.src;
    lightbox.querySelector(".lightbox__image").alt = elem.target.alt;
  }
}

function onCloseModal() {
  window.removeEventListener("keydown", onEscKeyPress);
  lightbox.classList.remove("is-open");
  imageDeleteSrc.removeAttribute("src");
  imageDeleteSrc.removeAttribute("alt");
}

function onBackdropClick(event) {
  if (event.target.nodeName === "DIV") {
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  if (event.code === "Escape") {
    onCloseModal();
  }
}
