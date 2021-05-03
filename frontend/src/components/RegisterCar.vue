<template>
  <div class="card mainCard">
    <div class="card-body" style="padding-top:60px">
      <div class="row">
        <div class="col-4 text-center">
          <div style="height: 400px;">
            <img :src="'http://localhost:3000/'+this.currentImage" class="card imageCard" />

            <input
              class="btn btn-outline-secondary mt-3"
              style="font-weight: 400; width: 340px; "
              type="file"
              name="image"
              id="image"
              :class="{'btn-outline-danger is-invalid': $v.uploadStatus.$error}"
              @change="selectImages"
            />
            <br />

            <button
              class="btn btn-outline-primary mt-3"
              style="font-weight: 400; width: 340px;"
              @click="submitVehicelImage()"
              :class="{'btn-outline-danger is-invalid': $v.uploadStatus.$error}"
            >Add Image</button>
            <div
              class="invalid-feedback invalidFeedbackStyle"
              v-if="!$v.uploadStatus.required"
            >กรุณาอัพโหลดรูปภาพ</div>
          </div>
        </div>
        <div class="col">
          <table>
            <thead class="text-left registerTitle">
              <tr>
                <th>Car Detail</th>
              </tr>
              <tr>
                <td>
                  <hr />
                </td>
                <td class="lastChildforHr">
                  <hr />
                </td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <label class="inputLabel">Car Model</label>
                </td>
                <td>
                  <div>
                    <input
                      class="inputBox form-control"
                      v-model="$v.carModel.$model"
                      placeholder="ex. Toyota Corolla Altis"
                      :class="{'is-invalid': $v.carModel.$error}"
                    />
                    <div
                      class="invalid-feedback invalidFeedbackStyle"
                      v-if="!$v.carModel.required"
                    >กรุณากรอกข้อมูล</div>
                    <div
                      class="invalid-feedback invalidFeedbackStyle"
                      v-if="!$v.carModel.maxLength"
                    >จำนวนตัวอักษรมากเกินไป</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label class="inputLabel">Car Type</label>
                </td>
                <td>
                  <select
                    class="inputBox form-control"
                    v-model="$v.carType.$model"
                    :class="{'is-invalid': $v.carType.$error}"
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
                    v-if="!$v.carType.required"
                  >กรุณากรอกข้อมูล</div>
                </td>
              </tr>

              <tr>
                <td>
                  <label class="inputLabel">Car Registration Number</label>
                </td>
                <td>
                  <input
                    class="inputBox form-control"
                    v-model="$v.carRegNo.$model"
                    :class="{'is-invalid': $v.carRegNo.$error}"
                    placeholder="ex. กข 2020"
                  />
                  <div
                    class="invalid-feedback invalidFeedbackStyle"
                    v-if="!$v.carRegNo.required"
                  >กรุณากรอกข้อมูล</div>
                  <div
                    class="invalid-feedback invalidFeedbackStyle"
                    v-if="!$v.carRegNo.maxLength || !$v.carRegNo.minLength"
                  >รูปแบบข้อมูลไม่ถูกต้อง</div>
                </td>
              </tr>
              <tr>
                <td>
                  <label class="inputLabel">Car Location</label>
                </td>
                <td>
                  <input
                    class="inputBox form-control"
                    v-model="$v.carLocation.$model"
                    :class="{'is-invalid': $v.carLocation.$error}"
                    placeholder="ex. Bankok, Thailand"
                  />
                  <div
                    class="invalid-feedback invalidFeedbackStyle"
                    v-if="!$v.carLocation.required"
                  >กรุณากรอกข้อมูล</div>
                  <div
                    class="invalid-feedback invalidFeedbackStyle"
                    v-if="!$v.carLocation.maxLength"
                  >จำนวนตัวอักษรมากเกินไป</div>
                </td>
              </tr>
              <tr>
                <td>
                  <label class="inputLabel">Price</label>
                </td>
                <td>
                  <input
                    class="inputBox form-control"
                    v-model="$v.carPrice.$model"
                    :class="{'is-invalid': $v.carPrice.$error}"
                    placeholder="ex. 2000"
                  />
                  <div
                    class="invalid-feedback invalidFeedbackStyle"
                    v-if="!$v.carPrice.required"
                  >กรุณากรอกข้อมูล</div>
                  <div
                    class="invalid-feedback invalidFeedbackStyle"
                    v-if="!$v.carPrice.maxLength"
                  >จำนวนตัวอักษรมากเกินไป</div>
                </td>
              </tr>
            </tbody>
            <!-- insurance -->
            <thead class="text-left registerTitle">
              <tr>
                <th class="pt-4">Insurance Detail</th>
              </tr>
              <tr>
                <td>
                  <hr />
                </td>
                <td>
                  <hr />
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <label class="inputLabel">Insurance Type</label>
                </td>
                <td>
                  <select
                    class="inputBox form-control"
                    v-model="$v.carInsurType.$model"
                    :class="{'is-invalid': $v.carModel.$error}"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>2+</option>
                    <option>3</option>
                    <option>3+</option>
                  </select>
                  <div
                    class="invalid-feedback invalidFeedbackStyle"
                    v-if="!$v.carInsurType.required"
                  >กรุณากรอกข้อมูล</div>
                </td>
              </tr>
              <tr>
                <td>
                  <label class="inputLabel">Insurance Description</label>
                </td>
                <td>
                  <input
                    class="inputBox form-control"
                    v-model="$v.carInsurDesc.$model"
                    :class="{'is-invalid': $v.carModel.$error}"
                    placeholder="ex. "
                  />
                  <div
                    class="invalid-feedback invalidFeedbackStyle"
                    v-if="!$v.carInsurDesc.required"
                  >กรุณากรอกข้อมูล</div>
                  <div
                    class="invalid-feedback invalidFeedbackStyle"
                    v-if="!$v.carInsurDesc.maxLength"
                  >จำนวนตัวอักษรมากเกินไป</div>
                </td>
              </tr>
              <!-- save buttom -->
              <tr>
                <td></td>
                <td class="text-right">
                  <button class="btn btn-danger mt-2" @click="addCar()">Save</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style  scoped>
