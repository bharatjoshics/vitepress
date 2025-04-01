import{_ as n,c as e,o as a,ae as o}from"./chunks/framework.BmN8lrCQ.js";const h=JSON.parse('{"title":"v-for Directive","description":"","frontmatter":{},"headers":[],"relativePath":"v-for-directive.md","filePath":"v-for-directive.md"}'),r={name:"v-for-directive.md"};function i(l,t,s,g,p,d){return a(),e("div",null,t[0]||(t[0]=[o(`<h1 id="v-for-directive" tabindex="-1">v-for Directive <a class="header-anchor" href="#v-for-directive" aria-label="Permalink to &quot;v-for Directive&quot;">​</a></h1><p>With normal JavaScript you might want to create HTML elements based on an array. You use a for-loop, and inside you need to create the elements, adjust them, and then add each element to your page. And these elements will not react to a change in the array.</p><p>With Vue you start with the HTML element you want to create into a list, with v-for as an attribute, refer to the array inside the Vue instance, and let Vue take care of the rest. And the elements created with v-for will automatically update when the array changes.</p><h2 id="ways-of-using-loop" tabindex="-1">Ways of using Loop <a class="header-anchor" href="#ways-of-using-loop" aria-label="Permalink to &quot;Ways of using Loop&quot;">​</a></h2><p>The are two ways of using the Loop -</p><ul><li>Loop Through an Array</li><li>Loop Through Array of Objects</li></ul><h2 id="loop-through-an-array" tabindex="-1">Loop Through an Array <a class="header-anchor" href="#loop-through-an-array" aria-label="Permalink to &quot;Loop Through an Array&quot;">​</a></h2><p>Show images of food, based on an array.</p><pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;loop1&lt;/title&gt;
&lt;style&gt;
    #app &gt; div {
    border: solid black 1px;
    width: 80%;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    }
    img {
    width: 70px;
    margin: 10px;
    }
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;app&quot;&gt;
&lt;div&gt;
    &lt;img v-for=&quot;x in manyFoods&quot; v-bind:src=&quot;x&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;

&lt;script src=&quot;https://unpkg.com/vue@3/dist/vue.global.js&quot;&gt;&lt;/script&gt;

&lt;script&gt;
const app = Vue.createApp({
data() {
    return {
    manyFoods: [
        &#39;img_salad.svg&#39;,
        &#39;img_cake.svg&#39;,
        &#39;img_soup.svg&#39;,
        &#39;img_pizza.svg&#39;,
        &#39;img_rice.svg&#39;
    ]
    }
}
})

app.mount(&#39;#app&#39;)

&lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;
</code></pre><p><strong>Note</strong> - Your system must have images with the same name that are using in &quot;manyFoods&quot; list / array. <strong>v-bind:src=&quot;x&quot;</strong> is using to bind the images from the given source folder &#39;x&#39;</p><h2 id="loop-through-array-of-objects" tabindex="-1">Loop Through Array of Objects <a class="header-anchor" href="#loop-through-array-of-objects" aria-label="Permalink to &quot;Loop Through Array of Objects&quot;">​</a></h2><p>Show both images and names of different types of food, based on an array</p><pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;loop2&lt;/title&gt;
&lt;style&gt;
    #app &gt; div {
    border: solid black 1px;
    width: 80%;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    }

    figure {
    width: 80px;
    padding: 10px;
    margin: 10px;
    background-color: lightskyblue;
    border-radius: 5px;
    }

    figcaption {
    text-align: center;
    }
    
    img {
    width: 100%;
    }
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id=&quot;app&quot;&gt;
&lt;div&gt;
    &lt;figure v-for=&quot;x in manyFoods&quot;&gt;
    &lt;img v-bind:src=&quot;x.url&quot;&gt;
    &lt;figcaption&gt;(double curly braces start) x.name (double curly braces end)&lt;/figcaption&gt;
    &lt;/figure&gt;
&lt;/div&gt;
&lt;/div&gt;

&lt;script src=&quot;https://unpkg.com/vue@3/dist/vue.global.js&quot;&gt;&lt;/script&gt;

&lt;script&gt;
const app = Vue.createApp({
data() {
    return {
    manyFoods: [
        {name: &#39;Salad&#39;, url: &#39;img_salad.svg&#39;},
        {name: &#39;Cake&#39;, url: &#39;img_cake.svg&#39;},
        {name: &#39;Soup&#39;, url: &#39;img_soup.svg&#39;},
        {name: &#39;Pizza&#39;, url: &#39;img_pizza.svg&#39;},
        {name: &#39;Rice&#39;, url: &#39;img_rice.svg&#39;}
    ]
    }
}
})

app.mount(&#39;#app&#39;)

&lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;
</code></pre><p><strong>Note</strong> - Your system must have images with the same name that are using in &quot;manyFoods&quot; list / array.</p>`,14)]))}const c=n(r,[["render",i]]);export{h as __pageData,c as default};
