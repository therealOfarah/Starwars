const baseUrl = "https://swapi.dev/api/"
export async function getAllStarShips(){
  const res = await fetch(`${baseUrl}starships`)
  return res.json()
}
export async function getDetails(apiUrl){
  const res = await fetch(`${apiUrl}`)
  console.log(res)
  console.log(res.json)
  return res.json()
}
