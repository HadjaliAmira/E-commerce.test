var names=["Chocolat Dulcy", "Fudge", "Croquant","nougat","Box", "Praliné amandes noisettes", "Pate de noix", "Pate de chocolat croustillante"]
var prices=[600,100,300,70,3500,600,600,600]
var imgs=["Chocolat_Dulcy.png","Fudge.png","Croquant.png","nougat.png","box.png","amandes.png","noix.png","pate_croustillante.png"]

var products=[]
var cart=[]
var total= 0

 var productsGridsHtml=""

    for(index=0; index<names.length; index++){
        const name=names[index];
        const prix=prices[index];
        const image=imgs[index];


        var product={
            id:index,
            name:name,
            price:prix,
            image:image,
            quantity:1
            }

        products.push(product);

        productsGridsHtml += `  
                                <div class="col -3">
                                    <div class="card" style="width: 18rem; margin-bottom: 20px;">
                                        <img src=${image} class="card-img-top" alt="...">
                                        <div class="card-body">
                                            <div style="display: flex; justify-content: space-between;">
                                                <h5 class="card-title">${name}</h5>
                                                <button type="button" onclick="addtofavorite(${index})" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2" style="background-color: transparent; color:black; border:none;">
                                                    <i class="fa-solid fa-heart"></i>
                                                </button>
                                            </div>
                                            <div style="display: flex; ">
                                                <a onclick="addtocart(${index})" href="" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style="margin-right: 40px; background-color: #b86200; border-radius: 30px; border:none; outline:none;">Acheter</a>
                                                <p style="font-weight: bold;">Price: ${prix}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `
    }
    document.getElementById("products").innerHTML=productsGridsHtml;

    function addtocart(index){

        const produitactuel = products[index];
        var items= document.getElementById('cartitems').innerHTML
        const found= cart.find(produit => produit.id == produitactuel.id)

        if (found){
            cart.forEach(product => {
                if (product.id==found.id){
                    product.quantity++;
                    document.getElementById('qty'+ product.id).innerHTML = product.quantity;
                    total+= produitactuel.price;
                    document.getElementById('total').innerHTML=total;
                }
            });
        }else{
                    cart.push(produitactuel)
                        items+= `<tr>
                                    <td>${produitactuel.id}</td>
                                    <td>${produitactuel.name}</td>
                                    <td id="qty${produitactuel.id}">${produitactuel.quantity}</td>
                                    <td>${produitactuel.price}</td>
                                    <td><button>Delete</button></td>
                                </tr>`
                        document.getElementById('cartitems').innerHTML=items;
                        total+= produitactuel.price;
                        document.getElementById('total').innerHTML=total;
                        console.log(cart)
                        console.log(total)
                }
           
        }
    
    /*<td><button type="button" onclick="removeitem(${produitactuel.id})" class="btn btn-danger">
                                        Delete
                                    </button></td>*/
        


                


