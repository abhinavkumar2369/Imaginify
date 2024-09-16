async function fetchRandomImages(query, count = 6) {
  const accessKey = 'hAGsczhQKOQbqg_QVL70mdLAy5qPo4BjH-_5JUzLYMY';

  try {
    const response = await fetch(`https://api.unsplash.com/photos/random?query=${query}&count=${count}&client_id=${accessKey}`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.map(image => ({
      url: image.urls.regular,
      description: image.description || image.alt_description || 'No description available',
      downloadUrl: image.links.download
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default fetchRandomImages;