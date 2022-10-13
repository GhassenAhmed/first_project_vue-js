const app=Vue.createApp(
    {
        data:function(){
            return{
                
                product:'Chaussettes',
                price:'5£',
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
                pointures:['39','40','41','42','43','44','45'],
                resultat:0,
                afficher_description:0,
                more_less:'More'
            }
        },
        methods:{
            addToCart(){
                if(this.variants[this.select_variant].quantite>0){
                    this.variants[this.select_variant].quantite--;
                    this.variants[this.select_variant].cart++;
                }

            },
            update_variant(index){
                this.select_variant=index;
            },
            decreaseCart(){
                if(this.variants[this.select_variant].cart>0){
                    this.variants[this.select_variant].quantite++;
                    this.variants[this.select_variant].cart--;
                }
                
            },
            result(){
                
              this.resultat=parseInt(this.price)*parseInt(this.variants[this.select_variant].cart);   
            },
            
            
            cansel(){
                this.variants[this.select_variant].cart=0;
                this.variants[this.select_variant].quantite=this.variants[this.select_variant].quantite + this.variants[this.select_variant].cart;
                this.resultat=0;
                
            },
            inverser(){
                if(this.afficher_description==1){
                    this.afficher_description=0;
                    this.more_less="More";
                }
                else{
                    this.afficher_description=1;
                    this.more_less="Less";
                }
                
            }
            
            

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
                }

            

                

        }
    }
);

//monte notre app dans dom 
const mountedApp=app.mount("#app");
