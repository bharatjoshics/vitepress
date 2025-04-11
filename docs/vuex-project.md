# Example Project of VUEX
Here is the example project to understand the implementation of vuex.

**Title** - TODO List using Vuex
**Desciption** - You can add task which stores as data inside 'state{}' in 'store.js' file. Check if task is completed or not. Mark as complete / Pending. Edit the task.

Here are codes -

**App.vue** 

```vue
<template>
    <section>
        <header><h1>My Todo List</h1></header>
        <ul v-if="$route.path !== '/AddTodo'">
            <todo-item
                v-for="todo in todos" :key="todo.id"
                :id="todo.id"
                :task="todo.task"
                :isCompleted="todo.isCompleted"
                @toggle-completion="toggleCompletionStatus"
                @edit-task="editTask">
            </todo-item>
        </ul>
        <router-link to="/AddTodo">Add New</router-link>
        <router-view></router-view>
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
computed: {
    ...mapState(['todos'])
},
methods: {
    ...mapActions(['toggleTodo', 'editTodo']),
    toggleCompletionStatus(todoID){
        this.toggleTodo(todoID);
    },
    editTask(todoID, newTask){
        this.editTodo({id: todoID, newTask});
    }
}
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

* {
box-sizing: border-box;
}

html {
font-family: 'Jost', sans-serif;
}

body {
margin: 0;
}

header {
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
margin: 3rem auto;
border-radius: 10px;
padding: 1rem;
background-color: #007BFF;
color: white;
text-align: center;
width: 90%;
max-width: 40rem;
}

#app ul {
margin: 0;
padding: 0;
list-style: none;
}

#app li,
#app form {
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
margin: 1rem auto;
border-radius: 10px;
padding: 1rem;
text-align: center;
width: 90%;
max-width: 40rem;
}

#app h2 {
font-size: 2rem;
border-bottom: 4px solid #ccc;
color: #007BFF;
margin: 0 0 1rem 0;
}

#app button {
font: inherit;
cursor: pointer;
border: 1px solid #28a745;
background-color: #28a745;
color: white;
padding: 0.05rem 1rem;
box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
background-color: #218838;
border-color: #218838;
box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
font: inherit;
padding: 0.15rem;
}

#app label {
font-weight: bold;
margin-right: 1rem;
width: 7rem;
display: inline-block;
}

#app form div {
margin: 1rem 0;
}
</style>
```

- There are two components inside a 'Components' folder - 

**ToDOItem.vue**

```vue
<template>
<li>
    <h2>{ { id } } { { isCompleted ? '(Completed)' : '(Pending)' } }</h2>
    <div v-if="isEditing">
    <input type="text" v-model="editableTask" />
    <button @click="saveEdit">Save</button> &nbsp;
    <button @click="cancelEdit">Cancel</button>
    </div>
    <div v-else>
    <p><strong>Task:</strong> { { task } }</p>
    <button @click="toggleCompletion">{ { isCompleted ? 'Undo' : 'Complete' } }</button> &nbsp;
    <button @click="startEdit">Edit</button>
    </div>
</li>
</template>

<script>
export default {
    props: ['id', 'task', 'isCompleted'],
    data() {
    return {
        isEditing: false,
        editableTask: this.task,
    };
    },
    methods: {
    toggleCompletion() {
        this.$emit('toggle-completion', this.id);
    },
    startEdit() {
        this.isEditing = true;
    },
    cancelEdit() {
        this.isEditing = false;
        this.editableTask = this.task;
    },
    saveEdit() {
        if (this.editableTask.trim()){
        this.$emit('edit-task',this.id, this.editableTask);
        this.isEditing = false;
        }
    }
    }
};
</script>
```

**NewToDO.vue**

```vue
<template>
    <form @submit.prevent="submitData">
        <div>
            <label>Task</label>
            <input type="text" v-model="addTask"/>
        </div>
        <div>
            <button>Add Task</button>
        </div>
    </form>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            addTask: ''
        };
    },
methods: {
        ...mapActions(['addTodo']),
        submitData(){
            if(this.addTask){
                this.addTodo({
                    task: this.addTask,
                    isCompleted: false
                });
                this.addTask = '';
            }
        }
}
};
</script>
```

- Not in component folder

**main.js**

```js
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import NewTodo from './Components/NewTodo.vue';
import TodoItem from './Components/TodoItem.vue';
import store from './store';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/TodoList', component: TodoItem },
        { path: '/AddTodo', component: NewTodo}
    ]
});
const app = createApp(App);
app.component('NewTodo', NewTodo);
app.component('TodoItem', TodoItem);
app.use(store);
app.use(router);
app.mount('#app');
```

**store.js**

```js
import { createStore } from 'vuex';

export default createStore({
    state: {
        todos: [
            { id: 1, task: "Learn Vue.js", isCompleted: false },
            { id: 2, task: "Build a project", isCompleted: true }
        ],
        nextID: 3
    },
    mutations: {
        ADD_TODO(state, task) {
            state.todos.push({
                id: state.nextID,
                task: task.task,
                isCompleted: false
            });
            state.nextID += 1
        },
        TOGGLE_TODO(state, todoID) {
            const todo = state.todos.find(todo => todo.id === todoID);
            if (todo) {
                todo.isCompleted = !todo.isCompleted;
            }
        },
        EDIT_TODO(state, {id, newTask}){
            const todo = state.todos.find(todo => todo.id === id);
            if(todo){
                todo.task = newTask;
            }
        }
    },
    actions: {
        addTodo({ commit }, todo) {
            commit('ADD_TODO', todo);
        },
        toggleTodo({ commit }, todoID) {
            commit('TOGGLE_TODO', todoID);
        },
        editTodo({ commit }, task){
            commit('EDIT_TODO', task);
        }
    },
    getters: {
        allTodos: state => state.todos
    }
});
```