/*As an argument, we pass the object
  we add a data property - which will be the function that returns another object where we store the data*/
/*Inside the curly braces we create our Vue intance witch is the heart of Vue app */
const app = Vue.createApp({
    data(){
        return{
            product:'Socks',
            description:'Soft socks',
            image:'./assets/images/socks_green.jpg',
            url:'https://codepen.io/VueMastery/project/editor/AqemLM',
            inStock:fa,
            inventory:10,
            onSale:true,
            details:['50% cotton', '30% wool', '20% polyester'],
            variants:[
                {id:2234, color:'green', image:'./assets/images/socks_green.jpg'},
                {id:2235, color:'blue', image:'./assets/images/socks_blue.jpg'}
            ],
            sizes:['s','m','l','xl'],
            cart:0,
            buttonAdd:'Add to Cart',
            buttonCancel:'Out of Cart'
        }
    },
    methods:{
        addToCart(){
            this.cart +=1;
        },
        outOfCart(){
            if(this.cart <=0)
                return false;
            this.cart -=1;
        },
        updateImage(variantImage){
            this.image = variantImage;
        }
    }
}) 