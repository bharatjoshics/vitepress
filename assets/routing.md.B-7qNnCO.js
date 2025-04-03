import{_ as e,c as o,o as n,ae as a}from"./chunks/framework.BmN8lrCQ.js";const h=JSON.parse('{"title":"Routing","description":"","frontmatter":{},"headers":[],"relativePath":"routing.md","filePath":"routing.md"}'),r={name:"routing.md"};function i(l,t,p,u,s,c){return n(),o("div",null,t[0]||(t[0]=[a(`<h1 id="routing" tabindex="-1">Routing <a class="header-anchor" href="#routing" aria-label="Permalink to &quot;Routing&quot;">​</a></h1><p>Routing in Vue is used to navigate the Vue application, and it happens on the client side (in the browser) without full page reload, which results in a faster user experience.</p><p>With routing we can use the URL address to direct someone to a specific place in our Vue application.</p><h2 id="navigate-using-a-dynamic-component" tabindex="-1">Navigate Using a Dynamic Component <a class="header-anchor" href="#navigate-using-a-dynamic-component" aria-label="Permalink to &quot;Navigate Using a Dynamic Component&quot;">​</a></h2><p>To understand routing in Vue, let&#39;s first look at an application that uses a dynamic component to switch between two components.</p><p>We can switch between the components using buttons -</p><p><strong>App.vue</strong></p><pre><code>    &lt;template&gt;
    &lt;p&gt;Choose what part of this page you want to see:&lt;/p&gt;
    &lt;button @click=&quot;activeComp = &#39;animal-collection&#39;&quot;&gt;Animals&lt;/button&gt;
    &lt;button @click=&quot;activeComp = &#39;food-items&#39;&quot;&gt;Food&lt;/button&gt;&lt;br&gt;
    &lt;div&gt;
        &lt;component :is=&quot;activeComp&quot;&gt;&lt;/component&gt;
    &lt;/div&gt;
    &lt;/template&gt;

    &lt;script&gt;
    export default {
    data() {
        return {
            activeComp: &#39;&#39;
        }
        }
    }
    &lt;/script&gt;

    &lt;style scoped&gt;
    button {
        padding: 5px;
        margin: 10px;
    }
    div {
        border: dashed black 1px;
        padding: 20px;
        margin: 10px;
        display: inline-block;
    }
    &lt;/style&gt;
</code></pre><p><strong>AnimalCollection.vue</strong></p><pre><code>    &lt;template&gt;
        &lt;h1&gt;Animals!&lt;/h1&gt;
        &lt;p&gt;I want to learn about at least one new animal every year.&lt;/p&gt;
    &lt;/template&gt; 
</code></pre><p><strong>FoodItems.vue</strong></p><pre><code>    &lt;template&gt;
        &lt;h1&gt;Food!&lt;/h1&gt;
        &lt;p&gt;I like most types of food.&lt;/p&gt;
    &lt;/template&gt;
</code></pre><h2 id="from-dynamic-component-to-routing" tabindex="-1">From Dynamic Component to Routing <a class="header-anchor" href="#from-dynamic-component-to-routing" aria-label="Permalink to &quot;From Dynamic Component to Routing&quot;">​</a></h2><p>We build SPAs (Single Page Applications) with Vue, which means that our application only contains one *.html file. And that means we cannot direct people to other *.html files to show them different content on our page.</p><p>In the example above, we can navigate between different content on the page, but we cannot give someone else an address to the page so that they come directly to the part about food, but with routing we can do that.</p><p>With routing set up appropriately, if you open the Vue application with an extension to the URL address, like &quot;/food-items&quot; for example, you will come directly to the part with the food content.</p><h2 id="install-the-vue-router-library" tabindex="-1">Install The Vue Router Library <a class="header-anchor" href="#install-the-vue-router-library" aria-label="Permalink to &quot;Install The Vue Router Library&quot;">​</a></h2><p>To use routing in Vue on your machine, install the Vue Router library in your project folder using the terminal -</p><p><strong>npm install vue-router@4</strong></p><h3 id="update-main-js" tabindex="-1">Update main.js <a class="header-anchor" href="#update-main-js" aria-label="Permalink to &quot;Update main.js&quot;">​</a></h3><p>To use routing we must create a router, and we do that in the main.js file.</p><pre><code>import { createApp } from &#39;vue&#39;
import { createRouter, createWebHistory } from &#39;vue-router&#39;

import App from &#39;./App.vue&#39;
import FoodItems from &#39;./components/FoodItems.vue&#39;
import AnimalCollection from &#39;./components/AnimalCollection.vue&#39;

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: &#39;/animals&#39;, component: AnimalCollection },
        { path: &#39;/food&#39;, component: FoodItems },
    ]
});

const app = createApp(App)

app.use(router);
app.mount(&#39;#app&#39;)
</code></pre><h2 id="use-the-router-view-component" tabindex="-1">Use The &lt; router-view &gt; Component <a class="header-anchor" href="#use-the-router-view-component" aria-label="Permalink to &quot;Use The &lt; router-view &gt; Component&quot;">​</a></h2><p>To change the content on our page with the new router, we need to remove the dynamic component in the previous example and use the &lt; router-view &gt; component instead -</p><p><strong>App.vue</strong></p><pre><code>    &lt;template&gt;
    &lt;p&gt;Choose what part of this page you want to see:&lt;/p&gt;
    &lt;button @click=&quot;activeComp = &#39;animal-collection&#39;&quot;&gt;Animals&lt;/button&gt;
    &lt;button @click=&quot;activeComp = &#39;food-items&#39;&quot;&gt;Food&lt;/button&gt;&lt;br&gt;
    &lt;div&gt;
        &lt;router-view&gt;&lt;/router-view&gt;
    &lt;/div&gt;
    &lt;/template&gt;
</code></pre><p>Now, you can add &#39;/food&#39; to the URL address of your project page in the browser, and the page should update to show the food content.</p><h2 id="use-the-router-link-component" tabindex="-1">Use The &lt; router-link &gt; Component <a class="header-anchor" href="#use-the-router-link-component" aria-label="Permalink to &quot;Use The &lt; router-link &gt; Component&quot;">​</a></h2><p>We can replace the buttons with the &lt; router-link &gt; component because that works better with the router.</p><pre><code>    &lt;template&gt;
    &lt;p&gt;Choose what part of this page you want to see:&lt;/p&gt;
    &lt;router-link to=&quot;/animals&quot;&gt;Animals&lt;/router-link&gt;
    &lt;router-link to=&quot;/food&quot;&gt;Food&lt;/router-link&gt;&lt;br&gt;
    &lt;div&gt;
        &lt;router-view&gt;&lt;/router-view&gt;
    &lt;/div&gt;
    &lt;/template&gt;
</code></pre>`,30)]))}const d=e(r,[["render",i]]);export{h as __pageData,d as default};
