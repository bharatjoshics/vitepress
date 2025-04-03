import{_ as a,c as r,o as i,j as e,a as n}from"./chunks/framework.BmN8lrCQ.js";const f=JSON.parse('{"title":"Ref Attribute","description":"","frontmatter":{},"headers":[],"relativePath":"refs.md","filePath":"refs.md"}'),l={name:"refs.md"};function s(p,t,o,d,c,h){return i(),r("div",null,t[0]||(t[0]=[e("h1",{id:"ref-attribute",tabindex:"-1"},[n("Ref Attribute "),e("a",{class:"header-anchor",href:"#ref-attribute","aria-label":'Permalink to "Ref Attribute"'},"​")],-1),e("p",null,"The ref attribute is used to mark elements in < template >, so that they can be accessed from the $refs object inside < script >.",-1),e("p",null,"We can use the ref attribute and the $refs object in Vue as an alternative to methods in plain JavaScript like getElementById() or querySelector().",-1),e("h2",{id:"example",tabindex:"-1"},[n("Example "),e("a",{class:"header-anchor",href:"#example","aria-label":'Permalink to "Example"'},"​")],-1),e("p",null,"Using the ref attribute to change the text inside the < p > tag",-1),e("pre",null,[e("code",null,`<!DOCTYPE html>
<html>
<head>
<title>'ref' Attribute Example</title>
<style>
    #app > p {
    border: dashed black 1px;
    width: 130px;
    padding: 20px;
    font-weight: bold;
    background-color: lightgreen;
    }
</style>
</head>
<body>
<div id="app">
<p ref="pEl">Initial text.</p>
<button v-on:click="changeText">Change text</button>
</div>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>
<script type="module">
const app = Vue.createApp({
    methods: {
    changeText(){
        this.$refs.pEl.innerHTML = "Hello!";
    }
    }
})
app.mount('#app')
<\/script>

</body>
</html>
`)],-1)]))}const m=a(l,[["render",s]]);export{f as __pageData,m as default};
