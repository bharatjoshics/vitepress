# Two Way Binding (Data Binding + Event Binding)
The v-model directive makes two-way binding between a form input and app state very easy to implement.

One can bind a form input element and make it change the vue data property when the content of the field change.

These concepts can be used in such cases where according to a field value we also want to update some other field values.

## Example
### index.html
```html
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
    <button v-on:click="add(10)">Add 10</button>
    <button v-on:click="reduce(5)">Subtract 5</button>
    <p>Result: {{ counter }}</p>
    <input type="text" v-model="name">
    <button @click="reset">Reset</button>
    <p>Your Name: {{ name }}</p>
    </section>
</body>
</html>
```

### app.js
```js
const app = Vue.createApp({
data() {
    return {
    counter: 0,
    name: ''
    };
},
methods: {
    setName() {
    this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
    this.counter = this.counter + num;
    },
    reduce(num) {
    if(this.counter>0){
        this.counter = this.counter - num;
    }
    },
    reset(){
    this.name = ''
    }
}
});

app.mount('#events');
```

### style.css
```css
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
```