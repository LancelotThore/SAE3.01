<h2 class="page__title">{{name}}</h2>
<figure class="produit">
    <img class="produit__img" src="../assets/{{image}}" alt="">
    <ul class="produit__ul">
        <li class="dispo pos-relative">{{dispo}}</li>
        <li class="produit__buy">
            <div class="produit__achat">
                <div class="produit__prix">
                    <p class="produit__price">{{price}} €</p>
                    <p>x</p>
                    <input id="quantiteInput" type="number" class="produit__qte" value="{{value}}" min="0" max="{{qtemax}}">
                </div>
                <button data-id="{{id}}" id="product__btn" class="produit__btn pointer">Ajouter à mon panier<img class="produit__button-svg" src="../assets/panierwhite.svg" alt=""></button>
            </div>
        </li>
        <li class="produit__options">
            {{selecteur}}
        </li>
        <li class="produit__desc">{{description}}</li>
    </ul>
</figure>