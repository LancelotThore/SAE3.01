let Product = class {

    #id;
    #name;
    #img;
    #price;
    #idcategory;
    #description;
    #quantite;
    #taille_figurine;
    #couleur_figurine;
    #bluray;
    #langue;
    #taille_vetement;
    #couleur_vetement;

    constructor(id_produit, nom, image, prix, id_categorie, description, quantite, taille_figurine, couleur_figurine, bluray, langue, taille_vetement, couleur_vetement) {
        this.#id = id_produit;
        this.#name = nom;
        this.#img = image;
        this.#price = prix;
        this.#idcategory = id_categorie;
        this.#description = description;
        this.#quantite = quantite;
        this.#taille_figurine = taille_figurine;
        this.#couleur_figurine = couleur_figurine;
        this.#bluray = bluray;
        this.#langue = langue;
        this.#taille_vetement = taille_vetement;
        this.#couleur_vetement = couleur_vetement;
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
    getTaille_figurine() {
        return this.#taille_figurine;
    }
    getCouleur_figurine() {
        return this.#couleur_figurine;
    }
    getBluray() {
        return this.#bluray;
    }
    getLangue() {
        return this.#langue;
    }
    getTaille_vetement() {
        return this.#taille_vetement;
    }
    getCouleur_vetement() {
        return this.#couleur_vetement;
    }

}

export {Product};