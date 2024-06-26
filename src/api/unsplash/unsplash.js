const accessKey = '';

export async function fetchImages(query) {
  try {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=6`, {
      headers: {
        Authorization: `Client-ID ${accessKey}`
      }
    });
    if (!response.ok) {
      throw new Error('Ошибка HTTP: ' + response.status);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Ошибка при загрузке изображений:', error);
    return [];
  }
}