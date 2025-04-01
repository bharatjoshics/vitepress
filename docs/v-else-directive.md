# v-else Directive
This part will happen if the first part of the if-statement is false. Must be placed at the very end of the if-statement, after v-if and v-else-if.

## Example 1
Use a comparison check to decide whether to write "In stock" or "Not in stock" depending on the number of socks in storage.

    <!DOCTYPE html>
    <html>
    <head>
    <title>v-else Example1</title>
    <style>
        #app {
        border: dashed black 1px;
        width: 130px;
        padding-left: 20px;
        font-weight: bold;
        background-color: lightgreen;
        }
    </style>
    </head>
    <body>
    <div id="app">
    <p v-if="socks>0">
        In stock
    </p>
    <p v-else>
        Not in stock
    </p>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script>
    const app = Vue.createApp({
    data() {
        return {
        socks: 3
        }
    }
    })
    app.mount('#app')
    </script>

    </body>
    </html>

## Example 2
Use a comparison check to decide whether to write "In stock", "Very few left!" or "Not in stock" depending on the number of socks in storage.

    <!DOCTYPE html>
    <html>
    <head>
    <title>v-else Example1</title>
    <style>
        #app {
        border: dashed black 1px;
        width: 130px;
        padding-left: 20px;
        font-weight: bold;
        background-color: lightgreen;
        }
    </style>
    </head>
    <body>
    <div id="app">
    <p v-if="socks>3">
        In stock
    </p>
    <p v-else-if="socks>0">
        Very few left!
    </p>
    <p v-else>
        Not in stock
    </p>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script>
    const app = Vue.createApp({
    data() {
        return {
        socks: 3
        }
    }
    })
    app.mount('#app')
    </script>

    </body>
    </html>