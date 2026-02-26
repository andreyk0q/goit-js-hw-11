import axios from 'axios';

const API_KEY = import.meta.env.VITE_PIXABAY_KEY;

const pixabayApi = axios.create({
  baseURL: 'https://pixabay.com/api/',
});

export async function getImagesByQuery(query, page) {
  const response = await pixabayApi.get('', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,          // номер сторінки
      per_page: 15,  // по ТЗ — 15 карток за запит
    },
  });

  return response.data;
}