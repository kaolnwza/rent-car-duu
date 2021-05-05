<template>
  <div
    class="modal fade"
    id="RentCar"
    tabindex="-1"
    role="dialog"
    aria-labelledby="RentCar"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle" style="font-size: 25px">หลักฐานการเช่า</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body text-left">
          <!-- 
          <form>
            <label for class="textLabel">ชื่อบัญชี</label>
            <div class="custom-file">
              <label class="custom-file-label" for="customFile">Sinlapawit Ritnamkham</label>
            </div>
          </form>
          <form>
            <label for class="textLabel">เลขบัญชี</label>
            <div class="custom-file">
              <label class="custom-file-label" for="customFile">005-7-55476-1</label>
            </div>
          </form>-->
          <!-- <form>
            <label for class="textLabel">บัตรประชาชน</label>
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="customFile" />
              <label class="custom-file-label" for="customFile">Choose file</label>
            </div>
          </form>
          <form>
            <label for class="textLabel">ใบขับขี่</label>
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="customFile" />
              <label class="custom-file-label" for="customFile">Choose file</label>
            </div>
          </form>-->
          <div>
            <label for class="textLabel">ประเภทการโอน</label>

            <select
              class="inputBox form-control"
              v-model="$v.payment_method.$model"
              :class="{'is-invalid': $v.payment_method.$error}"
            >
              <option>Credit Cards</option>
              <option>Mobile Payments</option>
              <option>Bank Transfers</option>
            </select>

            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.uploadStatus.required"
            >กรุณากรอกข้อมูล</div>
          </div>
          <div>
            <label for class="textLabel">ใบเสร็จโอนเงิน</label>
            <div class="custom-file" style=" width: 218px;">
              <input type="file" class="custom-file-input" id="customFile" @change="selectImages" />
              <label class="custom-file-label" for="customFile">Choose file</label>
            </div>
            <label
              class="btn btn-outline-primary"
              style="font-size:13px; margin-left: 10px; margin-top: 15px"
              @click="submitPaymentImage()"
              :class="{'btn-outline-danger is-invalid': $v.uploadStatus.$error}"
            >Upload</label>
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.uploadStatus.required"
            >กรุณากรอกข้อมูล</div>
          </div>
          <div>
            <label for class="textLabel">วันที่รับรถ</label>
            <input
              type="date"
              class="form-control"
              aria-label="Username"
              aria-describedby="basic-addon1"
              v-model="$v.pickup_date.$model"
              :class="{'is-invalid': $v.pickup_date.$error}"
            />
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.pickup_date.required"
            >กรุณากรอกข้อมูล</div>
          </div>
          <div>
            <label for class="textLabel">วันที่คืนรถ</label>
            <input
              type="date"
              class="form-control"
              aria-label="Username"
              aria-describedby="basic-addon1"
              v-model="$v.return_date.$model"
              :class="{'is-invalid': $v.pickup_date.$error}"
            />
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.return_date.required"
            >กรุณากรอกข้อมูล</div>
          </div>
          <div>
            <label for class="textLabel">จำนวนวันทั้งหมด</label>
            <input
              type="text"
              class="form-control"
              placeholder="ex. ร้านของผู้ให้เช่า"
              aria-label="Username"
              aria-describedby="basic-addon1"
              readonly
              v-model="all_day"
            />
          </div>
          <div>
            <label for class="textLabel">สถานที่รับรถ</label>
            <input
              type="text"
              class="form-control"
              placeholder="ex. เซนทรัลเวิลด์"
              aria-label="Username"
              aria-describedby="basic-addon1"
              v-model="$v.pickup_location.$model"
              :class="{'is-invalid': $v.pickup_location.$error}"
            />
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.pickup_location.required"
            >กรุณากรอกข้อมูล</div>
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.pickup_location.maxLength"
            >จำนวนตัวอักษรมากเกินไป</div>
          </div>
          <div>
            <label for class="textLabel">สถานที่คืนรถ</label>
            <input
              type="text"
              class="form-control"
              placeholder="ex. ร้านของผู้ให้เช่า"
              aria-label="Username"
              aria-describedby="basic-addon1"
              v-model="$v.return_location.$model"
              :class="{'is-invalid': $v.return_location.$error}"
            />
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.return_location.required"
            >กรุณากรอกข้อมูล</div>
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.return_location.maxLength"
            >จำนวนตัวอักษรมากเกินไป</div>
          </div>
          <div>
            <label for class="textLabel">ราคาทั้งหมด</label>
            <input
              type="text"
              class="form-control"
              placeholder="ex. ร้านของผู้ให้เช่า"
              aria-label="Username"
              aria-describedby="basic-addon1"
              readonly
              v-model="all_price"
            />
          </div>
        </div>

        <div class="modal-footer p-1">
          <button class="btn btn-primary mr-2" style="font-size: 14px;" @click="renting()">ยืนยัน</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
