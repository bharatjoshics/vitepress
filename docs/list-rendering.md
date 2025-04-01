# List Rendering
List rendering in Vue is done by using the v-for directive, so that several HTML elements are created with a for-loop.

## Example
Display a list based on the items of an array.

    <!DOCTYPE html>
    <html>
    <head>
    <title>list rendering example</title>
    <style>
        #app > div {
        border: solid black 1px;
        width: 80%;
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        }
        img {
        width: 70px;
        margin: 10px;
        }
    </style>
    </head>
    <body>
    <div id="app">
    <ol>
        <li v-for="x in manyFoods">{{ x }}</li>
    </ol>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
    const app = Vue.createApp({
    data() {
        return {
        manyFoods: [
            'Salad',
            'Cake',
            'Soup',
            'Pizza',
            'Rice'
        ]
        }
    }
    })
    
    app.mount('#app')

    </script>

    </body>
    </html>