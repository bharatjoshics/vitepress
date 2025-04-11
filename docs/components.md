# Components
Components are reusable and self-contained pieces of code that encapsulates a specific part of the user interface, so that we can make Vue applications that are scalable and easier to maintain.

It is just like an encapsulation concept of OOPS.

## Creating and Implemention of Component
Let's understand the concept with an sample/example program.

- First we create a component file in a 'components' folder.
- Then we need to register the component in main.js file.
- Now we can use the component in other components or files.

1. Create Component File - FoodItem.vue (Inside 'Components' folder)

```vue
<template>
    <div>
        <h2>{{ name }}</h2>
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'Apples',
            message: 'I like apples'
        }
    }
};
</script>
```
    
**Note -** It is not necessary to create the component in the 'components' folder only. But it's a good practice to create and save all the component files together seperatly.

2. Register the Component in main.js file. So, your main.js file will looks like this -

```js
import { createApp } from 'vue'

import App from './App.vue'
import FoodItem from './components/FoodItem.vue'

const app = createApp(App)

app.component('food-item', FoodItem)

app.mount('#app')
```
    
**Note -** Here, we registered the 'FoodItem' component as 'food-item'. It's up to you, you can give any name that you want to give.

3. Use the Component on App.vue. So, App.vue will look like this -

```vue
<template>
<h1>Food</h1>
<food-item/>
<food-item/>
<food-item/>
</template>

<script></script>

<style>
#app > div {
        border: dashed black 1px;
        display: inline-block;
        margin: 10px;
        padding: 10px;
        background-color: lightgreen;
    }
</style>
```
    
**Note -** Here, we are calling the 'FoodItem' component three times. It's up to you, you can all it as many time as you want or need. The component is called by using 'food-item', if in the main.js file "app.component('food-item', FoodItem)" is written as "app.component('abc', FoodItem)" which means the component is registerd as 'abc' so, we can call it in App.vue file like this "< abc / >".

Here, there are two ways to call the component - 
  1. < abc / >
  2. < abc > < /abc >

 Both are correct you can use whichever method you want to use.

## Download Files
You can download these file from here - [Download ZIP](/public/Components-Sample.zip)