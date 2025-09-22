import { fetchImages } from "./js/pixabay-api.js";
import { renderGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";
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

  clearGallery(gallery);
  showLoader();

  try {
    const data = await fetchImages(searchQuery);

    if (data.hits.length === 0) {
      iziToast.error({
        title: "Error",
        message: "No images found. Please try again!",
        position: "topRight",
      });
      return;
    }

    renderGallery(data.hits, gallery, true);

  } catch (error) {
    iziToast.error({
      title: "Error",
      message: "Something went wrong. Try again later.",
      position: "topRight",
    });
    console.error(error);
  } finally {
    hideLoader();
  }
});
