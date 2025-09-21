import { fetchImages } from "./js/pixabay-api.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const searchQuery = form.elements["search-text"].value.trim();

  if (!searchQuery) {
    iziToast.warning({
      title: "Warning",
      message: "Please enter a search term!",
      position: "topRight",
    });
    return;
  }

    gallery.innerHTML = "";

  try {
    const data = await fetchImages(searchQuery);

    if (data.hits.length === 0) {
      iziToast.error({
        title: "Error",
        message:
          "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
      });
      return;
    }

      const markup = data.hits
      .map(
        (hit) => `
        <li class="gallery-item">
          <a href="${hit.largeImageURL}" target="_blank" rel="noopener noreferrer">
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
  } catch (error) {
    iziToast.error({
      title: "Error",
      message: "Something went wrong. Please try again later!",
      position: "topRight",
    });
    console.error(error);
  }
});
