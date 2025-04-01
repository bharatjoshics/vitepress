import{_ as t,c as a,o,ae as n}from"./chunks/framework.BmN8lrCQ.js";const u=JSON.parse('{"title":"Dynamic Props Value","description":"","frontmatter":{},"headers":[],"relativePath":"dynamic-props.md","filePath":"dynamic-props.md"}'),l={name:"dynamic-props.md"};function r(p,e,i,s,m,d){return o(),a("div",null,e[0]||(e[0]=[n(`<h1 id="dynamic-props-value" tabindex="-1">Dynamic Props Value <a class="header-anchor" href="#dynamic-props-value" aria-label="Permalink to &quot;Dynamic Props Value&quot;">​</a></h1><p>Components can be reused with v-for to generate many elements of the same kind.</p><p>When generating elements with v-for from a component, it is also very helpful that props can be assigned dynamically based on values from an array.</p><p>We will now create component elements with v-for based on an array with food item names.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><ul><li><p>main.js will remain same</p><p><strong>App.js</strong></p><pre><code>  &lt;template&gt;
  &lt;h1&gt;Food&lt;/h1&gt;
  &lt;div id=&quot;wrapper&quot;&gt;
      &lt;food-item
      v-for=&quot;x in foods&quot;
      v-bind:food-name=&quot;x&quot;/&gt;
  &lt;/div&gt;
  &lt;/template&gt;

  &lt;script&gt;
  export default {
      data() {
      return {
          foods: [&#39;Apples&#39;,&#39;Pizza&#39;,&#39;Rice&#39;,&#39;Fish&#39;,&#39;Cake&#39;]
      };
      }
  }
  &lt;/script&gt;
</code></pre><p><strong>FoodItem.vue</strong></p><pre><code>  &lt;template&gt;
  &lt;div&gt;
      &lt;h2&gt;{ { foodName } }&lt;/h2&gt;
  &lt;/div&gt;
  &lt;/template&gt;

  &lt;script&gt;
  export default {
      props: [&#39;foodName&#39;]
  }
  &lt;/script&gt;
</code></pre></li></ul><p>Previously, we are calling props manually.</p><pre><code>&lt;food-item food-name=&quot;Apples&quot;/&gt; (Manual Call)
&lt;food-item food-name=&quot;Pizza&quot;/&gt; (Manual Call)
&lt;food-item food-name=&quot;Rice&quot;/&gt; (Manual Call)
</code></pre><p>There are only three items so we can call them manually. But what if there are 1000 item, are we gonna call them manually by writing 1000 line?</p><p>The answer is NO. So, here Dynamic Props plays the important role.</p><p>Now, by using &#39;v-for&#39; we are calling them dynamically.</p><pre><code>&lt;food-item
v-for=&quot;x in foods&quot;
v-bind:food-name=&quot;x&quot;/&gt;
</code></pre>`,12)]))}const f=t(l,[["render",r]]);export{u as __pageData,f as default};
