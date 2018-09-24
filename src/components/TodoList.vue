<template>
  <div class="todo-list">
      <!-- {{ this.todos }} -->
    <ul>
      <li class="item" v-for="(item, index) in todos" @click="remove(index)">
        {{ item }}
      </li>
    </ul>
    <add-todo :onEnter="add"/>
  </div>
  
</template>

<script>
import AddTodo from "@/components/AddTodo.vue";
import TodoStore from "@/services/TodoStore.js";

export default {
  name: "todo-list",
  data: function() {
    const dataString = TodoStore.load();
    const todos = JSON.parse(dataString) || [];
    return { todos };
  },
  methods: {
    add: function(todo) {
      this.todos.push(todo);
      this.save();
    },
    remove: function(index) {
      this.todos.splice(index, 1);
      this.save();
    },
    save: function() {
      TodoStore.save(JSON.stringify(this.todos));
    }
  },
  components: {
    AddTodo
  }
};
</script>

<style lang="scss" scoped>
.item:hover {
  text-decoration: line-through;
  cursor: pointer;
}
</style>
