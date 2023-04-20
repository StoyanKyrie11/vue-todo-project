<script setup>
import { ref } from "vue";
import { uid } from "uid";
import ToDoCreator from "../components/ToDoCreator.vue";
const todoList = ref([]);

const createToDo = (todo) => {
  todoList.value.push({
    id: uid(),
    todo,
    isCompleted: null,
    isEditing: null,
  });
};
</script>

<template>
  <main>
    <h1>Create Todo</h1>
    <!-- Listen for any custom emitted events from the TodoCreator component -->
    <ToDoCreator @create-todo="createToDo" />
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;
  h1 {
    margin-bottom: 16px;
    text-align: center;
  }
}
</style>
