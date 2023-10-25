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
            array_push($res, $p);
        }
       
        return $res;
    }

    public function save($product){
        $requete = $this->cnx->prepare("insert into Product (nom, image, prix, id_categorie) values (:name, :img, :price, :idcategory)");
        $name = $product->getName();
        $image = $product->getImage();
        $price = $product->getPrice();
        $idcat = $product->getIdcategory();
        $requete->bindParam(':name', $name );
        $requete->bindParam(':img', $img );
        $requete->bindParam(':price', $price );
        $requete->bindParam(':idcategory', $idcat);
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