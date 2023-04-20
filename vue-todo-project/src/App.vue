<script setup>
/* setup attribute --> syntactic sugar for using the Composition API within SFC */
import { RouterView } from "vue-router";
import ToDoHeader from "./components/ToDoHeader.vue";
</script>

<template>
  <!-- The RouterView component will request and render 
the respective child component that needs to be called 
in respect to the navigation -->
  <ToDoHeader />
  <RouterView />
</template>

/* Add the global styles here */
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap");

* {
  font-family: "Rubik", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
