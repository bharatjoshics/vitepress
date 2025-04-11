# Project Explaination
Let's start understand the project with 'store.js' and 'main.js'

## Store.js
1. state – The Data Store (Your Central "Database")
Think of it as a box of data where you keep things like your todos, users, settings, etc.
    state: {
        todos: [...],
        nextID: 3
    }

- todos: Array of task objects.

- nextID: A counter to give unique IDs to new todos.

2. getters – Getting Data (Like Filters or Views)
Think of it as a window to look at the data or a way to compute derived data from state.
    getters: {
    allTodos: state => state.todos
    }

- allTodos just returns the todos list.

- You could add more getters like completedTodos or pendingTodos to filter data.

3. mutations – Changing the Data (ONLY place allowed to change state)
Think of mutations like commands to update your data.
    mutations: {
    ADD_TODO(state, task) { ... },
    TOGGLE_TODO(state, todoID) { ... },
    EDIT_TODO(state, { id, newTask }) { ... }
    }

- They change the state synchronously (immediately).

- You must always use a mutation to modify state. You can't just change it directly in components.
    For example:
        state.todos.push(newTask)

4. actions – Telling Mutations What to Do
Think of actions like messengers that send instructions to mutations.
    actions: {
        addTodo({ commit }, todo) {
            commit('ADD_TODO', todo);
        },
        toggleTodo({ commit }, todoID) {
            commit('TOGGLE_TODO', todoID);
        },
        editTodo({ commit }, task) {
            commit('EDIT_TODO', task);
        }
    }

- You call actions from your components.

- Then actions call mutations to do the actual state update.

- Actions are good for async operations too (like APIs).

## Main.js
- createApp(App) starts your Vue app using App.vue as the main component.

- createRouter(...) sets up page navigation.

- Routes defined:

- - /TodoList: Shows task list (TodoItem)

- - /AddTodo: Form to add a new task (NewTodo)

- app.use(store): Adds Vuex (your centralized state storage).

- app.use(router): Adds routing (URL-based navigation).

## App.vue
- Shows header and todo list (todo-item) if you're not on the Add page.

- Displays an “Add New” button that links to the add task form.

- router-view will load either NewTodo or TodoItem depending on the route.

## TodoItem.vue
- Shows task ID and whether it’s completed or not.

- You can click "Complete" to toggle status.

- Click "Edit" to change the task text.

- Buttons trigger events which are handled in the parent component (App.vue).

## NewTodo.vue
- Uses v-model to bind input field to addTask.

- On submit, calls submitData() method.

- Inside submitData(), addTodo is dispatched (calls the Vuex action to add the task).

## How Everything Works Together
1. User opens app → Sees the list of tasks from Vuex store in App.vue.

2. Clicks “Add New” → Navigates to /AddTodo using router.

3. Fills form in NewTodo.vue → Submits task → Triggers Vuex addTodo() → Updates store.

4. Back to list → Tasks are displayed via loop of todo-items.

5. Clicks "Complete"/"Edit" → Events are sent from TodoItem.vue to App.vue, which calls Vuex actions to update task data.