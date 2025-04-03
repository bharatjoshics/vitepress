import{_ as o,c as s,o as r,ae as e,j as a,t as i}from"./chunks/framework.BmN8lrCQ.js";const m=JSON.parse('{"title":"HTTP Requests","description":"","frontmatter":{},"headers":[],"relativePath":"http-requests.md","filePath":"http-requests.md"}'),u={name:"http-requests.md"};function h(n,t,l,d,p,c){return r(),s("div",null,[t[0]||(t[0]=e("",34)),a("pre",null,[a("code",null,`    <template>
    <div>
        <button @click="fetchData">Fetch Data</button>
        <pre v-if="data">`+i(n.data)+`</pre>
    </div>
    </template>

    <script>
    export default {
    data() {
        return {
        data: null,
        };
    },
    methods: {
        async fetchData() {
        const response = await fetch("bigLandMammals.json");
        this.data = await response.json();
        }
    }
    };
    <\/script>
`,1)]),t[1]||(t[1]=e("",17))])}const f=o(u,[["render",h]]);export{m as __pageData,f as default};
