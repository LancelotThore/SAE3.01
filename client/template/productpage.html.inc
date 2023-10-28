<h2 class="page__title">{{name}}</h2>
<figure class="produit">
    <img class="produit__img" src="../assets/{{image}}" alt="">
    <ul class="produit__ul">
        <li class="produit__buy">
            <div class="produit__achat">
                <div class="produit__prix">
                    <p class="produit__price">{{price}} €</p>
                    <p class="produit__dispo">{{quantite}}</p>
                </div>
                <button class="produit__btn">Ajouter à mon panier <img class="produit__button-svg" src="../assets/panierwhite.svg" alt="">
                </button>
            </div>
        </li>
        <li class="produit__options">
                    {{selecteur}}
        </li>
        <li class="produit__desc">{{description}}</li>
    </ul>
</figure>