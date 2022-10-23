app.component('review-form',{
    data() {
        return{
            name:'',
            review:'',
            rating:null,
            //recommandation:null

        }

    },
    template:
    /*html*/
    `
    <form class="review-form" @submit.prevent="onSubmit">
      <h3>Laisser un commentaire</h3>
      <label for="name">Nom :</label>
      <input type="text" id="name" v-model="name">

      <label for="review">Commentaire</label>
      <textarea name="" id="review" v-model="review" ></textarea>

      <label for="rating">Evaluation</label>
      <select name="" id="rating" v-model.number="rating">
        <option value="">5</option>
        <option value="">4</option>
        <option value="">3</option>
        <option value="">2</option>
        <option value="">1</option>
      </select>
      <label for="rating">Recommanderiez-vous ce produit ?</label>
      <!--<select id="recommandation" v-mode.number=" recommandation">
        <option value="" >Yes</option>
        <option value="" >Non</option>
      </select>-->

      <input type="submit" class="button" value="envoyer" @submit.prevent="onSubmit" >
      </form>
    `,
    methods:{
        onSubmit(){
            let productReview = {
                name:this.name,
                review:this.review,
                rating:this.rating,
                //recommandation:this.recommandation
            }
            this.$emit('review-submitted',productReview);
            this.name='';
            this.review='';
            this.rating=null;
            //this.recommandation=null;
            if(this.name==='' || this.review==='' || this.rating===null){
                alert('remplissez vos champs !');
            }
        },
        addReview(review){
            this.reviews.push(review);
        },
    }

})