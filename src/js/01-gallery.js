import { galleryItems } from "./gallery-items.js";
// Change code below this line
const imgsContainer = document.querySelector(".gallery");
const imgsMarkup = greateImgsMarkup(galleryItems);
imgsContainer.insertAdjacentHTML("beforeend", imgsMarkup);
imgsContainer.addEventListener("click", openInstanceModal);

function greateImgsMarkup(pictures) {
  return pictures
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

const instance = basicLightbox.create(
  `
<img src="" />
  `,
  {
    onShow: () => {
      console.log("add listener ");
      document.addEventListener("keydown", escImgsCard);
    },
    onClose: () => {
      console.log("remove listener ");
      document.removeEventListener("keydown", escImgsCard);
    },
  }
);

function escImgsCard(e) {
  if (e.code === "Escape") {
    instance.close();
  }
}

function openInstanceModal(e) {
  e.preventDefault();
  instance.element().querySelector("img").src = e.target.dataset.source;
  instance.show();
}
// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.
