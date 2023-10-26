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
                html = html.replace("{{image}}", p.getImg());
                html = html.replace("{{price}}", p.getPrice());
                html = html.replace("{{idcategory}}", p.getIdCategory());    
                html = html.replace("{{description}}", p.getDescription());
                html = html.replace("{{dispo}}", p.getDispo());
            
            all += html;
        }
    }
    return all;
}

export { productRenderer, productRendererPage };