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
          <!-- username -->
          <div>
            <label class="inputLabel">ชื่อบัญชีผู้ใช้</label>
            <input
              class="inputBox form-control"
              v-model="$v.username.$model"
              :class="{'is-invalid': $v.username.$error}"
              placeholder="ex. sinlapawit44"
            />
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.username.required"
            >กรุณากรอกข้อมูล</div>
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.username.mixLength"
            >จำนวนตัวอักษรต้องมากกว่า 5 ตัวอักษร</div>
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.username.maxLength"
            >จำนวนอักษรมากเกินไป</div>
          </div>
          <!-- password -->
          <div>
            <label class="inputLabel">รหัสผ่าน</label>
            <input
              class="inputBox form-control"
              v-model="$v.password.$model"
              :class="{'is-invalid': $v.password.$error}"
              placeholder="ex. 123456"
              type="password"
            />
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.password.required"
            >กรุณากรอกข้อมูล</div>

            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.password.complex"
            >จะต้องมี A-Z, a-z, 0-9 ในรหัสผ่าน</div>
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.password.maxLength"
            >จำนวนอักษรมากเกินไป</div>
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.password.minLength"
            >จำนวนอักษรต้องมากกว่า 8 ตัวอักษร</div>
          </div>
          <div>
            <!-- comfirm password -->
            <label class="inputLabel">ยืนยันรหัสผ่าน</label>
            <input
              class="inputBox form-control"
              v-model="$v.confirm_password.$model"
              :class="{'is-invalid': $v.confirm_password.$error}"
              placeholder="ex. 123456"
              type="password"
            />

            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.confirm_password.required"
            >กรุณากรอกข้อมูล</div>
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.confirm_password.sameAs"
            >รหัสผ่านไม่ตรงกัน</div>
          </div>
          <!-- firstname-->
          <div>
            <label class="inputLabel">ชื่อ</label>
            <input
              class="inputBox form-control"
              v-model="$v.f_name.$model"
              :class="{'is-invalid': $v.f_name.$error}"
              placeholder="ex. Sinlapawit"
            />
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.f_name.required"
            >กรุณากรอกข้อมูล</div>
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.f_name.maxLength"
            >จำนวนตัวอักษรมากเกินไป</div>
          </div>
          <!-- lastname -->
          <div>
            <label class="inputLabel">นามสกุล</label>
            <input
              class="inputBox form-control"
              v-model="$v.l_name.$model"
              :class="{'is-invalid': $v.l_name.$error}"
              placeholder="ex. Ritnamkham"
            />
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.l_name.required"
            >กรุณากรอกข้อมูล</div>
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.l_name.maxLength"
            >จำนวนตัวอักษรมากเกินไป</div>
          </div>
          <!-- email -->
          <div>
            <label class="inputLabel">อีเมล</label>
            <input
              class="inputBox form-control"
              v-model="$v.email.$model"
              :class="{'is-invalid': $v.email.$error}"
              placeholder="ex. naruto500@hotmail.com"
            />

            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.email.required"
            >กรุณากรอกข้อมูล</div>
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.email.email"
            >รูปแบบข้อมูลอีเมลไม่ถูกต้อง</div>
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.email.maxLength"
            >จำนวนตัวอักษรมากเกินไป</div>
          </div>
          <!-- phone -->
          <div>
            <label class="inputLabel">เบอร์โทรศัพท์</label>
            <input
              class="inputBox form-control"
              v-model="$v.phone.$model"
              :class="{'is-invalid': $v.phone.$error}"
              placeholder="ex. 092xxxxxxx"
            />
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.phone.required"
            >กรุณากรอกข้อมูล</div>
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.phone.phone"
            >รูปแบบข้อมูลเบอร์มือถือไม่ถูกต้อง</div>
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.phone.maxLength"
            >จำนวนตัวอักษรมากเกินไป</div>
          </div>
          <!-- age -->
          <div>
            <label class="inputLabel">อายุ</label>
            <input
              type="number"
              class="inputBox form-control"
              v-model="$v.age.$model"
              :class="{'is-invalid': $v.age.$error}"
              placeholder="ex. 29"
            />
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.age.required"
            >กรุณากรอกข้อมูล</div>
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.age.maxLength"
            >รูปแบบข้อมูลอายุไม่ถูกต้อง</div>
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.age.integer"
            >ต้องเป็นตัวเลขเท่านั้น</div>
          </div>
          <!-- date -->
          <div>
            <label class="inputLabel">วัน เดือน ปีเกิด</label>
            <input
              class="inputBox form-control"
              type="date"
              v-model="$v.dob.$model"
              :class="{'is-invalid': $v.dob.$error}"
              value="2011-08-19"
            />
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.dob.required"
            >กรุณากรอกข้อมูล</div>
          </div>
          <!-- gender -->
          <div>
            <label class="inputLabel">เพศ</label>
            <select
              class="inputBox form-control"
              v-model="$v.gender.$model"
              :class="{'is-invalid': $v.gender.$error}"
            >
              <option>male</option>
              <option>female</option>
            </select>
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.gender.required"
            >กรุณากรอกข้อมูล</div>
          </div>
          <!-- address -->
          <div>
            <label class="inputLabel">ที่อยู่</label>
            <textarea
              class="inputBox form-control"
              rows="3"
              v-model="$v.address.$model"
              :class="{'is-invalid': $v.address.$error}"
            ></textarea>
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.address.required"
            >กรุณากรอกข้อมูล</div>
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.address.maxLength"
            >จำนวนตัวอักษรมากเกินไป</div>
          </div>
          <!-- id card -->
          <div>
            <label class="inputLabel">หมายเลขบัตรประชาชน</label>
            <input
              class="inputBox form-control"
              type="text"
              v-model="$v.id_card.$model"
              :class="{'is-invalid': $v.id_card.$error}"
              value="2011-08-19"
              placeholder="ex. 1590003468331"
            />
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.id_card.required"
            >กรุณากรอกข้อมูล</div>
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.id_card.minLength || !$v.id_card.maxLength"
            >รูปแบบข้อมูลเลขบัตรประชาชนไม่ถูกต้อง</div>
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.id_card.integer"
            >ต้องเป็นตัวเลขเท่านั้น</div>
          </div>
          <!-- driving lc -->
          <div>
            <label class="inputLabel">หมายเลขใบขับขี่</label>
            <input
              class="inputBox form-control"
              type="text"
              v-model="$v.driving_lc.$model"
              :class="{'is-invalid': $v.driving_lc.$error}"
              value="2011-08-19"
              placeholder="ex. 49005438"
            />
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.driving_lc.required"
            >กรุณากรอกข้อมูล</div>
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.driving_lc.minLength || !$v.driving_lc.maxLength"
            >รูปแบบข้อมูลหมายเลขใบขับขี่ไม่ถูกต้อง</div>
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.driving_lc.integer"
            >ต้องเป็นตัวเลขเท่านั้น</div>
          </div>
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
  margin-bottom: 5px;
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
  margin-top: 5px;
}
.invalid-feedback.invalidFeedbackStyle {
  text-align: left;
  font-size: 11px;

  padding: 0px;
  margin: 0px;
}
</style>

