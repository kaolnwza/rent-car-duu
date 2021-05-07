<template>
  <div
    class="modal fade"
    id="loginModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="loginModal"
    aria-hidden="true"
    style="margin-top:80px;"
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
          <div>
            <label class="inputLabel">ชื่อผู้ใช้</label>
            <input
              class="inputBox form-control"
              v-model="$v.username.$model"
              :class="{'is-invalid': $v.username.$error}"
              placeholder
            />
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.username.required"
            >กรุณากรอกข้อมูล</div>
            <label class="inputLabel">รหัสผ่าน</label>
          </div>
          <div>
            <input
              class="inputBox form-control"
              v-model="$v.password.$model"
              :class="{'is-invalid': $v.password.$error}"
              placeholder
              type="password"
            />
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.password.required"
            >กรุณากรอกข้อมูล</div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" ref="Close">Close</button>
          <button type="button" class="btn btn-primary" @click="login()">Log in</button>
        </div>
      </div>
    </div>

    <!-- welcome modal -->
    <modal name="helloMes" :height="450" :width="800" :adaptive="true" @before-close="beforeClose">
      <div
        style="font-size: 56px; text-align:center; padding-top: 100px;"
      >Hi, {{fname + ' ' + lname}}</div>
    </modal>
    <!-- end welcome modal -->
  </div>
</template>
<script>
import axios from "axios";
import { required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      status: "NONE",
      // username: "",
      // password: "",
      username: "",
      password: "",
      testToken: "",
      fname: "",
      lname: "",
      loginStatus: false
    };
  },
  mounted() {},
  validations: {
    username: {
      required: required
    },
    password: {
      required: required
    }
  },
  methods: {
    login() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        console.log(this.password);

        let data = {
          username: this.username,
          password: this.password
        };
        console.log(data);

        axios
          .post(`http://localhost:3000/user/login`, data)
          .then(res => {
            this.status = res.data.loginStatus;
            if (this.status) {
              this.fname = res.data.fname;
              this.lname = res.data.lname;
              this.$modal.show("helloMes");

              localStorage.setItem("login_status", true);
              localStorage.setItem("is_admin", false);
              console.log(res.data.username);

              if (res.data.username == "admin") {
                console.log("in");

                localStorage.setItem("is_admin", true);
              }
              console.log("admin" + localStorage.getItem("is_admin"));
            }
          })
          .catch(() => {
            //this.error = error.response.data.message;
            console.log("err");

            alert("Username or Password Incorrect");
          });
      }
    },
    // getToken() {
    //   let data = {
    //     username: this.username
    //   };
    //   axios
    //     .post(`http://localhost:3000/accessToken`, data)
    //     .then(
    //       res => {
    //         this.fname = res.data.fname;
    //         this.lname = res.data.lname;
    //         this.$modal.show("helloMes");

    //         localStorage.setItem("login_status", true);
    //       }
    //       //, this.$router.push("/carmarketplace"),this.$refs.Close.click()
    //     )
    //     .catch(err => {
    //       console.log(err.message);
    //     });
    // },
    mooo() {
      this.$("#welcomeModal").modal("show");
    },
    beforeClose() {
      this.$router.go(this.$router.currentRoute);
      this.$emit("loginStatus", true);
    }
  }
};
</script>

