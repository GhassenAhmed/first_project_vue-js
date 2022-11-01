app.component('review-form',{
    data() {
        return{
            name:'',
            review:'',
            rating:null,
            recommandation:null

        }

    },
    template:
    /*html*/
    `
    <form class="review-form" @submit.prevent="onSubmit">
        <div class="h3">
      <h3><strong>Send us your feedback !<strong></h3>
      </div>
      <label for="name">name </label>
      <input type="text" id="name" v-model="name">

      <label for="review">Commenter</label>
      <textarea  id="review" v-model="review"></textarea>

      <label for="rating">Evolution <i class="fa-regular fa-star"></i></label>
      <select name="" id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
      <label for="rating">this product ?</label>
      <select id="recommandation" v-model.number="recommandation">
        <option>Yes</option>
        <option>Non</option>
      </select>

      <input type="submit" class="button" value="envoyer" @submit.prevent="onSubmit">
      </form>


       
    `,
    methods:{
        onSubmit(){
            if(this.name==='' || this.review==='' || this.rating===null || this.recommandation===null){
                alert('remplissez vos champs !');
            }else{
            let productReview = {
                name:this.name,
                review:this.review,
                rating:this.rating,
                recommandation:this.recommandation,
               
            }
            this.$emit('review-submitted',productReview);
            this.name='';
            this.review='';
            this.rating=null;
            this.recommandation=null;
        }
          
        },
      
    }

})