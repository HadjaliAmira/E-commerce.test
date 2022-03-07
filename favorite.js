var names=["Chocolat Dulcy", "Fudge", "Croquant","nougat","Box", "Praliné amandes noisettes", "Pate de noix", "Pate de chocolat croustillante"]
var imgs=["Chocolat_Dulcy.png","Fudge.png","Croquant.png","nougat.png","box.png","amandes.png","noix.png","pate_croustillante.png"]

var favorites=[]

var favoritesGridsHtml=""

for(i=0; i<names.length; i++){
    const name=names[i];
    const image=imgs[i];


    var favorite={
        id:i,
        name:name,
        image:image,
        Stars:1,
    }

    favorites.push(favorite);
    
    function addtocart(i){
       
        const favoriteactuel = favorites[i];
        var favoritesGridsHtml= document.getElementById('cartitems2').innerHTML
        cart.push(favoriteactuel)
        favoritesGridsHtml+= `<tr>
                    <td>${favoriteactuel.image}</td>
                    <td>${favoriteactuel.name}</td>
                    </tr>`    
        document.getElementById('cartitems2').innerHTML=favoritesGridsHtml;
        
             
    }
}

