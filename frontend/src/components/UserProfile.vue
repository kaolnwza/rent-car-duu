<template>
  <div class="pt-5">
    <div class="row">
      <!-- left side -->
      <div class="col-3">
        <div class="leftSide card">
          <img
            class="leftSide card-img-top rounded-circle"
            :src="'http://localhost:3000/'+userDetail.image_path"
            alt="Card image cap"
          />
          <h5 class="leftSide card-title mt-3 mb-0">{{userDetail.fname + ' ' + userDetail.lname}}</h5>
          <div class="leftSide card-body">
            <div class="row">
              <div class="col-12">
                <button
                  class="btn btn-outline-primary"
                  data-toggle="modal"
                  data-target="#editModalUser"
                  @click="makeEditModel(userDetail)"
                >Edit Profile</button>
                <button
                  class="btn btn-outline-primary mt-2"
                  @click="$modal.show('changePasswordModal')"
                >Change Password</button>
              </div>
            </div>
          </div>
        </div>
        <changePWModal />
        <!-- change password modal -->

        <!-- end change password modal -->
        <!-- 
        <div class="leftSideBottom card">
          <div class="leftSideBottom card-body">
            
            <div class="row">
              <div class="col-6">
                <button
                  class="btn btn-outline-info functionButton"
                  @click="$router.push('/loanercarhistory')"
                >ประวัติรถที่ให้เช่า</button>
              </div>

              <div class="col-6">
                <button class="btn btn-outline-primary functionButton leftButton">รถที่ให้เช่า</button>
              </div>

             

              <div class="col-6">
                <button
                  class="btn btn-outline-info functionButton"
                  @click="$router.push('/loaneecarhistory')"
                >ประวัติรถที่เช่า</button>
              </div>
              <div class="col-6">
                <button class="btn btn-outline-primary functionButton leftButton">รถที่เช่า</button>
              </div>
              <div class="col-6">
                <button
                  class="btn btn-outline-info functionButton"
                  @click="$router.push('/paymenthistory')"
                >ประวัติธุรกรรม</button>
              </div>
            </div>
          </div>
        </div>-->
      </div>

      <!-- right side -->
      <div class="col-8 ml-5">
        <div class="rightSide card">
          <h5 class="rightSide card-title">ข้อมูลผู้ใช้</h5>
          <hr class="m-0" />
          <div class="rightSide card-body">
            <div class="profileCol row">
              <div class="profileLeftCol col-3">ชื่อบัญชี</div>
              <div class="col-9 text-secondary">{{userDetail.username}}</div>
            </div>
            <hr />
            <div class="profileCol row">
              <div class="profileLeftCol col-3">ชื่อสกุล</div>
              <div class="col-9 text-secondary">{{userDetail.fname + ' ' + userDetail.lname}}</div>
            </div>
            <hr />
            <div class="profileCol row">
              <div class="profileLeftCol col-3">อีเมล</div>
              <div class="col-9 text-secondary">{{userDetail.email}}</div>
            </div>
            <hr />
            <div class="profileCol row">
              <div class="profileLeftCol col-3">มือถือ</div>
              <div class="col-9 text-secondary">{{userDetail.phone}}</div>
            </div>
            <hr />
            <div class="profileCol row">
              <div class="profileLeftCol col-3">วันเกิด</div>
              <div class="col-9 text-secondary">{{userDetail.dob}}</div>
            </div>
            <hr />
            <div class="profileCol row">
              <div class="profileLeftCol col-3">เพศ</div>
              <div class="col-9 text-secondary">{{userDetail.gender}}</div>
            </div>
            <hr />
            <div class="profileCol row">
              <div class="profileLeftCol col-3">ที่อยู่</div>
              <div class="col-9 text-secondary">{{userDetail.address}}</div>
            </div>
            <hr />
            <div class="profileCol row">
              <div class="profileLeftCol col-3">เลขบัตรประชาชน</div>
              <div class="col-9 text-secondary">{{userDetail.id_card}}</div>
            </div>
            <hr />
            <div class="profileCol row">
              <div class="profileLeftCol col-3">เลขใบขับขี่</div>
              <div class="col-9 text-secondary">{{userDetail.driving_lc}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- edit modao -->
    <div
      class="modal fade"
      id="editModalUser"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editModalUser"
      aria-hidden="true"
      style="margin-top: 100px;"
    >
      <div
        class="modal-dialog modal-dialog-centered modal-xl"
        style="bottom: 100px;"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-body row pt-5">
            <!-- image -->
            <div class="col-3 pl-5">
              <div style="height: 400px; margin-left:15px; padding-top:30px;">
                <img class="card imageCard" :src="'http://localhost:3000/'+edit_image" />

                <input
                  class="btn btn-outline-secondary mt-3"
                  style="font-weight: 400; width: 208px; "
                  type="file"
                  name="image"
                  id="image"
                  @change="selectImages"
                />
                <br />
                <button
                  class="btn btn-outline-primary mt-2"
                  style="font-weight: 400; width: 208px;"
                  @click="submitUserImage()"
                >Add Image</button>
              </div>
            </div>
            <!-- righht side -->
            <div class="col-4 ml-5">
              <div>
                <label class="inputLabel">ชื่อ</label>
                <input
                  class="inputBox form-control"
                  v-model="$v.edit_fname.$model"
                  :class="{'is-invalid': $v.edit_fname.$error}"
                  placeholder="ex. Sinlapawit"
                />
                <div
                  class="invalid-feedback invalidFeedbackStyle"
                  v-if="!$v.edit_fname.required"
                >กรุณากรอกข้อมูล</div>
                <div
                  class="invalid-feedback invalidFeedbackStyle"
                  v-if="!$v.edit_fname.maxLength"
                >จำนวนตัวอักษรมากเกินไป</div>
              </div>
              <!-- lastname -->
              <div>
                <label class="inputLabel">นามสกุล</label>
                <input
                  class="inputBox form-control"
                  v-model="$v.edit_lname.$model"
                  :class="{'is-invalid': $v.edit_lname.$error}"
                  placeholder="ex. Ritnamkham"
                />
                <div
                  class="invalid-feedback invalidFeedbackStyle"
                  v-if="!$v.edit_lname.required"
                >กรุณากรอกข้อมูล</div>
                <div
                  class="invalid-feedback invalidFeedbackStyle"
                  v-if="!$v.edit_lname.maxLength"
                >จำนวนตัวอักษรมากเกินไป</div>
              </div>
              <!-- email -->
              <div>
                <label class="inputLabel">อีเมล</label>
                <input
                  class="inputBox form-control"
                  v-model="$v.edit_email.$model"
                  :class="{'is-invalid': $v.edit_email.$error}"
                  placeholder="ex. naruto500@hotmail.com"
                />

                <div
                  class="invalid-feedback invalidFeedbackStyle"
                  v-if="!$v.edit_email.required"
                >กรุณากรอกข้อมูล</div>
                <div
                  class="invalid-feedback invalidFeedbackStyle"
                  v-if="!$v.edit_email.email"
                >รูปแบบข้อมูลอีเมลไม่ถูกต้อง</div>
                <div
                  class="invalid-feedback invalidFeedbackStyle"
                  v-if="!$v.edit_email.maxLength"
                >จำนวนตัวอักษรมากเกินไป</div>
              </div>
              <!-- phone -->
              <div>
                <label class="inputLabel">เบอร์โทรศัพท์</label>
                <input
                  class="inputBox form-control"
                  v-model="$v.edit_phone.$model"
                  :class="{'is-invalid': $v.edit_phone.$error}"
                  placeholder="ex. 092xxxxxxx"
                />
                <div
                  class="invalid-feedback invalidFeedbackStyle"
                  v-if="!$v.edit_phone.required"
                >กรุณากรอกข้อมูล</div>
                <div
                  class="invalid-feedback invalidFeedbackStyle"
                  v-if="!$v.edit_phone.phone"
                >รูปแบบข้อมูลเบอร์มือถือไม่ถูกต้อง</div>
                <div
                  class="invalid-feedback invalidFeedbackStyle"
                  v-if="!$v.edit_phone.maxLength"
                >จำนวนตัวอักษรมากเกินไป</div>
              </div>
              <!-- age -->
              <div>
                <label class="inputLabel">อายุ</label>
                <input
                  type="number"
                  class="inputBox form-control"
                  v-model="$v.edit_age.$model"
                  :class="{'is-invalid': $v.edit_age.$error}"
                  placeholder="ex. 29"
                />
                <div
                  class="invalid-feedback invalidFeedbackStyle"
                  v-if="!$v.edit_age.required"
                >กรุณากรอกข้อมูล</div>
                <div
                  class="invalid-feedback invalidFeedbackStyle"
                  v-if="!$v.edit_age.maxLength"
                >รูปแบบข้อมูลอายุไม่ถูกต้อง</div>
                <div
                  class="invalid-feedback invalidFeedbackStyle"
                  v-if="!$v.edit_age.integer"
                >ต้องเป็นตัวเลขเท่านั้น</div>
              </div>
            </div>
            <!-- col -->
            <div class="col-4">
              <!-- date -->
              <div>
                <label class="inputLabel">วัน เดือน ปีเกิด</label>
                <input
                  class="inputBox form-control"
                  type="date"
                  v-model="$v.edit_dob.$model"
                  :class="{'is-invalid': $v.edit_dob.$error}"
                  value="2011-08-19"
                />
                <div
                  class="invalid-feedback invalidFeedbackStyle"
                  v-if="!$v.edit_dob.required"
                >กรุณากรอกข้อมูล</div>
              </div>
              <!-- gender -->
              <div>
                <label class="inputLabel">เพศ</label>
                <select
                  class="inputBox form-control"
                  v-model="$v.edit_gender.$model"
                  :class="{'is-invalid': $v.edit_gender.$error}"
                >
                  <option>male</option>
                  <option>female</option>
                </select>
                <div
                  class="invalid-feedback invalidFeedbackStyle"
                  v-if="!$v.edit_gender.required"
                >กรุณากรอกข้อมูล</div>
              </div>
              <!-- address -->
              <div>
                <label class="inputLabel">ที่อยู่</label>
                <input
                  class="inputBox form-control"
                  rows="3"
                  v-model="$v.edit_address.$model"
                  :class="{'is-invalid': $v.edit_address.$error}"
                />
                <div
                  class="invalid-feedback invalidFeedbackStyle"
                  v-if="!$v.edit_address.required"
                >กรุณากรอกข้อมูล</div>
                <div
                  class="invalid-feedback invalidFeedbackStyle"
                  v-if="!$v.edit_address.maxLength"
                >จำนวนตัวอักษรมากเกินไป</div>
              </div>
              <!-- id card -->
              <div>
                <label class="inputLabel">หมายเลขบัตรประชาชน</label>
                <input
                  class="inputBox form-control"
                  type="text"
                  v-model="$v.edit_id_card.$model"
                  :class="{'is-invalid': $v.edit_id_card.$error}"
                  value="2011-08-19"
                  placeholder="ex. 1590003468331"
                />
                <div
                  class="invalid-feedback invalidFeedbackStyle"
                  v-if="!$v.edit_id_card.required"
                >กรุณากรอกข้อมูล</div>
                <div
                  class="invalid-feedback invalidFeedbackStyle"
                  v-if="!$v.edit_id_card.minLength || !$v.edit_id_card.maxLength"
                >รูปแบบข้อมูลเลขบัตรประชาชนไม่ถูกต้อง</div>
                <div
                  class="invalid-feedback invalidFeedbackStyle"
                  v-if="!$v.edit_id_card.integer"
                >ต้องเป็นตัวเลขเท่านั้น</div>
              </div>
              <!-- driving lc -->
              <div>
                <label class="inputLabel">หมายเลขใบขับขี่</label>
                <input
                  class="inputBox form-control"
                  type="text"
                  v-model="$v.edit_driving_lc.$model"
                  :class="{'is-invalid': $v.edit_driving_lc.$error}"
                  value="2011-08-19"
                  placeholder="ex. 49005438"
                />
                <div
                  class="invalid-feedback invalidFeedbackStyle"
                  v-if="!$v.edit_driving_lc.required"
                >กรุณากรอกข้อมูล</div>
                <div
                  class="invalid-feedback invalidFeedbackStyle"
                  v-if="!$v.edit_driving_lc.minLength || !$v.edit_driving_lc.maxLength"
                >รูปแบบข้อมูลหมายเลขใบขับขี่ไม่ถูกต้อง</div>
                <div
                  class="invalid-feedback invalidFeedbackStyle"
                  v-if="!$v.edit_driving_lc.integer"
                >ต้องเป็นตัวเลขเท่านั้น</div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" ref="Close">Close</button>
            <button type="button" class="btn btn-danger" @click="saveEdit(userDetail.username)">Save</button>
          </div>
        </div>
      </div>
    </div>
    <!-- end edit modal -->
  </div>
</template>

<script>
import changePWModal from "./ChangePasswordModal";
import axios from "axios";
import {
  required,
  email,
  minLength,
  //sameAs,
  maxLength,
  integer
} from "vuelidate/lib/validators";

function phone(val) {
  return !!val.match(/0[0-9]{9}/);
}

// function complexPassword(val) {
//   if (!(val.match(/[a-z]/) && val.match(/[A-Z]/) && val.match(/[0-9]/))) {
//     return false;
//   }
//   return true;
// }
export default {
  data() {
    return {
      userDetail: [],
      editUser: [],
      images: "",
      userImage: "",

      edit_fname: "a",
      edit_lname: "a",
      edit_phone: "a",
      edit_age: "a",
      edit_dob: "a",
      edit_gender: "a",
      edit_id_card: "a",
      edit_driving_lc: "a",
      edit_address: "a",
      edit_email: "a",
      edit_image: "CarImage/image-1620058609385.jpg",

      edit_password: "",
      edit_confirm_password: ""
    };
  },
  components: { changePWModal },
  validations: {
    edit_fname: {
      required: required,
      maxLength: maxLength(30)
    },
    edit_lname: {
      required: required,
      maxLength: maxLength(30)
    },
    edit_email: {
      required: required,
      email: email,
      maxLength: maxLength(40)
    },
    edit_phone: {
      required: required,
      phone: phone,
      maxLength: maxLength(10)
    },
    edit_age: {
      required: required,
      maxLength: maxLength(2),
      integer: integer
    },
    edit_dob: {
      required: required
    },
    edit_gender: {
      required: required
    },
    edit_address: {
      required: required,
      maxLength: maxLength(200)
    },
    edit_id_card: {
      required: required,
      minLength: minLength(13),
      maxLength: maxLength(13),
      integer: integer
    },
    edit_driving_lc: {
      required: required,
      minLength: minLength(8),
      maxLength: maxLength(8),
      integer: integer
    }
  },
  methods: {
    getUserDetail() {
      axios.get("http://localhost:3000/getUserDetail").then(res => {
        this.userDetail = res.data;

        this.userDetail.dob = this.userDetail.dob.slice(0, 10);

        this.userImage = this.userDetail.image_path;
        console.log(this.userDetail);
        console.log("edit \n", this.editUser);
      });
    },

    changePassword() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const data = {
          input_password: this.old_password,
          new_password: this.new_password
        };
        axios
          .put(`http://localhost:3000/changePassword`, data)
          .then(res => {
            alert("Change Password Success!");
            console.log(res.data);
          })
          .catch(() => {
            alert("Old Password Invalid");
          });
      }
    },
    makeEditModel() {
      this.edit_fname = this.userDetail.fname;
      this.edit_lname = this.userDetail.lname;
      this.edit_phone = this.userDetail.phone;
      this.edit_age = this.userDetail.age;
      this.edit_dob = this.userDetail.dob;
      this.edit_gender = this.userDetail.gender;
      this.edit_email = this.userDetail.email;
      this.edit_address = this.userDetail.address;
      this.edit_id_card = this.userDetail.id_card;
      this.edit_driving_lc = this.userDetail.driving_lc;
      this.edit_image = this.userDetail.image_path;
    },
    selectImages(event) {
      this.images = event.target.files;
    },
    submitUserImage() {
      console.log("addimage method");

      let formData = new FormData();
      this.images.forEach(image => {
        formData.append("image", image);
      });

      axios
        .post(`http://localhost:3000/submitUserImage`, formData)
        .then(res => {
          this.edit_image = res.data.image;
        })
        .catch(err => {
          alert(err);
        });
    },
    saveEdit() {
      this.$v.$touch();
      var userID = this.userDetail.username;
      if (!this.$v.$invalid) {
        const data = {
          fname: this.edit_fname,
          lname: this.edit_lname,
          email: this.edit_email,
          address: this.edit_address,
          age: this.edit_age,
          phone: this.edit_phone,
          gender: this.edit_gender,
          dob: this.edit_dob,
          id_card: this.edit_id_card,
          driving_lc: this.edit_driving_lc,

          image_path: this.edit_image
        };

        axios
          .put(`http://localhost:3000/editUser/${userID}`, data)
          .then(
            alert("EDIT SUCCESS"),
            this.$router.go(this.$router.currentRoute)
          )
          .catch(err => {
            alert(err);
          });
      }
    }
  },
  mounted() {
    this.getUserDetail();
  }
};
</script>

<style scoped>
.leftSide.card {
  padding-top: 20px;
  width: 300px;
  height: 350px;
}
.leftSide.card-title {
  font-size: 19px;
}
.leftSide.card-img-top {
  width: 150px;
  height: 150px;
  margin: 0 auto;
  object-fit: cover;
}

.leftSideBottom.card {
  margin-top: 10px;
  padding-top: 0px;
  width: 300px;
  height: 150px;
}

.rightSide.card-title {
  text-align: left;
  padding-left: 30px;
  padding-top: 12px;
  font-weight: 500;
  font-size: 22px;
}
.profileCol {
  text-align: left;
}
.profileLeftCol {
  padding-left: 30px;
}
.functionButton {
  text-align: left;
  width: 128px;

  margin-bottom: 5px;
  font-size: 14px;
}
.leftButton {
  width: 100px;
}
.imageCard {
  width: 208px;
  height: 208px;
  object-fit: cover;
}
.invalid-feedback.invalidFeedbackStyle {
  text-align: left;
  font-size: 11px;

  padding: 0px;
  margin: 0px;
}
</style>