# Event Arguments
You can also pass the argument in the event and use it in methods.

## Example
### HTML File
```html
<button v-on:click="add(10)">Add</button>
<button v-on:click="reduce(5)">Substract</button>
```

### JS File
```js
methods: {
    add(num){
        this.counter = this.counter + num;
    },
    reduce(num){
        this.counter = this.counter - num;
    }
}
```

Now, it will add the counter by 10 and substract it by 5.