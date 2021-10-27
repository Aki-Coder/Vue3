/*As an argument, we pass the object
  we add a data property - which will be the function that returns another object where we store the data*/
/*Inside the curly braces we create our Vue intance witch is the heart of Vue app */
const app = Vue.createApp({
    data(){
        return{
            product:'Socks',
            brand:'Vue Mastery',
            description:'Soft socks',
            //image:'./assets/images/socks_green.jpg',
            selectedVariant:0,
            url:'https://codepen.io/VueMastery/project/editor/AqemLM',
            //inStock:true,
            inventory:10,
            onSale:true,
            details:['50% cotton', '30% wool', '20% polyester'],
            variants:[
                {id:2234, color:'green', image:'./assets/images/socks_green.jpg',quantity:50},
                {id:2235, color:'blue', image:'./assets/images/socks_blue.jpg', quantity:0},
            ],
            sizes:['s','m','l','xl'],
            cart:0,
            buttonAdd:'Add to Cart',
            buttonCancel:'Out of Cart',
            onSale:true,
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
        },
        updateVariant(index){
            this.selectedVariant = index;
        },
    },
    /* Calculated value for us (Computed property)
       Benefir of computed properties is that they cash the value.
       Stores it away and only updates when it needs to */
    computed:{
        title(){
            return this.brand + ' ' + this.product; 
        },
        image(){
            //variants is array
            //0 target first line in array, 1 target second line
            //selectedVarinat is index
            return this.variants[this.selectedVariant].image;
        },
        inStock(){
            //grab quantity from array
            return this.variants[this.selectedVariant].quantity;
        },
        saleMessage(){
            if(this.onSale){
                return this.brand + ' ' + this.product + ' is on sale.'
            }
            return ''
        }
    },
}) 