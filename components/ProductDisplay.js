//first argument is the component name, second argument is an object to configure our component
app.component('product-display',{
    props:{
        //property that we need
        premium:{
            //we can event set some prop validation
            type:Boolean,
            required:true
        }
    },
    template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
        <div class="product-image">
            <!--Image goes here-->
            <!-- v-bind directive - works: dynamically bind an attribute(src) to an expression("image")-->
            <img
                :class="{'out-of-stock-img':!inStock}"
                :src="image"/>
        </div>
        <div class="product-info">
            <!--call computed property-->
            <h1>{{title}}</h1>
            <p>We have new : {{description}} show more: <a :href="url">More information</a> </p>
            <!--show is visibility-->
            <!--conditional logic-->
            <p v-if="inStock">In stock</p>
            <p v-else-if="inventory <=10 && inventory > 0">Almost sold out!</p>
            <p v-else>Out of stock</p>
            <!--shipping is a computed property-->
            <h2>Shipping:{{ shipping}}</h2>
            <h2>Sales:</h2>
            <p v-if="onSale">{{saleMessage}}</p>
            <p v-else>Not on sale</p>
            <h2>About this product:</h2>
            <!--using props and new component-->
           <product-details :details="details"></product-details>
            <!--key attribute-->
            <!-- :key="variant.id" this gives each dom element a unique key (useful:animating elements)-->
            <!--@mouseover which is the view version of hover-->
            <h2>Chose color:</h2>
            <div 
                v-for="(variant,index) in variants" 
                :key="variant.id" 
                @mouseover="updateVariant(index)"
                class="color-circle"
                :style="{backgroundColor: variant.color}">
            </div>
            <h2>Sizes:</h2>
            <ul>
                <li v-for="size in sizes">{{size}}</li>
            </ul>
            <!--on v-on directive add argument that specifies the event we're listening
                and in the expresion this is the logic that we're triggering that event happens-->
            <!-- :class first parameter is class name, second is condition from data(js)-->
                <button 
                    class="button"
                    :class="{disabledButton:!inStock}" 
                    :disabled="!inStock"
                    @click="addToCart">
                    {{buttonAdd}}
                </button>
                <button 
                    class="button" 
                    :class={disabledButton:!inStock}
                    :disbled="!inStock"
                    @click="removeFromCart">
                    {{buttonCancel}}
                </button>
        </div>
    </div>
</div>`,

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
        buttonAdd:'Add to Cart',
        buttonCancel:'Out of Cart',
        onSale:true,
    }
},
methods:{
    addToCart(){
        //we dont have cart here
        //this.cart +=1;
        //so, we're emitting or bubbling up that event
        //second parameter is payload
        this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
    },
    removeFromCart(){
        this.$emit('remove-from-cart', this.variants[this.selectedVariant].id);
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
    },
    shipping(){
        if(this.premium){
            return 'Free' 
        }
        return 2.99
    },
}
});
