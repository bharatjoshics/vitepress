# Global vs Local Component Registration
The way we have included components so far makes them accessible from all *.vue files in a project.

## Global Component
Till now, we have registered the component in 'main.js' file which is not wrong but it's not always the best way to register the components because when we register components like this then we are registering these components as global components.

That means they are available globally in the entire vue app, so we can use these components as custom HTML elements anywhere in the app. This could be very useful as we can use these components as custom elements anywhere without thinking anything.

But it has a potential downside, if we register all the components gloablly then Vue needs to load them all when the application is loaded initially. So, the browser needs to download the code for all those components initially. This is not a problem in basic applications but for bigger application, that could be a problem.

Also if we register all components globally, then -

    app.component('a', A)
    app.component('b', B)
    app.component('c', C)
    app.component('d', D)
    app.component('e', E)
    ....................
    ....................
    So on ...............

This can be very long list.

## Local Component
In Local Component Registering method we can only register those component which we need in that particular file only.

Suppose there is a 'Header' component which we need only in 'App.vue' file, so instead of registering 'Header' component globally we can register it locally in the 'App.vue' file.

Here is how it can be done - 

```vue
<script>
    import Header from './components/Header.vue'
</script>
```
Here, we have imported the 'Header' component in the 'App.vue' file.

Now, we need to register it as component, for that -

```vue
<script>
    import Header from './components/Header.vue'
    export default {
        components: {
            'the-header': Header
        }
    }
</script>
```

Now, the 'Header' is registered as local component and we can use it with the name 'the-header'.