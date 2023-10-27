import { Product } from "../class/Product.js";

document.querySelector('.content-produits').innerHTML;
const productsTemplate = document.querySelector("#template-produits").innerHTML;

let productRenderer = function (data) {

    let html = "";
    let all = "";
    if (data instanceof Array === false) {
        console.error("data has be an array of Products");
        return all;
    }
    for(let p of data) {
        if (p instanceof Product) {
            html = productsTemplate.replace("{{id}}", p.getId());
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


document.querySelector('.content-produits').innerHTML;



let productRendererPage = function (data) {

    let html = "";
    let all = "";
    if (data instanceof Array === false) {
        console.error("data has be an array of Products");
        return all;
    }
    for(let p of data) {
        if (p instanceof Product) {
                const productsTemplate = document.querySelector("#template-produit").innerHTML;
                html = productsTemplate.replace("{{id}}", p.getId());
                html = html.replace("{{name}}", p.getName());
                if (p.getQuantite() === "0") {
                    html = html.replace("{{dispo}}", "temporairement indisponible")
                }
                else if (p.getQuantite() !=="0" && p.getQuantite() < 10) {
                    html = html.replace("{{dispo}}", "bientôt épuisé")
                }
                else {
                    html = html.replace("{{dispo}}", "")
                }
                html = html.replace("{{image}}", p.getImg());
                html = html.replace("{{price}}", p.getPrice());
                html = html.replace("{{quantite}}", p.getQuantite());
                html = html.replace("{{idcategory}}", p.getIdCategory());    
                html = html.replace("{{description}}", p.getDescription());
                html = html.replace("{{quantite}}", p.getQuantite());
            
            all += html;
        }
    }
    return all;
}

let dispoRender = function() {
    let di = document.querySelectorAll(".dispo");
    for (let i of di) {
        if (i.textContent === "temporairement indisponible") {
            i.classList.add("products__dispo-1");
        }
        else if (i.textContent === "bientôt épuisé") {
            i.classList.add("products__dispo-2");
        }
        else {
            i.classList.add(".none");
        }
    }
}

export { productRenderer, productRendererPage, dispoRender };