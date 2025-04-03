import{_ as o,c as s,o as r,ae as e,j as a,t as i}from"./chunks/framework.BmN8lrCQ.js";const m=JSON.parse('{"title":"HTTP Requests","description":"","frontmatter":{},"headers":[],"relativePath":"http-requests.md","filePath":"http-requests.md"}'),u={name:"http-requests.md"};function h(n,t,l,d,p,c){return r(),s("div",null,[t[0]||(t[0]=e(`<h1 id="http-requests" tabindex="-1">HTTP Requests <a class="header-anchor" href="#http-requests" aria-label="Permalink to &quot;HTTP Requests&quot;">​</a></h1><p>The HTTP request is a part of the communication between a client and a server. The client sends an HTTP request to the server, which handles the request and returns an HTTP response.</p><p>HTTP stands for Hyper Text Transfer Protocol.</p><p>Our browser makes HTTP requests all the time in the background when we browse the Internet. When we access an Internet page, our browser (the client) sends several HTTP requests to make the server send us the page we want with all the relevant files and data as HTTP responses.</p><p>The most common kinds of HTTP requests are POST, GET, PUT, PATCH, and DELETE.</p><h2 id="fetch-method" tabindex="-1">&#39;fetch&#39; Method <a class="header-anchor" href="#fetch-method" aria-label="Permalink to &quot;&#39;fetch&#39; Method&quot;">​</a></h2><p>To get data from a server in Vue we can use the JavaScript fetch() method.</p><p>When we use the fetch() method in this tutorial we will not specify the HTTP request method, and that means that the default request method GET is what is used in the background.</p><p>The fetch() method expects a URL address as an argument so that it knows where to get the data from.</p><p>Here is a simple example that uses the fetch() method to send an HTTP GET request, and receive data as an HTTP response. The data requested in this case is the text inside the local file file.txt</p><p><strong>App.vue</strong></p><pre><code>    &lt;template&gt;
    &lt;div&gt;
        &lt;button @click=&quot;fetchData&quot;&gt;Fetch Data&lt;/button&gt;
        &lt;p v-if=&quot;data&quot;&gt;{ { data } }&lt;/p&gt;
    &lt;/div&gt;
    &lt;/template&gt;

    &lt;script&gt;
    export default {
    data() {
        return {
        data: null,
        };
    },
    methods: {
        fetchData() {
        const response = fetch(&quot;file.txt&quot;);
        this.data = response;
        }
    }
    };
    &lt;/script&gt;
</code></pre><p><strong>file.txt</strong></p><pre><code>    Hello World!
</code></pre><p>In the example above, we only get &quot;[object Promise]&quot; as a result, but that is not what we want.</p><p>We get this result because fetch() is a promised-based method that returns a promise object. The first return the fetch() method gives is therefore just an object which means that the HTTP request has been sent. This is the &quot;pending&quot; state.</p><p>When the fetch() method actually gets the data we want, the promise is fulfilled.</p><p>To wait for the response to be fulfilled, with the data we want, we need to use the await operator in front of the fetch() method like this -</p><pre><code>const response = await fetch(&quot;file.txt&quot;);
</code></pre><p>When the await operator is used inside a method, the method is required to be declared with the async operator like this -</p><pre><code>async fetchData() {
    const response = await fetch(&quot;file.txt&quot;);
    this.data = response;
}
</code></pre><p>The async operator tells the browser that the method is asynchronous, which means that it waits for something, and the browser can continue to do other tasks while it waits for the method to complete.</p><p>Now what we get is a &quot;Response&quot;, and no longer just a &quot;Promise&quot;, which means we are one step closer to get the actual text inside the file.txt file.</p><p>To get the text inside the file.txt file we need to use the text() method on the response. Because the text() method is a promise based method, we need to use the await operator in front of it.</p><p><strong>App.vue</strong></p><pre><code>    &lt;template&gt;
    &lt;div&gt;
        &lt;button @click=&quot;fetchData&quot;&gt;Fetch Data&lt;/button&gt;
        &lt;p v-if=&quot;data&quot;&gt;{ { data } }&lt;/p&gt;
    &lt;/div&gt;
    &lt;/template&gt;

    &lt;script&gt;
    export default {
    data() {
        return {
        data: null,
        };
    },
    methods: {
        async fetchData() {
        const response = await fetch(&quot;file.txt&quot;);
        this.data = await response.text();
        }
    }
    };
    &lt;/script&gt;
</code></pre><p><strong>Finally! We now have what we need to get the text from inside the file.txt file with the fetch() method</strong></p><h2 id="fetch-data-from-a-json-file" tabindex="-1">Fetch Data from a JSON File <a class="header-anchor" href="#fetch-data-from-a-json-file" aria-label="Permalink to &quot;Fetch Data from a JSON File&quot;">​</a></h2><p>JSON is a common file format that is easy to work with because data is stored as text so that it is easy to read for humans, and the JSON format is also widely supported by programming languages, so that we can, for example, specify what data to extract from a .json file.</p><p>To read data from a .json file, the only change we need to do to the example above is to fetch a .json file, and use the json() method instead of the text() method on the response.</p><p>The json() method reads the response from the HTTP request and returns a JavaScript object.</p><p>We use the &lt; pre &gt; tag here to show the JSON formatted text because it preserves spaces and line breaks so that it is easier to read.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p><strong>App.vue</strong></p>`,34)),a("pre",null,[a("code",null,`    <template>
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
`,1)]),t[1]||(t[1]=e(`<p><strong>bigLandMammals.json</strong></p><pre><code>    {
        &quot;results&quot;: [
            {
                &quot;name&quot;: &quot;African elephant&quot;,
                &quot;maxWeight&quot;: 10000,
                &quot;carnivore&quot;: false,
                &quot;countries&quot;: [
                    &quot;Namibia&quot;,
                    &quot;Angola&quot;,
                    &quot;Tanzania&quot;,
                    &quot;Kenya&quot;,
                    &quot;Mozambique&quot;,
                    &quot;Botswana&quot;,
                    &quot;South-Africa&quot;
                ]
            },
            {
                &quot;name&quot;: &quot;Siberian tiger&quot;,
                &quot;maxWeight&quot;: 300,
                &quot;carnivore&quot;: true,
                &quot;countries&quot;: [
                    &quot;Russia&quot;,
                    &quot;North Korea&quot;,
                    &quot;China&quot;
                ]
            },
            {
                &quot;name&quot;: &quot;American bison&quot;,
                &quot;maxWeight&quot;: 1200,
                &quot;carnivore&quot;: false,
                &quot;countries&quot;: [
                    &quot;USA&quot;,
                    &quot;Canada&quot;
                ]
            },
            {
                &quot;name&quot;: &quot;Polar bear&quot;,
                &quot;maxWeight&quot;: 1000,
                &quot;carnivore&quot;: true,
                &quot;countries&quot;: [
                    &quot;USA&quot;,
                    &quot;Canada&quot;,
                    &quot;Norway&quot;,
                    &quot;Russia&quot;,
                    &quot;Greenland&quot;
                ]
            },
            {
                &quot;name&quot;: &quot;Gaur&quot;,
                &quot;maxWeight&quot;: 1500,
                &quot;carnivore&quot;: false,
                &quot;countries&quot;: [
                    &quot;India&quot;,
                    &quot;Thailand&quot;,
                    &quot;Laos&quot;,
                    &quot;Cambodia&quot;,
                    &quot;Vietnam&quot;,
                    &quot;Myanmar&quot;,
                    &quot;Malaysia&quot;,
                    &quot;China&quot;,
                    &quot;Bhutan&quot;,
                    &quot;Nepal&quot;
                ]
            }
        ]
    }
</code></pre><p>Because the result of the json() method is a JavaScript object, we can modify the example above to show a random animal from the bigLandMammals.json file</p><p><strong>App.vue</strong></p><pre><code>    &lt;template&gt;
    &lt;p&gt;Try clicking the button more than once to see new animals picked randomly.&lt;/p&gt;
    &lt;button @click=&quot;fetchData&quot;&gt;Fetch Data&lt;/button&gt;
    &lt;div v-if=&quot;randomMammal&quot;&gt;
        &lt;h2&gt;{ { randomMammal.name } }&lt;/h2&gt;
        &lt;p&gt;Max weight: { { randomMammal.maxWeight } } kg&lt;/p&gt;
    &lt;/div&gt;
    &lt;/template&gt;

    &lt;script&gt;
    export default {
    data() {
        return {
        randomMammal: null
        };
    },
    methods: {
        async fetchData() {
        const response = await fetch(&quot;bigLandMammals.json&quot;);
        const data = await response.json();
        const randIndex = Math.floor(Math.random()*data.results.length);
        this.randomMammal = data.results[randIndex];
        }
    }
    };
    &lt;/script&gt;
</code></pre><p><strong>bigLandMammals.json</strong> - Remain same</p><h2 id="data-from-an-api" tabindex="-1">Data from an API <a class="header-anchor" href="#data-from-an-api" aria-label="Permalink to &quot;Data from an API&quot;">​</a></h2><p>API stands for Application Programming Interface. There are a lot of interesting free APIs we can connect with and use, to get weather data, stock exchange data, etc.</p><p>The response we get when we call an API with an HTTP request can contain all kinds of data, but often contains data in the JSON format.</p><h3 id="example-1" tabindex="-1">Example <a class="header-anchor" href="#example-1" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>A button can be clicked to get a random user from the random-data-api.com API.</p><p><strong>App.vue</strong></p><pre><code>    &lt;template&gt;
    &lt;h1&gt;Example&lt;/h1&gt;
    &lt;p&gt;Click the button to fetch data with an HTTP request.&lt;/p&gt;
    &lt;button @click=&quot;fetchData&quot;&gt;Fetch data&lt;/button&gt;
    &lt;pre v-if=&quot;data&quot;&gt;{ { data } }&lt;/pre&gt;
    &lt;/template&gt;

    &lt;script&gt;
    export default {
        data() {
        return {
            data: null,
        };
        },
        methods: {
        async fetchData() {      
            const response = await fetch(&quot;https://random-data-api.com/api/v2/users&quot;); 
            this.data = await response.json();
        }   
        }
    };
    &lt;/script&gt;
</code></pre><p>We can modify our previous example a little bit to include the random user in a more user friendly way.</p><p><strong>App.vue</strong></p><pre><code>    &lt;template&gt;
    &lt;h1&gt;Example&lt;/h1&gt;
    &lt;p&gt;Click the button to fetch data with an HTTP request.&lt;/p&gt;
    &lt;button @click=&quot;fetchData&quot;&gt;Fetch data&lt;/button&gt;
    &lt;div v-if=&quot;data&quot; id=&quot;dataDiv&quot;&gt;
        &lt;img :src=&quot;data.avatar&quot; alt=&quot;avatar&quot;&gt;
        &lt;pre&gt;{ { data.first_name + &quot; &quot; + data.last_name } }&lt;/pre&gt;
        &lt;p&gt;&quot;{ { data.employment.title } }&quot;&lt;/p&gt;
    &lt;/div&gt;
    &lt;/template&gt;

    &lt;script&gt;
    export default {
        data() {
        return {
            data: null,
        };
        },
        methods: {
        async fetchData() {      
            const response = await fetch(&quot;https://random-data-api.com/api/v2/users&quot;); 
            this.data = await response.json();
        },    
        }
    };
    &lt;/script&gt;

    &lt;style&gt;
    #dataDiv {
    width: 240px;
    background-color: aquamarine;
    border: solid black 1px;
    margin-top: 10px;
    padding: 10px;
    }
    #dataDiv &gt; img {
    width: 100%;
    }
    pre {
    font-size: larger;
    font-weight: bold;
    }
    &lt;/style&gt;
</code></pre><p>We show the random user name in a &lt; pre &gt; tag, along with the job title and image when the button is clicked.</p>`,17))])}const f=o(u,[["render",h]]);export{m as __pageData,f as default};
