import{_ as t,c as n,o,ae as a}from"./chunks/framework.BmN8lrCQ.js";const u=JSON.parse('{"title":"Provide and Inject in Vue","description":"","frontmatter":{},"headers":[],"relativePath":"provide-inject.md","filePath":"provide-inject.md"}'),i={name:"provide-inject.md"};function d(p,e,r,s,c,l){return o(),n("div",null,e[0]||(e[0]=[a(`<h1 id="provide-and-inject-in-vue" tabindex="-1">Provide and Inject in Vue <a class="header-anchor" href="#provide-and-inject-in-vue" aria-label="Permalink to &quot;Provide and Inject in Vue&quot;">​</a></h1><p>In a large project, with components inside components, it can be hard to use props to provide data from &quot;App.vue&quot; to a sub-component, because it requires props to be defined in every component the data passes through.</p><p>If we use provide/inject instead of props, we only need to define the provided data where it is provided, and we only need to define the injected data where it is injected.</p><h2 id="key-points" tabindex="-1">Key Points <a class="header-anchor" href="#key-points" aria-label="Permalink to &quot;Key Points&quot;">​</a></h2><ul><li><p>Provide/Inject in Vue is used to provide data from one component to other components, particularly in large projects.</p></li><li><p>Provide makes data available to other components.</p></li><li><p>Inject is used to get the provided data.</p></li><li><p>Provide/Inject is a way to share data as an alternative to passing data using props.</p></li></ul><h2 id="provide-data" tabindex="-1">Provide Data <a class="header-anchor" href="#provide-data" aria-label="Permalink to &quot;Provide Data&quot;">​</a></h2><p>We use the &#39;provide&#39; configuration option to make data available to other components.</p><p><strong>app.vue</strong></p><pre><code>    &lt;template&gt;
        &lt;h1&gt;Food&lt;/h1&gt;
        &lt;food-kinds /&gt;
    &lt;/template&gt;

    &lt;script&gt;
    export default {
    data() {
        return {
        foods: [
            { name: &#39;Pizza&#39;, desc: &#39;This is Pizza&#39; },
            { name: &#39;Apple&#39;, desc: &#39;This is Apple&#39; },
            { name: &#39;Cake&#39;, desc: &#39;This is Cake&#39; },
            { name: &#39;Fish&#39;, desc: &#39;This is Fish&#39; },
            { name: &#39;Rice&#39;, desc: &#39;This is Rice&#39; }
        ]
        }
    },
    provide() {
        return {
        foods: this.foods
        }
    }
    }
    &lt;/script&gt;

    &lt;style scoped&gt;
    .divBtn {
        display: inline-block;
        text-decoration: none;
        text-align: center;
        background-color: white;
        border: solid 2px #04AA6D;
        border-radius: 10px;
        font-family: Verdana,sans-serif;
        color: black;
        padding: 10px;
        margin: 10px;
    }
    .divBtn:hover {
        background-color: #04AA6D;
        color: white;
        cursor: pointer;
    }
    #divComp {
        border: dashed black 1px;
        border-radius: 10px;
        padding: 20px;
        margin: 10px;
        width: 400px;
    }
    &lt;/style&gt;
</code></pre><p>The &#39;foods&#39; array is now provided so that it is available to be injected in other components in your project.</p><h2 id="inject-data" tabindex="-1">Inject Data <a class="header-anchor" href="#inject-data" aria-label="Permalink to &quot;Inject Data&quot;">​</a></h2><p>Now that the &#39;foods&#39; array is made available by &#39;provide&#39; in &#39;App.vue&#39;, we can include it in the &#39;FoodKinds&#39; component.</p><p>With the &#39;foods&#39; data injected in the &#39;FoodKinds&#39; component, we can use the data from App.vue to display different foods in the &#39;FoodKinds&#39; component.</p><p><strong>FoodKinds.vue</strong></p><pre><code>    &lt;template&gt;
        &lt;h2&gt;Different Kinds of Food&lt;/h2&gt;
        &lt;p&gt;&lt;mark&gt;In this application, food data is provided in &quot;App.vue&quot;, and injected in the &quot;FoodKinds.vue&quot; component so that it can be shown here:&lt;/mark&gt;&lt;/p&gt;
        &lt;div v-for=&quot;x in foods&quot;&gt;
            &lt;h3&gt;{ { x.name } }&lt;/h3&gt;
            &lt;p class=&quot;pName&quot;&gt;{ { x.desc } }&lt;/p&gt;
        &lt;/div&gt;
    &lt;/template&gt;

    &lt;script&gt;
    export default {
        inject: [&#39;foods&#39;]
    }
    &lt;/script&gt;

    &lt;style scoped&gt;
        div {
            margin: 10px;
            padding: 10px;
            display: inline-block;
            width: 80px;
            background-color: #28e49f47;
            border-radius: 10px;
        }
        .pName {
            text-align: center;
            margin: 10px 0 0 0;
        }
        h3 {
            text-align: center;
        }
    &lt;/style&gt;
</code></pre><p><strong>main.js</strong></p><pre><code>    import { createApp } from &#39;vue&#39;

    import App from &#39;./App.vue&#39;
    import FoodKinds from &#39;./FoodKinds.vue&#39;

    const app = createApp(App)
    app.component(&#39;food-kinds&#39;, FoodKinds)
    app.mount(&#39;#app&#39;)
</code></pre>`,17)]))}const m=t(i,[["render",d]]);export{u as __pageData,m as default};
