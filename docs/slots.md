# Slots
Slots are a powerful feature in Vue that allow for more flexible and reusable components.

We use slots in Vue to send content from the parent into the < template > of a child component.

Till now, we have just used components inside < template > as self-closing tags like this -

    <template>
    <slot-one />
    </template>

Instead, we can use opening and closing tags, and put some content inside, like for example a text -

    <template>
    <slot-one>Hello World!</slot-one>
    </template>

But to receive 'Hello World!' inside the component and display it on our page, we need to use the < slot > tag inside the 'SlotOne'component.

**SlotOne.vue**

```vue
<template>
<div>  
    <p>SlotComp.vue</p>
    <slot></slot>
</div>
</template>
```
    
The < slot > tag acts as a placeholder for the content, so that after the application is built the < slot > will be replaced by the content sent to it.

## Key Points

- It is like we are creating a template without any data. 

- The data is called between the opening and closing tag of the 'component' calling like this -
    
        <template>
        <slot-one>Hello World!</slot-one>
        </template>

- It could be useful for creating cards. We can create card design in a component and then use it by providing the data while calling it. Let's understand this more.

## Slots as Cards
Slots can also be used to wrap around larger chunks of dynamic html content to get a card-like appearance.

Earlier we have sent data as props to create content inside components, now we can just send the HTML content directly inside the < slot > tag as it is.

## Example

**App.vue**

```vue
<template>
<div id="wrapper">
    <slot-one>
    </slot-one>
</div>
</template>

<script>
export default {
    data() {
    return {}
    }
}
</script>

<style>
#wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
#wrapper > div {
    background-color: lightgreen;
}
footer > div {
    background-color: lightpink;
}
#wrapper img {
    display: block; 
    margin: 20% auto 0; 
    width: 60%;
}
h3, h4 {
    text-align: center;
}
</style>
```
    
**slotOne.vue**

```vue
<template>
    <div>
        <slot></slot>
    </div>
</template>

<script></script>

<style scoped>
    div {
        background-color: lightgreen;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        flex-basis: 150px;
        border-radius: 10px;
        border: solid black 2px;
        margin: 10px;
        padding: 20px 10px 0 10px;
    }
    div:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
</style>
```
    
This will create empty card without any Data. If we pass data between component calling then it will be written inside the card.

    <slot-one>Bharat</slot-one>
    
Now, 'Bharat' will be written inside card.

## Array Example
If we have array -

```vue
<script>
export default {
    data() {
    return {
        foods: [
        { name: 'Apple', desc: 'Apples are a type of fruit that grow on trees.'},
        { name: 'Pizza', desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.'},
        { name: 'Rice', desc: 'Rice is a type of grain that people like to eat.'},
        { name: 'Fish', desc: 'Fish is an animal that lives in water.'},
        { name: 'Cake', desc: 'Cake is something sweet that tates good but is not consodered healthy.'}
    ]
    }
    }
}
</script>
```

Then we can use 'v-for' to iterate it -

```vue
<template>
<div id="wrapper">
    <slot-one v-for="x in foods">
    <h4>{{x.name}}</h4>
    <p>{{x.desc}}</p>
    </slot-one>
</div>
</template>
```

This will create multiple cards according to number of data and place data inside the cards.

## Reusability
Components that produce a card-like frame around content can be reused to create different elements, but with the same card-like frame around.

In this example we use the same component as for the food items to create a footer -

```vue
<template>
<div id="wrapper">
    <slot-comp v-for="x in foods">
    <h4>{{x.name}}</h4>
    <p>{{x.desc}}</p>
    </slot-comp>
</div>

<footer>
    <slot-one>
    <h4>Footer</h4>
    </slot-one>
</footer>
</template>
```

Here, the card is reuable for 'Footer' aslo.

## Fallback Content
If a component is created without content we can have fallback content in the < slot >.

**App.vue**

```vue
<template>
<slot-two>
    <!-- Empty -->
</slot-two>
<slot-two>
    <h4>This content is provided from App.vue</h4>
</slot-two>
</template>

<script></script>

<style>
#app div {
    width: 150px;
}
h4 {
    text-align: center;
}
</style>
```

**slotTwo.vue**

```vue
<template>
    <div>
        <slot>
            <h4>This is fallback content</h4>
        </slot>
    </div>
</template>

<script></script>

<style scoped>
    div {
        background-color: lightgreen;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        flex-basis: 150px;
        border-radius: 10px;
        border: solid black 2px;
        margin: 10px;
        padding: 0px 10px 0 10px;
    }
    div:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    h4 {
        color: rgb(159, 0, 0);
    }
</style>
```

The first component in this application has no content provided, so the fallback content is rendered.

   For this -

        <slot-two>
            <!-- Empty -->
        </slot-two>
    
   The output will be - **This is fallback content**

   For this -

        <slot-two>
            <h4>This content is provided from App.vue</h4>
        </slot-two>
    
   The output will be - **This content is provided from App.vue**