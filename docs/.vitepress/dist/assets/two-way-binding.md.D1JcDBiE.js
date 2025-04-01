import{_ as i,c as r,o as d,ae as s,j as e,t as a,a as o}from"./chunks/framework.BmN8lrCQ.js";const g=JSON.parse('{"title":"Two Way Binding (Data Binding + Event Binding)","description":"","frontmatter":{},"headers":[],"relativePath":"two-way-binding.md","filePath":"two-way-binding.md"}'),l={name:"two-way-binding.md"};function c(t,n,p,h,m,u){return d(),r("div",null,[n[0]||(n[0]=s('<h1 id="two-way-binding-data-binding-event-binding" tabindex="-1">Two Way Binding (Data Binding + Event Binding) <a class="header-anchor" href="#two-way-binding-data-binding-event-binding" aria-label="Permalink to &quot;Two Way Binding (Data Binding + Event Binding)&quot;">​</a></h1><p>The v-model directive makes two-way binding between a form input and app state very easy to implement.</p><p>One can bind a form input element and make it change the vue data property when the content of the field change.</p><p>These concepts can be used in such cases where according to a field value we also want to update some other field values.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><h3 id="index-html" tabindex="-1">index.html <a class="header-anchor" href="#index-html" aria-label="Permalink to &quot;index.html&quot;">​</a></h3>',6)),e("pre",null,[e("code",null,`<!DOCTYPE html>
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
    <script src="https://unpkg.com/vue@3.4.9/dist/vue.global.js"><\/script>
    <script src="app.js" defer><\/script>
</head>
<body>
    <header>
    <h1>Vue Events</h1>
    </header>
    <section id="events">
    <h2>Events in Action</h2>
    <button v-on:click="add(10)">Add 10</button>
    <button v-on:click="reduce(5)">Subtract 5</button>
    <p>Result: `+a(t.counter)+`</p>
    <input type="text" v-model="name">
    <button @click="reset">Reset</button>
    <p>Your Name: `+a(t.name)+`</p>
    </section>
</body>
</html>
`,1)]),n[1]||(n[1]=e("h3",{id:"app-js",tabindex:"-1"},[o("app.js "),e("a",{class:"header-anchor",href:"#app-js","aria-label":'Permalink to "app.js"'},"​")],-1)),n[2]||(n[2]=e("pre",null,[e("code",null,`const app = Vue.createApp({
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
`)],-1)),n[3]||(n[3]=e("h3",{id:"style-css",tabindex:"-1"},[o("style.css "),e("a",{class:"header-anchor",href:"#style-css","aria-label":'Permalink to "style.css"'},"​")],-1)),n[4]||(n[4]=e("pre",null,[e("code",null,`* {
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
`)],-1))])}const x=i(l,[["render",c]]);export{g as __pageData,x as default};
