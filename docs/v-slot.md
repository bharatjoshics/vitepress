# v-slot Directive
We need the v-slot directive to refer to named slots.

Named slots allow for more control over where the content is placed within the child component's template.

Named slots can be used to create more flexible and reusable components.

**App.vue**

```vue
<template>
<slot-one>'Hello!'</slot-one>
</template>

<script></script>

<style>
#app {
    width: 300px;
}
</style>
```

**slotOne.vue**

```vue
<template>
    <div>
        <slot></slot>
    </div>
    <div>
        <slot></slot>
    </div>
</template>

<script></script>

<style scoped>
    div {
        height: 30px;
        width: 50%;
        border: dotted black 1px;
        margin: 10px;
        padding: 10px;
        background-color: lightgreen;
        font-weight: bold;
    }
</style>
```

With two slots in a component, we can see that the content simply appears both places.

## v-slot and Named Slots
If we have more than one < slot > in a component, but we want to control in which < slot > the content should appear, we need to name the slots and use v-slot to send the content to the right place.

**slotOne.vue**

```vue
<div>
<slot name="topSlot"></slot>
</div>
<div>
<slot name="bottomSlot"></slot>
</div>
```
    
To be able to differentiate the slots we give the slots different names.
And now we can use v-slot in App.vue to direct the content to the right slot.

**App.vue**
```vue
<slot-comp v-slot:bottomSlot>'Hello!'</slot-comp>
```


# Default Slots
If you have a < slot > with no name, that < slot > will be default for components marked with v-slot:default, or components that are not marked with v-slot.

**App.vue**

```vue
<template>
<slot-one v-slot:default>'Default slot'</slot-one>
</template>

<script></script>

<style>
#app {
    width: 300px;
}
</style>
```

**slotOne.vue**

```vue
<template>
    <div>
        <slot></slot>
    </div>
    <div>
        <slot name="bottomSlot"></slot>
    </div>
</template>

<script></script>

<style scoped>
    div {
        height: 30px;
        width: 50%;
        border: dotted black 1px;
        margin: 10px;
        padding: 10px;
        background-color: lightgreen;
        font-weight: bold;
    }
</style>
```

## v-slot in Template
As you have seen the v-slot directive can be used as an attribute in the component tag.

v-slot can also be used in a < template > tag inside 'template' to direct larger parts of content to a certain < slot >.


**App.vue**

```vue
<template>
<slot-one>
    <template v-slot:bottomSlot>
        <h3>This is Template Slot</h3>
        <h4>To the bottom slot</h4>
    </template>
    <p>This goes into the default slot</p>
</slot-one>
</template>

<script></script>

<style>
#app {
    width: 300px;
}
</style>
```

**slotOne.vue**

```vue
<template>
    <h3>Component</h3>
    <div>
        <slot></slot>
    </div>
    <div>
        <slot name="bottomSlot"></slot>
    </div>
</template>

<script></script>

<style scoped>
    div {
        width: 50%;
        border: dotted black 1px;
        margin: 10px;
        padding: 10px;
        background-color: lightgreen;
    }
</style>
```

We use the < template > tag to direct some content to a certain < slot > because the < template > tag is not rendered, it is just a placeholder for the content. You can see this by inspecting the built page: you will not find the template tag there.

## v-slot Shorthand 
The shorthand for v-slot: is #.

This means that -

    <slot-comp v-slot:topSlot>'Hello!'</slot-comp>

Can be written as -
    
    <slot-comp #topSlot>'Hello!'</slot-comp>