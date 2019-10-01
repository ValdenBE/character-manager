
const axios = require('axios');
const api = 'https://character-database.becode.xyz';

async function getHeroes() {
    const resp = await axios.get(api + '/characters');
    const array = resp.data;
    array.forEach((element: { name: string; shortDescription: string; image: string; }) => {

        let div = document.createElement("div")
        let p = document.createElement("p")

        let btnMod = document.createElement("button")
        let img = document.createElement("img")

        let content = (element.name + " " + element.shortDescription)
        btnMod.textContent = "Modification"
        p.textContent = content
        document.querySelector('main').appendChild(div).appendChild(img)
        img.src = "data: image / gif; base64," + element.image

        document.querySelector('main').appendChild(div).appendChild(p)

        document.querySelector('main').appendChild(div).appendChild(btnMod)
    });
}
getHeroes();


let btnAdd = document.createElement("button")
btnAdd.textContent = "ajouter un personnage"
btnAdd.addEventListener("click", () => {
    function openForm() {
        document.getElementById("myForm").style.display = "block";
    }
    openForm()
});
let closeForm = document.createElement("button")
closeForm.textContent = "Close"


let btnSubmit = document.createElement("button")
btnSubmit.textContent = "Submit"
document.getElementsByClassName('form-popup')[0].appendChild(btnSubmit)
document.getElementsByClassName('form-popup')[0].appendChild(closeForm)
document.querySelector('header').appendChild(btnAdd)


let inputName = <HTMLInputElement>document.getElementById("name");
let inputShortDesc = <HTMLInputElement>document.getElementById("shortDesc");
let inputFullDesc = <HTMLInputElement>document.getElementById("fulDesc");
let inputImg = <HTMLInputElement>document.getElementById("pict");

btnSubmit.addEventListener("click", () => {
    function closeForm() {
        document.getElementById("myForm").style.display = "none";
    }
    closeForm();
    async function postUser() {
        console.log("testum");

        try {
            const response = await axios.post(api + '/characters', {
                name: inputName.value,
                shortDescription: inputShortDesc.value,
                description: inputFullDesc.value,
                image: inputImg.value
                //   image: 'https://source.unsplash.com/random'
            });
            console.log(response.data);
            return response;
        } catch (error) {
            console.error(error);
        }
    }
    postUser();
});







