# Our First VUE Page
Let start the Vue with a simple Vue Page to understand the flow then we will move forward to understand every element and components one by one.

## Code
We are using CDN method so that we don't need to setup the project.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Vue CDN Example</title>
        <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    </head>
    <body>
        <div id="app">
            <h1>{{ message }}</h1>
            <input v-model="message" />
            <button @click="changeMessage">Change Message</button>
        </div>

        <script>
            Vue.createApp({
                data() {
                    return { message: 'Hello Vue!' };
                },
                methods: {
                    changeMessage() {
                        this.message = 'Vue is Awesome!';
                    }
                }
            }).mount('#app');
        </script>
    </body>
    </html>

Paste the above code in "index.html" file and run