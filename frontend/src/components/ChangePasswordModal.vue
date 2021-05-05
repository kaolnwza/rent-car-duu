<template>
  <modal name="changePasswordModal" :width="400" :height="600" :adaptive="true">
    <div class="row text-left">
      <div class="col m-5">
        <label>รหัสผ่านเดิม</label>
        <input
          class="form-control inputBox"
          style="width: 300px;"
          v-model="old_password"
          :class="{'is-invalid': passwordInvalid}"
        />
        <hr
          style="width: 300px; text-align:left; margin: 0px; margin-top: 30px;margin-bottom: 10px;"
        />
        <div>
          <label for>รหัสผ่่านใหม่</label>
          <input
            class="form-control inputBox"
            style="width: 300px;"
            v-model="$v.new_password.$model"
            :class="{'is-invalid' : $v.new_password.$error}"
          />
          <div
            class="invalid-feedback invalidFeedbackStyle"
            v-if="!$v.new_password.required"
          >กรุณากรอกข้อมูล</div>

          <div
            class="invalid-feedback invalidFeedbackStyle"
            v-if="!$v.new_password.complex"
          >จะต้องมี A-Z, a-z, 0-9 ในรหัสผ่าน</div>
          <div
            class="invalid-feedback invalidFeedbackStyle"
            v-if="!$v.new_password.maxLength"
          >จำนวนอักษรมากเกินไป</div>
          <div
            class="invalid-feedback invalidFeedbackStyle"
            v-if="!$v.new_password.minLength"
          >จำนวนอักษรต้องมากกว่า 8 ตัวอักษร</div>
        </div>
        <div>
          <label for>ยืนยันรหัสผ่าน</label>

          <input
            class="form-control inputBox"
            style="width: 300px;"
            v-model="$v.new_confirm_password.$model"
            :class="{'is-invalid' : $v.new_confirm_password.$error}"
          />
          <div
            class="invalid-feedback invalidFeedbackStyle"
            v-if="!$v.new_confirm_password.required"
          >กรุณากรอกข้อมูล</div>
          <div
            class="invalid-feedback invalidFeedbackStyle"
            v-if="!$v.new_confirm_password.sameAs"
          >รหัสผ่านไม่ตรงกัน</div>
        </div>
        <button @click="changePassword()" class="btn btn-primary">ยืนยัน</button>
      </div>
    </div>
  </modal>
</template>

<script>
import axios from "axios";
import {
  required,
  minLength,
  sameAs,
  maxLength
} from "vuelidate/lib/validators";

function complexPassword(val) {
  if (!(val.match(/[a-z]/) && val.match(/[A-Z]/) && val.match(/[0-9]/))) {
    return false;
  }
  return true;
}
export default {
  data() {
    return {
      old_password: "",
      new_password: "",
      new_confirm_password: "",
      passwordInvalid: false
    };
  },
  validations: {
    new_password: {
      required: required,
      minLength: minLength(8),
      maxLength: maxLength(30),
      complex: complexPassword
    },
    new_confirm_password: {
      required: required,
      sameAs: sameAs("new_password")
    }
  },
  methods: {
    changePassword() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const data = {
          input_password: this.old_password,
          new_password: this.new_password,
          new_confirm_password: this.new_confirm_password
        };
        axios
          .put(`http://localhost:3000/changePassword`, data)
          .then(res => {
            alert("Change Password Success!");
            console.log(res.data);
          })
          .catch(() => {
            alert("Old Password Invalid");
            this.passwordInvalid = true;
          });
      }
    }
  }
};
</script>