import{_ as t,c as s,o as r,j as e,a as n}from"./chunks/framework.BmN8lrCQ.js";const h=JSON.parse('{"title":"Data inside Vue App","description":"","frontmatter":{},"headers":[],"relativePath":"data-inside-vue-app.md","filePath":"data-inside-vue-app.md"}'),i={name:"data-inside-vue-app.md"};function p(d,a,o,c,l,u){return r(),s("div",null,a[0]||(a[0]=[e("h1",{id:"data-inside-vue-app",tabindex:"-1"},[n("Data inside Vue App "),e("a",{class:"header-anchor",href:"#data-inside-vue-app","aria-label":'Permalink to "Data inside Vue App"'},"​")],-1),e("p",null,"We can also use returned object of the data in methods, using 'this'.",-1),e("h2",{id:"example",tabindex:"-1"},[n("Example "),e("a",{class:"header-anchor",href:"#example","aria-label":'Permalink to "Example"'},"​")],-1),e("pre",null,[e("code",null,`<html>
<head>
    <title>Interpolation</title>
    <script src="https://unpkg.com/vue@3"><\/script>
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
<\/script>
`)],-1)]))}const b=t(i,[["render",p]]);export{h as __pageData,b as default};
