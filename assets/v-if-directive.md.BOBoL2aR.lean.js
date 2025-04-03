import{_ as i,c as a,o as r,j as e,a as t}from"./chunks/framework.BmN8lrCQ.js";const h=JSON.parse('{"title":"v-if Directive","description":"","frontmatter":{},"headers":[],"relativePath":"v-if-directive.md","filePath":"v-if-directive.md"}'),s={name:"v-if-directive.md"};function d(o,n,l,c,p,v){return r(),a("div",null,n[0]||(n[0]=[e("h1",{id:"v-if-directive",tabindex:"-1"},[t("v-if Directive "),e("a",{class:"header-anchor",href:"#v-if-directive","aria-label":'Permalink to "v-if Directive"'},"​")],-1),e("p",null,"v-if can be used alone, or with v-else-if and/or v-else. If the condition inside v-if is 'true', v-else-if or v-else are not considered.",-1),e("h2",{id:"example",tabindex:"-1"},[t("Example "),e("a",{class:"header-anchor",href:"#example","aria-label":'Permalink to "Example"'},"​")],-1),e("p",null,"Write different messages depending on whether there are any socks in stock",-1),e("pre",null,[e("code",null,`<!DOCTYPE html>
<html>
<head>
<title>v-if example</title>
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
<p v-if="socks > 0">
    in stock
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
`)],-1)]))}const m=i(s,[["render",d]]);export{h as __pageData,m as default};
