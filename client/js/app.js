import { ProductCollection } from "./class/ProductCollection.js";
import { productRenderer } from "./renderer/product-renderer.js";
import { CategoryCollection } from "./class/CategoryCollection.js";
import { categoryRenderer } from "./renderer/category-renderer.js";


let M = {
    products: new ProductCollection(),
    categories: new CategoryCollection()
}

let V = {}

V.renderProduct = function (data) {
    document.querySelector(".content-produits").innerHTML = productRenderer(data);
}

V.renderCat = function (data) {
    let nav = document.querySelector(".content-filtre-cat")
    nav.innerHTML = categoryRenderer(data);
    nav = document.querySelector(".content-filtre-cat")
    nav.addEventListener("click", C.handlerClickNav);
}

let C = {}

C.handlerClickNav = function (ev) {
    if (ev.target.tagName =="OPTION") {
        let id = ev.target.dataset.id;
        V.renderProduct(M.products.findByCategory(id));
    }
}

C.init = async function () {
    let nb = await M.products.load("https://mmi.unilim.fr/~thore2/api/products");
    let cat = await M.categories.load("https://mmi.unilim.fr/~thore2/api/categories");
    console.log(nb + " products added in the ProductCollection");
    console.log(cat + " products added in the CategoryCollection");
    V.renderProduct(M.products.findAll());
    V.renderCat(M.categories.findAll());
}

C.init();