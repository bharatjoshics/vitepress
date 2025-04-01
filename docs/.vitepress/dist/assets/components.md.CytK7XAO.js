import{_ as t,c as o,o as n,ae as a}from"./chunks/framework.BmN8lrCQ.js";const h=JSON.parse('{"title":"Components","description":"","frontmatter":{},"headers":[],"relativePath":"components.md","filePath":"components.md"}'),p={name:"components.md"};function i(l,e,s,r,c,m){return n(),o("div",null,e[0]||(e[0]=[a(`<h1 id="components" tabindex="-1">Components <a class="header-anchor" href="#components" aria-label="Permalink to &quot;Components&quot;">​</a></h1><p>Components are reusable and self-contained pieces of code that encapsulates a specific part of the user interface, so that we can make Vue applications that are scalable and easier to maintain.</p><p>It is just like an encapsulation concept of OOPS.</p><h2 id="creating-and-implemention-of-component" tabindex="-1">Creating and Implemention of Component <a class="header-anchor" href="#creating-and-implemention-of-component" aria-label="Permalink to &quot;Creating and Implemention of Component&quot;">​</a></h2><p>Let&#39;s understand the concept with an sample/example program.</p><ul><li>First we create a component file in a &#39;components&#39; folder.</li><li>Then we need to register the component in main.js file.</li><li>Now we can use the component in other components or files.</li></ul><ol><li><p>Create Component File - FoodItem.vue (Inside &#39;Components&#39; folder)</p><pre><code> &lt;template&gt;
     &lt;div&gt;
         &lt;h2&gt;{ { name } }&lt;/h2&gt;
         &lt;p&gt;{ { message } }&lt;/p&gt;
     &lt;/div&gt;
 &lt;/template&gt;

 &lt;script&gt;
 export default {
     data() {
         return {
             name: &#39;Apples&#39;,
             message: &#39;I like apples&#39;
         }
     }
 };
 &lt;/script&gt;
</code></pre><p><strong>Note -</strong> It is not necessary to create the component in the &#39;components&#39; folder only. But it&#39;s a good practice to create and save all the component files together seperatly.</p></li><li><p>Register the Component in main.js file. So, your main.js file will looks like this -</p><pre><code> import { createApp } from &#39;vue&#39;

 import App from &#39;./App.vue&#39;
 import FoodItem from &#39;./components/FoodItem.vue&#39;

 const app = createApp(App)

 app.component(&#39;food-item&#39;, FoodItem)

 app.mount(&#39;#app&#39;)
</code></pre><p><strong>Note -</strong> Here, we registered the &#39;FoodItem&#39; component as &#39;food-item&#39;. It&#39;s up to you, you can give any name that you want to give.</p></li><li><p>Use the Component on App.vue. So, App.vue will look like this -</p><pre><code> &lt;template&gt;
 &lt;h1&gt;Food&lt;/h1&gt;
 &lt;food-item/&gt;
 &lt;food-item/&gt;
 &lt;food-item/&gt;
 &lt;/template&gt;

 &lt;script&gt;&lt;/script&gt;

 &lt;style&gt;
 #app &gt; div {
         border: dashed black 1px;
         display: inline-block;
         margin: 10px;
         padding: 10px;
         background-color: lightgreen;
     }
 &lt;/style&gt;
</code></pre><p><strong>Note -</strong> Here, we are calling the &#39;FoodItem&#39; component three times. It&#39;s up to you, you can all it as many time as you want or need. The component is called by using &#39;food-item&#39;, if in the main.js file &quot;app.component(&#39;food-item&#39;, FoodItem)&quot; is written as &quot;app.component(&#39;abc&#39;, FoodItem)&quot; which means the component is registerd as &#39;abc&#39; so, we can call it in App.vue file like this &quot;&lt; abc / &gt;&quot;.</p><p>Here, there are two ways to call the component -</p><ol><li>&lt; abc / &gt;</li><li>&lt; abc &gt; &lt; /abc &gt;</li></ol><p>Both are correct you can use whichever method you want to use.</p></li></ol><h2 id="download-files" tabindex="-1">Download Files <a class="header-anchor" href="#download-files" aria-label="Permalink to &quot;Download Files&quot;">​</a></h2><p>You can download these file from here - <a href="/vitepress/public/Components-Sample.zip">Download ZIP</a></p>`,9)]))}const g=t(p,[["render",i]]);export{h as __pageData,g as default};
