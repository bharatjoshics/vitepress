# Data inside Vue App
We can also use returned object of the data in methods, using 'this'.

## Example
    <html>
    <head>
        <title>Interpolation</title>
        <script src="https://unpkg.com/vue@3"></script>
    </head>
    <body>
        <section id="app">
            <h1 v-html="message"></h1>
            <p>double curly braces starts randomNumber() double curly braces ends</p>
        </section>
    </body>
    </html>

    <script>
        const { createApp } = Vue
        createApp({
        data() {
            return {
            message: 'Hello Bharat!',
            courseA: 'Finish the course',
            courseB: 'Master Vue'
            };
        },
        methods: {
            randomNumber() {
                const rn = Math.random()
                if(rn < 0.5){
                    return this.courseA;
                }
                else{
                    return this.courseB;
                }
            }
        }
        }).mount('#app')
    </script>