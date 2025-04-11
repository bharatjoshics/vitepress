# Dynamic Components
Dynamic Components can be used to flip through pages within your page, like tabs in your browser, with the use of the 'is' attribute.

## The Component Tag and The 'is' Attribute
To make a dynamic component we use the < component > tag to represent the active component. The 'is' attribute is tied to a value with v-bind, and we change that value to the name of the component we want to have active.

### Example
**App.vue**

```vue
<template>
<h1>Dynamic Components</h1>
<p>App.vue switches between which component to show.</p>
<button @click="toggleValue = !toggleValue">Switch component</button>
<component :is="activeComp"></component>
</template>

<script>
export default {
    data () {
    return {
        toggleValue: true
    }
    },
    computed: {
    activeComp() {
        if(this.toggleValue) {
        return 'comp-one'
        }
        else {
        return 'comp-two'
        }
    }
    }
}
</script>

<style>
#app {
    width: 350px;
    margin: 10px;
}
#app > div {
    border: solid black 2px;
    padding: 10px;
    margin-top: 10px;
}
</style>
```

**CompOne.vue**

```vue
<template>
    <div>
        <h2>One!</h2>
        <p>This is component one.</p>
    </div>
</template>

<script></script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
```

**CompTwo.vue**

```vue
<template>
    <div>
        <h2>Two!</h2>
        <p>This is component two.</p>
    </div>
</template>

<script></script>

<style scoped>
    div {
        background-color: lightpink;
    }
</style>
```

## < keepAlive >
Run the below code -

**App.vue**

```vue
<template>
<h1>Dynamic Components</h1>
<p>App.vue switches between which component to show.</p>
<button @click="toggleValue = !toggleValue">Switch component</button>
<component :is="activeComp"></component>
</template>

<script>
export default {
    data () {
    return {
        toggleValue: true
    }
    },
    computed: {
    activeComp() {
        if(this.toggleValue) {
        return 'comp-one'
        }
        else {
        return 'comp-two'
        }
    }
    }
}
</script>

<style>
#app {
    width: 350px;
    margin: 10px;
}
#app > div {
    border: solid black 2px;
    padding: 10px;
    margin-top: 10px;
}
h2 {
    text-decoration: underline;
}
</style>
```

**CompOne.vue**

```vue
<template>
    <div>
        <img :src="imgSrc">
        <h2>Component One</h2>
        <p>Choose food.</p>
        <label>
            <input type="radio" name="rbgFood" 
            v-model="imgSrc" :value="'img_apple.svg'" /> 
            Apple
        </label>
        <label>
            <input type="radio" name="rbgFood" 
            v-model="imgSrc" :value="'img_cake.svg'" /> 
            Cake
        </label>
    </div>
</template>

<script>
export default {
    data () {
    return {
        imgSrc: 'img_question.svg'
    }
    }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
    img {
        float: right;
        height: 100px;
        margin-top: 20px;
    }
    label:hover {
        cursor: pointer;
    }
</style>
```

**Note** - You must have images in the path with same name that is used in the example.

**CompTwo.vue**

```vue
<template>
    <div>
        <h2>Component Two</h2>
        <input type="text" v-model="msg" placeholder="Write something...">
        <p>Your message:</p>
        <p><strong>{ { this.msg } }</strong></p>
    </div>
</template>

<script>
export default {
    data () {
    return {
        msg: ''
    }
    }
}
</script>

<style scoped>
    div {
        background-color: lightpink;
    }
    strong {
    background-color: yellow;
    padding: 5px;
    }
</style>
```

You will notice that changes you make in one component is forgotten when you switch back to it. That is because the component is unmounted and mounted again, reloading the component.

To keep the state, your previous inputs, when returning to a component we use the < KeepAlive > tag around the < component > tag.

**App.vue**

```vue
<template>
    <h1>Dynamic Components</h1>
    <p>App.vue switches between which component to show.</p>
    <button @click="toggleValue = !toggleValue">
        Switch component
    </button>
    <KeepAlive>
        <component :is="activeComp"></component>
    </KeepAlive>
</template>
```

Change the 'template' with this one.

The components now remember the user inputs.

## 'include' and 'exclude' Attributes
All components inside the < KeepAlive > tag will be kept alive by default.

But we can also define only some components to be kept alive by using 'include' or 'exclude' attributes on the < KeepAlive > tag.

If we use the 'include' or 'exclude' attributes on the < KeepAlive > tag we also need to give the components names with the 'name' option.

### 'include'
With < KeepAlive include="CompOne" > only the "CompOne" component will remember the user input.

**App.vue**

```vue
<template>
<h1>Dynamic Components</h1>
<p>App.vue switches between which component to show.</p>
<button @click="toggleValue = !toggleValue">Switch component</button>
<KeepAlive include="CompOne">
    <component :is="activeComp"></component>
</KeepAlive>
</template>
```

### 'exclude'
With < KeepAlive exclude="CompOne" > only the "CompOne" component will not remember the user input.

**App.vue**

```vue
<template>
<h1>Dynamic Components</h1>
<p>App.vue switches between which component to show.</p>
<button @click="toggleValue = !toggleValue">Switch component</button>
<KeepAlive exclude="CompOne">
    <component :is="activeComp"></component>
</KeepAlive>
</template>
```

## 'max' Attribute
We can use 'max' as an attribute to the < KeepAlive > tag to limit the number of components the browser needs to remember the state of.

**App.vue**

```vue
<template>
<h1>Dynamic Components</h1>
<label><input type="radio" name="rbgComp" v-model="compName" 
:value="'comp-one'"> One</label>
<label><input type="radio" name="rbgComp" v-model="compName" 
:value="'comp-two'"> Two</label>
<label><input type="radio" name="rbgComp" v-model="compName" 
:value="'comp-three'"> Three</label>
<KeepAlive :max="2">
    <component :is="activeComp"></component>
</KeepAlive>
</template>
```

With < KeepAlive :max="2" >, the browser will only remember the user input of the last two visited components.