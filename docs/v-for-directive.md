# v-for Directive
With normal JavaScript you might want to create HTML elements based on an array. You use a for-loop, and inside you need to create the elements, adjust them, and then add each element to your page. And these elements will not react to a change in the array.

With Vue you start with the HTML element you want to create into a list, with v-for as an attribute, refer to the array inside the Vue instance, and let Vue take care of the rest. And the elements created with v-for will automatically update when the array changes.

## Ways of using Loop
The are two ways of using the Loop - 
- Loop Through an Array
- Loop Through Array of Objects

## Loop Through an Array
Show images of food, based on an array.

    <!DOCTYPE html>
    <html>
    <head>
    <title>loop1</title>
    <style>
        #app > div {
        border: solid black 1px;
        width: 80%;
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        }
        img {
        width: 70px;
        margin: 10px;
        }
    </style>
    </head>
    <body>
    <div id="app">
    <div>
        <img v-for="x in manyFoods" v-bind:src="x">
    </div>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
    const app = Vue.createApp({
    data() {
        return {
        manyFoods: [
            'img_salad.svg',
            'img_cake.svg',
            'img_soup.svg',
            'img_pizza.svg',
            'img_rice.svg'
        ]
        }
    }
    })
    
    app.mount('#app')

    </script>

    </body>
    </html>

**Note** - Your system must have images with the same name that are using in "manyFoods" list / array.
**v-bind:src="x"** is using to bind the images from the given source folder 'x'

## Loop Through Array of Objects
Show both images and names of different types of food, based on an array

    <!DOCTYPE html>
    <html>
    <head>
    <title>loop2</title>
    <style>
        #app > div {
        border: solid black 1px;
        width: 80%;
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        }

        figure {
        width: 80px;
        padding: 10px;
        margin: 10px;
        background-color: lightskyblue;
        border-radius: 5px;
        }

        figcaption {
        text-align: center;
        }
        
        img {
        width: 100%;
        }
    </style>
    </head>
    <body>
    <div id="app">
    <div>
        <figure v-for="x in manyFoods">
        <img v-bind:src="x.url">
        <figcaption>(double curly braces start) x.name (double curly braces end)</figcaption>
        </figure>
    </div>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
    const app = Vue.createApp({
    data() {
        return {
        manyFoods: [
            {name: 'Salad', url: 'img_salad.svg'},
            {name: 'Cake', url: 'img_cake.svg'},
            {name: 'Soup', url: 'img_soup.svg'},
            {name: 'Pizza', url: 'img_pizza.svg'},
            {name: 'Rice', url: 'img_rice.svg'}
        ]
        }
    }
    })
    
    app.mount('#app')

    </script>

    </body>
    </html>

**Note** - Your system must have images with the same name that are using in "manyFoods" list / array.