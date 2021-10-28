/*As an argument, we pass the object
  we add a data property - which will be the function that returns another object where we store the data*/
/*Inside the curly braces we create our Vue intance witch is the heart of Vue app */
const app = Vue.createApp({
    data(){
        return{
            cart:[],
            //our product-display component needs access to this data
            premium:true
        }
    },
    methods:{ 
        updateCart(id){
            this.cart.push(id);
        },
        removeById(id){
            //indexOf returns the first index at which a given element can be found in the array
            const index = this.cart.indexOf(id);
            if(index > -1){
                /*The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.*/
                this.cart.splice(index,1);
            }
        }
    }
}) 