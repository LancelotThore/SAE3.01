import { ProductCollection } from "./class/ProductCollection.js";
import { productRenderer } from "./renderer/product-renderer.js";
import { CategoryCollection } from "./class/CategoryCollection.js";
import { categoryRenderer } from "./renderer/category-renderer.js";
import { productRendererPage } from "./renderer/productPage-renderer.js";


let M = {
    products: new ProductCollection(),
    categories: new CategoryCollection()
}

let V = {}

V.renderProduct = function (data) {
    document.querySelector(".content-produits").innerHTML = productRenderer(data);
    let produit = document.querySelector(".content-produits");
    produit.addEventListener('click', C.handler_clickOnProduit);
}

V.renderCat = function (data) {
    let nav = document.querySelector(".content-filtre-cat")
    nav.innerHTML = categoryRenderer(data);
    nav = document.querySelector(".content-filtre-cat")
    nav.addEventListener("click", C.handlerClickNav);
}

V.renderPage = function (data) {
    document.querySelector(".content-produits").innerHTML = productRendererPage(data);
}

let C = {}

C.init = async function () {
    let nb = await M.products.load("https://mmi.unilim.fr/~thore2/api/products");
    let cat = await M.categories.load("https://mmi.unilim.fr/~thore2/api/categories");
    console.log(nb + " products added in the ProductCollection");
    console.log(cat + " products added in the CategoryCollection");
    V.renderProduct(M.products.findAll());
    V.renderCat(M.categories.findAll());
}

C.handlerClickNav = function (ev) {
    if (ev.target.tagName =="OPTION") {
        let id = ev.target.dataset.id;
        V.renderProduct(M.products.findByCategory(id));
    }
}

C.handler_clickOnProduit = function(ev){
    if ( ev.target.tagName=="BUTTON"){
        let id = ev.target.dataset.id;
        V.renderPage(M.products.find(id));
    }
}

C.init();