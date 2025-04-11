# v-if Directive
v-if can be used alone, or with v-else-if and/or v-else. If the condition inside v-if is 'true', v-else-if or v-else are not considered.

## Example
Write different messages depending on whether there are any socks in stock

```html
<!DOCTYPE html>
<html>
<head>
<title>v-if example</title>
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
<p v-if="socks > 0">
    in stock
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