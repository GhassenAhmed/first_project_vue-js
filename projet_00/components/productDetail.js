app.component('product-detail',{
    props:{
        details:{
            type:Array,
            required:true
        }
    },
    data(){
        return{
           
        }
    },template:
    /*html*/
    `
    <li v-for="detail in details" style="list-style-type: disc;">{{detail}}</li>
    `
    
})
