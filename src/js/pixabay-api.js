import axios from 'axios';

const API_KEY = import.meta.env.VITE_PIXABAY_KEY;

const pixabayApi = axios.create({
  baseURL: 'https://pixabay.com/api/',
});

export function getImagesByQuery(query) {
  return pixabayApi
    .get('', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}