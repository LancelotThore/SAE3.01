let Category = class {

    #id;
    #name;

    constructor(id_categorie, nom) {
        this.#id = id_categorie;
        this.#name = nom;
    }

    getId() {
        return this.#id;
    }

    getName() {
        return this.#name;
    }
}

export {Category};