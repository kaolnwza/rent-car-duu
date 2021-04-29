<template>
  <div
    class="modal fade bd-example-modal-lg"
    id="carDetailModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="carDetailModal"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle" style="font-size: 25px"></h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <!-- body -->
        <div class="modal-body">
          <div class="card-body">
            <div class="row pl-1">
              <div class="col-6 text-center">
                <div style="height: 200px;width:200px">
                  <img
                    class="card imageCard"
                    :src="'http://localhost:3000/' + carDetail.image_path"
                  />
                </div>
              </div>
              <div class="col-6">
                <table>
                  <thead class="text-left registerTitle">
                    <tr>
                      <th>Car Detail</th>
                    </tr>
                    <tr>
                      <td>
                        <hr class="hrLine" />
                      </td>
                      <td class="lastChildforHr">
                        <hr class="hrLine" />
                      </td>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <label class="inputLabel">Car Model</label>
                      </td>
                      <td class="text-left">
                        <label class="detailText">{{carDetail.model}}</label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label class="inputLabel">Car Type</label>
                      </td>
                      <td class="text-left">
                        <label class="detailText">{{carDetail.vehicle_type}}</label>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <label class="inputLabel">Car Plate</label>
                      </td>
                      <td class="text-left">
                        <label class="detailText">{{carDetail.plate_num}}</label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label class="inputLabel">Car Location</label>
                      </td>
                      <td class="text-left">
                        <label class="detailText">{{carDetail.current_location}}</label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label class="inputLabel">Price</label>
                      </td>
                      <td class="text-left">
                        <label class="detailText">{{carDetail.r_price}}</label>
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
                        <hr class="hrLine" />
                      </td>
                      <td>
                        <hr class="hrLine" />
                      </td>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <label class="inputLabel">Insurance Type</label>
                      </td>
                      <td class="text-left">
                        <label class="detailText">{{insurDetail.insurance_type}}</label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label class="inputLabel">Insurance Description</label>
                      </td>
                      <td class="text-left">
                        <label class="detailText">{{insurDetail.insurance_description}}</label>
                      </td>
                    </tr>
                  </tbody>
                  <!-- loaner -->
                  <thead class="text-left registerTitle">
                    <tr>
                      <th class="pt-4">Loaner Detail</th>
                    </tr>
                    <tr>
                      <td>
                        <hr class="hrLine" />
                      </td>
                      <td>
                        <hr class="hrLine" />
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <label class="inputLabel">Name</label>
                      </td>
                      <td class="text-left">
                        <label class="detailText">{{userDetail.fname}} {{userDetail.lname}}</label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label class="inputLabel">Email</label>
                      </td>
                      <td class="text-left">
                        <label class="detailText">{{userDetail.email}}</label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label class="inputLabel">Phone</label>
                      </td>
                      <td class="text-left">
                        <label class="detailText">{{userDetail.phone}}</label>
                      </td>
                    </tr>

                    <!-- save buttom -->
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="modalButton btn btn-outline-primary">โปรไฟล์ผู้ให้เช่า</button>
          <button
            type="button"
            class="modalButton btn btn-danger"
            data-dismiss="modal"
            data-toggle="modal"
            data-target="#loginModal"
          >เช่า</button>
          <button type="button" class="modalButton btn btn-secondary" data-dismiss="modal">ยกเลิก</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modalButton.btn {
  font-size: 14px;
}
.inputBox {
  margin-bottom: 10px;
  font-size: 14px;
}
.inputBox.form-control {
  font-size: 14px;
  font-weight: 200;
}
.inputLabel {
  float: left;
  padding-left: 1px;
  margin-bottom: 1px;
  margin-right: 10px;
}
.modal-dialog {
  width: 2000px;
}
.imageCard {
  width: 500px;
  object-fit: cover;
}

.hrLine {
  margin: 0px;
  padding-top: 5px;
  width: 230px;
}

.inputBox {
  width: 400px;
}

.detailText {
  padding-top: 5px;
  font-style: italic;
  font-weight: bold;
}
</style>

<script>
export default {
  props: ["carDetail", "insurDetail", "userDetail"],

  data() {
    return {};
  },
  methods: {
    registerUser() {
      console.log(this.date);
    }
  }
};
</script>