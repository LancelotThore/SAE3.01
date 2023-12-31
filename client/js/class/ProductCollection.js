import { Product } from "./Product.js";
import { getRequest, postRequest } from "../api-queries.js";

class ProductCollection {

    #uri; // pour mémoriser l'uri utilisée pour chargée les produits (peut être utile si refresh, enregistrement de produit etc...)
    #products; // tableau de Product

    constructor(){
        this.#uri = "";
        this.#products = [];
    }

    async load(uri){
        this.#uri = uri;
        let objects = await getRequest(uri);
        for(let item of objects){
            let p = new Product(item.id_produit, item.nom, item.image, item.prix, item.id_categorie, item.description, item.quantite, item.taille_figurine, item.couleur_figurine, item.bluray, item.langue, item.taille_vetement, item.couleur_vetement);
            this.#add(p);
        }
        return this.#products.length;
    }

    // # marche aussi sur les méthodes
    #add(p){
        if ( p instanceof Product) // prevent from adding object that are not Product instances
            this.#products.push(p);
            console.log(this.#products);
    }

    async create(name, idcat){
        if (this.#uri == "" ){
            console.log("Warning, the api server uri is not set.");
        }
        let object = await postRequest(this.#uri, {name: name, category: idcat});
        if (object){
            this.#add(new Product(object.id, object.name, object.category));
        }
        else{
            console.log("Fail to create the Product");
        }
    }

    find(id){
        return this.#products.find( p => p.getId()==id );
    }

    findAll(){
        return this.#products;
    }

    findByCategory(idcat){
        return this.#products.filter( p => p.getIdCategory()==idcat);
    }
}


export {ProductCollection}