document.addEventListener('DOMContentLoaded', function () {
  // Fetch API data
  fetch('https://random-api.xyz/api/anime/random')
    .then(response => response.json())
    .then(data => {
      // Display data in the paragraph tag
      const apiDataElement = document.getElementById('apiData');
      const apimediaElement = document.getElementById('apimedia');
      apiDataElement.textContent = data.results[0].title;
      apimediaElement.src = data.results[0].poster;
      console.log(data);
    })
    .catch(error => {
      // Handle errors
      console.error('Error fetching API data:', error);
    });
});