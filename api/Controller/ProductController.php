<?php
require_once "Controller.php";
require_once "Repository/ProductRepository.php" ;


// This class inherits the jsonResponse method  and the $cnx propertye from the parent class Controller
// Only the process????Request methods need to be (re)defined.

class ProductController extends Controller {

    private ProductRepository $products;

    public function __construct(){
        $this->products = new ProductRepository();
    }

   
    protected function processGetRequest(HttpRequest $request) {
        $id = $request->getId("id");
        if ($id){
            // URI is .../products/{id}
            $p = $this->products->find($id);
            return $p==null ? false :  $p;
        }
        else{
            // URI is .../products
            $cat = $request->getParam("category"); // is there a category parameter in the request ?
            if ( $cat == false) // no request category, return all products
                return $this->products->findAll();
            else // return only products of category $cat
                return $this->products->findAllByCategory($cat);
        }
    }

    protected function processPostRequest(HttpRequest $request) {
        $json = $request->getJson();
        $obj = json_decode($json);
        $p = new Product(0); // 0 is a symbolic and temporary value since the product does not have a real id yet.
        $p->setName($obj->name);
        $p->setImage($obj->img);
        $p->setPrice($obj->price);
        $p->setIdcategory($obj->category);
        $p->setDescription($obj->description);
        $p->setDispo($obj->dispo);
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
        $p->setMarque($obj->imarque);
        $ok = $this->products->save($p); 
        return $ok ? $p : false;
    }
   
}

?>