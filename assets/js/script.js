console.log("Hello World !");

// function injectHTML() {
    
// }
// Je crée mon tableau des opérandes
const operandCalc = ["+","-","/","*"];
const mesElements = ["main", "div", "div", "div", "div"];
const mesClasses = ["main-calc", "ecran-calc", "clav-calc", "pav-num-calc", "pav-ope-calc"];
for (let index = 0; index < mesElements.length; index++) {
        construireHtml(mesElements[index], mesClasses[index]);
}

function construireHtml(element, classe) {
    let unElement = document.createElement(element);
    unElement.classList.add(classe);
    if (classe === "ecran-calc") unElement.innerText = 0;
    switch (true) {
        case (classe == "main-calc"):
            document.body.appendChild(unElement);
            break;
        case (classe == "ecran-calc"):
            document.querySelector("main").appendChild(unElement);
            break;
        case (classe == "clav-calc"):
            document.querySelector("main").appendChild(unElement);
            break;
        case (classe == "pav-num-calc"):
            document.querySelector("div.clav-calc").appendChild(unElement);
            break;
        case (classe == "pav-ope-calc"):
            document.querySelector("div.clav-calc").appendChild(unElement);
            break;
    
        default:
            break;
    }
}
// ----------------------------Je crée mon MAIN pour mettre la reste du HTML--------------------------------------
// let main = document.createElement("main");
// ecranCalc.classList.add("main-calc");
// document.body.appendChild(main);

// // ----------------------------Je crée mon écran ECRAN-------------------------
// let ecranCalc = document.createElement("div");
// console.log(ecranCalc);
// ecranCalc.classList.add("ecran-calc");
// ecranCalc.innerText = 0;
// main.appendChild(ecranCalc);

// // ----------------------------Je crée mon clavier CLAVIER---------------------

// let clavCalc = document.createElement("div");
// console.log(clavCalc);
// clavCalc.classList.add("clav-calc");
// main.appendChild(clavCalc);

// // --------Je crée mon pavé numérique PAVE NUMERIQUE-----------
// let pavNumCalc = document.createElement('div');
// console.log(pavNumCalc);
// pavNumCalc.classList.add("pav-num-calc");
// clavCalc.appendChild(pavNumCalc);

// // --------Je crée mon pavé des operandes OPERANDES--------------

// let pavOpeCalc = document.createElement('div');
// console.log(pavOpeCalc);
// pavOpeCalc.classList.add("pav-ope-calc");
// clavCalc.appendChild(pavOpeCalc);



