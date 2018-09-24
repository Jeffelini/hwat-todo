const TodoStore = {
  save: function(todos) {
    window.localStorage.setItem("todos", todos);
  },
  load: function() {
    return window.localStorage.getItem("todos");
  }
};

export default TodoStore;
