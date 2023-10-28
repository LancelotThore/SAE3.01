import { ProductCollection } from "./class/ProductCollection.js";
import { productRenderer, productRendererPage, panierRenderer, dispoRender } from "./renderer/product-renderer.js";
import { CategoryCollection } from "./class/CategoryCollection.js";
import { categoryRenderer } from "./renderer/category-renderer.js";

let produit = document.querySelector(".content-produits");

let M = {
    products: new ProductCollection(),
    categories: new CategoryCollection()
}

let V = {}

V.render = function (data) {
    produit.innerHTML = productRenderer(data);
    dispoRender();
}

V.renderPage = async function (data) {
    produit.innerHTML = await productRendererPage(data);
    dispoRender();
    let qte = document.querySelector("#quantiteInput");
    qte.addEventListener("input", C.handlerInput)
    produit.addEventListener("click", C.handlerClickAjouterPanier);
}

V.renderCat = function (data) {
    let nav = document.querySelector(".content-filtre-cat")
    nav.innerHTML = categoryRenderer(data);
    nav.addEventListener("click", C.handlerClickNav);
}

V.renderPanier = async function (data, qte) {
    produit.innerHTML = await panierRenderer(data, qte);
}

let C = {}

C.init = async function () {
    let nb = await M.products.load("https://mmi.unilim.fr/~thore2/api/products");
    let cat = await M.categories.load("https://mmi.unilim.fr/~thore2/api/categories");
    console.log(nb + " products added in the ProductCollection");
    console.log(cat + " products added in the CategoryCollection");
    V.render(M.products.findAll());
    V.renderCat(M.categories.findAll());
    produit.addEventListener('click', C.handler_clickOnProduit);
}

C.handlerClickNav = function (ev) {
    if (ev.target.tagName=="SELECT") {
        let selectedOption = ev.target.options[ev.target.selectedIndex];
        let id = selectedOption.dataset.id;
        if (id == 0) {
            V.render(M.products.findAll());
        }
        else {
            V.render(M.products.findByCategory(id));
        }
    }
}

C.handler_clickOnProduit = function(ev){
    if ( ev.target.id=="product__id"){
        let id = ev.target.dataset.id;
        V.renderPage([M.products.find(id)]);
    }
}

C.handlerInput = function(ev) {
    let nameValue = ev.target.value;
}

C.handlerClickAjouterPanier = function(ev) {
    if (ev.target.id=="product__btn") {
        const qte = document.querySelector('#quantiteInput').value;
        let id = ev.target.dataset.id;
        if(qte !== "0") {
            let articles = C.getCookie('articles');
            if(articles != null) {
                articles = JSON.parse(articles);
            }
            else {
                articles = [];
            }
            articles += [[id], [qte]];
            C.setCookie('articles', JSON.stringify(articles), 1);
            V.renderPanier(articles)
        }
    }
}

C.setCookie = function(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

C.getCookie = function(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

C.eraseCookie = function(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}

C.getAllCookie = function() {
    return document.cookie;
}

C.init();