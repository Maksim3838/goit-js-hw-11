import { fetchImages } from "./pixabay-api.js";
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

  try {
    const data = await fetchImages(searchQuery);

    if (data.hits.length === 0) {
      iziToast.error({
        title: "Error",
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
      });
      gallery.innerHTML = "";
      return;
    }

      gallery.innerHTML = data.hits
      .map(
        (hit) => `
        <li>
          <img src="${hit.webformatURL}" alt="${hit.tags}" width="300">
        </li>
      `
      )
      .join("");
  } catch (error) {
    iziToast.error({
      title: "Error",
      message: "Something went wrong. Please try again later!",
      position: "topRight",
    });
    console.error(error);
  }
});
