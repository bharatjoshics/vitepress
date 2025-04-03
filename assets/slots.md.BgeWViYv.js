import{_ as e,c as n,o,ae as l}from"./chunks/framework.BmN8lrCQ.js";const h=JSON.parse('{"title":"Slots","description":"","frontmatter":{},"headers":[],"relativePath":"slots.md","filePath":"slots.md"}'),a={name:"slots.md"};function s(r,t,p,i,d,c){return o(),n("div",null,t[0]||(t[0]=[l(`<h1 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h1><p>Slots are a powerful feature in Vue that allow for more flexible and reusable components.</p><p>We use slots in Vue to send content from the parent into the &lt; template &gt; of a child component.</p><p>Till now, we have just used components inside &lt; template &gt; as self-closing tags like this -</p><pre><code>&lt;template&gt;
&lt;slot-one /&gt;
&lt;/template&gt;
</code></pre><p>Instead, we can use opening and closing tags, and put some content inside, like for example a text -</p><pre><code>&lt;template&gt;
&lt;slot-one&gt;Hello World!&lt;/slot-one&gt;
&lt;/template&gt;
</code></pre><p>But to receive &#39;Hello World!&#39; inside the component and display it on our page, we need to use the &lt; slot &gt; tag inside the &#39;SlotOne&#39;component.</p><p><strong>SlotOne.vue</strong></p><pre><code>    &lt;template&gt;
    &lt;div&gt;  
        &lt;p&gt;SlotComp.vue&lt;/p&gt;
        &lt;slot&gt;&lt;/slot&gt;
    &lt;/div&gt;
    &lt;/template&gt;
</code></pre><p>The &lt; slot &gt; tag acts as a placeholder for the content, so that after the application is built the &lt; slot &gt; will be replaced by the content sent to it.</p><h2 id="key-points" tabindex="-1">Key Points <a class="header-anchor" href="#key-points" aria-label="Permalink to &quot;Key Points&quot;">​</a></h2><ul><li><p>It is like we are creating a template without any data.</p></li><li><p>The data is called between the opening and closing tag of the &#39;component&#39; calling like this -</p><pre><code>  &lt;template&gt;
  &lt;slot-one&gt;Hello World!&lt;/slot-one&gt;
  &lt;/template&gt;
</code></pre></li><li><p>It could be useful for creating cards. We can create card design in a component and then use it by providing the data while calling it. Let&#39;s understand this more.</p></li></ul><h2 id="slots-as-cards" tabindex="-1">Slots as Cards <a class="header-anchor" href="#slots-as-cards" aria-label="Permalink to &quot;Slots as Cards&quot;">​</a></h2><p>Slots can also be used to wrap around larger chunks of dynamic html content to get a card-like appearance.</p><p>Earlier we have sent data as props to create content inside components, now we can just send the HTML content directly inside the &lt; slot &gt; tag as it is.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p><strong>App.vue</strong></p><pre><code>    &lt;template&gt;
    &lt;div id=&quot;wrapper&quot;&gt;
        &lt;slot-one&gt;
        &lt;/slot-one&gt;
    &lt;/div&gt;
    &lt;/template&gt;

    &lt;script&gt;
    export default {
        data() {
        return {}
        }
    }
    &lt;/script&gt;

    &lt;style&gt;
    #wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    #wrapper &gt; div {
        background-color: lightgreen;
    }
    footer &gt; div {
        background-color: lightpink;
    }
    #wrapper img {
        display: block; 
        margin: 20% auto 0; 
        width: 60%;
    }
    h3, h4 {
        text-align: center;
    }
    &lt;/style&gt;
</code></pre><p><strong>slotOne.vue</strong></p><pre><code>    &lt;template&gt;
        &lt;div&gt;
            &lt;slot&gt;&lt;/slot&gt;
        &lt;/div&gt;
    &lt;/template&gt;

    &lt;script&gt;&lt;/script&gt;

    &lt;style scoped&gt;
        div {
            background-color: lightgreen;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
            flex-basis: 150px;
            border-radius: 10px;
            border: solid black 2px;
            margin: 10px;
            padding: 20px 10px 0 10px;
        }
        div:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        }
    &lt;/style&gt;
</code></pre><p>This will create empty card without any Data. If we pass data between component calling then it will be written inside the card.</p><pre><code>   &lt;slot-one&gt;Bharat&lt;/slot-one&gt;
</code></pre><p>Now, &#39;Bharat&#39; will be written inside card.</p><h2 id="array-example" tabindex="-1">Array Example <a class="header-anchor" href="#array-example" aria-label="Permalink to &quot;Array Example&quot;">​</a></h2><p>If we have array -</p><pre><code>&lt;script&gt;
export default {
    data() {
    return {
        foods: [
        { name: &#39;Apple&#39;, desc: &#39;Apples are a type of fruit that grow on trees.&#39;},
        { name: &#39;Pizza&#39;, desc: &#39;Pizza has a bread base with tomato sauce, cheese,
         and toppings on top.&#39;},
        { name: &#39;Rice&#39;, desc: &#39;Rice is a type of grain that people like to eat.&#39;},
        { name: &#39;Fish&#39;, desc: &#39;Fish is an animal that lives in water.&#39;},
        { name: &#39;Cake&#39;, desc: &#39;Cake is something sweet that tates good but is not
         consodered healthy.&#39;}
    ]
    }
    }
}
&lt;/script&gt;
</code></pre><p>Then we can use &#39;v-for&#39; to iterate it -</p><pre><code>&lt;template&gt;
&lt;div id=&quot;wrapper&quot;&gt;
    &lt;slot-one v-for=&quot;x in foods&quot;&gt;
    &lt;h4&gt;{ {x.name} }&lt;/h4&gt;
    &lt;p&gt;{ {x.desc} }&lt;/p&gt;
    &lt;/slot-one&gt;
&lt;/div&gt;
&lt;/template&gt;
</code></pre><p>This will create multiple cards according to number of data and place data inside the cards.</p><h2 id="reusability" tabindex="-1">Reusability <a class="header-anchor" href="#reusability" aria-label="Permalink to &quot;Reusability&quot;">​</a></h2><p>Components that produce a card-like frame around content can be reused to create different elements, but with the same card-like frame around.</p><p>In this example we use the same component as for the food items to create a footer -</p><pre><code>&lt;template&gt;
&lt;div id=&quot;wrapper&quot;&gt;
    &lt;slot-comp v-for=&quot;x in foods&quot;&gt;
    &lt;h4&gt;{ {x.name} }&lt;/h4&gt;
    &lt;p&gt;{ {x.desc} }&lt;/p&gt;
    &lt;/slot-comp&gt;
&lt;/div&gt;

&lt;footer&gt;
    &lt;slot-one&gt;
    &lt;h4&gt;Footer&lt;/h4&gt;
    &lt;/slot-one&gt;
&lt;/footer&gt;
&lt;/template&gt;
</code></pre><p>Here, the card is reuable for &#39;Footer&#39; aslo.</p><h2 id="fallback-content" tabindex="-1">Fallback Content <a class="header-anchor" href="#fallback-content" aria-label="Permalink to &quot;Fallback Content&quot;">​</a></h2><p>If a component is created without content we can have fallback content in the &lt; slot &gt;.</p><p><strong>App.vue</strong></p><pre><code>    &lt;template&gt;
    &lt;slot-two&gt;
        &lt;!-- Empty --&gt;
    &lt;/slot-two&gt;
    &lt;slot-two&gt;
        &lt;h4&gt;This content is provided from App.vue&lt;/h4&gt;
    &lt;/slot-two&gt;
    &lt;/template&gt;

    &lt;script&gt;&lt;/script&gt;

    &lt;style&gt;
    #app div {
        width: 150px;
    }
    h4 {
        text-align: center;
    }
    &lt;/style&gt;
</code></pre><p><strong>slotTwo.vue</strong></p><pre><code>    &lt;template&gt;
        &lt;div&gt;
            &lt;slot&gt;
                &lt;h4&gt;This is fallback content&lt;/h4&gt;
            &lt;/slot&gt;
        &lt;/div&gt;
    &lt;/template&gt;

    &lt;script&gt;&lt;/script&gt;

    &lt;style scoped&gt;
        div {
            background-color: lightgreen;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
            flex-basis: 150px;
            border-radius: 10px;
            border: solid black 2px;
            margin: 10px;
            padding: 0px 10px 0 10px;
        }
        div:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        }
        h4 {
            color: rgb(159, 0, 0);
        }
    &lt;/style&gt;
</code></pre><p>The first component in this application has no content provided, so the fallback content is rendered.</p><p>For this -</p><pre><code>    &lt;slot-two&gt;
        &lt;!-- Empty --&gt;
    &lt;/slot-two&gt;
</code></pre><p>The output will be - <strong>This is fallback content</strong></p><p>For this -</p><pre><code>    &lt;slot-two&gt;
        &lt;h4&gt;This content is provided from App.vue&lt;/h4&gt;
    &lt;/slot-two&gt;
</code></pre><p>The output will be - <strong>This content is provided from App.vue</strong></p>`,48)]))}const u=e(a,[["render",s]]);export{h as __pageData,u as default};
