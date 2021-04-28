<template>
  <div class="card mainCard">
    <div class="card-body">
      <div class="row">
        <label class="titleLabel col-9 text-left">รถที่ให้บริการ</label>
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
      <div class="row">
        <div class="col-6" v-for="(item, index) in vehicleListTest" :key="index">
          <div class="card cardItem text-left">
            <div class="row">
              <div class="col-5 my-auto">
                <img class="carImg" :src="'http://localhost:3000/'+item.img" alt />
              </div>
              <div class="col-7 pt-3 pl-4">
                <div class="table table-borderless mb-0">
                  <tbody>
                    <tr>
                      <td>
                        <div class="carTitle">{{item.model}}</div>
                      </td>
                    </tr>
                    <tr>
                      <td style=" width: 260px">
                        <hr style="padding:0px; margin:0px; margin-bottom: 10px" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="carDes text-dark">
                          <span class="badge badge-primary">Type</span>
                          {{item.type}}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="carDes text-dark">
                          <span class="badge badge-info">Plate</span>
                          {{item.plate}}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="carDes text-dark">
                          <span class="badge badge-success">Location</span>
                          {{item.location}}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="margin: 0px;">
                        <div class="carDes text-right">
                          <label class="priceLabel">{{item.price}}</label> บาท/ชั่วโมง
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </div>
                <div class="text-right pr-3 pt-2">
                  <button class="btn btn-outline-danger btnSize">เช่า</button>
                  <button class="btn btn-outline-primary btnSize ml-2">ดูรายระเอียด</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <label
        class="login btn btn-outline-primary mr-2"
        data-toggle="modal"
        data-target="#test"
      >สร้างบัญชีผู้ใช้</label>
    </div>
  </div>
</template>

<style  scoped>
.card.mainCard {
  border: solid #f8f9fa;
  border-width: 0.2rem;
}
.cardItem {
  width: 520px;
  height: 222px;
  margin-bottom: 20px;
}
.titleLabel {
  font-size: 40px;
}
.carImg {
  max-width: 220px;
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
export default {
  data() {
    return {
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
        .get(`http://localhost:3000/test`)
        .then(response => {
          this.vehicleListTest = response.data.vehicle;
          console.log(this.vehicleListTest);
        })
        .catch(error => {
          this.error = error.response.data.message;
        });
    }
  }
};
</script>