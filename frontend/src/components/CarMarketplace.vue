<template>
  <div class="card mainCard">
    <div class="card-body">
      <!-- modal -->
      <ViewUserProfile :userDetail="userDetail" />
      <CarDetailModal :carDetail="carDetail" :insurDetail="insurDetail" :userDetail="userDetail" />
      <div class="row">
        <label class="titleLabel col-9 text-left">
          Available Car
          <button class="btn btn-warning" @click="$router.push('/registercar')">
            <fa icon="plus" />
            <span class="ml-1">ปล่อยรถ</span>
          </button>
        </label>
        <!-- search box -->

        <div class="input-group col-3 pt-2" style="max-height: 20px">
          <input
            type="text"
            class="form-control"
            placeholder="ex. Tesla"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <div class="input-group-prepend">
            <span class="input-group-text btn" id="basic-addon1">ค้นหา</span>
          </div>
        </div>
      </div>
      <hr style="margin-top: 0px; margin-bottom: 20px;  " />
      <div class="row" style="padding-left: 30px;">
        <div class="col" v-for="(item, index) in vehicleListTest" :key="index">
          <div class="card cardItem text-left">
            <div class="row">
              <div class="col-6 my-auto">
                <img class="carImg" :src="'http://localhost:3000/'+item.image_path" alt />
              </div>
              <div class="col pt-3 pl-4">
                <div class="table table-borderless mb-0">
                  <tbody>
                    <tr>
                      <td>
                        <div class="carTitle">{{item.model}}</div>
                      </td>
                    </tr>
                    <tr>
                      <td style=" width: 455px">
                        <hr class style="padding:0px; margin:0px; padding-bottom: 15px" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="carDes text-dark">
                          <span class="badge badge-primary">Type</span>
                          {{item.vehicle_type}}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="carDes text-dark">
                          <span class="badge badge-info">Plate</span>
                          {{item.plate_num}}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="carDes text-dark">
                          <span class="badge badge-success">Location</span>
                          {{item.current_location}}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="carDes text-dark">
                          <span class="badge badge-warning">Loaner</span>
                          {{item.loaner_user_username}}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </div>
                <div class="text-right pr-3" style="padding-top: 0px;">
                  <div class="text-right mb-1">
                    <label class="priceLabel">{{item.r_price}}</label> บาท/วัน
                  </div>
                  <button
                    class="btn btn-outline-primary btnSize"
                    data-toggle="modal"
                    data-target="#ViewUserProfile"
                    style="margin-right: 190px;"
                    @click="selectingUser(item.loaner_user_username)"
                  >โปรไฟล์ผู้ให้เช่า</button>
                  <button
                    class="btn btn-outline-danger btnSize"
                    data-toggle="modal"
                    data-target="#RentCar"
                  >เช่า</button>
                  <button
                    class="btn btn-outline-primary btnSize ml-2"
                    data-toggle="modal"
                    data-target="#carDetailModal"
                    @click="getCarDetail(item.vehicle_id)"
                  >ดูรายระเอียด</button>
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
  height: 250px;
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
</style>

<script>
import axios from "axios";
import ViewUserProfile from "./ViewUserProfile";
import CarDetailModal from "./CarDetailModal";
export default {
  components: {
    ViewUserProfile,
    CarDetailModal
  },
  data() {
    return {
      userDetail: {},
      carDetail: {},
      insurDetail: {},
      vehicleListTest: [],
      error: null
    };
  },
  mounted() {
    this.getBlogDetail();
    //console.log(this.vehicleListTest[0].model);
  },
  methods: {
    getBlogDetail() {
      axios
        .get(`http://localhost:3000/allCar`)
        .then(response => {
          this.vehicleListTest = response.data.vehicle;
          console.log(this.vehicleListTest);
        })
        .catch(error => {
          this.error = error.response.data.message;
        });
    },
    selectingUser(selectedUser) {
      axios
        .get(`http://localhost:3000/selectUser/${selectedUser}`)
        .then(res => {
          console.log(res.data);

          this.userDetail = res.data;
        })
        .catch(err => {
          alert(err.res.data.message);
        });
    },
    getCarDetail(selectedUser) {
      axios
        .get(`http://localhost:3000/selectUser/vehicle/${selectedUser}`)
        .then(res => {
          console.log(res.data);

          this.carDetail = res.data.vehicle;
          this.insurDetail = res.data.insurance;
          this.userDetail = res.data.user;
        })
        .catch(err => {
          alert(err.res.data.message);
        });
    }
  }
};
</script>