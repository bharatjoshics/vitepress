import{_ as n,c as r,o as s,ae as l,j as a,t as p}from"./chunks/framework.BmN8lrCQ.js";const g=JSON.parse('{"title":"Watchers","description":"","frontmatter":{},"headers":[],"relativePath":"watchers.md","filePath":"watchers.md"}'),o={name:"watchers.md"};function i(t,e,c,h,d,u){return s(),r("div",null,[e[0]||(e[0]=l('<h1 id="watchers" tabindex="-1">Watchers <a class="header-anchor" href="#watchers" aria-label="Permalink to &quot;Watchers&quot;">​</a></h1><p>A watcher is a method that watches a data property with the same name.</p><p>A watcher runs everytime the data property value changes.</p><p>Use watcher if a certain data property value requires an action.</p><p>As with &#39;data&#39;, &#39;methods&#39; and &#39;computed&#39; watchers also reserved a name &#39;watch&#39;.</p><p>We never call a watcher method. It is only called automatically when the property value changes.</p><p>The new property value is always available as an input argument to the watchers method and so is the old value.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>An &lt; input type = &quot; range &quot; &gt; element is used to change a value &#39;rangeVal&#39;. A watcher is used to prevent the user from choosing values between 20 and 60.</p>',9)),a("pre",null,[a("code",null,`<!DOCTYPE html>
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
