import{_ as s,c as r,o,j as t,a as n,t as i}from"./chunks/framework.BmN8lrCQ.js";const c=JSON.parse('{"title":"Our First VUE Page","description":"","frontmatter":{},"headers":[],"relativePath":"first-vue-page.md","filePath":"first-vue-page.md"}'),l={name:"first-vue-page.md"};function d(a,e,p,u,m,h){return o(),r("div",null,[e[0]||(e[0]=t("h1",{id:"our-first-vue-page",tabindex:"-1"},[n("Our First VUE Page "),t("a",{class:"header-anchor",href:"#our-first-vue-page","aria-label":'Permalink to "Our First VUE Page"'},"​")],-1)),e[1]||(e[1]=t("p",null,"Let start the Vue with a simple Vue Page to understand the flow then we will move forward to understand every element and components one by one.",-1)),e[2]||(e[2]=t("h2",{id:"code",tabindex:"-1"},[n("Code "),t("a",{class:"header-anchor",href:"#code","aria-label":'Permalink to "Code"'},"​")],-1)),e[3]||(e[3]=t("p",null,"We are using CDN method so that we don't need to setup the project.",-1)),t("pre",null,[t("code",null,`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue CDN Example</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>
</head>
<body>
    <div id="app">
        <h1>`+i(a.message)+`</h1>
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
    <\/script>
</body>
</html>
`,1)]),e[4]||(e[4]=t("p",null,'Paste the above code in "index.html" file and run',-1))])}const f=s(l,[["render",d]]);export{c as __pageData,f as default};
