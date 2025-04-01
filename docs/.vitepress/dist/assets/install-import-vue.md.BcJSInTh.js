import{_ as e,c as o,o as n,ae as l}from"./chunks/framework.BmN8lrCQ.js";const m=JSON.parse('{"title":"Install and Import VUE JS","description":"","frontmatter":{},"headers":[],"relativePath":"install-import-vue.md","filePath":"install-import-vue.md"}'),a={name:"install-import-vue.md"};function i(r,t,s,p,d,c){return n(),o("div",null,t[0]||(t[0]=[l(`<h1 id="install-and-import-vue-js" tabindex="-1">Install and Import VUE JS <a class="header-anchor" href="#install-and-import-vue-js" aria-label="Permalink to &quot;Install and Import VUE JS&quot;">​</a></h1><p>Let us now install and import the VUE JS to use in our application.</p><h2 id="important-instructions" tabindex="-1">Important Instructions <a class="header-anchor" href="#important-instructions" aria-label="Permalink to &quot;Important Instructions&quot;">​</a></h2><ul><li>NODE JS should be installed on your system.</li><li>It is recommened to have a IDE like VS Code, WebStorm, etc.</li></ul><h2 id="install-vue-js" tabindex="-1">Install VUE JS <a class="header-anchor" href="#install-vue-js" aria-label="Permalink to &quot;Install VUE JS&quot;">​</a></h2><p>To install the VUE JS follow-</p><ol><li><p>Open command prompt or terminal in IDE.</p></li><li><p>Make sure your terminal / command prompt is at correct path / directory where you want to create project.</p></li><li><p><code>npm create vue@latest</code> run the command.</p></li><li><p>This command will install and execute create-vue.</p></li><li><p>You will be presented with prompts for several optional features like this</p><pre><code>  ✔ Project name: … &lt;your-project-name&gt;
  ✔ Add TypeScript? … No / Yes
  ✔ Add JSX Support? … No / Yes
  ✔ Add Vue Router for Single Page Application development? … No / Yes
  ✔ Add Pinia for state management? … No / Yes
  ✔ Add Vitest for Unit testing? … No / Yes
  ✔ Add an End-to-End Testing Solution? … No / Cypress / Nightwatch / Playwright
  ✔ Add ESLint for code quality? … No / Yes
  ✔ Add Prettier for code formatting? … No / Yes
  ✔ Add Vue DevTools 7 extension for debugging? (experimental) … No / Yes

  Scaffolding project in ./&lt;your-project-name&gt;...
  Done.
</code></pre></li><li><p>If you are unsure about an option, simply choose No by hitting enter for now.</p></li><li><p>Once the project is created, change the directory to your project folder. <code>cd &lt;your-project-name&gt;</code></p></li><li><p>Install the npm dependencies. <code>npm install</code></p></li><li><p>You can now run your project by using the command <code>npm run dev</code></p></li></ol><h2 id="import-vue-js" tabindex="-1">Import VUE JS <a class="header-anchor" href="#import-vue-js" aria-label="Permalink to &quot;Import VUE JS&quot;">​</a></h2><p>We&#39;re now ready to import the VUE JS in our project. It is required to use the vue components and elements in our application.</p><pre><code>\`&lt;script src=&quot;https://unpkg.com/vue@3/dist/vue.global.js&quot;&gt;&lt;/script&gt;\`

Add the following line inside head element of your HTML page like this-

&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;My Notes&lt;/title&gt;
    &lt;style&gt;
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 20px;
        }
        h1 {
            color: #333;
        }
        .container {
            max-width: 800px;
            margin: auto;
        }
    &lt;/style&gt;

    &lt;script src=&quot;https://unpkg.com/vue@3/dist/vue.global.js&quot;&gt;&lt;/script&gt;

&lt;/head&gt;
&lt;body&gt;
    &lt;div class=&quot;container&quot;&gt;
        &lt;h1&gt;Welcome to My Notes&lt;/h1&gt;
        &lt;p&gt;This is a simple HTML template.&lt;/p&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>`,10)]))}const h=e(a,[["render",i]]);export{m as __pageData,h as default};
