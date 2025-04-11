# v-else-if Directive
v-else-if must be used after v-if or another v-else-if. If the condition inside v-else-if is 'true', v-else-if or v-else that comes after are not considered.

## Example
Use a comparison check to decide whether to write "In stock" or "Very few left!" depending on the number of socks in storage.

```html
<!DOCTYPE html>
<html>
<head>
<title>v-else-if Example</title>
<style>
    #app {
    border: dashed black 1px;
    width: 130px;
    padding-left: 20px;
    font-weight: bold;
    background-color: lightgreen;
    }
</style>
</head>
<body>
<div id="app">
<p v-if="socks > 3">
    In stock
</p>
<p v-else-if="socks > 0">
    Very few left!
</p>
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
const app = Vue.createApp({
data() {
    return {
    socks: 3
    }
}
})
app.mount('#app')
</script>

</body>
</html>
```