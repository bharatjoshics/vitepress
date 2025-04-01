# v-show Directive
The v-show directive hides an element when the condition is 'false' by setting the CSS 'display' property value to 'none'.

After writing v-show as an HTML attribute we must give a conditon to decide to have the tag visible or not.

## Example
Display the < div > element only if the showDiv property is set to 'true'.

    <!DOCTYPE html>
    <html>
    <head>
    <title>v-show example</title>
    <style>
        #app {
        border: black dashed 1px;
        width: 200px;
        padding: 0 20px 20px 20px;
        }
        #app div {
        padding: 20px;
        background-color: lightgreen;
        font-weight: bold;
        }
    </style>
    </head>
    <body>
    <div id="app">
    <div v-show="showDiv">This div tag can be hidden</div>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script>
    const app = Vue.createApp({
        data() {
        return {
            showDiv: true
        }
        }
    })
    app.mount('#app')
    </script>

    </body>
    </html>

## v-show vs v-if
The difference between v-show and v-if is that v-if creates (renders) the element depending on the condition, but with v-show the element is already created, v-show only changes its visibility.

Therefore, it is better to use v-show when switching visibility of an object, because it is easier for the browser to do, and it can lead to a faster response and better user experience.

A reason for using v-if over v-show is that v-if can be used with v-else-if and v-else.