.imageCard {
  width: 340px;
  height: 240px;
  object-fit: cover;
}
.mainCard {
  height: 630px;
}
.inputBox {
  width: 400px;
}
.inputLabel {
  margin-right: 10px;
}
.card {
  border: solid #f8f9fa;
  border-width: 0.2rem;
}

.registerTitle {
  font-size: 24px;
  font-weight: 600;
}
hr {
  padding-top: 0px;
  margin-top: 5px;
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
      carModel: "",
      carType: "",
      carRegNo: "",
      carLocation: "",
      carPrice: "",
      carInsurDesc: "",
      carInsurType: "",
      error: null,
      images: "",
      testImg: ["1", "2"],
      imageUploaded: false,
      currentImage: "CarImage/upload.png",
      uploadStatus: ""
    };
  },
  validations: {
    carModel: {
      required: required,
      maxLength: maxLength(66)
    },
    carType: {
      required: required
    },
    carRegNo: {
      required: required,
      minLength: minLength(5),
      maxLength: maxLength(8)
    },
    carLocation: {
      required: required,
      maxLength: maxLength(255)
    },
    carPrice: {
      required: required,
      maxLength: maxLength(8)
    },
    carInsurDesc: {
      required: required,
      maxLength: maxLength(255)
    },
    carInsurType: {
      required: required
    },
    uploadStatus: {
      required: required
    }
  },
  mounted() {
    //console.log(this.vehicleListTest[0].model);
    //this.callImage();
  },
  methods: {
    asd() {
      this.$router.go(this.$router.currentRoute);
    },
    selectImages(event) {
      this.images = event.target.files;
    },
    addCar() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        axios
          .post(`http://localhost:3000/addCar`, {
            carModel: this.carModel,
            carType: this.carType,
            carRegNo: this.carRegNo,
            carLocation: this.carLocation,
            carPrice: this.carPrice,
            carInsurDesc: this.carInsurDesc,
            carInsurType: this.carInsurType
          })
          .then(alert("Signup Car Complete"), this.$router.push("/managecar"))
          .catch(err => {
            this.err = err.response.data.message;
          });
      }
    },

    submitVehicelImage() {
      console.log("addimage method");

      let formData = new FormData();
      formData.append("title", "test");
      formData.append("status", "01");
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
    uncallImage() {
      this.currentImage = "";
    }
  }
};
</script>