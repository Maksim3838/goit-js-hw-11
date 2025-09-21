import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "52395439-1c1f05bbfb1dbdeee6be85271"; 

export async function fetchImages(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
