# Create and Using Store
Here, we will know how to create and use store.

## Creating Store
To create store we need to import 'createStore' from 'vuex' library

Steps - 
1. Create a file 'store.js' and import 'createStore' into it.
2. `import { createStore } from 'vuex';`
3. Now write 'export default' like this - 
    
    export default createStore({
        state: {
            ....
        },
    });
- Here, 'state' means data. It means we store our data inside 'state{}'
4. Now, we import 'store.js' file in 'main.js' -
    `import store from './store';`

## Use Store
In order to use it we need to write the following in 'main.js' -
    `app.use(store);`

Now we are ready to use VUEX.