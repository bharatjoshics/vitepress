# Advance v-for Directive
## Index Number
The index number of an array element can be really useful in JavaScript for-loops. Luckily we can get the index number when using v-for in Vue as well.

To get the index number with v-for we need to give two comma separated words in parentheses: the first word will be the array element, and the second word will be the index of that array element.

## Example
Show index number and food name of elements in the 'manyFoods' array

    <!DOCTYPE html>
    <html>
    <head>
    <title>advance v-for</title>
    <style>
        #app > div {
        display: inline-block;
        border: dashed black 1px;
        padding: 10px;
        background-color: lightgreen;
        }
        #app p {
        font-weight: bold;
        margin: 5px 0;
        }
    </style>
    </head>
    <body>
    <div id="app">
    <div>
        <p v-for="(x, index) in manyFoods">
        {{ index }}: "{{ x }}" <br>
        </p>
    </div>
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