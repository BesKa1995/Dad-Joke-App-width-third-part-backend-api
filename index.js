const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

document.addEventListener('DOMContentLoaded', generateJoke)
jokeBtn.addEventListener('click', generateJoke)
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const response = await fetch('https://icanhazdadjoke.com', config)
  const jokeData = await response.json()
  jokeEl.innerHTML = jokeData.joke
}