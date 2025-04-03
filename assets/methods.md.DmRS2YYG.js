import{_ as a,c as o,o as s,j as e,a as n}from"./chunks/framework.BmN8lrCQ.js";const u=JSON.parse('{"title":"Methods","description":"","frontmatter":{},"headers":[],"relativePath":"methods.md","filePath":"methods.md"}'),r={name:"methods.md"};function l(d,t,c,h,i,m){return s(),o("div",null,t[0]||(t[0]=[e("h1",{id:"methods",tabindex:"-1"},[n("Methods "),e("a",{class:"header-anchor",href:"#methods","aria-label":'Permalink to "Methods"'},"​")],-1),e("p",null,"Methods takes an object, which will be full of methods so of functions, but these functions are fully up to you. You can name them however you want.",-1),e("p",null,"The important thing is that all your properties you defined in the 'methods' needs to be functions because they need to be callable as functions.",-1),e("h2",{id:"example",tabindex:"-1"},[n("Example "),e("a",{class:"header-anchor",href:"#example","aria-label":'Permalink to "Example"'},"​")],-1),e("pre",null,[e("code",null,`<html>
<head>
    <title>Interpolation</title>
    <script src="https://unpkg.com/vue@3"><\/script>
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
<\/script>
`)],-1)]))}const f=a(r,[["render",l]]);export{u as __pageData,f as default};
