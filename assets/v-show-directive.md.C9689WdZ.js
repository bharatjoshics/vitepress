import{_ as t,c as i,o as n,ae as a}from"./chunks/framework.BmN8lrCQ.js";const c=JSON.parse('{"title":"v-show Directive","description":"","frontmatter":{},"headers":[],"relativePath":"v-show-directive.md","filePath":"v-show-directive.md"}'),o={name:"v-show-directive.md"};function s(r,e,h,l,d,p){return n(),i("div",null,e[0]||(e[0]=[a(`<h1 id="v-show-directive" tabindex="-1">v-show Directive <a class="header-anchor" href="#v-show-directive" aria-label="Permalink to &quot;v-show Directive&quot;">​</a></h1><p>The v-show directive hides an element when the condition is &#39;false&#39; by setting the CSS &#39;display&#39; property value to &#39;none&#39;.</p><p>After writing v-show as an HTML attribute we must give a conditon to decide to have the tag visible or not.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>Display the &lt; div &gt; element only if the showDiv property is set to &#39;true&#39;.</p><pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;v-show example&lt;/title&gt;
&lt;style&gt;
    #app {
    border: black dashed 1px;
    width: 200px;
    padding: 0 20px 20px 20px;
    }
    #app div {
    padding: 20px;
    background-color: lightgreen;
    font-weight: bold;
    }
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;app&quot;&gt;
&lt;div v-show=&quot;showDiv&quot;&gt;This div tag can be hidden&lt;/div&gt;
&lt;/div&gt;

&lt;script src=&quot;https://unpkg.com/vue@3/dist/vue.global.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
const app = Vue.createApp({
    data() {
    return {
        showDiv: true
    }
    }
})
app.mount(&#39;#app&#39;)
&lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;
</code></pre><h2 id="v-show-vs-v-if" tabindex="-1">v-show vs v-if <a class="header-anchor" href="#v-show-vs-v-if" aria-label="Permalink to &quot;v-show vs v-if&quot;">​</a></h2><p>The difference between v-show and v-if is that v-if creates (renders) the element depending on the condition, but with v-show the element is already created, v-show only changes its visibility.</p><p>Therefore, it is better to use v-show when switching visibility of an object, because it is easier for the browser to do, and it can lead to a faster response and better user experience.</p><p>A reason for using v-if over v-show is that v-if can be used with v-else-if and v-else.</p>`,10)]))}const g=t(o,[["render",s]]);export{c as __pageData,g as default};
