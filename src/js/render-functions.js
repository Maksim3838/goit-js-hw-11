import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox; 

/**
 * @param {Array} images 
 * @param {HTMLElement} gallery 
 */
export function renderGallery(images, gallery) {
  const markup = images
    .map(
      (hit) => `
      <li class="gallery-item">
        <a href="${hit.largeImageURL}">
          <img src="${hit.webformatURL}" alt="${hit.tags}" width="300">
        </a>
        <div class="info">
          <p><b>Likes:</b> ${hit.likes}</p>
          <p><b>Views:</b> ${hit.views}</p>
          <p><b>Comments:</b> ${hit.comments}</p>
          <p><b>Downloads:</b> ${hit.downloads}</p>
        </div>
      </li>
    `
    )
    .join("");

  gallery.innerHTML = markup;

  if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox(".gallery a", {
      captionsData: "alt",
      captionDelay: 250,
    });
  }
}
