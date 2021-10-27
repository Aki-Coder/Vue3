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
            inStock:true,
            inventory:10,
            onSale:true,
            details:['50% cotton', '30% wool', '20% polyester'],
            variants:[
                {id:2234, color:'green'},
                {id:2235, color:'blue'}
            ],
            sizes:['s','m','l','xl'],
        }
    }
}) 