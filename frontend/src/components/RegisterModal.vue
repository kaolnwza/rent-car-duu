<template>
  <div
    class="modal fade"
    id="registerModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="registerModal"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5
            class="modal-title"
            id="exampleModalLongTitle"
            style="font-size: 25px"
          >สร้างบัญชีผู้ใช้</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <label class="inputLabel">ชื่อผู้ใช้</label>
          <input class="inputBox form-control" placeholder="ex. Prayud44" />
          <label class="inputLabel">รหัสผ่าน</label>
          <input class="inputBox form-control" placeholder="ex. 123456" />
          <label class="inputLabel">ชื่อ</label>
          <input class="inputBox form-control" placeholder="ex. อุซุมากิ" />
          <label class="inputLabel">นามสกุล</label>
          <input class="inputBox form-control" placeholder="ex. นารูโตะ" />
          <label class="inputLabel">อีเมล</label>
          <input class="inputBox form-control" placeholder="ex. naruto500@hotmail.com" />
          <label class="inputLabel">เบอร์โทรศัพท์</label>
          <input class="inputBox form-control" placeholder="ex. 092xxxxxxx" />
          <label class="inputLabel">อายุ</label>
          <input class="inputBox form-control" placeholder="ex. 69" />
          <label class="inputLabel">วัน เดือน ปีเกิด</label>
          <input class="inputBox form-control" type="date" value="2011-08-19" />
          <label class="inputLabel">เพศ</label>
          <select class="inputBox form-control">
            <option>ชาย</option>
            <option>หญิง</option>
          </select>
          <label class="inputLabel">ที่อยู่</label>
          <textarea class="inputBox form-control" rows="3"></textarea>
        </div>

        <div class="modal-footer">
          <button type="button" class="modalButton btn btn-secondary" data-dismiss="modal">ยกเลิก</button>
          <button type="button" class="modalButton btn btn-primary">ยืนยัน</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style >
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
}
</style>
