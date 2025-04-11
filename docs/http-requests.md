# HTTP Requests
The HTTP request is a part of the communication between a client and a server. The client sends an HTTP request to the server, which handles the request and returns an HTTP response.

HTTP stands for Hyper Text Transfer Protocol.

Our browser makes HTTP requests all the time in the background when we browse the Internet. When we access an Internet page, our browser (the client) sends several HTTP requests to make the server send us the page we want with all the relevant files and data as HTTP responses.

The most common kinds of HTTP requests are POST, GET, PUT, PATCH, and DELETE.

## 'fetch' Method
To get data from a server in Vue we can use the JavaScript fetch() method.

When we use the fetch() method in this tutorial we will not specify the HTTP request method, and that means that the default request method GET is what is used in the background.

The fetch() method expects a URL address as an argument so that it knows where to get the data from.

Here is a simple example that uses the fetch() method to send an HTTP GET request, and receive data as an HTTP response. The data requested in this case is the text inside the local file file.txt

**App.vue**

```vue
<template>
<div>
    <button @click="fetchData">Fetch Data</button>
    <p v-if="data">{{ data }}</p>
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
    fetchData() {
    const response = fetch("file.txt");
    this.data = response;
    }
}
};
</script>
```

**file.txt**

     Hello World!

In the example above, we only get "[object Promise]" as a result, but that is not what we want.

We get this result because fetch() is a promised-based method that returns a promise object. The first return the fetch() method gives is therefore just an object which means that the HTTP request has been sent. This is the "pending" state.

When the fetch() method actually gets the data we want, the promise is fulfilled.

To wait for the response to be fulfilled, with the data we want, we need to use the await operator in front of the fetch() method like this -

    const response = await fetch("file.txt");

When the await operator is used inside a method, the method is required to be declared with the async operator like this -

    async fetchData() {
        const response = await fetch("file.txt");
        this.data = response;
    }

The async operator tells the browser that the method is asynchronous, which means that it waits for something, and the browser can continue to do other tasks while it waits for the method to complete.

Now what we get is a "Response", and no longer just a "Promise", which means we are one step closer to get the actual text inside the file.txt file.

To get the text inside the file.txt file we need to use the text() method on the response. Because the text() method is a promise based method, we need to use the await operator in front of it.

**App.vue**

```vue
<template>
<div>
    <button @click="fetchData">Fetch Data</button>
    <p v-if="data">{ { data } }</p>
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
    const response = await fetch("file.txt");
    this.data = await response.text();
    }
}
};
</script>
```

**Finally! We now have what we need to get the text from inside the file.txt file with the fetch() method**

## Fetch Data from a JSON File
JSON is a common file format that is easy to work with because data is stored as text so that it is easy to read for humans, and the JSON format is also widely supported by programming languages, so that we can, for example, specify what data to extract from a .json file.

To read data from a .json file, the only change we need to do to the example above is to fetch a .json file, and use the json() method instead of the text() method on the response.

The json() method reads the response from the HTTP request and returns a JavaScript object.

We use the < pre > tag here to show the JSON formatted text because it preserves spaces and line breaks so that it is easier to read.

### Example

**App.vue**

```vue
<template>
<div>
    <button @click="fetchData">Fetch Data</button>
    <pre v-if="data">{{ data }}</pre>
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
</script>
```

**bigLandMammals.json**

```json
{
    "results": [
        {
            "name": "African elephant",
            "maxWeight": 10000,
            "carnivore": false,
            "countries": [
                "Namibia",
                "Angola",
                "Tanzania",
                "Kenya",
                "Mozambique",
                "Botswana",
                "South-Africa"
            ]
        },
        {
            "name": "Siberian tiger",
            "maxWeight": 300,
            "carnivore": true,
            "countries": [
                "Russia",
                "North Korea",
                "China"
            ]
        },
        {
            "name": "American bison",
            "maxWeight": 1200,
            "carnivore": false,
            "countries": [
                "USA",
                "Canada"
            ]
        },
        {
            "name": "Polar bear",
            "maxWeight": 1000,
            "carnivore": true,
            "countries": [
                "USA",
                "Canada",
                "Norway",
                "Russia",
                "Greenland"
            ]
        },
        {
            "name": "Gaur",
            "maxWeight": 1500,
            "carnivore": false,
            "countries": [
                "India",
                "Thailand",
                "Laos",
                "Cambodia",
                "Vietnam",
                "Myanmar",
                "Malaysia",
                "China",
                "Bhutan",
                "Nepal"
            ]
        }
    ]
}
```

Because the result of the json() method is a JavaScript object, we can modify the example above to show a random animal from the bigLandMammals.json file


**App.vue**

```vue
<template>
<p>Try clicking the button more than once to see new animals picked randomly.</p>
<button @click="fetchData">Fetch Data</button>
<div v-if="randomMammal">
    <h2>{{ randomMammal.name }}</h2>
    <p>Max weight: {{ randomMammal.maxWeight }} kg</p>
</div>
</template>

<script>
export default {
data() {
    return {
    randomMammal: null
    };
},
methods: {
    async fetchData() {
    const response = await fetch("bigLandMammals.json");
    const data = await response.json();
    const randIndex = Math.floor(Math.random()*data.results.length);
    this.randomMammal = data.results[randIndex];
    }
}
};
</script>
```

**bigLandMammals.json** - Remain same

## Data from an API
API stands for Application Programming Interface. There are a lot of interesting free APIs we can connect with and use, to get weather data, stock exchange data, etc.

The response we get when we call an API with an HTTP request can contain all kinds of data, but often contains data in the JSON format.

### Example
A button can be clicked to get a random user from the random-data-api.com API.

**App.vue**

```vue
<template>
<h1>Example</h1>
<p>Click the button to fetch data with an HTTP request.</p>
<button @click="fetchData">Fetch data</button>
<pre v-if="data">{{ data }}</pre>
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
        const response = await fetch("https://random-data-api.com/api/v2/users"); 
        this.data = await response.json();
    }   
    }
};
</script>
```

We can modify our previous example a little bit to include the random user in a more user friendly way.

**App.vue**

```vue
<template>
<h1>Example</h1>
<p>Click the button to fetch data with an HTTP request.</p>
<button @click="fetchData">Fetch data</button>
<div v-if="data" id="dataDiv">
    <img :src="data.avatar" alt="avatar">
    <pre>{ { data.first_name + " " + data.last_name } }</pre>
    <p>"{ { data.employment.title } }"</p>
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
        const response = await fetch("https://random-data-api.com/api/v2/users"); 
        this.data = await response.json();
    },    
    }
};
</script>

<style>
#dataDiv {
width: 240px;
background-color: aquamarine;
border: solid black 1px;
margin-top: 10px;
padding: 10px;
}
#dataDiv > img {
width: 100%;
}
pre {
font-size: larger;
font-weight: bold;
}
</style>
```
        
We show the random user name in a < pre > tag, along with the job title and image when the button is clicked.