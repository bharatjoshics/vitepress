# Dynamic Props Value
Components can be reused with v-for to generate many elements of the same kind.

When generating elements with v-for from a component, it is also very helpful that props can be assigned dynamically based on values from an array.

We will now create component elements with v-for based on an array with food item names.

## Example
- main.js will remain same

**App.vue**

```vue
<template>
<h1>Food</h1>
<div id="wrapper">
    <food-item
    v-for="x in foods"
    v-bind:food-name="x"/>
</div>
</template>

<script>
export default {
    data() {
    return {
        foods: ['Apples','Pizza','Rice','Fish','Cake']
    };
    }
}
</script>
```

**FoodItem.vue**

```vue
<template>
<div>
    <h2>{{ foodName }}</h2>
</div>
</template>

<script>
export default {
    props: ['foodName']
}
</script>
```

Previously, we are calling props manually.

    <food-item food-name="Apples"/> (Manual Call)
    <food-item food-name="Pizza"/> (Manual Call)
    <food-item food-name="Rice"/> (Manual Call)

There are only three items so we can call them manually. But what if there are 1000 item, are we gonna call them manually by writing 1000 line? 

The answer is NO. So, here Dynamic Props plays the important role.

Now, by using 'v-for' we are calling them dynamically.

    <food-item
    v-for="x in foods"
    v-bind:food-name="x"/>