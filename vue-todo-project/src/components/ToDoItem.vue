<script setup>
import { Icon } from "@iconify/vue";
/* Props can be defined using defineProps util method that accepts
    1. Object - better readability;
    2. Array (not recommended);
*/
const props = defineProps({
  todo: {
    type: Object,
    required: true,
    /* Works only for primitives - string, number, boolean */
    /* With objects/arrays --> we pass a factory method! */
    // default() {},
  },
});
</script>
<template>
  <li>
    <!-- Checked attribute - allows us to control the flipping of the checked state -->
    <input type="checkbox" :checked="todo.isCompleted" />
    <div class="todo">
      <input type="text" :value="todo.todo" />
      <span>
        {{ todo.todo }}
      </span>
    </div>
    <div class="todo-actions">
      <!-- Storing the icons for all ToDos -->
      <Icon icon="ph:check-circle" class="icon" color="#41b0b0" width="22" />
      <Icon icon="ph:pencil-fill" class="icon" color="#41b0b0" width="22" />
      <Icon icon="ph:trash" class="icon" color="#f95e5e" width="22" />
    </div>
  </li>
</template>

<style lang="scss" scoped>
li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 10px;
  background-color: #f1f1f1;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  &:hover {
    .todo-actions {
      opacity: 1;
    }
  }
  input[type="checkbox"] {
    appearance: none;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    &:checked {
      background-color: #41b080;
    }
  }
  .todo {
    flex: 1;
    input[type="text"] {
      width: 100%;
      padding: 2px 6px;
      border: 2px solid #41b080;
    }
  }
  .todo-actions {
    display: flex;
    gap: 6px;
    opacity: 0;
    transition: 150ms ease-in-out;
    .icon {
      cursor: pointer;
    }
  }
}
</style>
