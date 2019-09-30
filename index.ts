
const axios = require('axios');
const api = 'https://character-database.becode.xyz';
const list = [];

async function getHeroes() {
    const resp = await axios.get(api + '/characters');
    const array = resp.data;
    array.forEach((element: { name: string; shortDescription: string; image: string; }) => {

        let div = document.createElement("div")
        let p = document.createElement("p")
        let btnView = document.createElement("button")
        let btnMod = document.createElement("button")
        let img = document.createElement("img")

        let content = (element.name + " " + element.shortDescription)
        btnView.textContent = "View"
        btnMod.textContent = "Modification"
        p.textContent = content
        document.body.appendChild(div).appendChild(img)
        img.src = "data: image / gif; base64," + element.image

        document.body.appendChild(div).appendChild(p)
        document.body.appendChild(div).appendChild(btnView)

        document.body.appendChild(div).appendChild(btnMod)







    });
}


getHeroes();
