import{_ as e,c as n,o,ae as l}from"./chunks/framework.BmN8lrCQ.js";const h=JSON.parse('{"title":"Teleport","description":"","frontmatter":{},"headers":[],"relativePath":"teleport.md","filePath":"teleport.md"}'),r={name:"teleport.md"};function p(a,t,i,d,g,s){return o(),n("div",null,t[0]||(t[0]=[l(`<h1 id="teleport" tabindex="-1">Teleport <a class="header-anchor" href="#teleport" aria-label="Permalink to &quot;Teleport&quot;">​</a></h1><p>The Vue &lt; Teleport &gt; tag is used to move content to a different place in the DOM structure.</p><h2 id="teleport-and-the-to-attribute" tabindex="-1">&lt; Teleport &gt; and The &#39;to&#39; Attribute <a class="header-anchor" href="#teleport-and-the-to-attribute" aria-label="Permalink to &quot;&lt; Teleport &gt; and The &#39;to&#39; Attribute&quot;">​</a></h2><p>To move some content to somewhere else in the DOM structure we use the Vue &lt; Teleport &gt; tag around the content and the &#39;to&#39; attribute to define where to move it. Like this -</p><pre><code>&lt;Teleport to=&quot;body&quot;&gt;
    &lt;p&gt;Hello!&lt;/p&gt;
&lt;/Teleport&gt;
</code></pre><p>The &#39;to&#39; attribute value is given as CSS notation, so if we want to send some content to the body tag like in the code above we simply write &lt; Teleport to=&quot;body&quot; &gt;.</p><p>We can see that the content is moved to the body tag by inspecting the page after it has loaded.</p><p><strong>App.vue</strong></p><pre><code>    &lt;template&gt;
    &lt;h1&gt;Teleport&lt;/h1&gt;
    &lt;comp-one&gt;&lt;/comp-one&gt;
    &lt;/template&gt;

    &lt;script&gt;&lt;/script&gt;

    &lt;style&gt;
    #app {
        width: 350px;
        margin: 10px;
    }
    #app &gt; div {
        border: solid black 2px;
        padding: 10px;
        margin-top: 10px;
        background-color: rgb(186, 228, 255);
    }
    h2 {
        text-decoration: underline;
    }
    &lt;/style&gt;
</code></pre><p><strong>CompOne.vue</strong></p><pre><code>    &lt;template&gt;
        &lt;div&gt;
            &lt;h2&gt;Component&lt;/h2&gt;
            &lt;p&gt;This is the inside of the component.&lt;/p&gt;
            &lt;Teleport to=&quot;body&quot;&gt;
            &lt;div id=&quot;redDiv&quot;&gt;Hello!&lt;/div&gt;
            &lt;/Teleport&gt;
        &lt;/div&gt;
    &lt;/template&gt;

    &lt;script&gt;&lt;/script&gt;

    &lt;style scoped&gt;
    #redDiv {
        background-color: lightcoral;
        margin: 10px;
        padding: 10px;
        display: inline-block;
    }
    &lt;/style&gt;
</code></pre><p>If we right-click our page and choose &#39;Inspect&#39;, we can see that the red &lt; div &gt; element is moved out of the component and to the end of the &lt; body &gt; tag.</p><h2 id="script-and-style-of-teleported-elements" tabindex="-1">Script and Style of Teleported Elements <a class="header-anchor" href="#script-and-style-of-teleported-elements" aria-label="Permalink to &quot;Script and Style of Teleported Elements&quot;">​</a></h2><p>Even though some content is moved out of a component with the &lt; Teleport &gt; tag, relevant code inside the component in the &lt; script &gt; and &lt; style &gt; tags still works for the moved content.</p><p><strong>App.vue</strong> - Remain same as above</p><p><strong>CompOne.vue</strong></p><pre><code>    &lt;template&gt;
    &lt;div&gt;
        &lt;h2&gt;Component&lt;/h2&gt;
        &lt;p&gt;This is the inside of the component.&lt;/p&gt;
        &lt;Teleport to=&quot;body&quot;&gt;
        &lt;div 
            id=&quot;redDiv&quot; 
            @click=&quot;toggleVal = !toggleVal&quot; 
            :style=&quot;{ backgroundColor: bgColor }&quot;
        &gt;
            Hello!&lt;br&gt;
            Click me!
        &lt;/div&gt;
        &lt;/Teleport&gt;
    &lt;/div&gt;
    &lt;/template&gt;

    &lt;script&gt;
    export default {
    data() {
        return {
        toggleVal: true
        }
    },
    computed: {
        bgColor() {
        if (this.toggleVal) {
            return &#39;lightpink&#39;
        }
        else {
            return &#39;lightgreen&#39;
        }
        }
    }
    }
    &lt;/script&gt;

    &lt;style scoped&gt;
    #redDiv {
    margin: 10px;
    padding: 10px;
    display: inline-block;
    }

    #redDiv:hover {
    cursor: pointer;
    }
    &lt;/style&gt;
</code></pre><p>Relevant code from the &lt; style &gt; and &lt; script &gt; tags still works for the teleported &lt; div &gt; tag even though it is no longer inside the component after compilation.</p>`,18)]))}const u=e(r,[["render",p]]);export{h as __pageData,u as default};
