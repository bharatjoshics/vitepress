# Key Attribute
The key attribute is used with the v-for directive so that Vue can tell the elements apart properly.

Vue optimizes performance by reusing elements. So when elements are created from an array with v-for, if the key attribute is NOT used, element properties can be mixed when the array gets modified.

## Example

```js
<template>
<ul>
    <li v-for="item in items" :key="item.id">
    {{item.name}}
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
</script>
```