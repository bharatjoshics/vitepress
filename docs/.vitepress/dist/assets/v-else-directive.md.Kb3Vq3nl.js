import{_ as e,c as n,o as l,ae as o}from"./chunks/framework.BmN8lrCQ.js";const u=JSON.parse('{"title":"v-else Directive","description":"","frontmatter":{},"headers":[],"relativePath":"v-else-directive.md","filePath":"v-else-directive.md"}'),a={name:"v-else-directive.md"};function s(i,t,p,r,c,d){return l(),n("div",null,t[0]||(t[0]=[o(`<h1 id="v-else-directive" tabindex="-1">v-else Directive <a class="header-anchor" href="#v-else-directive" aria-label="Permalink to &quot;v-else Directive&quot;">​</a></h1><p>This part will happen if the first part of the if-statement is false. Must be placed at the very end of the if-statement, after v-if and v-else-if.</p><h2 id="example-1" tabindex="-1">Example 1 <a class="header-anchor" href="#example-1" aria-label="Permalink to &quot;Example 1&quot;">​</a></h2><p>Use a comparison check to decide whether to write &quot;In stock&quot; or &quot;Not in stock&quot; depending on the number of socks in storage.</p><pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;v-else Example1&lt;/title&gt;
&lt;style&gt;
    #app {
    border: dashed black 1px;
    width: 130px;
    padding-left: 20px;
    font-weight: bold;
    background-color: lightgreen;
    }
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;app&quot;&gt;
&lt;p v-if=&quot;socks&gt;0&quot;&gt;
    In stock
&lt;/p&gt;
&lt;p v-else&gt;
    Not in stock
&lt;/p&gt;
&lt;/div&gt;

&lt;script src=&quot;https://unpkg.com/vue@3/dist/vue.global.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
const app = Vue.createApp({
data() {
    return {
    socks: 3
    }
}
})
app.mount(&#39;#app&#39;)
&lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;
</code></pre><h2 id="example-2" tabindex="-1">Example 2 <a class="header-anchor" href="#example-2" aria-label="Permalink to &quot;Example 2&quot;">​</a></h2><p>Use a comparison check to decide whether to write &quot;In stock&quot;, &quot;Very few left!&quot; or &quot;Not in stock&quot; depending on the number of socks in storage.</p><pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;v-else Example1&lt;/title&gt;
&lt;style&gt;
    #app {
    border: dashed black 1px;
    width: 130px;
    padding-left: 20px;
    font-weight: bold;
    background-color: lightgreen;
    }
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;app&quot;&gt;
&lt;p v-if=&quot;socks&gt;3&quot;&gt;
    In stock
&lt;/p&gt;
&lt;p v-else-if=&quot;socks&gt;0&quot;&gt;
    Very few left!
&lt;/p&gt;
&lt;p v-else&gt;
    Not in stock
&lt;/p&gt;
&lt;/div&gt;

&lt;script src=&quot;https://unpkg.com/vue@3/dist/vue.global.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
const app = Vue.createApp({
data() {
    return {
    socks: 3
    }
}
})
app.mount(&#39;#app&#39;)
&lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;
</code></pre>`,8)]))}const h=e(a,[["render",s]]);export{u as __pageData,h as default};
