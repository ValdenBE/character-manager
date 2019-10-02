var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var axios = require('axios');
var api = 'https://character-database.becode.xyz';
var btnSubmit = document.createElement("button");
var ModifyBtn = document.createElement("button");
ModifyBtn.setAttribute('class', 'ModifyBtn');
ModifyBtn.textContent = "Modify";
document.getElementsByClassName('view-popup')[0].appendChild(ModifyBtn);
var checker = false;
function getHeroes() {
    return __awaiter(this, void 0, void 0, function () {
        var resp, array;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get(api + '/characters')];
                case 1:
                    resp = _a.sent();
                    array = resp.data;
                    array.forEach(function (element) {
                        var div = document.createElement("div");
                        var img = document.createElement("img");
                        img.src = "data: image / gif; base64," + element.image;
                        var pName = document.createElement("p");
                        var pDesc = document.createElement("p");
                        div.setAttribute('type', 'button');
                        pName.setAttribute('class', 'Name');
                        pDesc.setAttribute('class', 'Desc');
                        pName.textContent = element.name;
                        pDesc.textContent = element.shortDescription;
                        document.querySelector('main').appendChild(div).appendChild(pName);
                        document.querySelector('main').appendChild(div).appendChild(pDesc);
                        document.querySelector('main').appendChild(div).appendChild(img);
                        function closeView() {
                            document.getElementById("view").style.display = "none";
                        }
                        div.addEventListener("click", function () {
                            function openView() {
                                document.getElementById("view").style.display = "block";
                                document.getElementsByClassName("charName")[0].textContent = element.name;
                                document.getElementsByClassName("charSmallDesc")[0].textContent = element.shortDescription;
                                document.getElementsByClassName("charDesc")[0].textContent = element.description;
                            }
                            openView();
                            ModifyBtn.addEventListener("click", function () {
                                checker = false;
                                function openForm() {
                                    document.getElementById("myForm").style.display = "block";
                                }
                                closeView();
                                openForm();
                                deleteBtn.addEventListener("click", function () {
                                    function deleteBtn() {
                                        return __awaiter(this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, axios["delete"](api + '/characters/' + element.id)];
                                                    case 1:
                                                        _a.sent();
                                                        window.location.href = window.location.href;
                                                        return [2 /*return*/];
                                                }
                                            });
                                        });
                                    }
                                    function closeForm() {
                                        document.getElementById("myForm").style.display = "none";
                                    }
                                    var isdeleted = confirm("Are you sure you want to delete it ?");
                                    if (isdeleted == true) {
                                        deleteBtn();
                                        closeForm();
                                    }
                                });
                                btnSubmit.addEventListener("click", function () {
                                    function closeForm() {
                                        document.getElementById("myForm").style.display = "none";
                                    }
                                    if (checker == false) {
                                        var inputName = document.getElementById("name");
                                        var inputShortDesc = document.getElementById("shortDesc");
                                        var inputFullDesc = document.getElementById("fulDesc");
                                        var inputImg = document.getElementById("pict");
                                        function updateUser() {
                                            return __awaiter(this, void 0, void 0, function () {
                                                var inputName, inputShortDesc, inputFullDesc, inputImg, id, response, error_1;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            inputName = document.getElementById("name");
                                                            inputShortDesc = document.getElementById("shortDesc");
                                                            inputFullDesc = document.getElementById("fulDesc");
                                                            inputImg = document.getElementById("pict");
                                                            id = element.id;
                                                            _a.label = 1;
                                                        case 1:
                                                            _a.trys.push([1, 3, , 4]);
                                                            return [4 /*yield*/, axios.put(api + '/characters/' + id, {
                                                                    name: inputName.value,
                                                                    shortDescription: inputShortDesc.value,
                                                                    description: inputFullDesc.value,
                                                                    image: inputImg.value
                                                                })];
                                                        case 2:
                                                            response = _a.sent();
                                                            console.log(response.data);
                                                            window.location.href = window.location.href;
                                                            return [2 /*return*/, response];
                                                        case 3:
                                                            error_1 = _a.sent();
                                                            console.error(error_1);
                                                            return [3 /*break*/, 4];
                                                        case 4: return [2 /*return*/];
                                                    }
                                                });
                                            });
                                        }
                                        if (inputName.value == "" || inputShortDesc.value == "" || inputFullDesc.value == "" || inputImg.value == "") {
                                            console.error("Remplissez tout les champs pour valider !");
                                            alert("Remplissez tout les champs pour valider !");
                                            function openForm() {
                                                document.getElementById("myForm").style.display = "block";
                                            }
                                            openForm();
                                        }
                                        else {
                                            updateUser();
                                            closeForm();
                                        }
                                    }
                                });
                                btnSubmit.textContent = "Update";
                                document.getElementsByClassName("popupName")[0].textContent = 'Modify Character';
                                document.getElementById("name").setAttribute('value', element.name);
                                document.getElementById("shortDesc").setAttribute('value', element.shortDescription);
                                document.getElementById("fulDesc").setAttribute('value', element.description);
                                document.getElementById("pict").setAttribute('value', element.image);
                            });
                        });
                    });
                    return [2 /*return*/];
            }
        });
    });
}
getHeroes();
var deleteBtn = document.createElement("button");
deleteBtn.setAttribute('class', 'deleteBtn');
deleteBtn.textContent = "Delete";
document.getElementsByClassName('form-popup')[0].appendChild(deleteBtn);
//Create Button
var btnAdd = document.createElement("button");
btnAdd.setAttribute('class', 'btnAdd');
btnAdd.textContent = "Create Character";
document.querySelector('header').appendChild(btnAdd);
btnAdd.addEventListener("click", function () {
    checker = true;
    function openForm() {
        document.getElementById("myForm").style.display = "block";
    }
    openForm();
    btnSubmit.textContent = "Submit";
    document.getElementsByClassName("popupName")[0].textContent = 'Modify Character';
    document.getElementById("name").setAttribute('value', "");
    document.getElementById("pict").setAttribute('value', "");
    document.getElementById("fulDesc").setAttribute('value', "");
    document.getElementById("shortDesc").setAttribute('value', "");
    document.getElementsByClassName("popupName")[0].textContent = 'Create Character';
});
//Close Button
var closeView = document.createElement("button");
closeView.setAttribute('class', 'closeViewBtn');
closeView.textContent = "Close";
document.getElementsByClassName('view-popup')[0].appendChild(closeView);
closeView.addEventListener("click", function () {
    function closeView() {
        document.getElementById("view").style.display = "none";
    }
    closeView();
});
var closeForm = document.createElement("button");
closeForm.setAttribute('class', 'closeFormBtn');
closeForm.textContent = "Close";
document.getElementsByClassName('form-popup')[0].appendChild(closeForm);
closeForm.addEventListener("click", function () {
    function closeForm() {
        document.getElementById("myForm").style.display = "none";
    }
    closeForm();
});
//Submit/Update button
btnSubmit.setAttribute('class', 'btnSubmit');
document.getElementsByClassName('form-popup')[0].appendChild(btnSubmit);
btnSubmit.addEventListener("click", function () {
    function closeForm() {
        document.getElementById("myForm").style.display = "none";
    }
    if (checker == true) {
        var inputName_1 = document.getElementById("name");
        var inputShortDesc_1 = document.getElementById("shortDesc");
        var inputFullDesc_1 = document.getElementById("fulDesc");
        var inputImg_1 = document.getElementById("pict");
        function postUser() {
            return __awaiter(this, void 0, void 0, function () {
                var response, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, axios.post(api + '/characters', {
                                    name: inputName_1.value,
                                    shortDescription: inputShortDesc_1.value,
                                    description: inputFullDesc_1.value,
                                    image: inputImg_1.value
                                })];
                        case 1:
                            response = _a.sent();
                            console.log(response.data);
                            window.location.href = window.location.href;
                            return [2 /*return*/, response];
                        case 2:
                            error_2 = _a.sent();
                            console.error(error_2);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
        if (inputName_1.value == "" || inputShortDesc_1.value == "" || inputFullDesc_1.value == "" || inputImg_1.value == "") {
            console.error("Remplissez tout les champs pour valider !");
            alert("Remplissez tout les champs pour valider !");
            function openForm() {
                document.getElementById("myForm").style.display = "block";
            }
            openForm();
        }
        else {
            postUser();
            closeForm();
        }
    }
});
