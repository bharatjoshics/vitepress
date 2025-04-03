import{_ as i,c as a,o as s,j as e,a as n}from"./chunks/framework.BmN8lrCQ.js";const h=JSON.parse('{"title":"v-else-if Directive","description":"","frontmatter":{},"headers":[],"relativePath":"v-else-if-directive.md","filePath":"v-else-if-directive.md"}'),r={name:"v-else-if-directive.md"};function l(o,t,c,d,p,f){return s(),a("div",null,t[0]||(t[0]=[e("h1",{id:"v-else-if-directive",tabindex:"-1"},[n("v-else-if Directive "),e("a",{class:"header-anchor",href:"#v-else-if-directive","aria-label":'Permalink to "v-else-if Directive"'},"​")],-1),e("p",null,"v-else-if must be used after v-if or another v-else-if. If the condition inside v-else-if is 'true', v-else-if or v-else that comes after are not considered.",-1),e("h2",{id:"example",tabindex:"-1"},[n("Example "),e("a",{class:"header-anchor",href:"#example","aria-label":'Permalink to "Example"'},"​")],-1),e("p",null,'Use a comparison check to decide whether to write "In stock" or "Very few left!" depending on the number of socks in storage.',-1),e("pre",null,[e("code",null,`<!DOCTYPE html>
<html>
<head>
<title>v-else-if Example</title>
<style>
    #app {
    border: dashed black 1px;
    width: 130px;
    padding-left: 20px;
    font-weight: bold;
    background-color: lightgreen;
    }
</style>
</head>
<body>
<div id="app">
<p v-if="socks > 3">
    In stock
</p>
<p v-else-if="socks > 0">
    Very few left!
</p>
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>
<script>
const app = Vue.createApp({
data() {
    return {
    socks: 3
    }
}
})
app.mount('#app')
<\/script>

</body>
</html>
`)],-1)]))}const m=i(r,[["render",l]]);export{h as __pageData,m as default};
