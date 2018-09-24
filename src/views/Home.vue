<template>
  <div class="home">
    <H2>Hwat Todo</H2>
    <todo-list class="todo-list" />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import AddTodo from "@/components/AddTodo.vue";

export default {
  name: "home",
  components: {
    TodoList,
    AddTodo
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
