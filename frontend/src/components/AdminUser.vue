<template>
  <div class="card mainCard">
    <div class="card-body">
      <div class="row">
        <label class="titleLabel col-9 text-left">User Managing</label>
      </div>

      <div class="row" style="padding-left: 30px;">
        <div class="col" v-for="(item, index) in userList" :key="index">
          <div class="card cardItem text-left">
            <div class="row">
              <div class="col-3">
                <div class style="margin: 30px">
                  <img
                    class="card-img-top rounded-circle"
                    :src="'http://localhost:3000/'+item.image_path"
                    alt="Card image cap"
                    style="width: 140px;height: 140px; object-fit: cover;"
                  />
                </div>
              </div>
              <div class="col-5 pt-3" style="margin-top:18px">
                <div class="table table-borderless mb-0" style="width: 700px; float:left; ">
                  <tbody>
                    <!-- 0 row -->
                    <tr>
                      <td>
                        <div class="carDes text-dark">
                          <span class="badge badge-light carDetail">Username</span>
                          {{item.username}}
                        </div>
                      </td>
                    </tr>
                    <!-- first row -->
                    <tr>
                      <td>
                        <div class="carDes text-dark">
                          <span class="badge badge-light carDetail">Name</span>
                          {{item.fname + ' ' + item.lname}}
                        </div>
                      </td>
                    </tr>
                    <!-- sec row -->
                    <tr>
                      <td>
                        <div class="carDes text-dark">
                          <span class="badge badge-light carDetail">ID Card</span>
                          {{item.id_card}}
                        </div>
                      </td>
                    </tr>
                    <!-- third row -->
                    <tr>
                      <td>
                        <div class="carDes text-dark">
                          <span class="badge badge-light carDetail">Driving ID</span>
                          {{item.driving_lc}}
                        </div>
                      </td>
                    </tr>
                    <!-- third row -->
                    <tr>
                      <td>
                        <div class="carDes text-dark">
                          <span
                            class="badge badge-success carDetail"
                            v-if="item.verify_status == '1'"
                          >Verfied</span>
                          <span
                            class="badge badge-danger carDetail"
                            v-if="item.verify_status != '1'"
                          >Unverify</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </div>
                <!-- right side -->
              </div>
              <div class="col-4 text-right" style="margin-top: 150px; padding-right: 25px">
                <!-- <button class="btn btn-outline-primary mr-2">View Proof</button> -->

                <button class="btn btn-primary" @click="verifyUser(item.username)">Verify User</button>
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
  height: 200px;
  margin-bottom: 20px;
}
.titleLabel {
  font-size: 40px;
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
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userList: [],
      temp: [],
      error: null,
      edit_model: "",
      edit_type: "",
      edit_plate: "",
      edit_location: "",
      edit_price: "",
      edit_insurance_type: "",
      edit_insurance_description: "",
      current_vehicleID: "",
      currentImage: "",
      images: "",
      uploadStatus: "",
      selectingVehicle: "0",
      payment_data: ""
    };
  },
  mounted() {
    this.getUserDetail();
    //console.log(this.vehicleList[0].model);
  },
  methods: {
    getUserDetail() {
      axios
        .get(`http://localhost:3000/adminUser`)
        .then(response => {
          this.userList = response.data;

          console.log(this.userList);
        })
        .catch(error => {
          this.error = error.response.data;
        });
    },
    verifyUser(userID) {
      axios.put(`http://localhost:3000/verifyUser/${userID}`).then(() => {
        alert("Verify Success, You need to reload this page");
      });
    }
  }
};
</script>