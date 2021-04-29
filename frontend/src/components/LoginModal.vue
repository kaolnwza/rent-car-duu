<template>
  <div
    class="modal fade"
    id="loginModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="loginModal"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" style="bottom: 120px;" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Login</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <label class="inputLabel">ชื่อผู้ใช้</label>
          <input
            class="inputBox form-control"
            v-model="username"
            :class="{'is-invalid': !status}"
            placeholder
          />
          <label class="inputLabel">รหัสผ่าน</label>
          <input
            class="inputBox form-control"
            v-model="password"
            :class="{'is-invalid': !status}"
            placeholder
            type="password"
          />
          {{status}}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" ref="Close">Close</button>
          <button type="button" class="btn btn-primary" @click="login()">Log in</button>
          {{testToken}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      status: "NONE",

      username: "phanuwat",
      password: "Ez1212312121",
      testToken: ""
    };
  },
  methods: {
    login() {
      let data = {
        username: this.username,
        password: this.password
      };

      axios
        .post(`http://localhost:3000/user/login`, data)
        .then(response => {
          this.status = response.data.loginStatus;
          if (this.status) {
            this.getToken();
          }
        })
        .catch(error => {
          this.error = error.response.data.message;
        });
    },
    getToken() {
      let data = {
        username: this.username
      };
      axios
        .post(`http://localhost:3000/accessToken`, data)
        .then(this.$router.push("/carmarketplace"), this.$refs.Close.click())
        .catch(err => {
          console.log(err.message);
        });
    }
  }
};
</script>

