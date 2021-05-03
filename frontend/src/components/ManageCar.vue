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
                          <span
                            class="badge badge-warning carDetail secondTd"
                            style="margin-right: 6px;"
                          >Loanee</span>
                          <span v-if="item.f_name">{{item.f_name + ' ' + item.l_name}}</span>
                          <span v-if="!item.f_name">No Loanee</span>
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
                          <!-- <span class="btn btn-outline-primary userDetail secondTd">View Loanee Detail</span> -->
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
                          <span
                            class="btn btn-outline-primary userDetail secondTd"
                          >View Loanee Detail</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </div>
                <!-- right side -->
                <div class="text-right rightSideButton">
                  <button
                    class="btn btn-warning mr-2"
                    v-if="item.status==1"
                    @click="confirmRenting(item.vehicle_id)"
                  >ยืนยันการให้เช่า</button>

                  <button
                    class="btn btn-info mr-2"
                    data-toggle="modal"
                    data-target="#editModal"
                    @click="editCar(item.model, item.vehicle_type, item.plate_num, item.current_location, item.r_price, item.insurance_type, item.insurance_description ,item.vehicle_id, item.image_path, )"
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
                  class="modal-dialog modal-dialog-centered modal-lg"
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
                    <div class="modal-body row">
                      <!-- omage -->
                      <div class="col-5 pl-4">
                        <div style="height: 400px;">
                          <img
                            :src="'http://localhost:3000/' + currentImage"
                            class="card imageCard"
                          />

                          <input
                            class="btn btn-outline-secondary mt-3"
                            style="font-weight: 400; width: 340px; "
                            type="file"
                            name="image"
                            id="image"
                            @change="selectImages"
                          />

                          <br />
                          <button
                            class="btn btn-outline-primary mt-3"
                            style="font-weight: 400; width: 340px;"
                            @click="submitVehicelImage()"
                          >Add Image</button>
                        </div>
                      </div>
                      <!-- righht side -->
                      <div class="col-6 ml-5">
                        <div>
                          <label class="inputLabel">Car Model</label>
                          <input
                            class="inputBox form-control"
                            v-model="$v.edit_model.$model"
                            :class="{'is-invalid': $v.edit_model.$error}"
                            placeholder
                          />
                          <div
                            class="invalid-feedback invalidFeedbackStyle"
                            v-if="!$v.edit_model.required"
                          >กรุณากรอกข้อมูล</div>
                          <div
                            class="invalid-feedback invalidFeedbackStyle"
                            v-if="!$v.edit_model.maxLength"
                          >จำนวนตัวอักษรมากเกินไป</div>
                        </div>
                        <div>
                          <label class="inputLabel">Car Type</label>
                          <select
                            class="inputBox form-control"
                            v-model="$v.edit_type.$model"
                            :class="{'is-invalid': $v.edit_type.$error}"
                          >
                            <option>4-Door</option>
                            <option>2-Door</option>
                            <option>Station Wagons</option>
                            <option>Convertibles</option>
                            <option>Sports Cars</option>
                            <option>Mini-Vans</option>
                            <option>SUV</option>
                            <option>Pickup Trucks</option>
                            <option>Vans</option>
                          </select>
                          <div
                            class="invalid-feedback invalidFeedbackStyle"
                            v-if="!$v.edit_type.required"
                          >กรุณากรอกข้อมูล</div>
                        </div>
                        <div>
                          <label class="inputLabel">Car Plate</label>
                          <input
                            class="inputBox form-control"
                            v-model="$v.edit_plate.$model"
                            :class="{'is-invalid': $v.edit_plate.$error}"
                            placeholder
                          />
                          <div
                            class="invalid-feedback invalidFeedbackStyle"
                            v-if="!$v.edit_plate.required"
                          >กรุณากรอกข้อมูล</div>
                          <div
                            class="invalid-feedback invalidFeedbackStyle"
                            v-if="!$v.edit_plate.maxLength || !$v.edit_plate.minLength"
                          >รูปแบบข้อมูลไม่ถูกต้อง</div>
                        </div>
                        <div>
                          <label class="inputLabel">Car Location</label>
                          <input
                            class="inputBox form-control"
                            v-model="$v.edit_location.$model"
                            :class="{'is-invalid': $v.edit_location.$error}"
                            placeholder
                          />
                          <div
                            class="invalid-feedback invalidFeedbackStyle"
                            v-if="!$v.edit_location.required"
                          >กรุณากรอกข้อมูล</div>
                          <div
                            class="invalid-feedback invalidFeedbackStyle"
                            v-if="!$v.edit_location.maxLength"
                          >จำนวนตัวอักษรมากเกินไป</div>
                        </div>
                        <div>
                          <label class="inputLabel">Car Price</label>
                          <input
                            class="inputBox form-control"
                            v-model="$v.edit_price.$model"
                            :class="{'is-invalid': $v.edit_price.$error}"
                            placeholder
                          />
                          <div
                            class="invalid-feedback invalidFeedbackStyle"
                            v-if="!$v.edit_price.required"
                          >กรุณากรอกข้อมูล</div>
                          <div
                            class="invalid-feedback invalidFeedbackStyle"
                            v-if="!$v.edit_price.maxLength"
                          >จำนวนตัวอักษรมากเกินไป</div>
                        </div>
                        <hr />

                        <div>
                          <label class="inputLabel">Car Insurance Type</label>

                          <select
                            class="inputBox form-control"
                            v-model="$v.edit_insurance_type.$model"
                            :class="{'is-invalid': $v.edit_insurance_type.$error}"
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>2+</option>
                            <option>3</option>
                            <option>3+</option>
                          </select>
                          <div
                            class="invalid-feedback invalidFeedbackStyle"
                            v-if="!$v.edit_insurance_type.required"
                          >กรุณากรอกข้อมูล</div>
                        </div>
                        <div>
                          <label class="inputLabel">Car Insurance Description</label>
                          <input
                            class="inputBox form-control"
                            v-model="$v.edit_insurance_description.$model"
                            :class="{'is-invalid': $v.edit_model.$error}"
                            placeholder
                          />
                          <div
                            class="invalid-feedback invalidFeedbackStyle"
                            v-if="!$v.edit_insurance_description.required"
                          >กรุณากรอกข้อมูล</div>
                          <div
                            class="invalid-feedback invalidFeedbackStyle"
                            v-if="!$v.edit_insurance_description.maxLength"
                          >จำนวนตัวอักษรมากเกินไป</div>
                        </div>
                      </div>
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
.imageCard {
  width: 340px;
  height: 240px;
  object-fit: cover;
}
</style>

