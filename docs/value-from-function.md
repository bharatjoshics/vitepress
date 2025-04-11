# Return Value from a Function
Instead of using a comparison check with the v-if directive, we can use the 'true' or 'false' return value from a function.

## Example
If a certain text contains the word 'pizza', create a < p > tag with an appropriate message. The 'includes()' method is a native JavaScript method that checks if a text contain certain words.

```html
<!DOCTYPE html>
<html>
<head>
<title>value from function example</title>
<style>
    #app {
    border: dashed black 1px;
    width: 160px;
    padding: 0 20px;
    font-weight: bold;
    background-color: lightgreen;
    }
</style>
</head>
<body>
<div id="app">
<p v-if="text.includes('pizza')">The text includes the word 'pizza'</p>
<p v-else>The word 'pizza' is not found in the text</p>
</div>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
const app = Vue.createApp({
data() {
    return {
    text: 'I like pizza, burger and french-fries.'
    }
}
})
app.mount('#app')
</script>

</body>
</html>
```