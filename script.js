async function fetchDog() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();
  document.getElementById("dog").innerHTML += `<img src="${data.message}" alt="Dog" />`;
}

async function fetchCat() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await res.json();
  document.getElementById("cat").innerHTML += `<img src="${data[0].url}" alt="Cat" />`;
}

async function fetchWeather() {
  // NYC coordinates
  const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&current_weather=true");
  const data = await res.json();
  document.getElementById("weather").innerHTML += `<p>NYC Temp: ${data.current_weather.temperature}°C</p>`;
}

async function fetchCurrency() {
  const res = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
  const data = await res.json();
  document.getElementById("currency").innerHTML += `<p>USD to EUR: ${data.rates.EUR}</p>`;
}

async function fetchMovies() {
  const apiKey = "534f94ada33fd66f672bccb02182f55e";
  const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`);
  const data = await res.json();
  data.results.slice(0, 3).forEach(movie => {
    document.getElementById("movies").innerHTML += `<p>${movie.title}</p>`;
  });
}

async function fetchGitHub() {
  const res = await fetch("https://api.github.com/users/Janderson125");
  const data = await res.json();
  document.getElementById("github").innerHTML += `<p>${data.login}</p><img src="${data.avatar_url}" width="100" alt="GitHub Avatar"/>`;
}

async function fetchJoke() {
  const res = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
  const data = await res.json();
  document.getElementById("joke").innerHTML += `<p>${data.joke}</p>`;
}

async function fetchPublicAPI() {
  const res = await fetch("https://api.publicapis.org/random");
  const data = await res.json();
  const api = data.entries[0];
  document.getElementById("publicapi").innerHTML += `<p><strong>${api.API}</strong>: ${api.Description}</p>`;
}

// Call all fetch functions
fetchDog();
fetchCat();
fetchWeather();
fetchCurrency();
fetchMovies();
fetchGitHub();
fetchJoke();
fetchPublicAPI();
