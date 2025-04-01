# Methods
Methods takes an object, which will be full of methods so of functions, but these functions are fully up to you. You can name them however you want.

The important thing is that all your properties you defined in the 'methods' needs to be functions because they need to be callable as functions.

## Example
    <html>
    <head>
        <title>Interpolation</title>
        <script src="https://unpkg.com/vue@3"></script>
    </head>
    <body>
        <section id="app">
            <h1 v-html="message"></h1>
            <p>double curly braces starts randomNumber()  double curly braces end</p>
        </section>
    </body>
    </html>

    <script>
        const { createApp } = Vue
        createApp({
        data() {
            return {
            message: 'Hello Bharat!'
            };
        },
        methods: {
            randomNumber() {
                const rn = Math.random()
                if(rn < 0.5){
                    return 'Learn Vue';
                }
                else{
                    return 'Master Vue';
                }
            }
        }
        }).mount('#app')
    </script>