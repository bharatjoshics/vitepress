# Interpolation
Interpolation in vue js is all about displaying dynamic data in your HTML template. It's as simple as wrapping expressions within double curly braces.

## Example
    <html>
    <head>
        <title>Interpolation Example</title>
        <script src="https://unpkg.com/vue@3"></script>
    </head>
    <body>
        <h1 id="app"> {{ msg }}</h1>
    </body>
    </html>

    <script>
        const { createApp } = Vue
        createApp({
        data() {
            return {
            msg: 'Hello Bharat!'
            };
        }
        }).mount('#app')
    </script>