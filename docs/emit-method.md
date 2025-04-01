# $emit()
With the built-in $emit() method in Vue we can create a custom event in the child component that can be captured in the parent element.

Props are used to send data from the parent element to the child component, and $emit() is used to do the opposite: to pass information from the child component to the parent.

## Emit a Custom Event
There is a need to send information from the component to the parent, and we use the built-in method $emit() to do that.

We already have the toggleFavorite method inside the FoodItem.vue component that runs when the toggle button is clicked. So, add a line to emit our custom event 'toggle-favorite' - 

   **FoodItem.vue**
   
        methods: {
            toggleFavorite() {
                this.$emit('toggle-Favorite');
            }
        }

## Receive an Emit Event
The custom emit event 'toggle-favorite' is now emitted from the FoodItem.vue component, but we need to listen to the event in the App.vue parent and call a method that does something so that we can see that the event happened.

We listen to the event with the v-on: or shorthand @ in App.vue where the component is created.

   **App.vue**

        <food-item
        v-for="x in foods"
        :key="x.name"
        :food-name="x.name"
        :food-desc="x.desc"
        :is-favorite="x.favorite"
        @toggle-favorite="receiveEmit"
        />
    
**Note -** When our custom 'toggle-favorite' event happens, we need to create the receiveEmit method in App.vue so that we can see that the event happened.

        methods: {
        receiveEmit() {
            alert('Hello World!');
        }
        }

## Change the status in the Parent
We now have an event that notifies App.vue when the 'Favorite' button is clicked from the child component.

We want to change the 'favorite' property in the 'foods' array in App.vue for the correct food item when a 'Favorite' button is clicked. To do that we send the food item name from FoodItem.vue to App.vue because that is unique for each food item.

   **FoodItem.vue**

        methods: {
        toggleFavorite() {
            this.$emit('toggle-favorite', this.foodName);
        }
        }
    
    Now that we know what food item that was clicked we can update the 'favorite' status for the correct food item inside the 'foods' array -

   **App.vue**

        methods: {
        receiveEmit(foodId) {
            const foundFood = this.foods.find(
            food => food.name === foodId
            );
            foundFood.favorite = !foundFood.favorite;
        }
        }

## The 'emits' Option
In the same way that we declare props inside the FoodItem.vue component, we can also document what the component emits by using the Vue 'emits' option.

Props must be declared in the component, while emits are just recommended to be documented.

This is how we can document our emit in the FoodItem.vue component -

        <script>
        export default {  
        props: ['foodName','foodDesc','isFavorite'],
        emits: ['toggle-favorite'],
        methods: {
            toggleFavorite() {
            this.$emit('toggle-favorite', this.foodName);
            }
        }
        };
        </script>

## Emit Validation
Just like Prop validator, you can add condition to validate the emit method also. 

## Emit Validation Example

   **FoodItem.vue**

        emits: {
            'toggle-favorite': function(id){
                if(id){
                    return true;
                }
                else{
                    console.warn('Id is missing');
                    return false;
                }
            }
        }
        methods: {
            toggleFavorite() {
                this.$emit('toggle-favorite', this.foodName);
            }
        }

   In this case, if the ID is not present in the 'toggleFunction()' method then it will give warning in the console and value is not emitted as it returns false.