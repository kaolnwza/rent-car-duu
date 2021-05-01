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
          <form>
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
          </form>
          <form>
            <label for class="textLabel">ประเภทการโอน</label>
            <div class="custom-file">
              <select class="inputBox form-control" style="width: 100%;" v-model="payment_method">
                <option>Credit Cards</option>
                <option>Mobile Payments</option>
                <option>Bank Transfers</option>
              </select>
            </div>
          </form>
          <form>
            <label for class="textLabel">ใบเสร็จโอนเงิน</label>
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="customFile" />
              <label class="custom-file-label" for="customFile">Choose file</label>
            </div>
          </form>

          <label for class="textLabel">วันที่รับรถ</label>
          <input
            type="date"
            class="form-control"
            aria-label="Username"
            aria-describedby="basic-addon1"
            v-model="pickup_date"
          />
          <label for class="textLabel">วันที่คืนรถ</label>
          <input
            type="date"
            class="form-control"
            aria-label="Username"
            aria-describedby="basic-addon1"
            v-model="return_date"
          />
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

          <label for class="textLabel">สถานที่รับรถ</label>
          <input
            type="text"
            class="form-control"
            placeholder="ex. เซนทรัลเวิลด์"
            aria-label="Username"
            aria-describedby="basic-addon1"
            v-model="pickup_location"
          />
          <label for class="textLabel">สถานที่คืนรถ</label>
          <input
            type="text"
            class="form-control"
            placeholder="ex. ร้านของผู้ให้เช่า"
            aria-label="Username"
            aria-describedby="basic-addon1"
            v-model="return_location"
          />
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
export default {
  //carDetail : selectingCar, userDetail : loaner
  props: ["carDetail", "insurDetail", "userDetail"],
  data() {
    return {
      username: "narutoKonoha",
      firstname: "Firstname",
      lastname: "Lastname",
      email: "narutoKonoha@konoha.com",
      phone: "01212312",
      birthDate: "10/10/xxxx",
      sex: "ชาย",
      address: "โคโนฮะคากุเระ",
      pickup_date: "",
      pickup_date_time: "",
      return_date: "",
      return_date_time: "",
      all_price: 0,
      all_day: 0,
      pickup_location: "",
      return_location: "",
      payment_method: "",
      myUsername: ""
    };
  },
  mounted() {
    this.getMyUsername();
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
    dayCal(val1, val2) {
      var daysLeft = val1 - val2;
      daysLeft /= 24 * 3600 * 1000;

      return daysLeft;
    },
    renting() {
      if (this.myUsername != this.userDetail.username) {
        if (this.all_day > 0) {
          var data = {
            vehicle_id: this.carDetail.vehicle_id,
            s_date: this.pickup_date,
            e_date: this.return_date,
            total_time: this.all_day,
            total_price: this.all_price
          };

          axios
            .post("http://localhost:3000/rentCar", data)
            .then(alert("Transaction Complete"))
            .catch(err => {
              console.log(err);
            });
        } else {
          alert("Invalid Date Input");
        }
      } else {
        alert("You cannot rent your car");
        this.$router.go(this.$router.currentRoute);
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
</style>
