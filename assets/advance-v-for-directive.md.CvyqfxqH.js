import{_ as t,c as i,o,ae as d,j as a,t as r}from"./chunks/framework.BmN8lrCQ.js";const u=JSON.parse('{"title":"Advance v-for Directive","description":"","frontmatter":{},"headers":[],"relativePath":"advance-v-for-directive.md","filePath":"advance-v-for-directive.md"}'),l={name:"advance-v-for-directive.md"};function c(e,n,p,s,v,m){return o(),i("div",null,[n[0]||(n[0]=d('<h1 id="advance-v-for-directive" tabindex="-1">Advance v-for Directive <a class="header-anchor" href="#advance-v-for-directive" aria-label="Permalink to &quot;Advance v-for Directive&quot;">​</a></h1><h2 id="index-number" tabindex="-1">Index Number <a class="header-anchor" href="#index-number" aria-label="Permalink to &quot;Index Number&quot;">​</a></h2><p>The index number of an array element can be really useful in JavaScript for-loops. Luckily we can get the index number when using v-for in Vue as well.</p><p>To get the index number with v-for we need to give two comma separated words in parentheses: the first word will be the array element, and the second word will be the index of that array element.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>Show index number and food name of elements in the &#39;manyFoods&#39; array</p>',6)),a("pre",null,[a("code",null,`<!DOCTYPE html>
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
