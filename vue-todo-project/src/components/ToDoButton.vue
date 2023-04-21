<script setup></script>

<template>
  <!-- @click is the shorthand for the v-on directive
     - listens for DOM events and runs JS when the event is triggered-->
  <button>
    <!-- Allows to render our own template content, makes the component 
    more dynamic! -->
    <!-- We can provide a fallback content inside of the slot tags here -->
    <slot>Create</slot>
  </button>
</template>

<style lang="scss" scoped>
button {
  padding: 8px 16px;
  border: none;
}
</style>
