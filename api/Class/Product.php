<?php
/**
 *  Class Product
 * 
 *  Représente un produit avec uniquement 3 propriétés (id, name, category)
 * 
 *  Implémente l'interface JsonSerializable 
 *  qui oblige à définir une méthode jsonSerialize. Cette méthode permet de dire comment les objets
 *  de la classe Product doivent être converti en JSON. Voire la méthode pour plus de détails.
 */
class Product implements JsonSerializable {
    private int $id; // id du produit
    private string $name; // nom du produit
    private string $img; // url de l'image
    private float $price; // prix du produit
    private int $idcategory; // id de la catégorie du produit
    private string $description;
    private string $dispo;
    private string $editeur;
    private string $type;
    private string $hauteur;
    private string $matiere;
    private string $date;
    private string $langue;
    private string $sous_titre;
    private string $support;
    private string $duree;
    private string $format_image;
    private string $studio;
    private string $auteur;
    private string $genre;
    private string $nombre_episode;
    private string $marque;


    public function __construct(int $id){
        $this->id = $id;
    }

    /**
     * Get the value of id
     */ 
    public function getId(): int
    {
        return $this->id;
    }

    /**
     *  Define how to convert/serialize a Product to a JSON format
     *  This method will be automatically invoked by json_encode when apply to a Product
     * 
     *  En français : On sait qu'on aura besoin de convertir des Product en JSON pour les
     *  envoyer au client. La fonction json_encode sait comment convertir en JSON des données
     *  de type élémentaire. A savoir : des chaînes de caractères, des nombres, des booléens
     *  des tableaux ou des objets standards (stdClass). 
     *  Mais json_encode ne saura pas convertir un objet de type Product dont les propriétés sont
     *  privées de surcroit. Sauf si on définit la méthode JsonSerialize qui doit retourner une
     *  représentation d'un Product dans un format que json_encode sait convertir (ici un tableau associatif)
     * 
     *  Le fait que Product "implémente" l'interface JsonSerializable oblige à définir la méthode
     *  JsonSerialize et permet à json_encode de savoir comment convertir un Product en JSON.
     * 
     *  Parenthèse sur les "interfaces" : Une interface est une classe (abstraite en générale) qui
     *  regroupe un ensemble de méthodes. On dit que "une classe implémente une interface" au lieu de dire 
     *  que "une classe hérite d'une autre" uniquement parce qu'il n'y a pas de propriétés dans une "classe interface".
     * 
     *  Voir aussi : https://www.php.net/manual/en/class.jsonserializable.php
     *  
     */
    public function JsonSerialize(): mixed{
        return ["id_produit" => $this->id, "nom" => $this->name, "image" => $this->img, "prix" => $this->price, "id_categorie" => $this->idcategory, "description" => $this->description, "quantite" => $this->quantite,"editeur" => $this->editeur,"type" => $this->type,"hauteur" => $this->hauteur,"matiere" => $this->matiere,"date" => $this->date,"langue" => $this->langue,"sous_titre" => $this->sous_titre,"support" => $this->support,"duree" => $this->duree,"format_image" => $this->format_image,"studio" => $this->studio,"auteur" => $this->auteur,"genre" => $this->genre,"nombre_episode" => $this->nombre_episode,"marque" => $this->marque
        ];
    }

    /**
     * Get the value of name
     */ 
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set the value of name
     *
     * @return  self
     */ 
    public function setName($name): self
    {
        $this->name = $name;
        return $this;
    }

    /**
     * Get the value of idcategory
     */ 
    public function getIdcategory()
    {
        return $this->idcategory;
    }

    /**
     * Set the value of idcategory
     *
     * @return  self
     */ 
    public function setIdcategory(int $idcategory): self
    {
        $this->idcategory = $idcategory;
        return $this;
    }

    /**
     * Get the value of image
     */ 
    public function getImage()
    {
        return $this->img;
    }

    /**
     * Set the value of image
     *
     * @return  self
     */ 
    public function setImage($img): self
    {
        $this->img = $img;
        return $this;
    }

    /**
     * Get the value of price
     */ 
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Set the value of price
     *
     * @return  self
     */ 
    public function setPrice($price): self
    {
        $this->price = $price;
        return $this;
    }

    /**
     * Set the value of id
     *
     * @return  self
     */ 
    public function setId($id): self
    {
        $this->id = $id;
        return $this;
    }

