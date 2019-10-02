((window) => {
    const axios = require('axios');
    const api = 'https://character-database.becode.xyz';
    let btnSubmit = document.createElement("button")
    let ModifyBtn = document.createElement("button")
    ModifyBtn.setAttribute('class', 'ModifyBtn')
    ModifyBtn.textContent = "Modify"
    document.getElementsByClassName('view-popup')[0].appendChild(ModifyBtn)

    let checker = false

    async function getHeroes() {
        const resp = await axios.get(api + '/characters');
        const array = resp.data;
        array.forEach((element: { name: string; shortDescription: string; image: string; description: string; id: string; }) => {
            let div = document.createElement("div")
            let img = document.createElement("img")
            img.src = "data: image / gif; base64," + element.image
            let pName = document.createElement("p")
            let pDesc = document.createElement("p")
            div.setAttribute('type', 'button')
            pName.setAttribute('class', 'Name');
            pDesc.setAttribute('class', 'Desc')
            pName.textContent = element.name
            pDesc.textContent = element.shortDescription
            document.querySelector('main').appendChild(div).appendChild(pName)
            document.querySelector('main').appendChild(div).appendChild(pDesc)
            document.querySelector('main').appendChild(div).appendChild(img)
            function closeView() {
                document.getElementById("view").style.display = "none";
            }
            div.addEventListener("click", () => {

                function openView() {
                    var showdown = require('showdown')
                    var converter = new showdown.Converter()
                    var html = converter.makeHtml(element.description)
                    document.getElementById("view").style.display = "block";
                    document.getElementsByClassName("charName")[0].textContent = element.name
                    document.getElementsByClassName("charSmallDesc")[0].textContent = element.shortDescription
                    document.getElementsByClassName("charDesc")[0].innerHTML = html


                }
                openView()

                ModifyBtn.addEventListener("click", () => {
                    checker = false
                    function openForm() {
                        document.getElementById("myForm").style.display = "block";
                    }
                    closeView()
                    openForm()

                    deleteBtn.addEventListener("click", () => {
                        async function deleteBtn() {
                            await axios.delete(api + '/characters/' + element.id)
                            window.location.href = window.location.href
                        }
                        function closeForm() {
                            document.getElementById("myForm").style.display = "none";
                        }
                        let isdeleted = confirm("Are you sure you want to delete it ?");
                        if (isdeleted == true) {
                            deleteBtn()
                            closeForm()
                        }

                    })

                    btnSubmit.addEventListener("click", () => {
                        function closeForm() {
                            document.getElementById("myForm").style.display = "none";
                        }
                        if (checker == false) {
                            let inputName = <HTMLInputElement>document.getElementById("name");
                            let inputShortDesc = <HTMLInputElement>document.getElementById("shortDesc");
                            let inputFullDesc = <HTMLInputElement>document.getElementById("fulDesc");
                            let inputImg = <HTMLInputElement>document.getElementById("pict");

                            async function updateUser() {
                                let inputName = <HTMLInputElement>document.getElementById("name");
                                let inputShortDesc = <HTMLInputElement>document.getElementById("shortDesc");
                                let inputFullDesc = <HTMLInputElement>document.getElementById("fulDesc");
                                let inputImg = <HTMLInputElement>document.getElementById("pict");
                                let id = element.id

                                try {
                                    const response = await axios.put(api + '/characters/' + id, {
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
                                updateUser();
                                closeForm()
                            }
                        }
                    })
                    btnSubmit.textContent = "Update"
                    document.getElementsByClassName("popupName")[0].textContent = 'Modify Character'
                    document.getElementById("name").setAttribute('value', element.name)
                    document.getElementById("shortDesc").setAttribute('value', element.shortDescription)
                    let textarea = document.getElementById("fulDesc") as HTMLTextAreaElement;
                    textarea.setAttribute('placeholder', element.description)
                    document.getElementById("pict").setAttribute('value', element.image)
                })



            });

        });

    }
    getHeroes();

    let deleteBtn = document.createElement("button")
    deleteBtn.setAttribute('class', 'deleteBtn')
    deleteBtn.textContent = "Delete"
    document.getElementsByClassName('form-popup')[0].appendChild(deleteBtn)


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
    let closeView = document.createElement("button")
    closeView.setAttribute('class', 'closeViewBtn')
    closeView.textContent = "Close"

    document.getElementsByClassName('view-popup')[0].appendChild(closeView)
    closeView.addEventListener("click", () => {
        function closeView() {
            document.getElementById("view").style.display = "none";
        }
        closeView()
    })

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
            let inputName = <HTMLInputElement>document.getElementById("name");
            let inputShortDesc = <HTMLInputElement>document.getElementById("shortDesc");
            let inputFullDesc = <HTMLInputElement>document.getElementById("fulDesc");
            let inputImg = <HTMLInputElement>document.getElementById("pict");
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
