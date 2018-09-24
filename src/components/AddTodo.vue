<template>
  <div class="add-todo">
    <form @submit="handleSubmit">
      <input v-model="text"/>
    </form>
  </div>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "add-todo",
  props: {
    // onEnter is a (text) => void.
    onEnter: Function
  },
  data: function() {
    return { text: "" };
  },
  methods: {
    handleSubmit: function() {
      this.onEnter(this.text);
      this.text = "";
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
