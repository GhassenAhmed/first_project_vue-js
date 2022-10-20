app.component("commentProduct",{
    data(){
        return{
           commenter:0 ,
           champ:''

        }
    },
    /*html*/
    template:
    `
           

    `,
    methods:{
        Add_commenter(){
            commenter++;
            champ=document.getElementById("inputcommenter").value;
            alert("hello");
        }
    },
    computed:{
        comment(){
            return 
        }
    }

})
