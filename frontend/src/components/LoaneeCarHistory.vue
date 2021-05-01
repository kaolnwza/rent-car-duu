<template>
  <div class="card">
    <div class="card-body">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Car ID</th>
            <th scope="col">Car Model</th>
            <th scope="col">Car Plate</th>
            <th scope="col">ผู้ให้เช่า</th>
            <th scope="col">มือถือผู้ให้เช่า</th>
            <th scope="col">ราคา</th>
            <th scope="col">วันที่เช่า</th>
            <th scope="col">วันที่รับรถ</th>
            <th scope="col">วันที่คืนรถ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Tesla Model X</td>
            <td>TA2011</td>
            <td>User 2</td>
            <td>0924561234</td>
            <td>40000</td>
            <td>18/07/2020</td>
            <td>20/07/2020</td>
            <td>20/08/2020</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Tesla Cybertruck</td>
            <td>TA2022</td>
            <td>User 2</td>
            <td>0924561234</td>
            <td>20000</td>
            <td>18/07/2020</td>
            <td>20/07/2020</td>
            <td>20/08/2020</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Toyota Altis</td>
            <td>YH1965</td>
            <td>User 25</td>
            <td>0924456701</td>
            <td>50000</td>
            <td>24/02/2021</td>
            <td>24/02/2021</td>
            <td>24/07/2021</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Mercedes AMG</td>
            <td>MU9547</td>
            <td>User 5</td>
            <td>0648367892</td>
            <td>20000</td>
            <td>18/07/2021</td>
            <td>20/07/2021</td>
            <td>20/08/2021</td>
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

