let Product = class {

    #id;
    #name;
    #img;
    #price;
    #idcategory;
    #description;
    #dispo;

    constructor(id_produit, nom, image, prix, id_categorie, description, dispo) {
        this.#id = id_produit;
        this.#name = nom;
        this.#img = image;
        this.#price = prix;
        this.#idcategory = id_categorie;
        this.#description = description;
        this.#dispo = dispo;
    }

    getId() {
        return this.#id;
    }

    getName() {
        return this.#name;
    }

    getImg() {
        return this.#img;
    }

    getPrice() {
        return this.#price;
    }

    getIdCategory() {
        return this.#idcategory;
    }

    getDescription() {
        return this.#description;
    }

    getDispo() {
        return this.#dispo;
    }

}

export {Product};