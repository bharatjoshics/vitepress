# Ref Attribute
The ref attribute is used to mark elements in < template >, so that they can be accessed from the $refs object inside < script >.

We can use the ref attribute and the $refs object in Vue as an alternative to methods in plain JavaScript like getElementById() or querySelector().

## Example
Using the ref attribute to change the text inside the < p > tag

    <!DOCTYPE html>
    <html>
    <head>
    <title>'ref' Attribute Example</title>
    <style>
        #app > p {
        border: dashed black 1px;
        width: 130px;
        padding: 20px;
        font-weight: bold;
        background-color: lightgreen;
        }
    </style>
    </head>
    <body>
    <div id="app">
    <p ref="pEl">Initial text.</p>
    <button v-on:click="changeText">Change text</button>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script type="module">
    const app = Vue.createApp({
        methods: {
        changeText(){
            this.$refs.pEl.innerHTML = "Hello!";
        }
        }
    })
    app.mount('#app')
    </script>

    </body>
    </html>