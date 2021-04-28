<template>
  <div class="card mainCard">
    <div class="card-body">
      <div class="row">
        <label class="titleLabel col-9 text-left">
          Manage Car
          <button class="btn btn-warning" @click="$router.push('/registercar')">
            <fa icon="plus" />
            <span class="ml-1">เพิ่มรถ</span>
          </button>
        </label>
      </div>
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
                        <span class="badge badge-success ml-2" v-if="item.status == 0">ว่าง</span>
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
                          <span class="badge badge-warning carDetail secondTd">Loanee</span>
                          {{item.f_name + ' ' + item.l_name}}
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
                      <td></td>
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
                          20-04-2021
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
                          20-05-2021
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
                        <div
                          class="carDes text-dark"
                          v-if="item.status!=0"
                          style="padding-top:16px"
                        >
                          <span
                            class="btn btn-outline-primary userDetail secondTd"
                          >View Loanee Detail</span>
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
                        <div class="carDes text-dark" v-if="item.status!=0">
                          <span class="btn btn-outline-primary userDetail secondTd">Manage Image</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </div>
                <!-- right side -->
                <div class="text-right rightSideButton">
                  <button class="btn btn-warning mr-2" v-if="item.status==1">ยืนยันการให้เช่า</button>

                  <button
                    class="btn btn-info mr-2"
                    data-toggle="modal"
                    data-target="#editModal"
                    @click="editCar(item.model, item.vehicle_type, item.plate_num, item.current_location, item.r_price, item.insurance_type, item.insurance_description ,item.vehicle_id)"
                  >แก้ไข</button>

                  <button class="btn btn-danger" @click="deleteCar(item.vehicle_id, index)">ลบ</button>
                </div>
              </div>
              <!-- edit modao -->
              <div
                class="modal fade"
                id="editModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="editModal"
                aria-hidden="true"
                style="margin-top: 100px;"
              >
                <div
                  class="modal-dialog modal-dialog-centered"
                  style="bottom: 120px;"
                  role="document"
                >
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle">Edit Car Detail</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <label class="inputLabel">Car Model</label>
                      <input class="inputBox form-control" v-model="edit_model" placeholder />
                      <label class="inputLabel">Car Type</label>
                      <input class="inputBox form-control" v-model="edit_type" placeholder />
                      <label class="inputLabel">Car Plate</label>
                      <input class="inputBox form-control" v-model="edit_plate" placeholder />
                      <label class="inputLabel">Car Location</label>
                      <input class="inputBox form-control" v-model="edit_location" placeholder />
                      <label class="inputLabel">Car Price</label>
                      <input class="inputBox form-control" v-model="edit_price" placeholder />
                      <hr />
                      <label class="inputLabel">Car Insurance Type</label>
                      <input
                        class="inputBox form-control"
                        v-model="edit_insurance_type"
                        placeholder
                      />
                      <label class="inputLabel">Car Insurance Number</label>
                      <input
                        class="inputBox form-control"
                        v-model="edit_insurance_description"
                        placeholder
                      />
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                        ref="Close"
                      >Close</button>
                      <button type="button" class="btn btn-danger" @click="saveEdit()">Save</button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end edit modal -->
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
  margin-left: 120px;
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
      vehicleList: [],
      temp: [],
      error: null,
      edit_model: "",
      edit_type: "",
      edit_plate: "",
      edit_location: "",
      edit_price: "",
      edit_insurance_type: "",
      edit_insurance_description: "",
      current_vehicleID: ""
    };
  },
  mounted() {
    this.getCarDetail();
    //console.log(this.vehicleList[0].model);
  },
  methods: {
    getCarDetail() {
      axios
        .get(`http://localhost:3000/myCarDetail`)
        .then(response => {
          this.vehicleList = response.data.vehicle;

          console.log(this.vehicleList);
        })
        .catch(error => {
          this.error = error.response.data.message;
        });
    },
    deleteCar(vehicleID, index) {
      const result = confirm(
        `Are you sure you want to delete ${this.vehicleList[index].model}`
      );
      if (result) {
        axios
          .delete(`http://localhost:3000/deleteCar/${vehicleID}`)
          .then(this.$router.go(this.$router.currentRoute))
          .catch(err => {
            alert(err.response.data.message);
          });
      }
    },
    editCar(
      get_model,
      get_type,
      get_plate,
      get_location,
      get_price,
      get_insurance_type,
      get_insurance_description,
      get_vehicle_id
    ) {
      this.edit_model = get_model;
      this.edit_type = get_type;
      this.edit_plate = get_plate;
      this.edit_location = get_location;
      this.edit_price = get_price;
      this.edit_insurance_type = get_insurance_type;
      this.edit_insurance_description = get_insurance_description;
      this.current_vehicleID = get_vehicle_id;
    },
    saveEdit() {
      var vehicleID = this.current_vehicleID;
      console.log(vehicleID);

      const data = {
        model: this.edit_model,
        vehicle_type: this.edit_type,
        plate_num: this.edit_plate,
        current_location: this.edit_location,
        r_price: this.edit_price,
        insurance_type: this.edit_insurance_type,
        insurance_description: this.edit_insurance_description
      };
      axios
        .put(`http://localhost:3000/editCar/${vehicleID}`, data)
        .then(alert("EDIT SUCCESS"), this.$router.go(this.$router.currentRoute))
        .catch(err => {
          alert(err);
        });
    }
  }
};
</script>