<template>
  <div class="container">
    <p class="title">user: {{ $store.getters.getUserName }}</p>
      <button class="button" @click="login">
        ログイン
      </button>
  </div>
</template>

<script>
export default {
 methods: {
    login() {
      console.log('login')
       this.$store.dispatch('login')
   }
 }
}
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
  padding: .4em .6em;
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
