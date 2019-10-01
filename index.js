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
                        var pName = document.createElement("p");
                        var pDesc = document.createElement("p");
                        pName.setAttribute('class', 'Name');
                        pDesc.setAttribute('class', 'Desc');
                        var btnMod = document.createElement("button");
                        var img = document.createElement("img");
                        btnMod.textContent = "Modification";
                        pName.textContent = element.name;
                        pDesc.textContent = element.shortDescription;
                        document.querySelector('main').appendChild(div).appendChild(img);
                        img.src = "data: image / gif; base64," + element.image;
                        document.querySelector('main').appendChild(div).appendChild(pName);
                        document.querySelector('main').appendChild(div).appendChild(pDesc);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
var btnAdd = document.createElement("button");
btnAdd.textContent = "Create Character";
btnAdd.setAttribute('class', 'btnAdd');
btnAdd.addEventListener("click", function () {
    function openForm() {
        document.getElementById("myForm").style.display = "block";
    }
    openForm();
});
var closeForm = document.createElement("button");
closeForm.textContent = "Close";
closeForm.addEventListener("click", function () {
    function closeForm() {
        document.getElementById("myForm").style.display = "none";
    }
    closeForm();
});
closeForm.setAttribute('class', 'closeFormBtn');
var btnSubmit = document.createElement("button");
btnSubmit.setAttribute('class', 'btnSubmit');
btnSubmit.textContent = "Submit";
btnSubmit.addEventListener("click", function () {
    //! ici 
});
document.getElementsByClassName('form-popup')[0].appendChild(btnSubmit);
document.getElementsByClassName('form-popup')[0].appendChild(closeForm);
document.querySelector('header').appendChild(btnAdd);
getHeroes();
