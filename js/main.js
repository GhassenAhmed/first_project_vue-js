const app=Vue.createApp(
    {
        data:function(){
            return{
                cart:0,
                product:'Chaussettes',
                price:'5£',
                quantite:25,
                description:' Dolorem iusto maiores libero minus pariatur nonplaceat culpa nihil blanditiis labore asperiores error porro rerum corporis obcaecati eius maxime cupiditate nobis!',
                image:'/assets/images/socks_blue.jpg',
                url:'https://www.facebook.com',
                instock:true,
                inventory:100,
                onSale:true,
                details:[ '50% coton' , '30% laine' , '20% polyester' ],
                variants :[
                    {id:2001,color:"green",image:'/assets/images/socks_green.jpg',quantite:20},
                    {id:2002,color:"blue",image:'/assets/images/socks_blue.jpg',quantite:25},  
                ],
                pointures:['39','40','41','42','43','44','45'],
                resultat:0,
                afficher_description:0,
                more_less:'More'
            }
        },
        methods:{
            addToCart(){
                if(this.quantite==0)
                    return false;
                else{
                this.cart+=1;
                this.quantite-=1;
                }
                

            },
            updateImage(variantImage){
                this.image=variantImage;
            },
            decreaseCart(){
                if(this.cart>=1){
                    this.cart-=1;
                    this.quantite+=1;
                    
                }
                else
                return false;
                
            },
            result(){
                
              this.resultat=parseInt(this.price)*parseInt(this.cart);   
            },
            
            
            cansel(){
                this.cart=0;
                this.quantite=25;
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
            

        }
    }
);

//monte notre app dans dom 
const mountedApp=app.mount("#app");
