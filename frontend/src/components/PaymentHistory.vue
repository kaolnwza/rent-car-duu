<template>
  <div class="card">
    <div class="card-body">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">รหัสธุรกรรม</th>
            <th scope="col">รหัสการเช่า</th>
            <th scope="col">วิธีการชำระเงิน</th>
            <th scope="col">ค่าใช้จ่ายสุทธิ</th>
            <th scope="col">วันที่ดำเนินการ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in history_data" :key="index">
            <td>{{item.payment_id}}</td>
            <td>{{item.renting_id}}</td>
            <td>{{item.payment_method}}</td>
            <td>{{item.total_price}}</td>
            <td>{{item.transaction_date}}</td>
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
    this.getPaymentHistory();
  },
  methods: {
    getPaymentHistory() {
      axios
        .get(`http://localhost:3000/getPaymentHistory`)
        .then(res => {
          this.history_data = res.data;
          console.log(this.history_data);
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

