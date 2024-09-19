const button = document.querySelector('button')
const p = document.querySelector('p')
const languages = document.querySelector('#languages')
let isEnglish = true
languages.addEventListener('click', () => {
    let language = languages.querySelector(('div'))
    if (language.classList.contains('english')) {
        language.classList.remove('english')
        language.classList.add('russian')
        language.textContent = 'RU'
        getChuckNorrisJokeRussian()
    } else if (language.classList.contains('russian')) {
        language.classList.remove('russian')
        language.classList.add('english')
        language.textContent = 'EN';
        getChuckNorrisJoke()
    }
    isEnglish = !isEnglish
})

function getRandomQuote(quotes) {
    const randomIndex = Math.floor(Math.random() * quotes.value.length);
    return quotes.value[randomIndex]
}

async function getChuckNorrisJoke() {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random')
        const data = await response.json()
        p.innerHTML = data.value
    } catch (error) {
        console.error('Ошибка при получении данных:', error)
    }
}

async function getChuckNorrisJokeRussian() {
    try {
        const response = await fetch('chuck-jokes-ru.json')
        const data = await response.json()
        p.innerHTML = getRandomQuote(data).joke
    } catch (error) {
        console.error('Ошибка при получении данных:', error)
    }
}

button.addEventListener('click', () => {
    if(isEnglish)
        getChuckNorrisJoke()
    else getChuckNorrisJokeRussian()
});

getChuckNorrisJoke()


