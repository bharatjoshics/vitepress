# Props
Props is a configuration option in Vue.

With props we can pass data to the components via custom attributes to the component tag.

It is used to pass the data from parent to child components.

## Pass Data To a Component
With props we can now pass data down to our components to give them different content and make them look different.

## Receive Data Inside a Component
To receive the data sent via an attribute from root app we use this new 'props' configuration option. We list the attributes received so that our component *.vue file knows about them, and now we can use the props wherever we want in the same way as we use a data property.

## Example
Let's understand this by modifying previous example. But first let's clear one thing -

- App.vue (root component / Parent Component)
- FoodItem.vue (Child Component)


- main.js (Same)

```js
import { createApp } from 'vue'

import App from './App.vue'
import FoodItem from './components/FoodItem.vue'

const app = createApp(App)

app.component('food-item', FoodItem)

app.mount('#app')
```
    
- App.vue (Some Changes)

```vue
<template>
<h1>Food</h1>
<food-item food-name="Apples"/>
<food-item food-name="Pizza"/>
<food-item food-name="Rice"/>
</template>

<script></script>

<style>
#app > div {
    border: dashed black 1px;
    display: inline-block;
    width: 120px;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
}
</style>
```

In the main application file App.vue we create our own attribute 'food-name' to pass a prop with the < food-item/ > component tags.

We are passing "Apples", "Pizza", "Rice" one by one as custom attribute from Parent to Child component.


- FoodItem.vue (some changes)

```vue
<template>
    <div>
        <h2>{{ foodName }}</h2>
    </div>
</template>

<script>
export default {
    props: [
        'foodName'
    ]
};
</script>

<style></style>
```

To recieve the data from Parent component we are using 'props' method. Inside 'props' we define 'foodName' which is storing the data coming from 'food-name' attribute.

**Note -** Props attributes are written with a dash - to separate words (kebab-case) in the < template > tag, but kebab-case is not legal in JavaScript. So instead we need to write the attribute names as camel Case in JavaScript, and Vue understands this automatically!

## Boolean Props
We can achieve different functionality by passing props of different data types, and we are able to define rules for how attributes are given when components are created from App.vue.

Let's add a new prop 'isFavorite'. This should be a boolean prop with value either true or false so that we can use it directly with v-show to display a favorite stamp < img > tag if the food is considered a favorite.

To pass props with a data type different to String, we must write v-bind: in front of the attribute we want to pass.

This is how we pass the boolean 'isFavorite' prop from App.vue as an attribute 'is-favorite'.

**Template of App.vue looks like this**

```vue
<template>
<h1>Food</h1>
<div id="wrapper">
    <food-item
    food-name="Apples"
    v-bind:is-favorite="true"/>
    <food-item
    food-name="Pizza"
    v-bind:is-favorite="false"/>
    <food-item
    food-name="Rice"
    v-bind:is-favorite="false"/>
</div>
</template>
```
    
Here, we are binding the boolean props i.e 'is-favorite' using v-bind.


**FoodItem.vue looks like this**

```vue
<template>
<div>
    <h2>
    {{ foodName }}
    <img src="/img_quality.svg" v-show="isFavorite">
    </h2>
    <p>{{ foodDesc }}</p>
</div>
</template>

<script>
export default {
    props: ['foodName','isFavorite']
}
</script>

<style>
img {
    height: 1.5em;
    float: right;
}
</style>
```

Now, if the boolean prop i.e is-favorite is true then an image "img_quality.svg" is shown.

## Props Interface
In the example above, based on the code inside FoodItem.vue, we cannot know for sure that we receive the 'isFavorite' prop, and we cannot know for sure if it is a boolean value. To help us with this we can define the data-type of props we receive, we can set props to be required, and we can even make validation functions to validate the props we receive.

## Props as an Object
In FoodItem.vue, we comment out how we defined the props in an array to have it as reference, and instead define the props in an object. We can also define the data type of each prop in addition to the prop name, like this -

```vue
<script>
export default {
    // props: ['foodName', 'isFavorite']
    props: {
        foodName: String,
        isFavorite: Boolean
    }
}
</script>
```

Here, we are defining that 'foodName' must be String and 'isFavorite' must be Boolean.

If a component is created from the parent element and given a prop with the wrong data type, you get a warning in the console.

## Required Props
To tell Vue that a prop is required we need to define the prop as an object. Let's make the prop 'foodName' required, like this -

```vue
<script>
export default {
    // props: ['foodName', 'isFavorite']
    props: {
        foodName: {
            type: String,
            required: true
        },
        isFavorite: Boolean
    }
}
</script>
```

If a component is created from the parent element and a required prop is not defined, you get a warning in the console.

## Default Value
We can set a default value for a prop.

Let's create a default value for the 'isFavorite' prop in the 'FoodItem' component.

```vue
<script>
export default {
    props: {
    foodName: {
        type: String,
        required: true
    },
    isFavorite: {
        type: Boolean,
        required: false,
        default: false
    }
    }
}
</script>
```

## Props Validator Function
We can also define a validator function that decides if the prop value is valid or not.

Such validator functions must return either true or false. When the validator returns false, it means the prop value is invalid.

Let's add a new prop 'foodDesc' (food description) and it should be in a certain length, between 20 and 50 characters. We can add a validator function to make sure the food description provided has a valid length.

```vue
<script>
export default {
    props: {
    foodName: {
        type: String,
        required: true
    },
    foodDesc: {
        type: String,
        required: false,
        default: 'This is the default description.',
        validator: function(value) {
        if( 20<value.length && value.length<50 ) {
            return true;
        }
        else {
            return false;
        }
        }
    },
    isFavorite: {
        type: Boolean,
        required: false,
        default: false
    }
    }
}
</script>
```

## Modify Props
When a component is created in the parent element we are not allowed to change the value of the prop received in the child element. So inside FoodItem.vue we cannot change the value of the 'isFavorite' prop we get from App.vue. The prop is read-only from the parent.

But let's say we want the user to be able to change what food is considered favorite by clicking a button. Now there is a need to change the 'isFavorite' prop, but we cannot do it because it is read only.

    methods: {
    toggleFavorite() { 
        this.isFavorite = !this.isFavorite;
    }
    }

   **Note -** We are not allowed to change 'isFavorite'. This will generate an error.

To get around this we can use the prop to initialize a new data value 'foodIsFavorite', inside FoodItem.vue, like this -

        data() {
            return { 
                foodIsFavorite: this.isFavorite
            }
        }

And now we can add a method so the user can toggle this new data value -

        methods: {
            toggleFavorite() { 
                this.foodIsFavorite = !this.foodIsFavorite;
            }
        }

We must also add the toggle button to each food item, and change v-show in the <img> tag to depend on the new data property 'foodIsFavorite'.

## Modify Props Example
The main.js and App.js file will remian same. The FoodItem.vue will now look like this -

```vue
<template>
<div>
    <h2>
    {{ foodName }}
    <img src="/img_quality.svg" v-show="foodIsFavorite">
    </h2>
    <p>{{ foodDesc }}</p>
    <button v-on:click="toggleFavorite">Favorite</button>
</div>
</template>

<script>
export default {
props: ['foodName','foodDesc','isFavorite'],
data() {
    return {
    foodIsFavorite: this.isFavorite
    }
},
methods: {
    toggleFavorite() {
    this.foodIsFavorite = !this.foodIsFavorite;
    }
}
};
</script>

<style>
img {
    height: 1.5em;
    float: right;
}
</style>
```