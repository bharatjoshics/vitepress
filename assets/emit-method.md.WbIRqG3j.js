import{_ as t,c as o,o as n,ae as a}from"./chunks/framework.BmN8lrCQ.js";const l=JSON.parse('{"title":"$emit()","description":"","frontmatter":{},"headers":[],"relativePath":"emit-method.md","filePath":"emit-method.md"}'),i={name:"emit-method.md"};function r(d,e,h,s,m,p){return n(),o("div",null,e[0]||(e[0]=[a(`<h1 id="emit" tabindex="-1">$emit() <a class="header-anchor" href="#emit" aria-label="Permalink to &quot;$emit()&quot;">​</a></h1><p>With the built-in $emit() method in Vue we can create a custom event in the child component that can be captured in the parent element.</p><p>Props are used to send data from the parent element to the child component, and $emit() is used to do the opposite: to pass information from the child component to the parent.</p><h2 id="emit-a-custom-event" tabindex="-1">Emit a Custom Event <a class="header-anchor" href="#emit-a-custom-event" aria-label="Permalink to &quot;Emit a Custom Event&quot;">​</a></h2><p>There is a need to send information from the component to the parent, and we use the built-in method $emit() to do that.</p><p>We already have the toggleFavorite method inside the FoodItem.vue component that runs when the toggle button is clicked. So, add a line to emit our custom event &#39;toggle-favorite&#39; -</p><p><strong>FoodItem.vue</strong></p><pre><code>    methods: {
        toggleFavorite() {
            this.$emit(&#39;toggle-Favorite&#39;);
        }
    }
</code></pre><h2 id="receive-an-emit-event" tabindex="-1">Receive an Emit Event <a class="header-anchor" href="#receive-an-emit-event" aria-label="Permalink to &quot;Receive an Emit Event&quot;">​</a></h2><p>The custom emit event &#39;toggle-favorite&#39; is now emitted from the FoodItem.vue component, but we need to listen to the event in the App.vue parent and call a method that does something so that we can see that the event happened.</p><p>We listen to the event with the v-on: or shorthand @ in App.vue where the component is created.</p><p><strong>App.vue</strong></p><pre><code>    &lt;food-item
    v-for=&quot;x in foods&quot;
    :key=&quot;x.name&quot;
    :food-name=&quot;x.name&quot;
    :food-desc=&quot;x.desc&quot;
    :is-favorite=&quot;x.favorite&quot;
    @toggle-favorite=&quot;receiveEmit&quot;
    /&gt;
</code></pre><p><strong>Note -</strong> When our custom &#39;toggle-favorite&#39; event happens, we need to create the receiveEmit method in App.vue so that we can see that the event happened.</p><pre><code>    methods: {
    receiveEmit() {
        alert(&#39;Hello World!&#39;);
    }
    }
</code></pre><h2 id="change-the-status-in-the-parent" tabindex="-1">Change the status in the Parent <a class="header-anchor" href="#change-the-status-in-the-parent" aria-label="Permalink to &quot;Change the status in the Parent&quot;">​</a></h2><p>We now have an event that notifies App.vue when the &#39;Favorite&#39; button is clicked from the child component.</p><p>We want to change the &#39;favorite&#39; property in the &#39;foods&#39; array in App.vue for the correct food item when a &#39;Favorite&#39; button is clicked. To do that we send the food item name from FoodItem.vue to App.vue because that is unique for each food item.</p><p><strong>FoodItem.vue</strong></p><pre><code>    methods: {
    toggleFavorite() {
        this.$emit(&#39;toggle-favorite&#39;, this.foodName);
    }
    }

Now that we know what food item that was clicked we can update the &#39;favorite&#39; status for the correct food item inside the &#39;foods&#39; array -
</code></pre><p><strong>App.vue</strong></p><pre><code>    methods: {
    receiveEmit(foodId) {
        const foundFood = this.foods.find(
        food =&gt; food.name === foodId
        );
        foundFood.favorite = !foundFood.favorite;
    }
    }
</code></pre><h2 id="the-emits-option" tabindex="-1">The &#39;emits&#39; Option <a class="header-anchor" href="#the-emits-option" aria-label="Permalink to &quot;The &#39;emits&#39; Option&quot;">​</a></h2><p>In the same way that we declare props inside the FoodItem.vue component, we can also document what the component emits by using the Vue &#39;emits&#39; option.</p><p>Props must be declared in the component, while emits are just recommended to be documented.</p><p>This is how we can document our emit in the FoodItem.vue component -</p><pre><code>    &lt;script&gt;
    export default {  
    props: [&#39;foodName&#39;,&#39;foodDesc&#39;,&#39;isFavorite&#39;],
    emits: [&#39;toggle-favorite&#39;],
    methods: {
        toggleFavorite() {
        this.$emit(&#39;toggle-favorite&#39;, this.foodName);
        }
    }
    };
    &lt;/script&gt;
</code></pre><h2 id="emit-validation" tabindex="-1">Emit Validation <a class="header-anchor" href="#emit-validation" aria-label="Permalink to &quot;Emit Validation&quot;">​</a></h2><p>Just like Prop validator, you can add condition to validate the emit method also.</p><h2 id="emit-validation-example" tabindex="-1">Emit Validation Example <a class="header-anchor" href="#emit-validation-example" aria-label="Permalink to &quot;Emit Validation Example&quot;">​</a></h2><p><strong>FoodItem.vue</strong></p><pre><code>    emits: {
        &#39;toggle-favorite&#39;: function(id){
            if(id){
                return true;
            }
            else{
                console.warn(&#39;Id is missing&#39;);
                return false;
            }
        }
    }
    methods: {
        toggleFavorite() {
            this.$emit(&#39;toggle-favorite&#39;, this.foodName);
        }
    }
</code></pre><p>In this case, if the ID is not present in the &#39;toggleFunction()&#39; method then it will give warning in the console and value is not emitted as it returns false.</p>`,33)]))}const u=t(i,[["render",r]]);export{l as __pageData,u as default};
