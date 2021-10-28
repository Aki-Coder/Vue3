app.component('review-form',{
    template:
    /*html*/
    `
    <!--add a listener, which prevents the default browser refreh and will trigger the onSubmit method-->
    <form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <!--via v-model="name" we're creating two-way binding-->
    <label for="name">Name:</label>
    <input id="name" v-model="name"/>

    <label for="review">Review</label>
    <textarea id="review" v-model="review"></textarea>

    <!--.number here is a modifier that typecast the value as a number -->
    <label for="rating">Ratting:</label>
    <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
    </select>

    <label for="recommend">Would you like recommend this product?</label>
    <select id="recommend" v-model="recommend">
        <option>Yes</option>
        <option>No</option>
    </select>

    <input class="button" type="submit" value="Submit">
    </form>`,

    data(){
        return{
            name:'',
            review:'',
            rating:null,
            recommend:null
        }
    },
    methods:{
        onSubmit(){
            if(this.name === '' || this.review === '' || this.rating === null || this.recommend === null){
                alert('Review is incomplete. Please fill out every field');
                return
            }
            //create a productReview object
            let productReview = {
                name: this.name,
                review:this.review,
                rating: this.rating,
                recommend: this.recommend
            }
            // $emit a review-submitted event, sending that productReview along as the payload
            this.$emit('review-submitted',productReview)
            this.name = ''
            this.review = ''
            this.rating = null,
            this.recommend = null
        }
    }
 
})