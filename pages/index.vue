<template>
  <div class="container">
    <p class="title">user: {{ $store.getters.getUserName }}</p>
    <button class="button" @click="login">
      ログイン
    </button>

    <table class="table">
      <thead>
        <tr>
          <th>todo</th>
          <th>limit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in $store.getters.getTodos" :key="todo.todo">
          <td>{{ todo.todo }}</td>
          <td>{{ todo.limit }}</td>
        </tr>
      </tbody>
    </table>

    <div class="field is-grouped">
      <p class="control is-expanded">
        <input v-model="newTodo" class="input" type="text" placeholder="todo" />
      </p>
      <p class="control is-expanded">
        <input
          v-model="newLimit"
          class="input"
          type="text"
          placeholder="limit"
        />
      </p>
      <p class="control">
        <a class="button is-primary" @click="addTodo">
          add
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: "",
      newLimit: ""
    };
  },
  methods: {
    login() {
      console.log("login");
      this.$store.dispatch("login");
    },
    addTodo() {
      const todo = this.newTodo;
      const limit = this.newLimit;

      this.$store.dispatch("addTodo", { todo, limit });
      this.newTodo = "";
      this.newLimit = "";
    }
  },
  created() {
    this.$store.dispatch("fetchTodos");
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.button {
  color: #fff;
  background-color: aquamarine;
  border: none;
  border-radius: 8px;
  padding: 0.4em 0.6em;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
}

.button:hover,
.button:active,
.button:focus {
  outline: none;
  opacity: 0.7;
}
</style>
