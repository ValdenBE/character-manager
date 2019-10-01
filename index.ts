
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
let btnAdd = document.createElement("button")
btnAdd.textContent="ajouter un personnage"
btnAdd.addEventListener("click", () => {
    function openForm() {
        document.getElementById("myForm").style.display = "block";
    }
    openForm()
});
let closeForm = document.createElement("button")
closeForm.textContent="Close"
closeForm.addEventListener("click", ()=>{
    function closeForm() {
        document.getElementById("myForm").style.display = "none";
    }
    closeForm()
})

let btnSubmit = document.createElement("button")
btnSubmit.textContent="Submit"
btnSubmit.addEventListener("click", ()=>{
//! ici 
})

document.getElementsByClassName('form-popup')[0].appendChild(btnSubmit)
document.getElementsByClassName('form-popup')[0].appendChild(closeForm)
document.querySelector('header').appendChild(btnAdd)


getHeroes();

