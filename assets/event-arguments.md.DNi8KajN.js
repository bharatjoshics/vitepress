import{_ as t,c as a,o as n,ae as r}from"./chunks/framework.BmN8lrCQ.js";const h=JSON.parse('{"title":"Event Arguments","description":"","frontmatter":{},"headers":[],"relativePath":"event-arguments.md","filePath":"event-arguments.md"}'),o={name:"event-arguments.md"};function s(l,e,i,u,d,c){return n(),a("div",null,e[0]||(e[0]=[r(`<h1 id="event-arguments" tabindex="-1">Event Arguments <a class="header-anchor" href="#event-arguments" aria-label="Permalink to &quot;Event Arguments&quot;">​</a></h1><p>You can also pass the argument in the event and use it in methods.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><h3 id="html-file" tabindex="-1">HTML File <a class="header-anchor" href="#html-file" aria-label="Permalink to &quot;HTML File&quot;">​</a></h3><pre><code>&lt;button v-on:click=&quot;add(10)&quot;&gt;Add&lt;/button&gt;
&lt;button v-on:click=&quot;reduce(5)&quot;&gt;Substract&lt;/button&gt;
</code></pre><h3 id="js-file" tabindex="-1">JS File <a class="header-anchor" href="#js-file" aria-label="Permalink to &quot;JS File&quot;">​</a></h3><pre><code>methods: {
    add(num){
        this.counter = this.counter + num;
    },
    reduce(num){
        this.counter = this.counter - num;
    }
}
</code></pre><p>Now, it will add the counter by 10 and substract it by 5.</p>`,8)]))}const p=t(o,[["render",s]]);export{h as __pageData,p as default};
