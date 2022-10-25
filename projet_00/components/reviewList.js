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
            <span id="li" >{{review.name}}:</span> a donne {{review.rating}} étoiles
        <br/>
        <span id="li">Commenter : </span>"{{review.review}}"
        <br/>
        <span id="li">Recommande:</span>{{review.recommandation}}
          </li>
        </ul>
        </div>
       
    `
})