import{_ as r,c as n,o as i,j as e,a}from"./chunks/framework.BmN8lrCQ.js";const b=JSON.parse('{"title":"Key Attribute","description":"","frontmatter":{},"headers":[],"relativePath":"key-attribute.md","filePath":"key-attribute.md"}'),l={name:"key-attribute.md"};function s(o,t,d,m,u,p){return i(),n("div",null,t[0]||(t[0]=[e("h1",{id:"key-attribute",tabindex:"-1"},[a("Key Attribute "),e("a",{class:"header-anchor",href:"#key-attribute","aria-label":'Permalink to "Key Attribute"'},"​")],-1),e("p",null,"The key attribute is used with the v-for directive so that Vue can tell the elements apart properly.",-1),e("p",null,"Vue optimizes performance by reusing elements. So when elements are created from an array with v-for, if the key attribute is NOT used, element properties can be mixed when the array gets modified.",-1),e("h2",{id:"example",tabindex:"-1"},[a("Example "),e("a",{class:"header-anchor",href:"#example","aria-label":'Permalink to "Example"'},"​")],-1),e("pre",null,[e("code",null,`<template>
<ul>
    <li v-for="item in items" :key="item.id">
    (double curly braces start) item.name (double curly braces ends)
    </li>
</ul>
</template>

<script>
export default {
data() {
    return {
    items: [
        { id: 1, name: "Apple" },
        { id: 2, name: "Banana" },
        { id: 3, name: "Cherry" }
    ]
    };
}
};
<\/script>
`)],-1)]))}const h=r(l,[["render",s]]);export{b as __pageData,h as default};
