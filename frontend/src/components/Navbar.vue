<template >
  <nav class="navbar navbar-expand-lg bg-white text-dark navbarProp" style="background-color: grey">
    <div class="container">
      <div class="collapse navbar-collapse row" id="navbarText">
        <div class="logo col-4" style="text-align:left" @click="$router.push('/')">ส่งพี่ไปเช่ารถดู๊</div>
        <div class="col-4" style="text-align: center">
          <button class="btn btn-danger" @click="$router.push('/userprofile')">Profile LINK test</button>

          <button class="btn btn-danger" @click="testLogedIn()">Toggle Loged in</button>
        </div>
        <div class="col-4 mt-2" style="text-align: right">
          <div v-if="!logedIn">
            <label
              class="login btn btn-primary mr-3"
              data-toggle="modal"
              data-target="#loginModal"
            >เข้าสู่ระบบ</label>

            <label
              class="login btn btn-outline-primary"
              data-toggle="modal"
              data-target="#registerModal"
            >สร้างบัญชีผู้ใช้</label>
          </div>
          <button v-else class="btn btn-outline-primary userLogo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      logedIn: this.$loginStatus
    };
  },
  methods: {
    testLogedIn: function() {
      this.logedIn = this.$loginStatus = !this.$loginStatus;
      this.logedIn;
      console.log(this.$loginStatus);
    }
  }
};
</script>


<style scoped>
.logo {
  text-decoration-line: none;
  font-size: 1.8rem;
  font-style: italic;
  font-weight: 600;

  background: linear-gradient(
    280deg,
    #ef5350,
    #f48fb1,
    #7e57c2,
    #2196f3,
    #26c6da,
    #43a047,
    #e9fa31,
    #f9a825,
    #ff5722
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.logo:hover {
  cursor: pointer;
  opacity: 80%;
  background: linear-gradient(
    230deg,
    #ef5350,
    #f48fb1,
    #7e57c2,
    #2196f3,
    #26c6da,
    #43a047,
    #e9fa31,
    #f9a825,
    #ff5722
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.btn.login {
  font-size: 0.9rem;
}

.navbarProp {
  -webkit-box-shadow: 0px -1px 20px -12px rgba(0, 0, 0, 0.75);
  height: 60px;
}

.userLogo {
  margin-right: 20px;
  margin-bottom: 7px;
}
</style>



