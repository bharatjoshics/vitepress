# Event Binding
Now, you also need to react to user input, events and make dynamic pages. So, there comes event binding.

It is achieved using build-in directives just like 'v-html'.

Some build-in directives are -
- v-text, v-html, v-show, v-if, v-else, etc

You can learn about them on "vuejs.org/api/built-in-directives.html"

Let's understand this with an counter application.

## Counter Application
### index.html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vue Basics</title>
        <link
        href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap"
        rel="stylesheet"
        />
        <link rel="stylesheet" href="styles.css" />
        <script src="https://unpkg.com/vue@3.4.9/dist/vue.global.js"></script>
        <script src="app.js" defer></script>
    </head>
    <body>
        <header>
        <h1>Vue Events</h1>
        </header>
        <section id="events">
        <h2>Events in Action</h2>
        <button @click="add()">Add</button>
        <button @click="remove()">Remove</button>
        <p>Result: double quotes starts counter double quotes ends</p>
        </section>
    </body>
    </html>

### app.js
    const app = Vue.createApp({
    data() {
        return {
        counter: 0,
        };
    },
    methods: {
        add() {
        return this.counter+=1
        },
        remove() {
        if(this.counter>0){
            return this.counter -= 1
        }
        }
    }
    });

    app.mount('#events');

### style.css
    * {
    box-sizing: border-box;
    }

    html {
    font-family: 'Jost', sans-serif;
    }

    body {
    margin: 0;
    }

    header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    background-color: #4fc08d;
    color: white;
    text-align: center;
    width: 90%;
    max-width: 40rem;
    }

    #events {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 90%;
    max-width: 40rem;
    }

    #events h2 {
    font-size: 2rem;
    border-bottom: 4px solid #ccc;
    color: #4fc08d;
    margin: 0 0 1rem 0;
    }

    #events p {
    font-size: 1.25rem;
    font-weight: bold;
    border: 1px solid #4fc08d;
    background-color: #4fc08d;
    color: white;
    padding: 0.5rem;
    border-radius: 25px;
    }

    #events input {
    font: inherit;
    border: 1px solid #ccc;
    }

    #events input:focus {
    outline: none;
    border-color: #1b995e;
    background-color: #d7fdeb;
    }

    #events button {
    font: inherit;
    cursor: pointer;
    border: 1px solid #ff0077;
    background-color: #ff0077;
    color: white;
    padding: 0.05rem 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
    border-radius: 20px;
    margin: 0 1rem;
    }

    #events button:hover,
    #events button:active {
    background-color: #ec3169;
    border-color: #ec3169;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
    }

You can download this counter application from here - [Download ZIP](/public/Demo2.zip).

'v-on' takes the event to which you wanna listen, after the colon. In this case its 'click'.

In the double quotes, you need to write the event i.e 'counter++' or 'counter--'.