let Product = class {

    #id;
    #name;
    #img;
    #price;
    #idcategory;
    #description;
    #quantite;

    constructor(id_produit, nom, image, prix, id_categorie, description, quantite) {
        this.#id = id_produit;
        this.#name = nom;
        this.#img = image;
        this.#price = prix;
        this.#idcategory = id_categorie;
        this.#description = description;
        this.#quantite = quantite;
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

    getQuantite() {
        return this.#quantite;
    }

}

export {Product};