import{_ as a,c as r,o,j as e,a as t}from"./chunks/framework.BmN8lrCQ.js";const h=JSON.parse('{"title":"Return Value from a Function","description":"","frontmatter":{},"headers":[],"relativePath":"value-from-function.md","filePath":"value-from-function.md"}'),i={name:"value-from-function.md"};function l(c,n,p,s,u,d){return o(),r("div",null,n[0]||(n[0]=[e("h1",{id:"return-value-from-a-function",tabindex:"-1"},[t("Return Value from a Function "),e("a",{class:"header-anchor",href:"#return-value-from-a-function","aria-label":'Permalink to "Return Value from a Function"'},"​")],-1),e("p",null,"Instead of using a comparison check with the v-if directive, we can use the 'true' or 'false' return value from a function.",-1),e("h2",{id:"example",tabindex:"-1"},[t("Example "),e("a",{class:"header-anchor",href:"#example","aria-label":'Permalink to "Example"'},"​")],-1),e("p",null,"If a certain text contains the word 'pizza', create a < p > tag with an appropriate message. The 'includes()' method is a native JavaScript method that checks if a text contain certain words.",-1),e("pre",null,[e("code",null,`<!DOCTYPE html>
<html>
<head>
<title>value from function example</title>
<style>
    #app {
    border: dashed black 1px;
    width: 160px;
    padding: 0 20px;
    font-weight: bold;
    background-color: lightgreen;
    }
</style>
</head>
<body>
<div id="app">
<p v-if="text.includes('pizza')">The text includes the word 'pizza'</p>
<p v-else>The word 'pizza' is not found in the text</p>
</div>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>
<script>
const app = Vue.createApp({
data() {
    return {
    text: 'I like pizza, burger and french-fries.'
    }
}
})
app.mount('#app')
<\/script>

</body>
</html>
`)],-1)]))}const m=a(i,[["render",l]]);export{h as __pageData,m as default};
