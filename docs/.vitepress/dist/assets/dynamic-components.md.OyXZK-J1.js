import{_ as e,c as n,o,ae as l}from"./chunks/framework.BmN8lrCQ.js";const s=JSON.parse('{"title":"Dynamic Components","description":"","frontmatter":{},"headers":[],"relativePath":"dynamic-components.md","filePath":"dynamic-components.md"}'),p={name:"dynamic-components.md"};function a(i,t,g,u,r,c){return o(),n("div",null,t[0]||(t[0]=[l(`<h1 id="dynamic-components" tabindex="-1">Dynamic Components <a class="header-anchor" href="#dynamic-components" aria-label="Permalink to &quot;Dynamic Components&quot;">​</a></h1><p>Dynamic Components can be used to flip through pages within your page, like tabs in your browser, with the use of the &#39;is&#39; attribute.</p><h2 id="the-component-tag-and-the-is-attribute" tabindex="-1">The Component Tag and The &#39;is&#39; Attribute <a class="header-anchor" href="#the-component-tag-and-the-is-attribute" aria-label="Permalink to &quot;The Component Tag and The &#39;is&#39; Attribute&quot;">​</a></h2><p>To make a dynamic component we use the &lt; component &gt; tag to represent the active component. The &#39;is&#39; attribute is tied to a value with v-bind, and we change that value to the name of the component we want to have active.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p><strong>App.vue</strong></p><pre><code>    &lt;template&gt;
    &lt;h1&gt;Dynamic Components&lt;/h1&gt;
    &lt;p&gt;App.vue switches between which component to show.&lt;/p&gt;
    &lt;button @click=&quot;toggleValue = !toggleValue&quot;&gt;Switch component&lt;/button&gt;
    &lt;component :is=&quot;activeComp&quot;&gt;&lt;/component&gt;
    &lt;/template&gt;

    &lt;script&gt;
    export default {
        data () {
        return {
            toggleValue: true
        }
        },
        computed: {
        activeComp() {
            if(this.toggleValue) {
            return &#39;comp-one&#39;
            }
            else {
            return &#39;comp-two&#39;
            }
        }
        }
    }
    &lt;/script&gt;

    &lt;style&gt;
    #app {
        width: 350px;
        margin: 10px;
    }
    #app &gt; div {
        border: solid black 2px;
        padding: 10px;
        margin-top: 10px;
    }
    &lt;/style&gt;
</code></pre><p><strong>CompOne.vue</strong></p><pre><code>    &lt;template&gt;
        &lt;div&gt;
            &lt;h2&gt;One!&lt;/h2&gt;
            &lt;p&gt;This is component one.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/template&gt;

    &lt;script&gt;&lt;/script&gt;

    &lt;style scoped&gt;
        div {
            background-color: lightgreen;
        }
    &lt;/style&gt;
</code></pre><p><strong>CompTwo.vue</strong></p><pre><code>    &lt;template&gt;
        &lt;div&gt;
            &lt;h2&gt;Two!&lt;/h2&gt;
            &lt;p&gt;This is component two.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/template&gt;

    &lt;script&gt;&lt;/script&gt;

    &lt;style scoped&gt;
        div {
            background-color: lightpink;
        }
    &lt;/style&gt;
</code></pre><h2 id="keepalive" tabindex="-1">&lt; keepAlive &gt; <a class="header-anchor" href="#keepalive" aria-label="Permalink to &quot;&lt; keepAlive &gt;&quot;">​</a></h2><p>Run the below code -</p><p><strong>App.vue</strong></p><pre><code>    &lt;template&gt;
    &lt;h1&gt;Dynamic Components&lt;/h1&gt;
    &lt;p&gt;App.vue switches between which component to show.&lt;/p&gt;
    &lt;button @click=&quot;toggleValue = !toggleValue&quot;&gt;Switch component&lt;/button&gt;
    &lt;component :is=&quot;activeComp&quot;&gt;&lt;/component&gt;
    &lt;/template&gt;

    &lt;script&gt;
    export default {
        data () {
        return {
            toggleValue: true
        }
        },
        computed: {
        activeComp() {
            if(this.toggleValue) {
            return &#39;comp-one&#39;
            }
            else {
            return &#39;comp-two&#39;
            }
        }
        }
    }
    &lt;/script&gt;

    &lt;style&gt;
    #app {
        width: 350px;
        margin: 10px;
    }
    #app &gt; div {
        border: solid black 2px;
        padding: 10px;
        margin-top: 10px;
    }
    h2 {
        text-decoration: underline;
    }
    &lt;/style&gt;
</code></pre><p><strong>CompOne.vue</strong></p><pre><code>    &lt;template&gt;
        &lt;div&gt;
            &lt;img :src=&quot;imgSrc&quot;&gt;
            &lt;h2&gt;Component One&lt;/h2&gt;
            &lt;p&gt;Choose food.&lt;/p&gt;
            &lt;label&gt;
                &lt;input type=&quot;radio&quot; name=&quot;rbgFood&quot; 
                v-model=&quot;imgSrc&quot; :value=&quot;&#39;img_apple.svg&#39;&quot; /&gt; 
                Apple
            &lt;/label&gt;
            &lt;label&gt;
                &lt;input type=&quot;radio&quot; name=&quot;rbgFood&quot; 
                v-model=&quot;imgSrc&quot; :value=&quot;&#39;img_cake.svg&#39;&quot; /&gt; 
                Cake
            &lt;/label&gt;
        &lt;/div&gt;
    &lt;/template&gt;

    &lt;script&gt;
    export default {
        data () {
        return {
            imgSrc: &#39;img_question.svg&#39;
        }
        }
    }
    &lt;/script&gt;

    &lt;style scoped&gt;
        div {
            background-color: lightgreen;
        }
        img {
            float: right;
            height: 100px;
            margin-top: 20px;
        }
        label:hover {
            cursor: pointer;
        }
    &lt;/style&gt;
</code></pre><p><strong>Note</strong> - You must have images in the path with same name that is used in the example.</p><p><strong>CompTwo.vue</strong></p><pre><code>    &lt;template&gt;
        &lt;div&gt;
            &lt;h2&gt;Component Two&lt;/h2&gt;
            &lt;input type=&quot;text&quot; v-model=&quot;msg&quot; placeholder=&quot;Write something...&quot;&gt;
            &lt;p&gt;Your message:&lt;/p&gt;
            &lt;p&gt;&lt;strong&gt;{ { this.msg } }&lt;/strong&gt;&lt;/p&gt;
        &lt;/div&gt;
    &lt;/template&gt;

    &lt;script&gt;
    export default {
        data () {
        return {
            msg: &#39;&#39;
        }
        }
    }
    &lt;/script&gt;

    &lt;style scoped&gt;
        div {
            background-color: lightpink;
        }
        strong {
        background-color: yellow;
        padding: 5px;
        }
    &lt;/style&gt;
</code></pre><p>You will notice that changes you make in one component is forgotten when you switch back to it. That is because the component is unmounted and mounted again, reloading the component.</p><p>To keep the state, your previous inputs, when returning to a component we use the &lt; KeepAlive &gt; tag around the &lt; component &gt; tag.</p><p><strong>App.vue</strong></p><pre><code>    &lt;template&gt;
        &lt;h1&gt;Dynamic Components&lt;/h1&gt;
        &lt;p&gt;App.vue switches between which component to show.&lt;/p&gt;
        &lt;button @click=&quot;toggleValue = !toggleValue&quot;&gt;
            Switch component
        &lt;/button&gt;
        &lt;KeepAlive&gt;
            &lt;component :is=&quot;activeComp&quot;&gt;&lt;/component&gt;
        &lt;/KeepAlive&gt;
    &lt;/template&gt;
</code></pre><p>Change the &#39;template&#39; with this one.</p><p>The components now remember the user inputs.</p><h2 id="include-and-exclude-attributes" tabindex="-1">&#39;include&#39; and &#39;exclude&#39; Attributes <a class="header-anchor" href="#include-and-exclude-attributes" aria-label="Permalink to &quot;&#39;include&#39; and &#39;exclude&#39; Attributes&quot;">​</a></h2><p>All components inside the &lt; KeepAlive &gt; tag will be kept alive by default.</p><p>But we can also define only some components to be kept alive by using &#39;include&#39; or &#39;exclude&#39; attributes on the &lt; KeepAlive &gt; tag.</p><p>If we use the &#39;include&#39; or &#39;exclude&#39; attributes on the &lt; KeepAlive &gt; tag we also need to give the components names with the &#39;name&#39; option.</p><h3 id="include" tabindex="-1">&#39;include&#39; <a class="header-anchor" href="#include" aria-label="Permalink to &quot;&#39;include&#39;&quot;">​</a></h3><p>With &lt; KeepAlive include=&quot;CompOne&quot; &gt; only the &quot;CompOne&quot; component will remember the user input.</p><p><strong>App.vue</strong></p><pre><code>    &lt;template&gt;
    &lt;h1&gt;Dynamic Components&lt;/h1&gt;
    &lt;p&gt;App.vue switches between which component to show.&lt;/p&gt;
    &lt;button @click=&quot;toggleValue = !toggleValue&quot;&gt;Switch component&lt;/button&gt;
    &lt;KeepAlive include=&quot;CompOne&quot;&gt;
        &lt;component :is=&quot;activeComp&quot;&gt;&lt;/component&gt;
    &lt;/KeepAlive&gt;
    &lt;/template&gt;
</code></pre><h3 id="exclude" tabindex="-1">&#39;exclude&#39; <a class="header-anchor" href="#exclude" aria-label="Permalink to &quot;&#39;exclude&#39;&quot;">​</a></h3><p>With &lt; KeepAlive exclude=&quot;CompOne&quot; &gt; only the &quot;CompOne&quot; component will not remember the user input.</p><p><strong>App.vue</strong></p><pre><code>    &lt;template&gt;
    &lt;h1&gt;Dynamic Components&lt;/h1&gt;
    &lt;p&gt;App.vue switches between which component to show.&lt;/p&gt;
    &lt;button @click=&quot;toggleValue = !toggleValue&quot;&gt;Switch component&lt;/button&gt;
    &lt;KeepAlive exclude=&quot;CompOne&quot;&gt;
        &lt;component :is=&quot;activeComp&quot;&gt;&lt;/component&gt;
    &lt;/KeepAlive&gt;
    &lt;/template&gt;
</code></pre><h2 id="max-attribute" tabindex="-1">&#39;max&#39; Attribute <a class="header-anchor" href="#max-attribute" aria-label="Permalink to &quot;&#39;max&#39; Attribute&quot;">​</a></h2><p>We can use &#39;max&#39; as an attribute to the &lt; KeepAlive &gt; tag to limit the number of components the browser needs to remember the state of.</p><p><strong>App.vue</strong></p><pre><code>    &lt;template&gt;
    &lt;h1&gt;Dynamic Components&lt;/h1&gt;
    &lt;label&gt;&lt;input type=&quot;radio&quot; name=&quot;rbgComp&quot; v-model=&quot;compName&quot; 
    :value=&quot;&#39;comp-one&#39;&quot;&gt; One&lt;/label&gt;
    &lt;label&gt;&lt;input type=&quot;radio&quot; name=&quot;rbgComp&quot; v-model=&quot;compName&quot; 
    :value=&quot;&#39;comp-two&#39;&quot;&gt; Two&lt;/label&gt;
    &lt;label&gt;&lt;input type=&quot;radio&quot; name=&quot;rbgComp&quot; v-model=&quot;compName&quot; 
    :value=&quot;&#39;comp-three&#39;&quot;&gt; Three&lt;/label&gt;
    &lt;KeepAlive :max=&quot;2&quot;&gt;
        &lt;component :is=&quot;activeComp&quot;&gt;&lt;/component&gt;
    &lt;/KeepAlive&gt;
    &lt;/template&gt;
</code></pre><p>With &lt; KeepAlive :max=&quot;2&quot; &gt;, the browser will only remember the user input of the last two visited components.</p>`,43)]))}const h=e(p,[["render",a]]);export{s as __pageData,h as default};
