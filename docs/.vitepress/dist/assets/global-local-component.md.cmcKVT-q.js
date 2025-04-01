import{_ as o,c as n,o as t,ae as a}from"./chunks/framework.BmN8lrCQ.js";const d=JSON.parse('{"title":"Global vs Local Component Registration","description":"","frontmatter":{},"headers":[],"relativePath":"global-local-component.md","filePath":"global-local-component.md"}'),l={name:"global-local-component.md"};function i(p,e,s,r,c,h){return t(),n("div",null,e[0]||(e[0]=[a(`<h1 id="global-vs-local-component-registration" tabindex="-1">Global vs Local Component Registration <a class="header-anchor" href="#global-vs-local-component-registration" aria-label="Permalink to &quot;Global vs Local Component Registration&quot;">​</a></h1><p>The way we have included components so far makes them accessible from all *.vue files in a project.</p><h2 id="global-component" tabindex="-1">Global Component <a class="header-anchor" href="#global-component" aria-label="Permalink to &quot;Global Component&quot;">​</a></h2><p>Till now, we have registered the component in &#39;main.js&#39; file which is not wrong but it&#39;s not always the best way to register the components because when we register components like this then we are registering these components as global components.</p><p>That means they are available globally in the entire vue app, so we can use these components as custom HTML elements anywhere in the app. This could be very useful as we can use these components as custom elements anywhere without thinking anything.</p><p>But it has a potential downside, if we register all the components gloablly then Vue needs to load them all when the application is loaded initially. So, the browser needs to download the code for all those components initially. This is not a problem in basic applications but for bigger application, that could be a problem.</p><p>Also if we register all components globally, then -</p><pre><code>app.component(&#39;a&#39;, A)
app.component(&#39;b&#39;, B)
app.component(&#39;c&#39;, C)
app.component(&#39;d&#39;, D)
app.component(&#39;e&#39;, E)
....................
....................
So on ...............
</code></pre><p>This can be very long list.</p><h2 id="local-component" tabindex="-1">Local Component <a class="header-anchor" href="#local-component" aria-label="Permalink to &quot;Local Component&quot;">​</a></h2><p>In Local Component Registering method we can only register those component which we need in that particular file only.</p><p>Suppose there is a &#39;Header&#39; component which we need only in &#39;App.vue&#39; file, so instead of registering &#39;Header&#39; component globally we can register it locally in the &#39;App.vue&#39; file.</p><p>Here is how it can be done -</p><pre><code>&lt;script&gt;
    import Header from &#39;./components/Header.vue&#39;
&lt;/script&gt;

Here, we have imported the &#39;Header&#39; component in the &#39;App.vue&#39; file.
Now, we need to register it as component, for that -

&lt;script&gt;
    import Header from &#39;./components/Header.vue&#39;
    export default {
        components: {
            &#39;the-header&#39;: Header
        }
    }
&lt;/script&gt;

Now, the &#39;Header&#39; is registered as local component and we can use it with the name &#39;the-header&#39;.
</code></pre>`,14)]))}const g=o(l,[["render",i]]);export{d as __pageData,g as default};
