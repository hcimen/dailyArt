async function getSomeArt() {
  const randomPage = Math.floor(Math.random() * 9990) + 1;
  const articUrl = `https://api.artic.edu/api/v1/artworks?fields=artist_title,image_id,id,title,artist_display,thumbnail,alt_text,main_reference_number,date_display,credit_line,?limit=10&page=${randomPage}`;
  console.log(randomPage);
  const randomArtworkIndex = Math.floor(Math.random() * 10);
  console.log('randomArtworkIndex is ' + randomArtworkIndex);

  try {
    const response = await fetch(articUrl);
    const artwork = await response.json();
    console.log(artwork.data[randomArtworkIndex]);
    return artwork.data[randomArtworkIndex];
  } catch (error) {
    console.error(error);
  }
}

module.exports = getSomeArt;