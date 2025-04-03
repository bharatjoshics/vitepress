import{_ as s,c as a,o as p,ae as o,j as e,r as n}from"./chunks/framework.BmN8lrCQ.js";const v=JSON.parse('{"title":"v-slot Directive","description":"","frontmatter":{},"headers":[],"relativePath":"v-slot.md","filePath":"v-slot.md"}'),r={name:"v-slot.md"};function d(l,t,i,g,c,h){return p(),a("div",null,[t[0]||(t[0]=o(`<h1 id="v-slot-directive" tabindex="-1">v-slot Directive <a class="header-anchor" href="#v-slot-directive" aria-label="Permalink to &quot;v-slot Directive&quot;">​</a></h1><p>We need the v-slot directive to refer to named slots.</p><p>Named slots allow for more control over where the content is placed within the child component&#39;s template.</p><p>Named slots can be used to create more flexible and reusable components.</p><p><strong>App.vue</strong></p><pre><code>    &lt;template&gt;
    &lt;slot-one&gt;&#39;Hello!&#39;&lt;/slot-one&gt;
    &lt;/template&gt;

    &lt;script&gt;&lt;/script&gt;

    &lt;style&gt;
    #app {
        width: 300px;
    }
    &lt;/style&gt;
</code></pre><p><strong>slotOne.vue</strong></p><pre><code>    &lt;template&gt;
        &lt;div&gt;
            &lt;slot&gt;&lt;/slot&gt;
        &lt;/div&gt;
        &lt;div&gt;
            &lt;slot&gt;&lt;/slot&gt;
        &lt;/div&gt;
    &lt;/template&gt;

    &lt;script&gt;&lt;/script&gt;

    &lt;style scoped&gt;
        div {
            height: 30px;
            width: 50%;
            border: dotted black 1px;
            margin: 10px;
            padding: 10px;
            background-color: lightgreen;
            font-weight: bold;
        }
    &lt;/style&gt;
</code></pre><p>With two slots in a component, we can see that the content simply appears both places.</p><h2 id="v-slot-and-named-slots" tabindex="-1">v-slot and Named Slots <a class="header-anchor" href="#v-slot-and-named-slots" aria-label="Permalink to &quot;v-slot and Named Slots&quot;">​</a></h2><p>If we have more than one &lt; slot &gt; in a component, but we want to control in which &lt; slot &gt; the content should appear, we need to name the slots and use v-slot to send the content to the right place.</p><p><strong>slotOne.vue</strong></p><pre><code>    &lt;div&gt;
    &lt;slot name=&quot;topSlot&quot;&gt;&lt;/slot&gt;
    &lt;/div&gt;
    &lt;div&gt;
    &lt;slot name=&quot;bottomSlot&quot;&gt;&lt;/slot&gt;
    &lt;/div&gt;

To be able to differentiate the slots we give the slots different names.
And now we can use v-slot in App.vue to direct the content to the right slot.
</code></pre><p><strong>App.vue</strong></p><pre><code>    &lt;slot-comp v-slot:bottomSlot&gt;&#39;Hello!&#39;&lt;/slot-comp&gt;
</code></pre><h1 id="default-slots" tabindex="-1">Default Slots <a class="header-anchor" href="#default-slots" aria-label="Permalink to &quot;Default Slots&quot;">​</a></h1><p>If you have a &lt; slot &gt; with no name, that &lt; slot &gt; will be default for components marked with v-slot:default, or components that are not marked with v-slot.</p><p><strong>App.vue</strong></p><pre><code>    &lt;template&gt;
    &lt;slot-one v-slot:default&gt;&#39;Default slot&#39;&lt;/slot-one&gt;
    &lt;/template&gt;

    &lt;script&gt;&lt;/script&gt;

    &lt;style&gt;
    #app {
        width: 300px;
    }
    &lt;/style&gt;
</code></pre><p><strong>slotOne.vue</strong></p>`,20)),e("template",null,[e("div",null,[n(l.$slots,"default")]),e("div",null,[n(l.$slots,"bottomSlot")])]),t[1]||(t[1]=o(`<pre><code>    &lt;script&gt;&lt;/script&gt;

    &lt;style scoped&gt;
        div {
            height: 30px;
            width: 50%;
            border: dotted black 1px;
            margin: 10px;
            padding: 10px;
            background-color: lightgreen;
            font-weight: bold;
        }
    &lt;/style&gt;
</code></pre><h2 id="v-slot-in-template" tabindex="-1">v-slot in Template <a class="header-anchor" href="#v-slot-in-template" aria-label="Permalink to &quot;v-slot in Template&quot;">​</a></h2><p>As you have seen the v-slot directive can be used as an attribute in the component tag.</p><p>v-slot can also be used in a &lt; template &gt; tag inside &#39;template&#39; to direct larger parts of content to a certain &lt; slot &gt;.</p><p><strong>App.vue</strong></p><pre><code>    &lt;template&gt;
    &lt;slot-one&gt;
        &lt;template v-slot:bottomSlot&gt;
            &lt;h3&gt;This is Template Slot&lt;/h3&gt;
            &lt;h4&gt;To the bottom slot&lt;/h4&gt;
        &lt;/template&gt;
        &lt;p&gt;This goes into the default slot&lt;/p&gt;
    &lt;/slot-one&gt;
    &lt;/template&gt;

    &lt;script&gt;&lt;/script&gt;

    &lt;style&gt;
    #app {
        width: 300px;
    }
    &lt;/style&gt;
</code></pre><p><strong>slotOne.vue</strong></p><pre><code>    &lt;template&gt;
        &lt;h3&gt;Component&lt;/h3&gt;
        &lt;div&gt;
            &lt;slot&gt;&lt;/slot&gt;
        &lt;/div&gt;
        &lt;div&gt;
            &lt;slot name=&quot;bottomSlot&quot;&gt;&lt;/slot&gt;
        &lt;/div&gt;
    &lt;/template&gt;

    &lt;script&gt;&lt;/script&gt;

    &lt;style scoped&gt;
        div {
            width: 50%;
            border: dotted black 1px;
            margin: 10px;
            padding: 10px;
            background-color: lightgreen;
        }
    &lt;/style&gt;
</code></pre><p>We use the &lt; template &gt; tag to direct some content to a certain &lt; slot &gt; because the &lt; template &gt; tag is not rendered, it is just a placeholder for the content. You can see this by inspecting the built page: you will not find the template tag there.</p><h2 id="v-slot-shorthand" tabindex="-1">v-slot Shorthand <a class="header-anchor" href="#v-slot-shorthand" aria-label="Permalink to &quot;v-slot Shorthand&quot;">​</a></h2><p>The shorthand for v-slot: is #.</p><p>This means that -</p><pre><code>&lt;slot-comp v-slot:topSlot&gt;&#39;Hello!&#39;&lt;/slot-comp&gt;
</code></pre><p>Can be written as -</p><pre><code>&lt;slot-comp #topSlot&gt;&#39;Hello!&#39;&lt;/slot-comp&gt;
</code></pre>`,15))])}const u=s(r,[["render",d]]);export{v as __pageData,u as default};