    /**
     * Get the value of description
     */ 
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set the value of description
     *
     * @return  self
     */ 
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get the value of dispo
     */ 
    public function getQuantite()
    {
        return $this->quantite;
    }

    /**
     * Set the value of dispo
     *
     * @return  self
     */ 
    public function setQuantite($quantite)
    {
        $this->quantite = $quantite;

        return $this;
    }

    /**
     * Get the value of editeur
     */ 
    public function getEditeur()
    {
        return $this->editeur;
    }

    /**
     * Set the value of editeur
     *
     * @return  self
     */ 
    public function setEditeur($editeur)
    {
        $this->editeur = $editeur;

        return $this;
    }

    /**
     * Get the value of type
     */ 
    public function getType()
    {
        return $this->type;
    }

    /**
     * Set the value of type
     *
     * @return  self
     */ 
    public function setType($type)
    {
        $this->type = $type;

        return $this;
    }

    /**
     * Get the value of hauteur
     */ 
    public function getHauteur()
    {
        return $this->hauteur;
    }

    /**
     * Set the value of hauteur
     *
     * @return  self
     */ 
    public function setHauteur($hauteur)
    {
        $this->hauteur = $hauteur;

        return $this;
    }

    /**
     * Get the value of matiere
     */ 
    public function getMatiere()
    {
        return $this->matiere;
    }

    /**
     * Set the value of matiere
     *
     * @return  self
     */ 
    public function setMatiere($matiere)
    {
        $this->matiere = $matiere;

        return $this;
    }

    /**
     * Get the value of date
     */ 
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Set the value of date
     *
     * @return  self
     */ 
    public function setDate($date)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get the value of langue
     */ 
    public function getLangue()
    {
        return $this->langue;
    }

    /**
     * Set the value of langue
     *
     * @return  self
     */ 
    public function setLangue($langue)
    {
        $this->langue = $langue;

        return $this;
    }

    /**
     * Get the value of sous_titre
     */ 
    public function getSous_titre()
    {
        return $this->sous_titre;
    }

    /**
     * Set the value of sous_titre
     *
     * @return  self
     */ 
    public function setSous_titre($sous_titre)
    {
        $this->sous_titre = $sous_titre;

        return $this;
    }

    /**
     * Get the value of support
     */ 
    public function getSupport()
    {
        return $this->support;
    }

    /**
     * Set the value of support
     *
     * @return  self
     */ 
    public function setSupport($support)
    {
        $this->support = $support;

        return $this;
    }

    /**
     * Get the value of duree
     */ 
    public function getDuree()
    {
        return $this->duree;
    }

    /**
     * Set the value of duree
     *
     * @return  self
     */ 
    public function setDuree($duree)
    {
        $this->duree = $duree;

        return $this;
    }

    /**
     * Get the value of format_image
     */ 
    public function getFormat_image()
    {
        return $this->format_image;
    }

    /**
     * Set the value of format_image
     *
     * @return  self
     */ 
    public function setFormat_image($format_image)
    {
        $this->format_image = $format_image;

        return $this;
    }

    /**
     * Get the value of studio
     */ 
    public function getStudio()
    {
        return $this->studio;
    }

    /**
     * Set the value of studio
     *
     * @return  self
     */ 
    public function setStudio($studio)
    {
        $this->studio = $studio;

        return $this;
    }

    /**
     * Get the value of auteur
     */ 
    public function getAuteur()
    {
        return $this->auteur;
    }

    /**
     * Set the value of auteur
     *
     * @return  self
     */ 
    public function setAuteur($auteur)
    {
        $this->auteur = $auteur;

        return $this;
    }

    /**
     * Get the value of genre
     */ 
    public function getGenre()
    {
        return $this->genre;
    }

    /**
     * Set the value of genre
     *
     * @return  self
     */ 
    public function setGenre($genre)
    {
        $this->genre = $genre;

        return $this;
    }

    /**
     * Get the value of nombre_episode
     */ 
    public function getNombre_episode()
    {
        return $this->nombre_episode;
    }

    /**
     * Set the value of nombre_episode
     *
     * @return  self
     */ 
    public function setNombre_episode($nombre_episode)
    {
        $this->nombre_episode = $nombre_episode;

        return $this;
    }

    /**
     * Get the value of marque
     */ 
    public function getMarque()
    {
        return $this->marque;
    }

    /**
     * Set the value of marque
     *
     * @return  self
     */ 
    public function setMarque($marque)
    {
        $this->marque = $marque;

        return $this;
    }
}