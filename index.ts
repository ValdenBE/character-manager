
const axios = require('axios');
const api = 'https://character-database.becode.xyz';

async function getHeroes() {
    const resp = await axios.get(api + '/characters');
    const array = resp.data;
    array.forEach((element: { name: string; shortDescription: string; image: string; }) => {

        let div = document.createElement("div")
        let pName = document.createElement("p")
        let pDesc = document.createElement("p")
        pName.setAttribute('class', 'Name');
        pDesc.setAttribute('class', 'Desc')

        let btnMod = document.createElement("button")
        let img = document.createElement("img")

        btnMod.textContent = "Modification"
        pName.textContent = element.name
        pDesc.textContent = element.shortDescription
        document.querySelector('main').appendChild(div).appendChild(img)
        img.src = "data: image / gif; base64," + element.image

        document.querySelector('main').appendChild(div).appendChild(pName)
        document.querySelector('main').appendChild(div).appendChild(pDesc)

    });
}
let btnAdd = document.createElement("button")
btnAdd.textContent="Create Character"
btnAdd.setAttribute('class', 'btnAdd')
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
closeForm.setAttribute('class', 'closeFormBtn')

let btnSubmit = document.createElement("button")
btnSubmit.setAttribute('class', 'btnSubmit')
btnSubmit.textContent="Submit"
btnSubmit.addEventListener("click", ()=>{
//! ici 

})

document.getElementsByClassName('form-popup')[0].appendChild(btnSubmit)
document.getElementsByClassName('form-popup')[0].appendChild(closeForm)
document.querySelector('header').appendChild(btnAdd)


getHeroes();

