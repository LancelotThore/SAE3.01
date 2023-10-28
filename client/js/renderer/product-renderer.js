import { Product } from "../class/Product.js";

let getOption = await fetch("../template/productoption.html.inc");
const templateoption = await getOption.text();

let getSelect = await fetch("../template/productselect.html.inc");
const templateSelect = await getSelect.text();

let getCard = await fetch("../template/productcard.html.inc");
const templateCard = await getCard.text();

let getPage = await fetch("../template/productpage.html.inc");
const templatePage = await getPage.text();

document.querySelector('.content-produits').innerHTML;

let productRenderer = function (data) {

    let html = "";
    let all = "";
    if (data instanceof Array === false) {
        console.error("data has be an array of Products");
        return all;
    }
    for (let p of data) {
        if (p instanceof Product) {
            html = templateCard.replace("{{id}}", p.getId());
            if (p.getQuantite() === "0") {
                html = html.replace("{{dispo}}", "temporairement indisponible")
            }
            else if (p.getQuantite() !=="0" && p.getQuantite() < 10) {
                html = html.replace("{{dispo}}", "bientôt épuisé")
            }
            else {
                html = html.replace("{{dispo}}", "")
            }
            html = html.replace("{{name}}", p.getName());
            html = html.replace("{{image}}", p.getImg());
            html = html.replace("{{price}}", p.getPrice());
            html = html.replace("{{idcategory}}", p.getIdCategory());

            all += html;
        }
    }
    return all;
}




let productRendererPage = async function (data) {

    let html = "";
    let all = "";
    if (data instanceof Array === false) {
        console.error("data has be an array of Products");
        return all;
    }
    for (let p of data) {
        if (p instanceof Product) {
            html = templatePage.replace("{{id}}", p.getId());
            if (p.getQuantite() === "0") {
                html = html.replace("{{dispo}}", "temporairement indisponible")
            }
            else if (p.getQuantite() !=="0" && p.getQuantite() < 10) {
                html = html.replace("{{dispo}}", "bientôt épuisé")
            }
            else {
                html = html.replace("{{dispo}}", "")
            }
            html = html.replace("{{name}}", p.getName());
            html = html.replace("{{image}}", p.getImg());
            html = html.replace("{{price}}", p.getPrice());
            html = html.replace("{{idcategory}}", p.getIdCategory());
            html = html.replace("{{description}}", p.getDescription());
            html = html.replace("{{quantite}}", p.getQuantite());

            let options = p.getOption();
            let name = options.shift();
            let optionname = templateSelect.replaceAll("{{optionname_1}}", name);
            name = options.shift();
            optionname = optionname.replaceAll("{{optionname_2}}", name);
            html = html.replace("{{selecteur}}", optionname);

            let alloption = [];

            for (let opt of options) {
                let optioncode = JSON.parse(opt);
                alloption.push(optioncode);
            }


            let listeoption = "";

            let i = 1;
            for (let elt of alloption) {
                for (let element of elt) {
                    listeoption += templateoption.replaceAll("{{option}}", element);
                }

                html = html.replace("{{here" + i + "}}", listeoption);
                listeoption = "";
                i++;

            }
            console.log(html);
            all += html;
        }
    }
    console.log(all);
    return all;
}

let dispoRender = function() {
    let dispo = document.querySelectorAll(".dispo");
    for (let item of dispo) {
        if (item.textContent === "temporairement indisponible") {
            item.classList.add("products__dispo-1");
        }
        else if (item.textContent === "bientôt épuisé") {
            item.classList.add("products__dispo-2");
        }
        else {
            item.classList.add(".none");
        }
    }
}

export { productRenderer, productRendererPage, dispoRender };