async function search () {
    const response = await fetch ('https://rickandmortyapi.com/api/character/657')
    const data = await response.json()
    console.log(data)
    document.getElementById('name').innerHTML = `Name: ${data?.name}`
    document.getElementById('status').innerHTML = `Status: ${data?.status}`
    document.getElementById('gender').innerHTML = `Gender: ${data?.gender}`
    document.getElementById('location').innerHTML = `Location: ${data?.location.name}`
    document.getElementById('species').innerHTML = `Species: ${data?.species}`
    
}
search()