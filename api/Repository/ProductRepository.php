<?php

require_once("Repository/EntityRepository.php");
require_once("Class/Product.php");


/**
 *  Classe ProductRepository
 * 
 *  Cette classe représente le "stock" de Product.
 *  Toutes les opérations sur les Product doivent se faire via cette classe 
 *  qui tient "synchro" la bdd en conséquence.
 * 
 *  La classe hérite de EntityRepository ce qui oblige à définir les méthodes  (find, findAll ... )
 *  Mais il est tout à fait possible d'ajouter des méthodes supplémentaires si
 *  c'est utile !
 *  
 */
class ProductRepository extends EntityRepository {

    public function __construct(){
        // appel au constructeur de la classe mère (va ouvrir la connexion à la bdd)
        parent::__construct();
    }

    public function find($id): ?Product{
        /*
            La façon de faire une requête SQL ci-dessous est "meilleur" que celle vue
            au précédent semestre (cnx->query). Notamment l'utilisation de bindParam
            permet de vérifier que la valeur transmise est "safe" et de se prémunir
            d'injection SQL.
        */
        $requete = $this->cnx->prepare("select * from PRODUITS where id_produit=:value"); // prepare la requête SQL
        $requete->bindParam(':value', $id); // fait le lien entre le "tag" :value et la valeur de $id
        $requete->execute(); // execute la requête
        $answer = $requete->fetch(PDO::FETCH_OBJ);
        
        if ($answer==false) return null; // may be false if the sql request failed (wrong $id value for example)
        
        $p = new Product($answer->id_produit);
        $p->setName($answer->nom);
        $p->setImage($answer->image);
        $p->setPrice($answer->prix);
        $p->setIdcategory($answer->id_categorie);
        $p->setDescription($answer->description);
        $p->setQuantite($answer->quantite);
        $p->setEditeur($answer->editeur);
        $p->setType($answer->type);
        $p->setHauteur($answer->hauteur);
        $p->setMatiere($answer->matiere);
        $p->setDate($answer->date);
        $p->setLangue($answer->langue);
        $p->setSous_titre($answer->sous_titre);
        $p->setSupport($answer->support);
        $p->setDuree($answer->duree);
        $p->setFormat_image($answer->format_image);
        $p->setStudio($answer->studio);
        $p->setAuteur($answer->auteur);
        $p->setGenre($answer->genre);
        $p->setNombre_episode($answer->nombre_episode);
        $p->setMarque($answer->imarque);
        return $p;
    }

    public function findAll(): array {
        $requete = $this->cnx->prepare("select * from PRODUITS");
        $requete->execute();
        $answer = $requete->fetchAll(PDO::FETCH_OBJ);

        $res = [];
        foreach($answer as $obj){
            $p = new Product($obj->id_produit);
            $p->setName($obj->nom);
            $p->setImage($obj->image);
            $p->setPrice($obj->prix);
            $p->setIdcategory($obj->id_categorie);
            $p->setDescription($obj->description);
            $p->setQuantite($obj->quantite);
            $p->setEditeur($obj->editeur);
            $p->setType($obj->type);
            $p->setHauteur($obj->hauteur);
            $p->setMatiere($obj->matiere);
            $p->setDate($obj->date);
            $p->setLangue($obj->langue);
            $p->setSous_titre($obj->sous_titre);
            $p->setSupport($obj->support);
            $p->setDuree($obj->duree);
            $p->setFormat_image($obj->format_image);
            $p->setStudio($obj->studio);
            $p->setAuteur($obj->auteur);
            $p->setGenre($obj->genre);
            $p->setNombre_episode($obj->nombre_episode);
            $p->setMarque($obj->marque);
            array_push($res, $p);
        }
       
        return $res;
    }

    public function save($product){
        $requete = $this->cnx->prepare("insert into Product (nom, image, prix, id_categorie, description, quantite, editeur, type, hauteur, matiere, date, langue, sous_titre, support, duree, format_image, studio, auteur, genre, nombre_episode, marque) values (:name, :img, :price, :idcategory, :description, :quantite, :editeur, :type, :hauteur, :matiere, :date, :langue, :sous_titre, :support, :duree, :format_image, :studio, :auteur, :genre, :nombre_episode, :marque )");
        $name = $product->getName();
        $image = $product->getImage();
        $price = $product->getPrice();
        $idcat = $product->getIdcategory();
        $description = $product->getDescription();
        $quantite = $product->getQuantite();
        $editeur = $product->getEditeur();
        $type = $product->getType();
        $hauteur = $product->getHauteur();
        $matiere = $product->getMatiere();
        $date = $product->getDate();
        $langue = $product->getLangue();
        $sous_titre = $product->getSous_titre();
        $support = $product->getSupport();
        $duree = $product->getDuree();
        $format_image = $product->getFormat_image();
        $studio = $product->getStudio();
        $auteur = $product->getAuteur();
        $genre = $product->getGenre();
        $nombre_episode = $product->getNombre_episode();
        $marque = $product->getMarque();
        $requete->bindParam(':name', $name );
        $requete->bindParam(':img', $img );
        $requete->bindParam(':price', $price );
        $requete->bindParam(':description', $description);
        $requete->bindParam(':quantite', $quantite);
        $requete->bindParam(':editeur', $editeur);
        $requete->bindParam(':type', $type);
        $requete->bindParam(':hauteur', $hauteur);
        $requete->bindParam(':matiere', $matiere);
        $requete->bindParam(':date', $date);
        $requete->bindParam(':langue', $langue);
        $requete->bindParam(':sous_titre', $sous_titre);
        $requete->bindParam(':support', $support);
        $requete->bindParam(':duree', $duree);
        $requete->bindParam(':format_image', $format_image);
        $requete->bindParam(':studio', $studio);
        $requete->bindParam(':auteur', $auteur);
        $requete->bindParam(':genre', $genre);
        $requete->bindParam(':nombre_episode', $nombre_episode);
        $requete->bindParam(':marque', $marque);
        $answer = $requete->execute(); // an insert query returns true or false. $answer is a boolean.

        if ($answer){
            $id = $this->cnx->lastInsertId(); // retrieve the id of the last insert query
            $product->setId($id); // set the product id to its real value.
            return true;
        }
          
        return false;
    }

    public function delete($id){
        // Not implemented ! TODO when needed !
        return false;
    }

    public function update($product){
        // Not implemented ! TODO when needed !
        return false;
    }

}