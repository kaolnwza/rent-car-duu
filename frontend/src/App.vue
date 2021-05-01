<template>
  <div id="app" class="m-0">
    <Navbar />
    <div class="container mt-4">
      <LoginModal />
      <RegisterModal />
      <!--<CarDetailModal /> -->
      <!-- <ViewUserProfile /> -->
      <!--  <RentCar /> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import LoginModal from "./components/LoginModal.vue";
import RegisterModal from "./components/RegisterModal.vue";
//import CarDetailModal from "./components/CarDetailModal.vue";
//import ViewUserProfile from "./components/ViewUserProfile";
//import RentCar from "./components/RentCar";

export default {
  name: "App",
  components: {
    Navbar,
    LoginModal,
    RegisterModal
    //CarDetailModal,
    //ViewUserProfile,
    //RentCar
  },
  data() {
    return {
      test: true,
      kuy: this.$loginStatus
    };
  },
  methods: {
    haha: function() {
      this.$testZa = "haha+";
    }
  },
  watched: {
    kuy() {
      alert("asd");
    }
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
  font-weight: 200;
}
@import "~bootstrap/dist/css/bootstrap.css";
@import url("https://fonts.googleapis.com/css2?family=Prompt:wght@500&family=Roboto&display=swap");
</style>
