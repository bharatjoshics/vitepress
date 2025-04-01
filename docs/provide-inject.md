# Provide and Inject in Vue
In a large project, with components inside components, it can be hard to use props to provide data from "App.vue" to a sub-component, because it requires props to be defined in every component the data passes through.

If we use provide/inject instead of props, we only need to define the provided data where it is provided, and we only need to define the injected data where it is injected.

## Key Points
- Provide/Inject in Vue is used to provide data from one component to other components, particularly in large projects.

- Provide makes data available to other components.

- Inject is used to get the provided data.

- Provide/Inject is a way to share data as an alternative to passing data using props.

## Provide Data
We use the 'provide' configuration option to make data available to other components.

   **app.vue**

        <template>
            <h1>Food</h1>
            <food-kinds />
        </template>

        <script>
        export default {
        data() {
            return {
            foods: [
                { name: 'Pizza', desc: 'This is Pizza' },
                { name: 'Apple', desc: 'This is Apple' },
                { name: 'Cake', desc: 'This is Cake' },
                { name: 'Fish', desc: 'This is Fish' },
                { name: 'Rice', desc: 'This is Rice' }
            ]
            }
        },
        provide() {
            return {
            foods: this.foods
            }
        }
        }
        </script>

        <style scoped>
        .divBtn {
            display: inline-block;
            text-decoration: none;
            text-align: center;
            background-color: white;
            border: solid 2px #04AA6D;
            border-radius: 10px;
            font-family: Verdana,sans-serif;
            color: black;
            padding: 10px;
            margin: 10px;
        }
        .divBtn:hover {
            background-color: #04AA6D;
            color: white;
            cursor: pointer;
        }
        #divComp {
            border: dashed black 1px;
            border-radius: 10px;
            padding: 20px;
            margin: 10px;
            width: 400px;
        }
        </style>

   The 'foods' array is now provided so that it is available to be injected in other components in your project.

## Inject Data
Now that the 'foods' array is made available by 'provide' in 'App.vue', we can include it in the 'FoodKinds' component.

With the 'foods' data injected in the 'FoodKinds' component, we can use the data from App.vue to display different foods in the 'FoodKinds' component.

   **FoodKinds.vue**

        <template>
            <h2>Different Kinds of Food</h2>
            <p><mark>In this application, food data is provided in "App.vue", and injected in the "FoodKinds.vue" component so that it can be shown here:</mark></p>
            <div v-for="x in foods">
                <h3>{ { x.name } }</h3>
                <p class="pName">{ { x.desc } }</p>
            </div>
        </template>

        <script>
        export default {
            inject: ['foods']
        }
        </script>

        <style scoped>
            div {
                margin: 10px;
                padding: 10px;
                display: inline-block;
                width: 80px;
                background-color: #28e49f47;
                border-radius: 10px;
            }
            .pName {
                text-align: center;
                margin: 10px 0 0 0;
            }
            h3 {
                text-align: center;
            }
        </style>
        

   **main.js**

        import { createApp } from 'vue'

        import App from './App.vue'
        import FoodKinds from './FoodKinds.vue'

        const app = createApp(App)
        app.component('food-kinds', FoodKinds)
        app.mount('#app')