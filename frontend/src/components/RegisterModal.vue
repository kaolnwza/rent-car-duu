<template>
  <div
    class="modal fade"
    id="registerModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="registerModal"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5
            class="modal-title"
            id="exampleModalLongTitle"
            style="font-size: 25px"
          >สร้างบัญชีผู้ใช้</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div>
            <label class="inputLabel">ชื่อบัญชีผู้ใช้</label>
            <input
              class="inputBox form-control"
              v-model="$v.username.$model"
              :class="{'is-invalid': $v.username.$error}"
              placeholder="ex. Prayud44"
            />
            <!--<div class="invalid-feedback invalidFeedbackStyle">Please provide a valid city.</div> -->
          </div>
          <label class="inputLabel">รหัสผ่าน</label>
          <input
            class="inputBox form-control"
            v-model="$v.password.$model"
            :class="{'is-invalid': $v.password.$error}"
            placeholder="ex. 123456"
            type="password"
          />
          <div class="invalid-feedback invalidFeedbackStyle">Please provide a valid city.</div>
          <label class="inputLabel">ยืนยันรหัสผ่าน</label>
          <input
            class="inputBox form-control"
            v-model="$v.confirm_password.$model"
            :class="{'is-invalid': $v.confirm_password.$error}"
            placeholder="ex. 123456"
            type="password"
          />
          <label class="inputLabel">ชื่อ</label>
          <input
            class="inputBox form-control"
            v-model="$v.f_name.$model"
            :class="{'is-invalid': $v.f_name.$error}"
            placeholder="ex. อุซุมากิ"
          />
          <label class="inputLabel">นามสกุล</label>
          <input
            class="inputBox form-control"
            v-model="$v.l_name.$model"
            :class="{'is-invalid': $v.l_name.$error}"
            placeholder="ex. นารูโตะ"
          />
          <label class="inputLabel">อีเมล</label>
          <input
            class="inputBox form-control"
            v-model="$v.email.$model"
            :class="{'is-invalid': $v.email.$error}"
            placeholder="ex. naruto500@hotmail.com"
          />
          <label class="inputLabel">เบอร์โทรศัพท์</label>
          <input
            class="inputBox form-control"
            v-model="$v.phone.$model"
            :class="{'is-invalid': $v.phone.$error}"
            placeholder="ex. 092xxxxxxx"
          />
          <label class="inputLabel">อายุ</label>
          <input
            class="inputBox form-control"
            v-model="$v.age.$model"
            :class="{'is-invalid': $v.password.$error}"
            placeholder="ex. 29"
          />
          <label class="inputLabel">วัน เดือน ปีเกิด</label>
          <input
            class="inputBox form-control"
            type="date"
            v-model="$v.dob.$model"
            :class="{'is-invalid': $v.dob.$error}"
            value="2011-08-19"
          />
          <label class="inputLabel">เพศ</label>
          <select
            class="inputBox form-control"
            v-model="$v.gender.$model"
            :class="{'is-invalid': $v.gender.$error}"
          >
            <option>male</option>
            <option>female</option>
          </select>
          <label class="inputLabel">ที่อยู่</label>
          <textarea
            class="inputBox form-control"
            rows="3"
            v-model="$v.address.$model"
            :class="{'is-invalid': $v.address.$error}"
          ></textarea>
          <label class="inputLabel">หมายเลขบัตรประชาชน</label>
          <input
            class="inputBox form-control"
            type="text"
            v-model="$v.id_card.$model"
            :class="{'is-invalid': $v.id_card.$error}"
            value="2011-08-19"
          />
          <label class="inputLabel">หมายเลขใบขับขี่</label>
          <input
            class="inputBox form-control"
            type="text"
            v-model="$v.driver_lc.$model"
            :class="{'is-invalid': $v.driver_lc.$error}"
            value="2011-08-19"
          />
        </div>

        <div class="modal-footer">
          <button type="button" class="modalButton btn btn-secondary" data-dismiss="modal">ยกเลิก</button>
          <button type="button" class="modalButton btn btn-primary" @click="submit()">ยืนยัน</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style >
.modalButton.btn {
  font-size: 14px;
}
.inputBox {
  margin-bottom: 0px;
  font-size: 14px;
  padding-bottom: 0px;
}
.inputBox.form-control {
  font-size: 14px;
  font-weight: 200;
}
.inputLabel {
  float: left;
  padding-left: 1px;
  margin-bottom: 1px;
}
.invalid-feedback.invalidFeedbackStyle {
  text-align: left;
  font-size: 11px;
  margin-top: 0px;
  padding: 0px;
  margin-bottom: 10px;
}
</style>

<script>
import axios from "axios";
import {
  required,
  email,
  minLength,
  sameAs,
  maxLength
} from "vuelidate/lib/validators";

function phone(val) {
  return !!val.match(/0[0-9]{9}/);
}

function complexPassword(val) {
  if (!(val.match(/[a-z]/) && val.match(/[A-Z]/) && val.match(/[0-9]/))) {
    return false;
  }
  return true;
}

export default {
  data() {
    return {
      username: "sinlapawit",
      password: "Ez1212312121",
      confirm_password: "Ez1212312121",
      f_name: "fnamer",
      l_name: "lname",
      email: "asd@asd.com",
      phone: "0123456789",
      age: "15",
      dob: "",
      gender: "",
      address: "asd",
      id_card: "asd",
      driver_lc: "asd"
    };
  },
  methods: {
    submit() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        let data = {
          username: this.username,
          password: this.password,
          confirm_password: this.confirm_password,
          f_name: this.f_name,
          l_name: this.l_name,
          email: this.email,
          phone: this.phone,
          age: this.age,
          dob: this.dob,
          gender: this.gender,
          address: this.address,
          id_card: this.id_card,
          driving_lc: this.driver_lc
        };

        axios
          .post("http://localhost:3000/user/signup", data)
          .then(res => {
            console.log(res);

            alert("Signup Complete");
          })
          .catch(err => {
            alert(err.response.data.details.message);
          });
      }
    }
  },
  validations: {
    username: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(20)
    },
    password: {
      required: required,
      minLength: minLength(8),
      complex: complexPassword
    },
    confirm_password: {
      sameAs: sameAs("password")
    },
    f_name: {
      required: required,
      maxLength: maxLength(150)
    },
    l_name: {
      required: required,
      maxLength: maxLength(150)
    },
    email: {
      required: required,
      email: email
    },
    phone: {
      required: required,
      phone: phone
    },
    age: {
      required
    },
    dob: {
      required
    },
    gender: {
      required
    },
    address: {
      required
    },
    id_card: {
      required
    },
    driver_lc: {
      required
    }
  }
};
</script>