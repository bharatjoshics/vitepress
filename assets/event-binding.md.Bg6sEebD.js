import{_ as n,c as e,o,ae as r}from"./chunks/framework.BmN8lrCQ.js";const h=JSON.parse('{"title":"Event Binding","description":"","frontmatter":{},"headers":[],"relativePath":"event-binding.md","filePath":"event-binding.md"}'),i={name:"event-binding.md"};function a(s,t,l,d,c,u){return o(),e("div",null,t[0]||(t[0]=[r(`<h1 id="event-binding" tabindex="-1">Event Binding <a class="header-anchor" href="#event-binding" aria-label="Permalink to &quot;Event Binding&quot;">​</a></h1><p>Now, you also need to react to user input, events and make dynamic pages. So, there comes event binding.</p><p>It is achieved using build-in directives just like &#39;v-html&#39;.</p><p>Some build-in directives are -</p><ul><li>v-text, v-html, v-show, v-if, v-else, etc</li></ul><p>You can learn about them on &quot;vuejs.org/api/built-in-directives.html&quot;</p><p>Let&#39;s understand this with an counter application.</p><h2 id="counter-application" tabindex="-1">Counter Application <a class="header-anchor" href="#counter-application" aria-label="Permalink to &quot;Counter Application&quot;">​</a></h2><h3 id="index-html" tabindex="-1">index.html <a class="header-anchor" href="#index-html" aria-label="Permalink to &quot;index.html&quot;">​</a></h3><pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot; /&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;
    &lt;title&gt;Vue Basics&lt;/title&gt;
    &lt;link
    href=&quot;https://fonts.googleapis.com/css2?family=Jost:wght@400;700&amp;display=swap&quot;
    rel=&quot;stylesheet&quot;
    /&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;styles.css&quot; /&gt;
    &lt;script src=&quot;https://unpkg.com/vue@3.4.9/dist/vue.global.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;app.js&quot; defer&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;header&gt;
    &lt;h1&gt;Vue Events&lt;/h1&gt;
    &lt;/header&gt;
    &lt;section id=&quot;events&quot;&gt;
    &lt;h2&gt;Events in Action&lt;/h2&gt;
    &lt;button @click=&quot;add()&quot;&gt;Add&lt;/button&gt;
    &lt;button @click=&quot;remove()&quot;&gt;Remove&lt;/button&gt;
    &lt;p&gt;Result: double quotes starts counter double quotes ends&lt;/p&gt;
    &lt;/section&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><h3 id="app-js" tabindex="-1">app.js <a class="header-anchor" href="#app-js" aria-label="Permalink to &quot;app.js&quot;">​</a></h3><pre><code>const app = Vue.createApp({
data() {
    return {
    counter: 0,
    };
},
methods: {
    add() {
    return this.counter+=1
    },
    remove() {
    if(this.counter&gt;0){
        return this.counter -= 1
    }
    }
}
});

app.mount(&#39;#events&#39;);
</code></pre><h3 id="style-css" tabindex="-1">style.css <a class="header-anchor" href="#style-css" aria-label="Permalink to &quot;style.css&quot;">​</a></h3><pre><code>* {
box-sizing: border-box;
}

html {
font-family: &#39;Jost&#39;, sans-serif;
}

body {
margin: 0;
}

header {
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
margin: 3rem auto;
border-radius: 10px;
padding: 1rem;
background-color: #4fc08d;
color: white;
text-align: center;
width: 90%;
max-width: 40rem;
}

#events {
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
margin: 3rem auto;
border-radius: 10px;
padding: 1rem;
text-align: center;
width: 90%;
max-width: 40rem;
}

#events h2 {
font-size: 2rem;
border-bottom: 4px solid #ccc;
color: #4fc08d;
margin: 0 0 1rem 0;
}

#events p {
font-size: 1.25rem;
font-weight: bold;
border: 1px solid #4fc08d;
background-color: #4fc08d;
color: white;
padding: 0.5rem;
border-radius: 25px;
}

#events input {
font: inherit;
border: 1px solid #ccc;
}

#events input:focus {
outline: none;
border-color: #1b995e;
background-color: #d7fdeb;
}

#events button {
font: inherit;
cursor: pointer;
border: 1px solid #ff0077;
background-color: #ff0077;
color: white;
padding: 0.05rem 1rem;
box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
border-radius: 20px;
margin: 0 1rem;
}

#events button:hover,
#events button:active {
background-color: #ec3169;
border-color: #ec3169;
box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</code></pre><p>You can download this counter application from here - <a href="/vitepress/public/Demo2.zip">Download ZIP</a>.</p><p>&#39;v-on&#39; takes the event to which you wanna listen, after the colon. In this case its &#39;click&#39;.</p><p>In the double quotes, you need to write the event i.e &#39;counter++&#39; or &#39;counter--&#39;.</p>`,17)]))}const g=n(i,[["render",a]]);export{h as __pageData,g as default};
