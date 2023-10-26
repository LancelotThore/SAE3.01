import { Category } from "../class/Category.js";

const categoriesTemplate = document.querySelector("#template-filtre-cat").innerHTML;

let categoryRenderer = function (data) {

    let html = "";
    let all = "";
    if (data instanceof Array === false) {
        console.error("data has be an array of Categories");
        return all;
    }
    for(let p of data) {
        if (p instanceof Category) {
            html = categoriesTemplate.replace("{{id}}", p.getId());
            html = html.replace("{{name}}", p.getName());
            all += html;
        }
    }
    return all;
}

export { categoryRenderer };