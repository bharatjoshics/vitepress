import{_ as i,c as r,o as l,j as e,a as t,t as s}from"./chunks/framework.BmN8lrCQ.js";const c=JSON.parse('{"title":"List Rendering","description":"","frontmatter":{},"headers":[],"relativePath":"list-rendering.md","filePath":"list-rendering.md"}'),d={name:"list-rendering.md"};function o(a,n,p,m,g,u){return l(),r("div",null,[n[0]||(n[0]=e("h1",{id:"list-rendering",tabindex:"-1"},[t("List Rendering "),e("a",{class:"header-anchor",href:"#list-rendering","aria-label":'Permalink to "List Rendering"'},"​")],-1)),n[1]||(n[1]=e("p",null,"List rendering in Vue is done by using the v-for directive, so that several HTML elements are created with a for-loop.",-1)),n[2]||(n[2]=e("h2",{id:"example",tabindex:"-1"},[t("Example "),e("a",{class:"header-anchor",href:"#example","aria-label":'Permalink to "Example"'},"​")],-1)),n[3]||(n[3]=e("p",null,"Display a list based on the items of an array.",-1)),e("pre",null,[e("code",null,`<!DOCTYPE html>
<html>
<head>
<title>list rendering example</title>
<style>
    #app > div {
    border: solid black 1px;
    width: 80%;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    }
    img {
    width: 70px;
    margin: 10px;
    }
</style>
</head>
<body>
<div id="app">
<ol>
    <li v-for="x in manyFoods">`+s(a.x)+`</li>
</ol>
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
`,1)])])}const f=i(d,[["render",o]]);export{c as __pageData,f as default};
