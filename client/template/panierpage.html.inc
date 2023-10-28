<div class="cart">
    <table class="cart__allproduit">
        <thead class="cart__allproduit-head">
            <tr class="cart__allproduit-content">
            <th colspan="2">REF</th>
            <th>TITRE</th>
            <th>P.U TTC</th>
            <th>QTÉ</th>
            <th>TOTAL TTC</th>
            </tr>
        </thead>
        <tbody class="cart__produit table">
            {{articles}}
        </tbody>
    </table>

    <figure class="cart__promo">
        <h4>Code Promo</h4>
        <ul class="cart__promo-ul">
            <li>Code promotion:</li>
            <li><input class="cart__promo-input" type="text" name="" id=""></li>
            <button class="cart__promo-btn" type="submit">Valider</button>
        </ul>
    </figure>

    <figure class="cart__reglement">
        <h4>Mode de réglement</h4>
        <ul class="cart__reglement-ul">
            <li class="cart__reglement-input"><input  type="checkbox" name="" id=""></li>
            <li><p>Carte Bancaire</p></li>
            <li><img class="cart__reglement-img" src="../assets/Visa.svg" alt=""></li>
        </ul>
    </figure>
</div>