<script>
import axios from "axios";
import {
  required,
  email,
  minLength,
  sameAs,
  maxLength,
  integer
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
      username: "",
      password: "",
      confirm_password: "",
      f_name: "",
      l_name: "",
      email: "",
      phone: "",
      age: "",
      dob: "",
      gender: "",
      address: "",
      id_card: "",
      driving_lc: ""
      // username: "sinlapawit",
      // password: "Ez1212312121",
      // confirm_password: "Ez1212312121",
      // f_name: "fnamer",
      // l_name: "lname",
      // email: "asd@asd.com",
      // phone: "0123456789",
      // age: "15",
      // dob: "",
      // gender: "",
      // address: "asd",
      // id_card: "asd",
      // driving_lc: "asd"
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
          driving_lc: this.driving_lc
        };

        axios
          .post("http://localhost:3000/user/signup", data)
          .then(res => {
            console.log(res);

            alert("Signup Complete");

            this.$router.push("/carmarketplace");
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
      minLength: minLength(5),
      maxLength: maxLength(20)
    },
    password: {
      required: required,
      minLength: minLength(8),
      maxLength: maxLength(30),
      complex: complexPassword
    },
    confirm_password: {
      required: required,
      sameAs: sameAs("password")
    },
    f_name: {
      required: required,
      maxLength: maxLength(30)
    },
    l_name: {
      required: required,
      maxLength: maxLength(30)
    },
    email: {
      required: required,
      email: email,
      maxLength: maxLength(40)
    },
    phone: {
      required: required,
      phone: phone,
      maxLength: maxLength(10)
    },
    age: {
      required: required,
      maxLength: maxLength(2),
      integer: integer
    },
    dob: {
      required: required
    },
    gender: {
      required: required
    },
    address: {
      required: required,
      maxLength: maxLength(200)
    },
    id_card: {
      required: required,
      minLength: minLength(13),
      maxLength: maxLength(13),
      integer: integer
    },
    driving_lc: {
      required: required,
      minLength: minLength(8),
      maxLength: maxLength(8),
      integer: integer
    }
  }
};
</script>