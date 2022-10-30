app.component("display-product",{
    props:{
        premium:{
            type:Boolean,
            required:true,
        },
        details:{
            type:Array,
            required:true,
        }
        
        
    },
    data (){
        return{
        product:'Chaussettes',
                price:5,
                select_variant:0,
               // quantite:25,
                description:' Dolorem iusto maiores libero minus pariatur nonplaceat culpa nihil blanditiis labore asperiores error porro rerum corporis obcaecati eius maxime cupiditate nobis!',
                brand:'VueJS',
                url:'https://www.facebook.com',
                instock:true,
                inventory:100,
                onSale:true,
                details:[ '50% coton' , '30% laine' , '20% polyester' ],
                variants :[
                    {id:2001,color:"green",image:'./assets/images/socks_green.jpg',quantite:10,cart:0},
                    {id:2002,color:"blue",image:'./assets/images/socks_blue.jpg',quantite:25,cart:0},  
                ],
                //cart:[],
                reviews:[],
                pointures:['39','40','41','42','43','44','45'],
                resultat:0,
                afficher_description:0,
                more_less:'More',
                show:false,
                list_ajout_count_green:0,
                list_ajout_count_blue:0
            }
    },
    /*html*/
    template:
    `
    <div  v-if="show"  class="popup-below">
    <div v-if="show" class="popup_magasin">
     <div class="return" type="button" @click="show=false"  ><span id="return" ><strong><i class="fa-solid fa-xmark"></i></strong></span></div>
       <div style="padding-left:19rem;"><h1 style="background-color: rgb(232, 232, 232);border-radius: 10px; margin-right:20rem;">List  </h1></div>

       <div class="container text-center">
       <div class="row">
         <div class="col">
                <div class="card" style="width: 18rem;">
                <img :src="'./assets/images/socks_green.jpg'" class="card-img-top" alt="..." style="width: 200px;">
                <div class="card-body">
                <h5 class="card-title"><strong>{{product+ brand}}</strong></h5>
                <h6>Green</h6>
                <h6>{{list_ajout_count_green}}</h6> 
                <button type ="reset"class="btn btn-danger" @click="decreaseCart">Delete</button>
                </div>
       </div>
         </div>
         <div class="col">
                <div class="card" style="width: 18rem;">
                <img :src="'./assets/images/socks_blue.jpg'" class="card-img-top" alt="..." style="width: 200px;">
                <div class="card-body">
                <h5 class="card-title"><strong>{{product+ brand}}</strong></h5>
                <h6>Blue</h6>
                <h6>{{list_ajout_count_blue}}</h6> 
                <button type ="reset"class="btn btn-danger" @click="decreaseCart">Delete</button>
                </div>
       </div>
         </div>
       </div>
     </div>


        </div>

  </div>
    <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img :src="image" v-bind:alt="product" :class="{disabled_image: quantity==0}">
        <div class="reseau-sociaux">
          
        </div>
      </div>

      <div class="product-info">
        
        <h1><strong>{{title}}</strong></h1>
        <h2><strong>Prix : </strong>{{price}}$</h2>
        <div class="cont-desc">
        <p id="#desc" v-if="afficher_description" style="font-style: italic;font-size:15px"> Lorem, ipsum dolor sit amet consectetur adipisicing elit{{description}}<div id="#more"><strong><button @click="inverser()" type="button" class="btn btn-warning">{{more_less}}</button> </strong></div>
         </p></div>

        <p v-if="quantity>10">En stock : {{quantity}}</p>
        <p v-else-if="quantity<=10 && quantity>0">Presque epuisee : <span style="color: red;">{{quantity}}</span></p>
        <p v-else><img style="width: 110px;height: 100px;" src="./assets/images/out-of-stock-img.png "alt=""></p>
        <p v-show="onSale">{{property}}</p>
        <ul>
          <h2><strong>Details :<br></strong></h2>
          
           <product-detail :details="details"></product-detail>
        
        </ul>
        <p> Expedition :{{shipping}}</p>
        <div class="cart" style="border-radius: 5px; " type="button" @click="show=true" :class="{disabledButtonCart:carts==0}" ><i class="fa-sharp fa-solid fa-cart-shopping"><span style="font-size: 20px; color:rgb(42, 42, 32); padding-left:15px ; "> {{carts}} </span></i></div>
        <div v-for="(variant,index) in variants" :key="variant.id"
        class="color-circle"  @mouseover="update_variant(index)"    
        :style="{backgroundColor:variant.color}" style="cursor: pointer;padding: 10px;" >{{variant.color}}
             
        </div>
        <select class="form-select" aria-label="Default select example" >
          <option selected >Choisisez votre size </option>
          <option value="1" v-for="pointure in pointures">{{pointure}}</option>
        </select><br>
        
        
        
        <button type="button" id="btn"  v-on:click="addToCart" @click="ajout_list_achat" :class="{disabledButton :quantity==0}"  > <span style="padding-right: 15px;">Ajoutez</span><i class="fa-sharp fa-solid fa-plus"></i> </button>
        <button type="button" id="btn"  @click="decreaseCart" :class="{disabledButton :carts==0}"> <span style="padding-right: 15px;">Decrease </span><i class="fa-sharp fa-solid fa-minus"></i></button>
        <button type="button" id="btn" @click="result" :class="{disabledButton : carts==0}" > <span style="padding-right: 15px;">Validez</span><i class="fa-sharp fa-solid fa-check"></i></button>
        
        <button type="button" id="btn" @click="cansel" ><span style="padding-right: 15px;">Cancel</span><i class="fa-sharp fa-solid fa-xmark"></i></button>
        <h3 style="color: rgb(235, 75, 16);"><strong>Votre achats</strong> {{resultat}} £</h3>
        <i class="bi bi-cart-check"></i>
        <!--Shorthand v-on:click == @click    -->
        
       
      </div>
    </div>
    
    
  </div>


  <div class="commenter">
  <review-form @review-submitted="addReview"></review-form>
  <review-list  :reviews="reviews" ></review-list>
  </div>
  
    `,
    methods:{
        addReview(review){
            this.reviews.push(review);
        },
            addToCart(){
              this.variants[this.select_variant].cart+=1;
              this.variants[this.select_variant].quantite-=1;

               
            },
            update_variant(index){
                this.select_variant=index;
            },
            decreaseCart(){
                if(this.variants[this.select_variant].quantite==2001){
                    this.variants[this.select_variant].quantite+=1;
                    this.variants[this.select_variant].cart-=1;
                }
                else{
                    this.variants[this.select_variant].quantite+=1;
                    this.variants[this.select_variant].cart-=1;
                    
                    
                }

                

                
                
            },
            result(){
                
                this.resultat=parseInt(this.price)*parseInt(this.cart);
              

            },
            
            
            cansel(){
                this.variants[this.select_variant].cart=0;
                if(this.variants[this.select_variant].id==2001){
                    this.variants[this.select_variant].quantite=10;
                }
                else{
                    this.variants[this.select_variant].quantite=25;
                }
                
                this.resultat=0;
                
            },
            inverser(){
                if(this.afficher_description==1){
                    this.afficher_description=0;
                    this.more_less="Plus";
                }
                else{
                    this.afficher_description=1;
                    this.more_less="Moins";
                }
                
            },
        
    },
    computed:{
        quantity(){
            return this.variants[this.select_variant].quantite;
        },
        image(){
            return this.variants[this.select_variant].image;
        },
        carts(){
            let count=0;
             this.variants.forEach(v => {
                count+=v.cart;
             });;
             return count;
        },
        title(){
            return this.brand+" "+this.product;
        },
        property(){
            return this.brand+" "+this.product+"est en vente";
        },
        cansel_2(){
            return this.variants[this.select_variant].quantity;
        },
        list_color(){
            return this.variants[this.select_variant].color;
        },
        shipping(){
            return this.premium==true ?'gratuis':'8 Dt';
        },
        
       
        
    }

})
