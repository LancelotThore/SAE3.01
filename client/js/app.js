import { ProductCollection } from "./class/ProductCollection.js";
import { productRenderer } from "./renderer/product-renderer.js";


let M = {
    products: new ProductCollection()
}

let V = {}

V.render = function (data) {
    document.querySelector(".content-produits").innerHTML = productRenderer(data);
}

let C = {}

C.init = async function () {
    let nb = await M.products.load("https://mmi.unilim.fr/~thore2/api/products");
    console.log(nb + " products added in the ProductCollection");
    console.log(M.products);
    V.render(M.products.findAll());
}

C.init();