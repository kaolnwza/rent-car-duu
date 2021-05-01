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
              </div>
            </div>
          </div>
        </div>

        <div class="leftSideBottom card">
          <div class="leftSideBottom card-body">
            <!--- -->
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

              <!-- -->

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
        </div>
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
          class="modal-dialog modal-dialog-centered modal-lg"
          style="bottom: 100px;"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-body row">
              <!-- image -->
              <div class="col-5 pl-5 pt-4">
                <div style="height: 400px; margin-left:25px; ">
                  <img class="card imageCard" :src="'http://localhost:3000/'+edit_image" />

                  <input
                    class="btn btn-outline-secondary mt-3"
                    style="font-weight: 400; width: 240px; "
                    type="file"
                    name="image"
                    id="image"
                    @change="selectImages"
                  />
                  <br />
                  <button
                    class="btn btn-outline-primary mt-3"
                    style="font-weight: 400; width: 240px;"
                    @click="submitUserImage()"
                  >Add Image</button>
                </div>
              </div>
              <!-- righht side -->
              <div class="col-6 ml-5">
                <label class="inputLabel">ชื่อ</label>
                <input class="inputBox form-control" v-model="edit_fname" placeholder />
                <label class="inputLabel">นามสกุล</label>
                <input class="inputBox form-control" v-model="edit_lname" placeholder />
                <label class="inputLabel">มือถือ</label>
                <input class="inputBox form-control" v-model="edit_phone" placeholder />
                <label class="inputLabel">อีเมล</label>
                <input class="inputBox form-control" v-model="edit_email" placeholder />
                <label class="inputLabel">เพศ</label>
                <select class="inputBox form-control" v-model="edit_gender">
                  <option>male</option>
                  <option>female</option>
                </select>
                <label class="inputLabel">วัดเกิด</label>
                <input class="inputBox form-control" v-model="edit_dob" placeholder type="date" />
                <label class="inputLabel">อายุ</label>
                <input class="inputBox form-control" v-model="edit_age" placeholder />
                <label class="inputLabel">ที่อยู่</label>
                <input class="inputBox form-control" v-model="edit_address" placeholder />
                <label class="inputLabel">เลขบัตรประชาชน</label>
                <input class="inputBox form-control" v-model="edit_id_card" placeholder />
                <label class="inputLabel">เลขใบขับขี่</label>
                <input class="inputBox form-control" v-model="edit_driving_lc" placeholder />
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal" ref="Close">Close</button>
              <button
                type="button"
                class="btn btn-danger"
                @click="saveEdit(userDetail.username)"
              >Save</button>
            </div>
          </div>
        </div>
      </div>
      <!--
      <div
        class="modal fade"
        id="editModalUser"
        tabindex="-1"
        role="dialog"
        aria-labelledby="editModalUser"
        aria-hidden="true"
        style="margin-top: 100px;"
      >
        <div class="modal-dialog modal-dialog-centered" style="bottom: 100px;" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <label class="inputLabel">ชื่อ</label>
              <input class="inputBox form-control" v-model="edit_fname" placeholder />
              <label class="inputLabel">นามสกุล</label>
              <input class="inputBox form-control" v-model="edit_lname" placeholder />
              <label class="inputLabel">รหัสผ่าน</label>
              <input class="inputBox form-control" v-model="edit_password" placeholder />
              <label class="inputLabel">ยืนยันรหัสผ่าน</label>
              <input class="inputBox form-control" v-model="edit_confirm_password" placeholder />
              <label class="inputLabel">มือถือ</label>
              <input class="inputBox form-control" v-model="edit_phone" placeholder />
              <label class="inputLabel">อีเมล</label>
              <input class="inputBox form-control" v-model="edit_email" placeholder />
              <label class="inputLabel">เพศ</label>
              <input class="inputBox form-control" v-model="edit_gender" placeholder />
              <label class="inputLabel">วันเกิด</label>
              <input class="inputBox form-control" v-model="edit_dob" placeholder />
              <label class="inputLabel">อายุ</label>
              <input class="inputBox form-control" v-model="edit_age" placeholder />
              <label class="inputLabel">ที่อยู่</label>
              <input class="inputBox form-control" v-model="edit_address" placeholder />
              <label class="inputLabel">เลขบัตรประชาชน</label>
              <input class="inputBox form-control" v-model="edit_id_card" placeholder />
              <label class="inputLabel">เลขใบขับขี่</label>
              <input class="inputBox form-control" v-model="edit_driving_lc" placeholder />
              <div class="text-right mt-2">
                <button type="button" class="btn btn-danger" @click="saveEdit()">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>-->
      <!-- end edit modal -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      userDetail: [],
      editUser: [],
      images: "",
      userImage: "",

      edit_fname: "",
      edit_lname: "",
      edit_phone: "",
      edit_age: "",
      edit_dob: "",
      edit_gender: "",
      edit_id_card: "",
      edit_driving_lc: "",
      edit_address: "",
      edit_email: "",
      edit_image: "",

      edit_password: "",
      edit_confirm_password: ""
    };
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
      var userID = this.userDetail.username;

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
        .then(alert("EDIT SUCCESS"), this.$router.go(this.$router.currentRoute))
        .catch(err => {
          alert(err);
        });
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
  height: 300px;
}
.leftSide.card-title {
  font-size: 22px;
}
.leftSide.card-img-top {
  width: 150px;
  margin: 0 auto;
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
  width: 240px;
  height: 240px;
  object-fit: cover;
}
</style>