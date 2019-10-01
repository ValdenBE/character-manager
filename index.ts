
const axios = require('axios');
const api = 'https://character-database.becode.xyz';

async function getHeroes() {
    const resp = await axios.get(api + '/characters');
    const array = resp.data;
    array.forEach((element: { name: string; shortDescription: string; image: string; }) => {

        let div = document.createElement("div")
        div.setAttribute('type', 'button')
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
        div.addEventListener("click", () => {
            function openInfos() {
                document.getElementById("Infos").style.display = "flex";
                document.getElementsByClassName("contentData")[0].textContent = element.name
                document.getElementsByClassName("contentData")[1].textContent = element.shortDescription
            }
            openInfos()
        });

    });
    
}
getHeroes();


let closeInfos = document.createElement("button")
closeInfos.textContent="Close"
closeInfos.addEventListener("click", ()=>{
    function closeInfos() {
        document.getElementById("Infos").style.display = "none";
    }
    closeInfos()
})
closeInfos.setAttribute('class', 'closeFormBtn')



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
document.getElementsByClassName('form-popup')[0].appendChild(btnSubmit)
document.getElementsByClassName('form-popup')[0].appendChild(closeForm)
document.getElementsByClassName('infos-popup')[0].appendChild(closeInfos)
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
            });
            console.log(response.data);
            window.location.href=window.location.href
            return response;
        } catch (error) {
            console.error(error);
        }
    }
    postUser();
});





