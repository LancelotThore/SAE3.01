<?php
require_once "Controller.php";
require_once "Repository/CategoryRepository.php" ;


// This class inherits the jsonResponse method  and the $cnx propertye from the parent class Controller
// Only the process????Request methods need to be (re)defined.

class CategoryController extends Controller {

    private CategoryRepository $categories;

    public function __construct(){
        $this->categories = new CategoryRepository();
    }

   
    protected function processGetRequest(HttpRequest $request) {
        $cat = $request->getParam("category");
        return $this->categories->findAll();
    }

    protected function processPostRequest(HttpRequest $request) {
        $json = $request->getJson();
        $obj = json_decode($json);
        $p = new Product(0); // 0 is a symbolic and temporary value since the product does not have a real id yet.
        $p->setName($obj->name);
        $ok = $this->categories->save($p); 
        return $ok ? $p : false;
    }
   
}

?>