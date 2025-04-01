# Outputting Raw HTML content with v-html
Sometimes you want to render the data with HTML, to acheive this we use 'v-html' directive.

## Example
    <html>
    <head>
        <title>Interpolation</title>
        <script src="https://unpkg.com/vue@3"></script>
    </head>
    <body>
        <section id="app">
            <h1 v-html="message"></h1>
        </section>
    </body>
    </html>

    <script>
        const { createApp } = Vue
        createApp({
        data() {
            return {
            message: '<p>Hello Bharat!<p>'
            };
        }
        }).mount('#app')
    </script>

Now, it will treat the 'msg' as a paragraph doesn't matter it's in 'h1' tag in the body part. It is now renderring as 'p'