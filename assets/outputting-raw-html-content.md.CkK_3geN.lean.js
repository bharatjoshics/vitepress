import{_ as a,c as r,o,j as t,a as n}from"./chunks/framework.BmN8lrCQ.js";const d=JSON.parse('{"title":"Outputting Raw HTML content with v-html","description":"","frontmatter":{},"headers":[],"relativePath":"outputting-raw-html-content.md","filePath":"outputting-raw-html-content.md"}'),i={name:"outputting-raw-html-content.md"};function l(p,e,s,h,c,m){return o(),r("div",null,e[0]||(e[0]=[t("h1",{id:"outputting-raw-html-content-with-v-html",tabindex:"-1"},[n("Outputting Raw HTML content with v-html "),t("a",{class:"header-anchor",href:"#outputting-raw-html-content-with-v-html","aria-label":'Permalink to "Outputting Raw HTML content with v-html"'},"​")],-1),t("p",null,"Sometimes you want to render the data with HTML, to acheive this we use 'v-html' directive.",-1),t("h2",{id:"example",tabindex:"-1"},[n("Example "),t("a",{class:"header-anchor",href:"#example","aria-label":'Permalink to "Example"'},"​")],-1),t("pre",null,[t("code",null,`<html>
<head>
    <title>Interpolation</title>
    <script src="https://unpkg.com/vue@3"><\/script>
</head>
<body>
    <section id="app">
        <h1 v-html="message"></h1>
    </section>
</body>
</html>

<script>
    const { createApp } = Vue
    createApp({
    data() {
        return {
        message: '<p>Hello Bharat!<p>'
        };
    }
    }).mount('#app')
<\/script>
`)],-1),t("p",null,"Now, it will treat the 'msg' as a paragraph doesn't matter it's in 'h1' tag in the body part. It is now renderring as 'p'",-1)]))}const w=a(i,[["render",l]]);export{d as __pageData,w as default};
