import { Product } from "../class/Product.js";

const productsTemplate = document.querySelector("#template-produit").innerHTML;

let productRenderer = function (data) {

    let html = "";
    let all = "";
    if (data instanceof Array === false) {
        console.error("data has be an array of Products");
        return all;
    }
    for(let i of data) {
        if (i instanceof Product) {
            html = productsTemplate.replace("{{id}}", p.getId);
            html = html.replace("{{name}}", p.getName);
            html = html.replace("{{img}}", p.getImg);
            html = html.replace("{{price}}", p.getPrice);
            html = html.replace("{{idcategory}}", p.getIdCategory);
            all += html;
        }
    }
}

export { productRenderer };