<script>
import axios from "axios";
import {
  required,
  maxLength
  //integer
} from "vuelidate/lib/validators";
export default {
  //carDetail : selectingCar, userDetail : loaner
  props: ["carDetail", "userDetail"],
  data() {
    return {
      pickup_date: "",
      pickup_date_time: "",
      return_date: "",
      return_date_time: "",
      all_price: 0,
      all_day: 0,
      pickup_location: "",
      return_location: "",
      payment_method: "",
      myUsername: "",
      images: "",
      currentImage: "",
      uploadStatus: "",
      loginStatus: ""
    };
  },
  mounted() {
    this.loginStatus = localStorage.getItem("login_status");
    if (this.loginStatus) {
      this.getMyUsername();
    }
  },
  validations: {
    payment_method: {
      required: required
    },
    uploadStatus: {
      required: required
    },
    pickup_date: {
      required: required
    },
    return_date: {
      required: required
    },
    pickup_location: {
      required: required,
      maxLength: maxLength(100)
    },
    return_location: {
      required: required,
      maxLength: maxLength(100)
    }
  },
  watch: {
    pickup_date: function() {
      this.pickup_date_time = new Date(this.pickup_date);

      if (this.pickup_date_time && this.return_date_time) {
        this.all_day = this.dayCal(
          this.return_date_time,
          this.pickup_date_time
        );

        this.all_price = this.carDetail.r_price * this.all_day;
      }
      //this.test = this.test.getTime();

      //this.test = val;
    },
    return_date: function() {
      this.return_date_time = new Date(this.return_date);
      if (this.pickup_date_time && this.return_date_time) {
        this.all_day = this.dayCal(
          this.return_date_time,
          this.pickup_date_time
        );

        this.all_price = this.carDetail.r_price * this.all_day;
      }
    }
  },
  methods: {
    //asd
    dayCal(val1, val2) {
      var daysLeft = val1 - val2;
      daysLeft /= 24 * 3600 * 1000;

      return daysLeft;
    },
    renting() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        if (this.myUsername != this.userDetail.username) {
          if (this.all_day > 0) {
            var data = {
              vehicle_id: this.carDetail.vehicle_id,
              s_date: this.pickup_date,
              e_date: this.return_date,
              total_time: this.all_day,
              total_price: this.all_price,
              image_path: this.currentImage,
              payment_method: this.payment_method,
              pickup_location: this.pickup_location,
              return_location: this.return_location
            };

            axios
              .post("http://localhost:3000/rentCar", data)
              .then(
                alert("Transaction Complete"),
                this.$router.go(this.$router.currentRoute)
              )
              .catch(err => {
                console.log(err);
              });
          } else {
            alert("Invalid Date Input");
          }
        } else {
          alert("You cannot rent your car");
        }
      }
    },
    getMyUsername() {
      axios
        .get("http://localhost:3000/getUserDetail")
        .then(res => {
          (this.myUsername = res.data.username), console.log(this.myUsername);
        })
        .catch(err => {
          console.log(err);
        });
    },
    selectImages(event) {
      this.images = event.target.files;
    },
    submitPaymentImage() {
      console.log("addimage method");

      let formData = new FormData();

      this.images.forEach(image => {
        formData.append("image", image);
      });

      axios
        .post(`http://localhost:3000/submitImage/payment_image`, formData)
        .then(res => {
          alert("Upload Success!");
          console.log("uploaded");
          this.currentImage = res.data.image;
          this.uploadStatus = "uploaded";
        })
        .catch(err => {
          alert(err);
        });
    }
  }
};
</script>

<style scoped>
.custom-file {
  width: 300px;
  margin-bottom: 10px;
  font-size: 13px;
}
.form-control {
  width: 450px;
  margin-bottom: 10px;
}
.textLabel {
  width: 150px;
}
.invalid-feedback.invalidFeedbackStyle {
  text-align: left;
  font-size: 11px;

  padding: 0px;
  margin: 0px;
}
</style>

