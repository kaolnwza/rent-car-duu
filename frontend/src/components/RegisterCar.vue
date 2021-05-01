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
                  <input
                    class="inputBox form-control"
                    v-model="carModel"
                    placeholder="ex. Toyota Corolla Altis"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label class="inputLabel">Car Type</label>
                </td>
                <td>
                  <select class="inputBox form-control" v-model="carType">
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
                </td>
              </tr>

              <tr>
                <td>
                  <label class="inputLabel">Car Registration Number</label>
                </td>
                <td>
                  <input class="inputBox form-control" v-model="carRegNo" placeholder="ex. กข 2020" />
                </td>
              </tr>
              <tr>
                <td>
                  <label class="inputLabel">Car Location</label>
                </td>
                <td>
                  <input
                    class="inputBox form-control"
                    v-model="carLocation"
                    placeholder="ex. Bankok, Thailand"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label class="inputLabel">Price</label>
                </td>
                <td>
                  <input class="inputBox form-control" v-model="carPrice" placeholder="ex. 2000" />
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
                  <label class="inputLabel">Insurance Number</label>
                </td>
                <td>
                  <input
                    class="inputBox form-control"
                    v-model="carInsurNo"
                    placeholder="ex. 12404 -58101/กข/007126-69 NPP"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label class="inputLabel">Insurance Type</label>
                </td>
                <td>
                  <select class="inputBox form-control" v-model="carInsurType">
                    <option>1</option>
                    <option>2</option>
                    <option>2+</option>
                    <option>3</option>
                    <option>3+</option>
                  </select>
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
export default {
  data() {
    return {
      carModel: "",
      carType: "",
      carRegNo: "",
      carLocation: "",
      carPrice: "",
      carInsurNo: "",
      carInsurType: "",
      error: null,
      images: "",
      testImg: ["1", "2"],
      imageUploaded: false,
      currentImage: "CarImage/upload.png"
    };
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
      axios
        .post(`http://localhost:3000/addCar`, {
          carModel: this.carModel,
          carType: this.carType,
          carRegNo: this.carRegNo,
          carLocation: this.carLocation,
          carPrice: this.carPrice,
          carInsurNo: this.carInsurNo,
          carInsurType: this.carInsurType
        })
        .then(alert("Signup Car Complete"), this.$router.push("/managecar"))
        .catch(err => {
          this.err = err.response.data.message;
        });
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