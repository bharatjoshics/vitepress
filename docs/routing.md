# Routing
Routing in Vue is used to navigate the Vue application, and it happens on the client side (in the browser) without full page reload, which results in a faster user experience.

With routing we can use the URL address to direct someone to a specific place in our Vue application.

## Navigate Using a Dynamic Component
To understand routing in Vue, let's first look at an application that uses a dynamic component to switch between two components.

We can switch between the components using buttons -

**App.vue**

```vue
<template>
<p>Choose what part of this page you want to see:</p>
<button @click="activeComp = 'animal-collection'">Animals</button>
<button @click="activeComp = 'food-items'">Food</button><br>
<div>
    <component :is="activeComp"></component>
</div>
</template>

<script>
export default {
data() {
    return {
        activeComp: ''
    }
    }
}
</script>

<style scoped>
button {
    padding: 5px;
    margin: 10px;
}
div {
    border: dashed black 1px;
    padding: 20px;
    margin: 10px;
    display: inline-block;
}
</style>
```

**AnimalCollection.vue**

```vue
<template>
    <h1>Animals!</h1>
    <p>I want to learn about at least one new animal every year.</p>
</template> 
```

**FoodItems.vue**

```vue
<template>
    <h1>Food!</h1>
    <p>I like most types of food.</p>
</template>
```


## From Dynamic Component to Routing
We build SPAs (Single Page Applications) with Vue, which means that our application only contains one *.html file. And that means we cannot direct people to other *.html files to show them different content on our page.

In the example above, we can navigate between different content on the page, but we cannot give someone else an address to the page so that they come directly to the part about food, but with routing we can do that.

With routing set up appropriately, if you open the Vue application with an extension to the URL address, like "/food-items" for example, you will come directly to the part with the food content.

## Install The Vue Router Library
To use routing in Vue on your machine, install the Vue Router library in your project folder using the terminal -

   **npm install vue-router@4**

### Update main.js
To use routing we must create a router, and we do that in the main.js file.

```js
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import FoodItems from './components/FoodItems.vue'
import AnimalCollection from './components/AnimalCollection.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/animals', component: AnimalCollection },
        { path: '/food', component: FoodItems },
    ]
});

const app = createApp(App)

app.use(router);
app.mount('#app')
```

## Use The < router-view > Component
To change the content on our page with the new router, we need to remove the dynamic component in the previous example and use the < router-view > component instead -

**App.vue**

```vue
<template>
<p>Choose what part of this page you want to see:</p>
<button @click="activeComp = 'animal-collection'">Animals</button>
<button @click="activeComp = 'food-items'">Food</button><br>
<div>
    <router-view></router-view>
</div>
</template>
```

Now, you can add '/food' to the URL address of your project page in the browser, and the page should update to show the food content.


## Use The < router-link > Component
We can replace the buttons with the < router-link > component because that works better with the router.

```vue
<template>
<p>Choose what part of this page you want to see:</p>
<router-link to="/animals">Animals</router-link>
<router-link to="/food">Food</router-link><br>
<div>
    <router-view></router-view>
</div>
</template>
```