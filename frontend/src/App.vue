<template>
  <div id="app" class="m-0">
    <Navbar />
    <div class="container">
      <img alt="Vue logo" src="./assets/logo.png" />
      <LoginModal />
      <RegisterModal />
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Navbar from "./components/Navbar.vue";
import LoginModal from "./components/LoginModal.vue";
import RegisterModal from "./components/RegisterModal.vue";

export default {
  name: "App",
  components: {
    Navbar,
    HelloWorld,
    LoginModal,
    RegisterModal
  },
  data() {
    return {
      test: true
    };
  }
};
</script>

<style>
#app {
  font-family: "Prompt", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@import "~bootstrap/dist/css/bootstrap.css";
@import url("https://fonts.googleapis.com/css2?family=Prompt:wght@500&display=swap");
</style>
