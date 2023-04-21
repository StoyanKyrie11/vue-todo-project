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
import ToDoButton from "./ToDoButton.vue";

const todoState = reactive({
  toDo: "",
  invalid: null,
  errMsg: "",
});

/* Stores all the possible emits for the SFC into a single array */
const emit = defineEmits(["create-todo"]);

const createTodo = () => {
  /* Reset the value of invalid to null before if check */
  todoState.invalid = null;
  if (todoState.toDo !== "") {
    emit("create-todo", todoState.toDo);
    todoState.toDo = "";
    return;
  }
  todoState.invalid = true;
  todoState.errMsg = "Todo value cannot be empty";
};
</script>

<template>
  <!-- Adding a dynamic class with :class to be displayed ONLY after condition is true -->
  <div class="input-wrap" :class="{ 'input-err': todoState.invalid }">
    <!-- <input type="text" v-model="todo" /> -->
    <input type="text" v-model="todoState.toDo" />
    <ToDoButton @click="createTodo()" />
  </div>
  <!-- <p v-if="todoState.invalid">{{ todoState.errMsg }}</p> -->
  <p v-show="todoState.invalid" class="err-msg">{{ todoState.errMsg }}</p>
</template>

<style lang="scss" scoped>
.input-wrap {
  display: flex;
  transition: 250ms ease;
  border: 2px solid #41b080;

  &.input-err {
    border-color: red;
  }

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
}

.err-msg {
  margin-top: 6px;
  font-size: 12px;
  text-align: center;
  color: red;
}
</style>
