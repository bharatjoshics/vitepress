import{_ as r,c as o,o as i,j as t,a as n,t as l}from"./chunks/framework.BmN8lrCQ.js";const x=JSON.parse('{"title":"Interpolation","description":"","frontmatter":{},"headers":[],"relativePath":"interpolation.md","filePath":"interpolation.md"}'),p={name:"interpolation.md"};function s(a,e,d,m,c,u){return i(),o("div",null,[e[0]||(e[0]=t("h1",{id:"interpolation",tabindex:"-1"},[n("Interpolation "),t("a",{class:"header-anchor",href:"#interpolation","aria-label":'Permalink to "Interpolation"'},"​")],-1)),e[1]||(e[1]=t("p",null,"Interpolation in vue js is all about displaying dynamic data in your HTML template. It's as simple as wrapping expressions within double curly braces.",-1)),e[2]||(e[2]=t("h2",{id:"example",tabindex:"-1"},[n("Example "),t("a",{class:"header-anchor",href:"#example","aria-label":'Permalink to "Example"'},"​")],-1)),t("pre",null,[t("code",null,`<html>
<head>
    <title>Interpolation Example</title>
    <script src="https://unpkg.com/vue@3"><\/script>
</head>
<body>
    <h1 id="app"> `+l(a.msg)+`</h1>
</body>
</html>

<script>
    const { createApp } = Vue
    createApp({
    data() {
        return {
        msg: 'Hello Bharat!'
        };
    }
    }).mount('#app')
<\/script>
`,1)])])}const f=r(p,[["render",s]]);export{x as __pageData,f as default};
