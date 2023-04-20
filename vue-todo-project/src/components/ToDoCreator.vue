<script setup>
/* Mock some data */
/* Making data reactive can happen in 2 distinct ways:
    1. using the ref() function approach --> the type of data is primitive (string);
        const todo = ref("Testing the ref() function");
        NB: In order to access the todo value --> todo.value only in v-model, Vue unwraps the ref() function so that we can access the value directly;
    2. reactive method approach --> the type of data can be an object or an array;
        const todo = reactive({
            title: "Testing the reactive() function",
            completed: false
        });
        NB: In order to access the todo value --> todoState.toDo both in v-model and template;
*/
import { reactive } from "vue";

const todoState = reactive({
  toDo: "Testing values here...",
});

/* Stores all the possible emits for the SFC into a single array */
const emit = defineEmits(["create-todo"]);

const createTodo = () => {
  emit("create-todo", todoState.toDo);
};
</script>

<template>
  <div class="input-wrap">
    <!-- <input type="text" v-model="todo" /> -->
    <input type="text" v-model="todoState.toDo" />
    <!-- @click is the shorthand for the v-on directive
     - listens for DOM events and runs JS when the event is triggered-->
    <button @click="createTodo()">Create</button>
  </div>
</template>

<style lang="scss" scoped>
.input-wrap {
  display: flex;
  transition: 250ms ease;
  border: 2px solid #41b080;
  &:focus-within {
    box-shadow: 0 -4px 6px -1px rgb(0 0 0 / 0.1),
      0 -2px 4px -2px rgb(0 0 0 / 0.1);
  }
  input {
    width: 100%;
    padding: 8px 6px;
    border: none;
    &:focus {
      outline: none;
    }
  }
  button {
    padding: 8px 16px;
    border: none;
  }
}
</style>
