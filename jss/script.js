
document.getElementById('button-banane').addEventListener("click", clickButton);
document.getElementById('button-cafe').addEventListener("click", clickButton);
document.getElementById('button-chocolat').addEventListener("click", clickButton);
document.getElementById('btn-clean').addEventListener("click",btnClean);

/* Déclaration tab article */
var panier = [];

/* Définition Article 1 */
var art1 = 
{
    img:"img/banane.jpg",
    label: "Banane" ,
    cat:"Fruits" ,
    prix:1
};
var art2=
{
    img:"img/Café.jpg",
    label: "Café" ,
    cat:"Boisson Chaude" ,
    prix:2
};
var art3=
{
    img:"img/chocolat.jpg",
    label: "Chocolat" ,
    cat:" Tablette " ,
    prix:5
};

/* Lorsque qu'on click */
function clickButton()
{
   
    if(this.id == "button-banane") {ajouterArticle(art1);}
    if(this.id == "button-cafe") {ajouterArticle(art2);}
    if(this.id == "button-chocolat") {ajouterArticle(art3);}

    calculerTotal();   
}

function btnClean()
{
    var lignesASupprimer = document.getElementsByClassName("ligne-custom");
    tableau = document.getElementById("details-panier");
    for(var i = lignesASupprimer.length - 1; i >= 0; i--)
        {
            tableau.removeChild(lignesASupprimer[i]);
        }
    panier.length = 0;
    calculerTotal();
   
};

function ajouterArticle(article) 
{
    panier.push(article);
    var tr = document.createElement("tr");
    tr.className = "ligne-custom";
    
    var tdImg =  document.createElement("td");
    tdImg.className = "img-article";
    tdImg.style.backgroundImage = "url(" + article.img + ")" ;
    
    tr.appendChild(tdImg);
    
    var tdLabel = document.createElement("td");
    tdLabel.textContent = article.label;
   
    tr.appendChild(tdLabel);
    
    var tdCat =  document.createElement("td");
    tdCat.textContent = article.cat;
    
    tr.appendChild(tdCat);
    
    var tdPrix = document.createElement("td");
    tdPrix.textContent = article.prix;
    
    tr.appendChild(tdPrix);
    
    document.getElementById("details-panier").appendChild(tr);
}

function calculerTotal()
{
    var total = 0;
    if(panier.length == 0)
        {
             document.getElementById('texte-panier').textContent = " Votre panier est vide ";
        }
    else
    {
    for(var i = 0; i < panier.length; i++)
        {
            total += panier[i].prix;
        }
    document.getElementById('texte-panier').textContent = " j'ai pris " + panier.length + " article(s) pour un total de " + total + " € ";
    }
}