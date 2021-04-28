<template>
  <div class="card mainCard">
    <div class="card-body">
      <div class="row">
        <label class="titleLabel col-9 text-left">Renting Car</label>
      </div>
      <hr style="margin-top: 0px; margin-bottom: 20px;  " />
      <div class="row" style="padding-left: 30px;">
        <div class="col" v-for="(item, index) in vehicleListTest" :key="index">
          <div class="card cardItem text-left">
            <div class="row">
              <div class="col-12 pt-3" style="padding-left: 35px;">
                <div class="table table-borderless mb-0" style="width: 700px; float:left">
                  <tbody>
                    <tr>
                      <td colspan="2">
                        <span class="carTitle">{{item.model}}</span>
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
                          {{item.type}}
                        </div>
                      </td>
                      <td>
                        <div class="carDes text-dark">
                          <span class="badge badge-warning carDetail secondTd">Loaner</span>
                          {{item.owner}}
                        </div>
                      </td>
                    </tr>
                    <!-- second row -->
                    <tr>
                      <td>
                        <div class="carDes text-dark">
                          <span class="badge badge-info carDetail">Plate</span>
                          {{item.plate}}
                        </div>
                      </td>
                      <td>
                        <div class="carDes text-dark">
                          <span class="badge badge-warning carDetail secondTd">Loaner Phone</span>
                          {{}}
                        </div>
                      </td>
                    </tr>
                    <!-- third row -->
                    <tr>
                      <td>
                        <div class="carDes text-dark">
                          <span class="badge badge-success carDetail">Location</span>
                          {{item.location}}
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
                          {{item.price}}
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
                      <td colspan="2">
                        <div class="carDes text-dark pt-3">
                          <span class="badge badge-info carDetail">Insurance Type</span>
                          2+
                        </div>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td colspan="2">
                        <div class="carDes text-dark">
                          <span class="badge badge-info carDetail">Insurance NO.</span>
                          12404 -58101/กข/007126-69 NPP
                        </div>
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </div>
                <!-- right side -->
                <div class="text-right rightSideButton">
                  <button class="btn btn-danger">Return Car</button>
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
  margin-left: 120px;
}
.rightSideButton {
  padding-top: 185px;
  margin-right: 15px;
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      vehicleListTest: [],
      temp: [],
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
        .get(`http://localhost:3000/test`)
        .then(response => {
          this.temp = response.data.vehicle;
          this.vehicleListTest.push(this.temp[1]);

          //console.log(this.vehicleListTest);
        })
        .catch(error => {
          this.error = error.response.data.message;
        });
    }
  }
};
</script>