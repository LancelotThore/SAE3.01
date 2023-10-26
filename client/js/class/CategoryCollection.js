import { Category } from "./Category.js";
import { getRequest, postRequest } from "../api-queries.js";

class CategoryCollection {

    #uri; // pour mémoriser l'uri utilisée pour chargée les produits (peut être utile si refresh, enregistrement de produit etc...)
    #categories; // tableau de Product

    constructor(){
        this.#uri = "";
        this.#categories = [];
    }

    async load(uri){
        this.#uri = uri;
        let objects = await getRequest(uri);
        for(let item of objects){
            let p = new Category(item.id_categorie, item.nom);
            this.#add(p);
        }
        return this.#categories.length;
    }

    // # marche aussi sur les méthodes
    #add(p){
        if ( p instanceof Category) // prevent from adding object that are not Product instances
            this.#categories.push(p);
            console.log(this.#categories);
    }

    async create(name){
        if (this.#uri == "" ){
            console.log("Warning, the api server uri is not set.");
        }
        let object = await postRequest(this.#uri, {name: name});
        if (object){
            this.#add(new Category(object.id_categorie, object.name));
        }
        else{
            console.log("Fail to create the Product");
        }
    }

    find(id_categorie){
        return this.#categories.find( p => p.getId()==id_categorie );
    }

    findAll(){
        return this.#categories;
    }
}


export {CategoryCollection}