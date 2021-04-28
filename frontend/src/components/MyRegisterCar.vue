<template>
  <div class="card mainCard">
    <div class="card-body">
      <div class="row col">
        <label class="titleLabel">รถที่ลงทะเบียนไว้</label>
      </div>
      <div class="row">
        <div class="col-6" v-for="(item, index) in carListTest" :key="index">
          <div class="card cardItem text-left">
            <div class="row">
              <div class="col-5">
                <img class="carImg" :src="item.carImgSrc" alt />
              </div>
              <div class="col table table-borderless pt-3 pl-4">
                <tbody>
                  <tr>
                    <td>
                      <div class="carTitle">{{item.carModel}}</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="carDes">Type: {{item.carType}}</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="carDes">Plate: {{item.carPlate}}</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="carDes">Location: {{item.carLocation}}</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="carDes">Price: {{item.price}}</div>
                    </td>
                  </tr>
                </tbody>
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
  width: 520px;
  height: 220px;
  margin-bottom: 20px;
}
.titleLabel {
  font-size: 40px;
}
.carImg {
  width: 220px;
  height: 220px;
}
td {
  padding: 0px;
}
.carTitle {
  font-size: 24px;
  margin-bottom: 10px;
}
.carDes {
}
</style>

<script>
export default {
  data() {
    return {
      carListTest: [
        {
          carImgSrc: require("../assets/images/naruto.jpeg"),
          carId: 1,
          carModel: "Lamborghini",
          carType: "Sport",
          carPlate: "ABC 2077",
          carLocation: "Thailand, Bankkok",
          price: 2000
        },
        {},
        {},
        {},
        {}
      ]
    };
  }
};
</script>