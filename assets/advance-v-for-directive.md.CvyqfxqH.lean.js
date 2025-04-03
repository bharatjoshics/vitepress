import{_ as t,c as i,o,ae as d,j as a,t as r}from"./chunks/framework.BmN8lrCQ.js";const u=JSON.parse('{"title":"Advance v-for Directive","description":"","frontmatter":{},"headers":[],"relativePath":"advance-v-for-directive.md","filePath":"advance-v-for-directive.md"}'),l={name:"advance-v-for-directive.md"};function c(e,n,p,s,v,m){return o(),i("div",null,[n[0]||(n[0]=d("",6)),a("pre",null,[a("code",null,`<!DOCTYPE html>
<html>
<head>
<title>advance v-for</title>
<style>
    #app > div {
    display: inline-block;
    border: dashed black 1px;
    padding: 10px;
    background-color: lightgreen;
    }
    #app p {
    font-weight: bold;
    margin: 5px 0;
    }
</style>
</head>
<body>
<div id="app">
<div>
    <p v-for="(x, index) in manyFoods">
    `+r(e.index)+': "'+r(e.x)+`" <br>
    </p>
</div>
</div>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>
<script>
const app = Vue.createApp({
data() {
    return {
    manyFoods: [
        'Salad',
        'Cake',
        'Soup',
        'Pizza',
        'Rice'
    ]
    }
}
})
app.mount('#app')
<\/script>

</body>
</html>
`,1)])])}const f=t(l,[["render",c]]);export{u as __pageData,f as default};
