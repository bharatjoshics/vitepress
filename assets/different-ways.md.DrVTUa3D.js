import{_ as n,c as t,o as a,ae as o}from"./chunks/framework.BmN8lrCQ.js";const u=JSON.parse('{"title":"Different Ways of Utilizing / Using Vue","description":"","frontmatter":{},"headers":[],"relativePath":"different-ways.md","filePath":"different-ways.md"}'),r={name:"different-ways.md"};function i(s,e,d,c,l,f){return a(),t("div",null,e[0]||(e[0]=[o(`<h1 id="different-ways-of-utilizing-using-vue" tabindex="-1">Different Ways of Utilizing / Using Vue <a class="header-anchor" href="#different-ways-of-utilizing-using-vue" aria-label="Permalink to &quot;Different Ways of Utilizing / Using Vue&quot;">​</a></h1><h2 id="there-are-two-ways" tabindex="-1">There are two ways <a class="header-anchor" href="#there-are-two-ways" aria-label="Permalink to &quot;There are two ways&quot;">​</a></h2><p>(i)<strong>Vue can be used to control parts of HTML pages or entire pages.</strong> &quot;Widget&quot; approach on a multi-page-application. Some pages are still rendered on and served by a backend server.</p><pre><code>        ----------------------------------------------
        |                                             |
        |                Heading                      |
        |                                             |
        -----------------------------------------------
        ------------------  ---------------------------
        |                |  |                         |
        |                |  |        Section-1        |
        |                |   ---------------------------
        |      (VUE)     |   ---------------------------
        |   Section-A    |  |          (VUE)          |
        |                |  |        Section-2        |
        |                |   ---------------------------
        |                |   ---------------------------
        |                |  |                         |
        |                |  |        Section-3        |
        ------------------  ---------------------------
    
    Here only &quot;Section-A&quot; and &quot;Section-2&quot; is controlled by VUE JS.
    Heading and other sections are still rendered by a backend server.
</code></pre><p>(ii)<strong>Vue can also be used to control the entire frontend of a web application</strong> &quot;Single-Page-Application&quot; (SPA) approach. Server only sends one HTML page, thereafter Vue takes over and control the UI.</p><pre><code>        |---------------------------------------------------| 
        |                       (VUE)                       |
        |  |---------------------------------------------|  |
        |  |                                             |  |
        |  |               Heading                       |  |
        |  |                                             |  |
        |  -----------------------------------------------  | 
        |  ------------------  ---------------------------  |
        |  |                |  |                         |  |
        |  |                |  |        Section-1        |  |
        |  |                |   --------------------------  |
        |  |      (VUE)     |   --------------------------  |
        |  |   Section-A    |  |          (VUE)          |  |
        |  |                |  |        Section-2        |  |
        |  |                |   --------------------------  |
        |  |                |   --------------------------  |
        |  |                |  |                         |  |
        |  |                |  |        Section-3        |  |
        |  ------------------  ---------------------------  |
        |                                                   |
        |---------------------------------------------------|

    Here the whole application is controlled by VUE JS.
</code></pre>`,6)]))}const g=n(r,[["render",i]]);export{u as __pageData,g as default};
