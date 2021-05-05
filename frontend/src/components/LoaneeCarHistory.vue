<template>
  <div class="card">
    <div class="card-body">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Rent ID</th>
            <th scope="col">Car Model</th>
            <th scope="col">Car Plate</th>
            <th scope="col">ผู้ให้เช่า</th>

            <th scope="col">มือถือผู้ให้เช่า</th>
            <th scope="col">ราคา</th>
            <th scope="col">วันที่ชำระเงิน</th>

            <th scope="col">วันที่รับรถ</th>
            <th scope="col">วันที่คืนรถ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in history_data" :key="index" scope="row">
            <td>{{item.renting_id}}</td>
            <td>{{item.model}}</td>
            <td>{{item.plate_num}}</td>
            <td>{{item.fname + ' ' + item.lname}}</td>

            <td>{{item.phone}}</td>
            <td>{{item.total_price}}</td>
            <td>{{item.transaction_date}}</td>

            <td>{{item.s_date}}</td>
            <td>{{item.e_date}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
td {
  opacity: 80%;
  font-size: 14px;
}
.card {
  border: solid #f8f9fa;
  border-width: 0.2rem;
}
th {
  width: 100px;
}
td {
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      history_data: []
    };
  },
  mounted() {
    this.getLoaneeHistory();
  },
  methods: {
    getLoaneeHistory() {
      axios
        .get(`http://localhost:3000/getLoaneeHistory`)
        .then(res => {
          this.history_data = res.data;
          console.log(this.history_data);
        })
        .catch(err => console.log(err));
    }
  }
};
</script>