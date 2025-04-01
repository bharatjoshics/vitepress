import{_ as t,c as o,o as a,ae as n}from"./chunks/framework.BmN8lrCQ.js";const c=JSON.parse('{"title":"Props","description":"","frontmatter":{},"headers":[],"relativePath":"props.md","filePath":"props.md"}'),i={name:"props.md"};function r(p,e,s,d,l,h){return a(),o("div",null,e[0]||(e[0]=[n(`<h1 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h1><p>Props is a configuration option in Vue.</p><p>With props we can pass data to the components via custom attributes to the component tag.</p><p>It is used to pass the data from parent to child components.</p><h2 id="pass-data-to-a-component" tabindex="-1">Pass Data To a Component <a class="header-anchor" href="#pass-data-to-a-component" aria-label="Permalink to &quot;Pass Data To a Component&quot;">​</a></h2><p>With props we can now pass data down to our components to give them different content and make them look different.</p><h2 id="receive-data-inside-a-component" tabindex="-1">Receive Data Inside a Component <a class="header-anchor" href="#receive-data-inside-a-component" aria-label="Permalink to &quot;Receive Data Inside a Component&quot;">​</a></h2><p>To receive the data sent via an attribute from root app we use this new &#39;props&#39; configuration option. We list the attributes received so that our component *.vue file knows about them, and now we can use the props wherever we want in the same way as we use a data property.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>Let&#39;s understand this by modifying previous example. But first let&#39;s clear one thing -</p><ul><li><p>App.vue (root component / Parent Component)</p></li><li><p>FoodItem.vue (Child Component)</p></li><li><p>main.js (Same)</p><pre><code>  import { createApp } from &#39;vue&#39;

  import App from &#39;./App.vue&#39;
  import FoodItem from &#39;./components/FoodItem.vue&#39;

  const app = createApp(App)

  app.component(&#39;food-item&#39;, FoodItem)

  app.mount(&#39;#app&#39;)
</code></pre></li><li><p>App.vue (Some Changes)</p><pre><code>  &lt;template&gt;
  &lt;h1&gt;Food&lt;/h1&gt;
  &lt;food-item food-name=&quot;Apples&quot;/&gt;
  &lt;food-item food-name=&quot;Pizza&quot;/&gt;
  &lt;food-item food-name=&quot;Rice&quot;/&gt;
  &lt;/template&gt;

  &lt;script&gt;&lt;/script&gt;

  &lt;style&gt;
  #app &gt; div {
      border: dashed black 1px;
      display: inline-block;
      width: 120px;
      margin: 10px;
      padding: 10px;
      background-color: lightgreen;
  }
  &lt;/style&gt;
</code></pre><p>In the main application file App.vue we create our own attribute &#39;food-name&#39; to pass a prop with the &lt; food-item/ &gt; component tags.</p><p>We are passing &quot;Apples&quot;, &quot;Pizza&quot;, &quot;Rice&quot; one by one as custom attribute from Parent to Child component.</p></li><li><p>FoodItem.vue (some changes) &lt; template &gt; &lt; div &gt; &lt; h2 &gt;{ { foodName } }&lt; /h2 &gt; &lt; /div &gt; &lt; /template &gt;</p><pre><code>  &lt;script&gt;
  export default {
      props: [
          &#39;foodName&#39;
      ]
  };
  &lt;/script&gt;

  &lt;style&gt;&lt;/style&gt;
</code></pre><p>To recieve the data from Parent component we are using &#39;props&#39; method. Inside &#39;props&#39; we define &#39;foodName&#39; which is storing the data coming from &#39;food-name&#39; attribute.</p></li></ul><p><strong>Note -</strong> Props attributes are written with a dash - to separate words (kebab-case) in the &lt; template &gt; tag, but kebab-case is not legal in JavaScript. So instead we need to write the attribute names as camel Case in JavaScript, and Vue understands this automatically!</p><h2 id="boolean-props" tabindex="-1">Boolean Props <a class="header-anchor" href="#boolean-props" aria-label="Permalink to &quot;Boolean Props&quot;">​</a></h2><p>We can achieve different functionality by passing props of different data types, and we are able to define rules for how attributes are given when components are created from App.vue.</p><p>Let&#39;s add a new prop &#39;isFavorite&#39;. This should be a boolean prop with value either true or false so that we can use it directly with v-show to display a favorite stamp &lt; img &gt; tag if the food is considered a favorite.</p><p>To pass props with a data type different to String, we must write v-bind: in front of the attribute we want to pass.</p><p>This is how we pass the boolean &#39;isFavorite&#39; prop from App.vue as an attribute &#39;is-favorite&#39;.</p><p><strong>Template of App.vue looks like this</strong></p><pre><code>    &lt;template&gt;
    &lt;h1&gt;Food&lt;/h1&gt;
    &lt;div id=&quot;wrapper&quot;&gt;
        &lt;food-item
        food-name=&quot;Apples&quot;
        v-bind:is-favorite=&quot;true&quot;/&gt;
        &lt;food-item
        food-name=&quot;Pizza&quot;
        v-bind:is-favorite=&quot;false&quot;/&gt;
        &lt;food-item
        food-name=&quot;Rice&quot;
        v-bind:is-favorite=&quot;false&quot;/&gt;
    &lt;/div&gt;
    &lt;/template&gt;

Here, we are binding the boolean props i.e &#39;is-favorite&#39; using v-bind.
</code></pre><p><strong>FoodItem.vue looks like this</strong></p><pre><code>    &lt;template&gt;
    &lt;div&gt;
        &lt;h2&gt;
        { { foodName } }
        &lt;img src=&quot;/img_quality.svg&quot; v-show=&quot;isFavorite&quot;&gt;
        &lt;/h2&gt;
        &lt;p&gt;{ { foodDesc } }&lt;/p&gt;
    &lt;/div&gt;
    &lt;/template&gt;

    &lt;script&gt;
    export default {
        props: [&#39;foodName&#39;,&#39;isFavorite&#39;]
    }
    &lt;/script&gt;

    &lt;style&gt;
    img {
        height: 1.5em;
        float: right;
    }
    &lt;/style&gt;

Now, if the boolean prop i.e is-favorite is true then an image &quot;img_quality.svg&quot; is shown.
</code></pre><h2 id="props-interface" tabindex="-1">Props Interface <a class="header-anchor" href="#props-interface" aria-label="Permalink to &quot;Props Interface&quot;">​</a></h2><p>In the example above, based on the code inside FoodItem.vue, we cannot know for sure that we receive the &#39;isFavorite&#39; prop, and we cannot know for sure if it is a boolean value. To help us with this we can define the data-type of props we receive, we can set props to be required, and we can even make validation functions to validate the props we receive.</p><h2 id="props-as-an-object" tabindex="-1">Props as an Object <a class="header-anchor" href="#props-as-an-object" aria-label="Permalink to &quot;Props as an Object&quot;">​</a></h2><p>In FoodItem.vue, we comment out how we defined the props in an array to have it as reference, and instead define the props in an object. We can also define the data type of each prop in addition to the prop name, like this -</p><pre><code>    &lt;script&gt;
    export default {
        // props: [&#39;foodName&#39;, &#39;isFavorite&#39;]
        props: {
            foodName: String,
            isFavorite: Boolean
        }
    }
    &lt;/script&gt;

Here, we are defining that &#39;foodName&#39; must be String and &#39;isFavorite&#39; must be Boolean.
</code></pre><p>If a component is created from the parent element and given a prop with the wrong data type, you get a warning in the console.</p><h2 id="required-props" tabindex="-1">Required Props <a class="header-anchor" href="#required-props" aria-label="Permalink to &quot;Required Props&quot;">​</a></h2><p>To tell Vue that a prop is required we need to define the prop as an object. Let&#39;s make the prop &#39;foodName&#39; required, like this -</p><pre><code>    &lt;script&gt;
    export default {
        // props: [&#39;foodName&#39;, &#39;isFavorite&#39;]
        props: {
            foodName: {
                type: String,
                required: true
            },
            isFavorite: Boolean
        }
    }
    &lt;/script&gt;

If a component is created from the parent element and a required prop is not defined, you get a warning in the console.
</code></pre><h2 id="default-value" tabindex="-1">Default Value <a class="header-anchor" href="#default-value" aria-label="Permalink to &quot;Default Value&quot;">​</a></h2><p>We can set a default value for a prop.</p><p>Let&#39;s create a default value for the &#39;isFavorite&#39; prop in the &#39;FoodItem&#39; component.</p><pre><code>    &lt;script&gt;
    export default {
        props: {
        foodName: {
            type: String,
            required: true
        },
        isFavorite: {
            type: Boolean,
            required: false,
            default: false
        }
        }
    }
    &lt;/script&gt;
</code></pre><h2 id="props-validator-function" tabindex="-1">Props Validator Function <a class="header-anchor" href="#props-validator-function" aria-label="Permalink to &quot;Props Validator Function&quot;">​</a></h2><p>We can also define a validator function that decides if the prop value is valid or not.</p><p>Such validator functions must return either true or false. When the validator returns false, it means the prop value is invalid.</p><p>Let&#39;s add a new prop &#39;foodDesc&#39; (food description) and it should be in a certain length, between 20 and 50 characters. We can add a validator function to make sure the food description provided has a valid length.</p><pre><code>    &lt;script&gt;
    export default {
        props: {
        foodName: {
            type: String,
            required: true
        },
        foodDesc: {
            type: String,
            required: false,
            default: &#39;This is the default description.&#39;,
            validator: function(value) {
            if( 20&lt;value.length &amp;&amp; value.length&lt;50 ) {
                return true;
            }
            else {
                return false;
            }
            }
        },
        isFavorite: {
            type: Boolean,
            required: false,
            default: false
        }
        }
    }
    &lt;/script&gt;
</code></pre><h2 id="modify-props" tabindex="-1">Modify Props <a class="header-anchor" href="#modify-props" aria-label="Permalink to &quot;Modify Props&quot;">​</a></h2><p>When a component is created in the parent element we are not allowed to change the value of the prop received in the child element. So inside FoodItem.vue we cannot change the value of the &#39;isFavorite&#39; prop we get from App.vue. The prop is read-only from the parent.</p><p>But let&#39;s say we want the user to be able to change what food is considered favorite by clicking a button. Now there is a need to change the &#39;isFavorite&#39; prop, but we cannot do it because it is read only.</p><pre><code>    methods: {
    toggleFavorite() { 
        this.isFavorite = !this.isFavorite;
    }
    }
</code></pre><p><strong>Note -</strong> We are not allowed to change &#39;isFavorite&#39;. This will generate an error.</p><p>To get around this we can use the prop to initialize a new data value &#39;foodIsFavorite&#39;, inside FoodItem.vue, like this -</p><pre><code>    data() {
        return { 
            foodIsFavorite: this.isFavorite
        }
    }
</code></pre><p>And now we can add a method so the user can toggle this new data value -</p><pre><code>    methods: {
        toggleFavorite() { 
            this.foodIsFavorite = !this.foodIsFavorite;
        }
    }
</code></pre><p>We must also add the toggle button to each food item, and change v-show in the <img> tag to depend on the new data property &#39;foodIsFavorite&#39;.</p><h2 id="modify-props-example" tabindex="-1">Modify Props Example <a class="header-anchor" href="#modify-props-example" aria-label="Permalink to &quot;Modify Props Example&quot;">​</a></h2><p>The main.js and App.js file will remian same. The FoodItem.vue will now look like this -</p><pre><code>    &lt;template&gt;
    &lt;div&gt;
        &lt;h2&gt;
        { { foodName } }
        &lt;img src=&quot;/img_quality.svg&quot; v-show=&quot;foodIsFavorite&quot;&gt;
        &lt;/h2&gt;
        &lt;p&gt;{ { foodDesc } }&lt;/p&gt;
        &lt;button v-on:click=&quot;toggleFavorite&quot;&gt;Favorite&lt;/button&gt;
    &lt;/div&gt;
    &lt;/template&gt;

    &lt;script&gt;
    export default {
    props: [&#39;foodName&#39;,&#39;foodDesc&#39;,&#39;isFavorite&#39;],
    data() {
        return {
        foodIsFavorite: this.isFavorite
        }
    },
    methods: {
        toggleFavorite() {
        this.foodIsFavorite = !this.foodIsFavorite;
        }
    }
    };
    &lt;/script&gt;

    &lt;style&gt;
    img {
        height: 1.5em;
        float: right;
    }
    &lt;/style&gt;
</code></pre>`,52)]))}const m=t(i,[["render",r]]);export{c as __pageData,m as default};
