/*As an argument, we pass the object
  we add a data property - which will be the function that returns another object where we store the data*/
/*Inside the curly braces we create our Vue intance witch is the heart of Vue app */
const app = Vue.createApp({
    data(){
        return{
            cart:0,
            //our product-display component needs access to this data
            premium:true
        }
    },
    methods:{ }
}) 