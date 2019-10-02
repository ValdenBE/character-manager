((window) => {

    const axios = require('axios');
    const api = 'https://character-database.becode.xyz';
    let btnSubmit = document.createElement("button")

    let checker = false

    async function getHeroes() {
        const resp = await axios.get(api + '/characters');
        const array = resp.data;
        array.forEach((element: { name: string; shortDescription: string; image: string; description: string; }) => {
            let div = document.createElement("div")
            let img = document.createElement("img")
            let pName = document.createElement("p")
            let pDesc = document.createElement("p")
            div.setAttribute('type', 'button')
            pName.setAttribute('class', 'Name');
            pDesc.setAttribute('class', 'Desc')
            pName.textContent = element.name
            pDesc.textContent = element.shortDescription
            img.src = "data: image / gif; base64," + element.image
            document.querySelector('main').appendChild(div).appendChild(pName)
            document.querySelector('main').appendChild(div).appendChild(pDesc)
            document.querySelector('main').appendChild(div).appendChild(img)

            div.addEventListener("click", () => {
                checker = false
                function openForm() {
                    document.getElementById("myForm").style.display = "block";
                }
                openForm()

                btnSubmit.textContent = "Update"
                document.getElementsByClassName("popupName")[0].textContent = 'Modify Character'
                document.getElementById("name").setAttribute('value', element.name)
                document.getElementById("shortDesc").setAttribute('value', element.shortDescription)
                document.getElementById("fulDesc").setAttribute('value', element.description)
                document.getElementById("pict").setAttribute('value', element.image)
            });

        });

    }
    getHeroes();

    //Create Button

    let btnAdd = document.createElement("button")
    btnAdd.setAttribute('class', 'btnAdd')
    btnAdd.textContent = "Create Character"
    document.querySelector('header').appendChild(btnAdd)
    btnAdd.addEventListener("click", () => {
        checker = true

        function openForm() {
            document.getElementById("myForm").style.display = "block";
        }
        openForm()
        btnSubmit.textContent = "Submit"
        document.getElementsByClassName("popupName")[0].textContent = 'Modify Character'
        document.getElementById("name").setAttribute('value', "")
        document.getElementById("pict").setAttribute('value', "")
        document.getElementById("fulDesc").setAttribute('value', "")
        document.getElementById("shortDesc").setAttribute('value', "")
        document.getElementsByClassName("popupName")[0].textContent = 'Create Character';
    });

    //Close Button

    let closeForm = document.createElement("button")
    closeForm.setAttribute('class', 'closeFormBtn')
    closeForm.textContent = "Close"
    document.getElementsByClassName('form-popup')[0].appendChild(closeForm)
    closeForm.addEventListener("click", () => {
        function closeForm() {
            document.getElementById("myForm").style.display = "none";
        }
        closeForm()
    })

    //Submit/Update button
    let inputName = <HTMLInputElement>document.getElementById("name");
    let inputShortDesc = <HTMLInputElement>document.getElementById("shortDesc");
    let inputFullDesc = <HTMLInputElement>document.getElementById("fulDesc");
    let inputImg = <HTMLInputElement>document.getElementById("pict");
    inputImg.style.display = "none";

    btnSubmit.setAttribute('class', 'btnSubmit')
    document.getElementsByClassName('form-popup')[0].appendChild(btnSubmit)
    btnSubmit.addEventListener("click", () => {
        function closeForm() {
            document.getElementById("myForm").style.display = "none";
        }
        if (checker == true) {


            async function postUser() {
                try {
                    const response = await axios.post(api + '/characters', {
                        name: inputName.value,
                        shortDescription: inputShortDesc.value,
                        description: inputFullDesc.value,
                        image: inputImg.value
                    });
                    console.log(response.data);
                    window.location.href = window.location.href
                    return response;
                } catch (error) {
                    console.error(error);
                }
            }
            if (inputName.value == "" || inputShortDesc.value == "" || inputFullDesc.value == "" || inputImg.value == "") {
                console.error("Remplissez tout les champs pour valider !")
                alert("Remplissez tout les champs pour valider !")
                function openForm() {
                    document.getElementById("myForm").style.display = "block";
                }
                openForm();
            } else {
                postUser();
                closeForm()
            }
        } else {
            closeForm();
            alert(checker)
        }


    });

    function encodeImageFileAsURL(element) {
        var file = element.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            let str = <string>reader.result;
            str = str.split(",")[1]

            inputImg.value = str;
            console.log('RESULT', reader.result)

        }
        reader.readAsDataURL(file);

    }

    window.encodeImageFileAsURL = encodeImageFileAsURL;

})(window);