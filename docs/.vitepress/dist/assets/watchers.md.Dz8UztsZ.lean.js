import{_ as n,c as r,o as s,ae as l,j as a,t as p}from"./chunks/framework.BmN8lrCQ.js";const g=JSON.parse('{"title":"Watchers","description":"","frontmatter":{},"headers":[],"relativePath":"watchers.md","filePath":"watchers.md"}'),o={name:"watchers.md"};function i(t,e,c,h,d,u){return s(),r("div",null,[e[0]||(e[0]=l("",9)),a("pre",null,[a("code",null,`<!DOCTYPE html>
<html>
<head>
<title>Range Watcher</title>
<style>
    #app {
    border: dashed black 1px;
    display: inline-block;
    padding: 10px;
    }
    #app > p {
    font-size: large;
    font-weight: bold;
    text-align: center;
    }
</style>
</head>
<body>
<div id="app">
<input type="range" min="0" max="100" step="1" v-model="rangeVal">
<p><code>`+p(t.rangeVal)+`</code></p> 
</div>


<script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>
<script>
const app = Vue.createApp({
    data() {
    return {
        rangeVal: 70
    }
    },
    watch: {
    rangeVal(val) {
        if( val>20 && val<60 ){
        if(val<40){
            this.rangeVal = 20;
        }
        else{
            this.rangeVal = 60;
        }
        }
    }
    }
})
app.mount('#app')
<\/script>

</body>
</html>
`,1)])])}const v=n(o,[["render",i]]);export{g as __pageData,v as default};
