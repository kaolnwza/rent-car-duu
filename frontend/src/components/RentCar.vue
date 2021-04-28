<template>
  <div
    class="modal fade"
    id="RentCar"
    tabindex="-1"
    role="dialog"
    aria-labelledby="RentCar"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle" style="font-size: 25px">หลักฐานการเช่า</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body text-left">
          <form>
            <label for class="textLabel">บัตรประชาชน</label>
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="customFile" />
              <label class="custom-file-label" for="customFile">Choose file</label>
            </div>
          </form>
          <form>
            <label for class="textLabel">ใบขับขี่</label>
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="customFile" />
              <label class="custom-file-label" for="customFile">Choose file</label>
            </div>
          </form>
          <form>
            <label for class="textLabel">ใบเสร็จโอนเงิน</label>
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="customFile" />
              <label class="custom-file-label" for="customFile">Choose file</label>
            </div>
          </form>
          <label for class="textLabel">สถานที่รับรถ</label>
          <input
            type="text"
            class="form-control"
            placeholder="ex. เซนทรัลเวิลด์"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <label for class="textLabel">สถานที่คืนรถ</label>
          <input
            type="text"
            class="form-control"
            placeholder="ex. ร้านของผู้ให้เช่า"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="modal-footer p-1">
          <button class="btn btn-primary mr-2" style="font-size: 14px;">ยืนยัน</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
<script>
export default {
  data() {
    return {
      username: "narutoKonoha",
      firstname: "Firstname",
      lastname: "Lastname",
      email: "narutoKonoha@konoha.com",
      phone: "01212312",
      birthDate: "10/10/xxxx",
      sex: "ชาย",
      address: "โคโนฮะคากุเระ"
    };
  }
};
</script>

<style scoped>
.custom-file {
  width: 300px;
  margin-bottom: 10px;
  font-size: 13px;
}
.form-control {
  width: 450px;
  margin-bottom: 10px;
}
.textLabel {
  width: 150px;
}
</style>