<script>
import axios from "axios";
import {
  required,
  minLength,
  maxLength
  //integer
} from "vuelidate/lib/validators";
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
      current_vehicleID: "",
      currentImage: "",
      images: "",
      uploadStatus: ""
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
      get_vehicle_id,
      get_image_path
    ) {
      this.edit_model = get_model;
      this.edit_type = get_type;
      this.edit_plate = get_plate;
      this.edit_location = get_location;
      this.edit_price = get_price;
      this.edit_insurance_type = get_insurance_type;
      this.edit_insurance_description = get_insurance_description;
      this.current_vehicleID = get_vehicle_id;
      this.currentImage = get_image_path; // here will change after add image to new image
    },
    saveEdit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        var vehicleID = this.current_vehicleID;
        console.log(vehicleID);

        const data = {
          model: this.edit_model,
          vehicle_type: this.edit_type,
          plate_num: this.edit_plate,
          current_location: this.edit_location,
          r_price: this.edit_price,
          insurance_type: this.edit_insurance_type,
          insurance_description: this.edit_insurance_description,
          image_path: this.currentImage
        };

        axios
          .put(`http://localhost:3000/editCar/${vehicleID}`, data)
          .then(
            alert("EDIT SUCCESS"),
            this.$router.go(this.$router.currentRoute)
          )
          .catch(err => {
            alert(err);
          });
      }
    },
    selectImages(event) {
      this.images = event.target.files;
    },
    submitVehicelImage() {
      console.log("addimage method");

      let formData = new FormData();
      this.images.forEach(image => {
        formData.append("image", image);
      });

      axios
        .post(`http://localhost:3000/submitImage`, formData)
        .then(res => {
          this.currentImage = res.data.image;
          this.uploadStatus = "uploaded";
        })
        .catch(err => {
          alert(err);
        });
    },
    confirmRenting(vehicleID) {
      axios
        .put(`http://localhost:3000/confirmLoaneePayment/${vehicleID}`)
        .then(
          console.log("success"),
          this.$router.go(this.$router.currentRoute)
        )
        .catch(err => {
          console.log(err);
        });
    }
  },
  validations: {
    edit_model: {
      required: required,
      maxLength: maxLength(66)
    },
    edit_type: {
      required: required
    },
    edit_plate: {
      required: required,
      minLength: minLength(5),
      maxLength: maxLength(8)
    },
    edit_location: {
      required: required,
      maxLength: maxLength(255)
    },
    edit_price: {
      required: required,
      maxLength: maxLength(8)
    },
    edit_insurance_type: {
      required: required
    },
    edit_insurance_description: {
      required: required,
      maxLength: maxLength(255)
    }
  }
};
</script>