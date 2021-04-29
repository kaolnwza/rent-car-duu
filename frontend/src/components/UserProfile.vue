<template>
  <div class="pt-5">
    <div class="row">
      <!-- left side -->
      <div class="col-3">
        <div class="leftSide card">
          <img
            class="leftSide card-img-top rounded-circle"
            src="../assets/images/user.png"
            alt="Card image cap"
          />
          <h5 class="leftSide card-title mt-3 mb-0">{{firstname + ' ' + lastname}}</h5>
          <div class="leftSide card-body">
            <div class="row">
              <div class="col-12">
                <button
                  class="btn btn-outline-primary"
                  data-toggle="modal"
                  data-target="#editModalUser"
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
              <div class="col-9 text-secondary">{{username}}</div>
            </div>
            <hr />
            <div class="profileCol row">
              <div class="profileLeftCol col-3">ชื่อสกุล</div>
              <div class="col-9 text-secondary">{{firstname + ' ' + lastname}}</div>
            </div>
            <hr />
            <div class="profileCol row">
              <div class="profileLeftCol col-3">อีเมล</div>
              <div class="col-9 text-secondary">{{email}}</div>
            </div>
            <hr />
            <div class="profileCol row">
              <div class="profileLeftCol col-3">มือถือ</div>
              <div class="col-9 text-secondary">{{phone}}</div>
            </div>
            <hr />
            <div class="profileCol row">
              <div class="profileLeftCol col-3">วันเกิด</div>
              <div class="col-9 text-secondary">{{birthDate}}</div>
            </div>
            <hr />
            <div class="profileCol row">
              <div class="profileLeftCol col-3">เพศ</div>
              <div class="col-9 text-secondary">{{sex}}</div>
            </div>
            <hr />
            <div class="profileCol row">
              <div class="profileLeftCol col-3">ที่อยู่</div>
              <div class="col-9 text-secondary">{{address}}</div>
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
        <div class="modal-dialog modal-dialog-centered" style="bottom: 70px;" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <label class="inputLabel">ชื่อ</label>
              <input class="inputBox form-control" placeholder />
              <label class="inputLabel">นามสกุล</label>
              <input class="inputBox form-control" placeholder />
              <label class="inputLabel">รหัสผ่าน</label>
              <input class="inputBox form-control" placeholder />
              <label class="inputLabel">ยืนยันรหัสผ่าน</label>
              <input class="inputBox form-control" placeholder />
              <label class="inputLabel">มือถือ</label>
              <input class="inputBox form-control" placeholder />
              <label class="inputLabel">อีเมล</label>
              <input class="inputBox form-control" placeholder />
              <label class="inputLabel">เพศ</label>
              <input class="inputBox form-control" placeholder />
              <label class="inputLabel">วันเกิด</label>
              <input class="inputBox form-control" placeholder />
              <label class="inputLabel">อายุ</label>
              <input class="inputBox form-control" placeholder />
              <label class="inputLabel">เลขบัตรประชาชน</label>
              <input class="inputBox form-control" placeholder />
              <label class="inputLabel">ใบขับขี่</label>
              <input class="inputBox form-control" placeholder />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal" ref="Close">Close</button>
              <button type="button" class="btn btn-danger" @click="saveEdit()">Save</button>
            </div>
          </div>
        </div>
      </div>
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
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      birthDate: "",
      sex: "",
      address: ""
    };
  },
  methods: {
    getUserDetail() {
      axios.get("http://localhost:3000/getUserDetail").then(res => {
        this.userDetail = res.data;
        this.username = this.userDetail.username;
        this.firstname = this.userDetail.fname;
        this.lastname = this.userDetail.lname;
        this.email = this.userDetail.email;
        this.phone = this.userDetail.phone;
        this.birthDate = this.userDetail.dob;
        this.sex = this.userDetail.gender;
        this.address = this.userDetail.address;
        console.log(this.userDetail);
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
</style>