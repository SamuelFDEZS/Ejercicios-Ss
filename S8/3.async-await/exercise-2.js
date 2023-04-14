async function getCharacters () {
    const res = await fetch('https://rickandmortyapi.com/api/character')
    const response = await res.json()
    const characters = console.log(response)
}

getCharacters();