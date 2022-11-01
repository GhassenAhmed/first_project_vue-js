app.component('review-list',{
    props: {
        reviews : { 
            type: Array,
            required:true
        }
    },
    template:
    /*html*/
    `
    <div class="review-container" >
        <h3 >Commenter </h3>
        
        <ul>
          <li v-for="(review, index) in reviews" :key="index">
            <span id="li" style="font-variant: small-caps;">{{review.name}}:</span> a donne {{review.rating}} <i class="fa-regular fa-star"></i>
        <br/>
        <span id="li">Commenter : </span>"{{review.review}}"
        <br/>
        <span id="li">Recommande :</span>{{review.recommandation}}
        
          </li>
        </ul>
        </div>
        
       
    `
})