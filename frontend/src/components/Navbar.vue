<template >
  <nav class="navbar navbar-expand-lg bg-white text-dark navbarProp" style="background-color: grey">
    <div class="container">
      <div class="collapse navbar-collapse row" id="navbarText">
        <div
          class="logo col-3 pl-4"
          style="text-align:left"
          @click="$router.push('/')"
        >ส่งพี่ไปเช่ารถดู๊</div>

        <div class="col-5 p-0" style="text-align: left; "></div>
        <div class="col-4 mt-2 text-right">
          <div v-if="loginStatus === 'false'">
            <label
              class="login btn btn-outline-primary mr-2"
              data-toggle="modal"
              data-target="#registerModal"
            >สร้างบัญชีผู้ใช้</label>
            <label
              class="login btn btn-primary"
              data-toggle="modal"
              data-target="#loginModal"
            >เข้าสู่ระบบ</label>
          </div>
          <div v-if="loginStatus === 'true'">
            <button
              class="btn btn-outline-primary userLogo"
              @click="$router.push('/userprofile')"
              style="margin-right: 7px;"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                />
              </svg>
            </button>
            <button @click="logOut()" class="btn btn-outline-primary userLogo">ออกจากระบบ</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
export default {
  //props: ["loginStatus"],
  data() {
    return {
      loginStatus: "nnn"
    };
  },
  mounted() {
    this.getLoginStatus();
    //this.isAdmin();
  },
  methods: {
    getLoginStatus() {
      this.loginStatus = localStorage.getItem("login_status");
      console.log(this.loginStatus);
    },

    logOut() {
      axios
        .put("http://localhost:3000/logout")
        .then(res => {
          localStorage.setItem("is_admin", false);
          localStorage.setItem("login_status", false);
          this.loginStatus = false;

          this.$router.go(this.$router.currentRoute);
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
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
}

.navbarProp {
  -webkit-box-shadow: 0px -1px 20px -12px rgba(0, 0, 0, 0.75);
  height: 60px;
}

.userLogo {
  margin-right: 20px;
  margin-bottom: 7px;
}

.textLink {
  font-size: 18px;
  font-weight: 800;
  margin-right: 8px;
}
</style>



