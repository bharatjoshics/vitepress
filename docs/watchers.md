# Watchers
A watcher is a method that watches a data property with the same name.

A watcher runs everytime the data property value changes.

Use watcher if a certain data property value requires an action.

As with 'data', 'methods' and 'computed' watchers also reserved a name 'watch'.

We never call a watcher method. It is only called automatically when the property value changes.

The new property value is always available as an input argument to the watchers method and so is the old value.

## Example
An < input type = " range " > element is used to change a value 'rangeVal'. A watcher is used to prevent the user from choosing values between 20 and 60.

    <!DOCTYPE html>
    <html>
    <head>
    <title>Range Watcher</title>
    <style>
        #app {
        border: dashed black 1px;
        display: inline-block;
        padding: 10px;
        }
        #app > p {
        font-size: large;
        font-weight: bold;
        text-align: center;
        }
    </style>
    </head>
    <body>
    <div id="app">
    <input type="range" min="0" max="100" step="1" v-model="rangeVal">
    <p><code>{{ rangeVal }}</code></p> 
    </div>


    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script>
    const app = Vue.createApp({
        data() {
        return {
            rangeVal: 70
        }
        },
        watch: {
        rangeVal(val) {
            if( val>20 && val<60 ){
            if(val<40){
                this.rangeVal = 20;
            }
            else{
                this.rangeVal = 60;
            }
            }
        }
        }
    })
    app.mount('#app')
    </script>

    </body>
    </html>