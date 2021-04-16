export const getItemById = (id) => {
    let info = "Hola";
  fetch("../data/beers.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    }
  })
    .then((response) => response.json())
    .then((data) => {
        return data.find(item => item.id === id)
    })
}
