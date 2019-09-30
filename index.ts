
const axios = require('axios');
const api = 'https://character-database.becode.xyz';
const list = [];

async function getHeroes() {
    const resp = await axios.get(api + '/characters');
    const array = resp.data;
    array.forEach((element: { name: string; shortDescription: string; }) => {

        let div = document.createElement("div")
        let content = (element.name + " " + element.shortDescription)
        div.textContent = content
        document.body.appendChild(div)

    });
}

// async function postHeroes() {
//     const resp = await axios.post(api);
//     console.log(resp.data);
// }
// async function putHeroes() {
//     const resp = await axios.put(api);
//     console.log(resp.data);
// }
// async function delHeroes() {
//     const resp = await axios.delete(api);
//     console.log(resp.data);
// }
getHeroes();
