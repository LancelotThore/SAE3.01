let Product = class {

    #id;
    #name;
    #img;
    #price;
    #idcategory;

    constructor(id_produit, nom, image, prix, id_categorie) {
        this.#id = id_produit;
        this.#name = nom;
        this.#img = image;
        this.#price = prix;
        this.#idcategory = id_categorie;
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
}

export {Product};