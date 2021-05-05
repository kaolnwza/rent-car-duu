<template>
  <div class="card mainCard">
    <div class="card-body">
      <div class="row">
        <label class="titleLabel col-9 text-left">Renting Car</label>
      </div>
      <!-- show car image modal -->
      <modal name="showCarImage" :width="'40%'" :height="'40%'" :adaptive="true">
        <img
          :src="'http://localhost:3000/'+vehicleList[selectingVehicle].image_path"
          alt
          style="max-width:100%"
        />
      </modal>
      <!-- end show car image -->

      <!-- show car image modal -->
      <modal name="showPayment" :width="'30%'" :height="'75%'" :adaptive="true">
        <img :src="'http://localhost:3000/'+payment_data.image_path" alt style="max-width:100%;" />
      </modal>
      <!-- end show car image -->

      <hr style="margin-top: 0px; margin-bottom: 20px;  " />
      <div class="row" style="padding-left: 30px;">
        <div class="col" v-for="(item, index) in vehicleList" :key="index">
          <div class="card cardItem text-left" :class="{'fadeOpacity': item.status==1}">
            <div class="row">
              <div class="col-12 pt-3" style="padding-left: 35px;">
                <div class="table table-borderless mb-0" style="width: 700px; float:left; ">
                  <tbody>
                    <tr>
                      <td colspan="2">
                        <span class="carTitle">{{item.model}}</span>

                        <span class="badge badge-danger ml-2" v-if="item.status == 2">กำลังเช่า</span>

                        <span
                          class="badge badge-warning ml-2"
                          v-if="item.status == 1"
                        >รอยืนยันการเช่า</span>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td style="width: 300px;">
                        <hr class style="padding:0px; margin:0px; padding-bottom: 15px" />
                      </td>
                    </tr>
                    <!-- first row -->
                    <tr>
                      <td>
                        <div class="carDes text-dark">
                          <span class="badge badge-primary carDetail">Type</span>
                          {{item.vehicle_type}}
                        </div>
                      </td>
                      <td>
                        <div class="carDes text-dark">
                          <span
                            class="badge badge-warning carDetail secondTd"
                            style="margin-right: 6px;"
                          >Loaner</span>
                          <span>{{item.fname + ' ' + item.lname}}</span>
                        </div>
                      </td>
                    </tr>
                    <!-- second row -->
                    <tr>
                      <td>
                        <div class="carDes text-dark">
                          <span class="badge badge-info carDetail">Plate</span>
                          {{item.plate_num}}
                        </div>
                      </td>
                      <td>
                        <div class="carDes text-dark">
                          <span
                            class="badge badge-warning carDetail secondTd"
                            style="margin-right: 6px;"
                          >Renting ID</span>
                          <span v-if="item.renting_id">{{item.renting_id }}</span>
                          <span v-if="!item.renting_id"></span>
                        </div>
                      </td>
                    </tr>
                    <!-- third row -->
                    <tr>
                      <td>
                        <div class="carDes text-dark">
                          <span class="badge badge-success carDetail">Location</span>
                          {{item.current_location}}
                        </div>
                      </td>
                      <td>
                        <div class="carDes text-dark">
                          <span class="badge badge-warning carDetail secondTd">Pick-up Date</span>
                          {{item.s_date}}
                        </div>
                      </td>
                    </tr>
                    <!-- fourth row -->
                    <tr>
                      <td>
                        <div class="carDes text-dark">
                          <span class="badge badge-danger carDetail">Price</span>
                          {{item.r_price}}
                        </div>
                      </td>
                      <td>
                        <div class="carDes text-dark">
                          <span class="badge badge-warning carDetail secondTd">Return Date</span>
                          {{item.e_date}}
                        </div>
                      </td>
                    </tr>
                    <!-- fifth -->
                    <tr>
                      <td>
                        <div class="carDes text-dark pt-3">
                          <span class="badge badge-info carDetail">Insurance Type</span>
                          {{item.insurance_type}}
                        </div>
                      </td>
                      <td>
                        <div class="carDes text-dark pt-3">
                          <span
                            class="btn btn-outline-primary userDetail secondTd"
                            @click="selectingVehicle = index, $modal.show('showCarImage')"
                          >Car Image</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="carDes text-dark">
                          <span class="badge badge-info carDetail">Insurance Desc</span>
                          {{item.insurance_description}}
                        </div>
                      </td>
                      <td>
                        <div class="carDes text-dark">
                          <div class="carDes text-dark">
                            <span
                              class="btn btn-outline-primary userDetail secondTd"
                              @click="getPaymentDetail(item.renting_id)"
                            >Payment Detail</span>
                          </div>
                          <!-- <span class="btn btn-outline-primary userDetail secondTd">Payment Detail</span> -->
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </div>
                <!-- right side -->
                <div class="text-right rightSideButton">
                  <button class="btn btn-warning mr-4" @click="returnCar(item.renting_id)">คืนรถ</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style  scoped>
.card.mainCard {
  border: solid #f8f9fa;
  border-width: 0.2rem;
}
.cardItem {
  width: 1000px;
  height: 260px;
  margin-bottom: 20px;
}
.titleLabel {
  font-size: 40px;
}
.carImg {
  width: 500px;
  height: 249px;
  object-fit: cover;
}
td {
  padding: 0px;
}
.carTitle {
  font-size: 24px;
  margin-bottom: 0px;
}
.carDes {
  font-weight: 400;
  margin-bottom: 2px;
}
.priceLabel {
  font-weight: 600;
  font-size: 20px;
  padding: 0px;
  margin: 0px;
}
.btnSize {
  font-size: 14px;
}
.carDetail {
  width: 100px;
  text-align: left;
}
.secondTd {
  margin-left: 60px;
}
.rightSideButton {
  padding-top: 185px;
  margin-right: 15px;
}
.userDetail {
  width: 150px;
  padding: 0px;
  text-align: center;
  height: 20px;
  font-size: 12px;
  font-weight: bold;
}
.fadeOpacity {
}
.imageCard {
  width: 340px;
  height: 240px;
  object-fit: cover;
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      vehicleList: [],
      temp: [],
      error: null,

      current_vehicleID: "",
      currentImage: "",
      images: "",
      uploadStatus: "",
      selectingVehicle: "0",
      payment_data: ""
    };
  },
  mounted() {
    this.getCarDetail();
    //console.log(this.vehicleList[0].model);
  },
  methods: {
    getCarDetail() {
      axios
        .get(`http://localhost:3000/loaneeCarDetail`)
        .then(response => {
          this.vehicleList = response.data;

          console.log(this.vehicleList);
        })
        .catch(error => {
          this.error = error.response.data.message;
        });
    },
    getPaymentDetail(rentingID) {
      axios
        .get(`http://localhost:3000/paymentDetail/${rentingID}`)
        .then(res => {
          this.payment_data = res.data;
          this.$modal.show("showPayment");
        })
        .catch(err => {
          console.log(err);
        });
    },
    returnCar(renting_id) {
      axios
        .put(`http://localhost:3000/removeRenting/${renting_id}`)
        .then(
          alert("Return Success"),
          this.$router.go(this.$router.currentRoute)
        );
    }
  }
};
</script>