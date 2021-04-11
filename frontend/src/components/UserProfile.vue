<template>
  <div class="pt-5">
    <div class="row">
      <!-- left side -->
      <div class="col-3">
        <div class="leftSide card">
          <img
            class="leftSide card-img-top rounded-circle"
            src="../assets/images/naruto.jpeg"
            alt="Card image cap"
          />
          <h5 class="leftSide card-title mt-3 mb-0">{{firstname + ' ' + lastname}}</h5>
          <div class="leftSide card-body">
            <div class="row">
              <div class="col-12">
                <button class="btn btn-outline-primary">Edit Profile</button>
              </div>
            </div>
          </div>
        </div>

        <div class="leftSideBottom card">
          <div class="leftSideBottom card-body">
            <div class="row">
              <div class="col-6">
                <button class="btn btn-outline-primary">ข้อมูลผู้เช่า</button>
              </div>
              <div class="col-6">
                <button class="btn btn-outline-primary">ข้อมูลผู้ให้เช่า</button>
              </div>
              <div class="col-6">
                <button class="btn btn-outline-primary" @click="$router.push('/history')">ประวัติ</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- right side -->
      <div class="col-8 ml-5">
        <div class="rightSide card">
          <h5 class="rightSide card-title">ข้อมูลผู้ใช้</h5>
          <hr class="m-0" />
          <div class="rightSide card-body">
            <div class="profileCol row">
              <div class="profileLeftCol col-3">ชื่อบัญชี</div>
              <div class="col-9 text-secondary">{{username}}</div>
            </div>
            <hr />
            <div class="profileCol row">
              <div class="profileLeftCol col-3">ชื่อสกุล</div>
              <div class="col-9 text-secondary">{{firstname + ' ' + lastname}}</div>
            </div>
            <hr />
            <div class="profileCol row">
              <div class="profileLeftCol col-3">อีเมล</div>
              <div class="col-9 text-secondary">{{email}}</div>
            </div>
            <hr />
            <div class="profileCol row">
              <div class="profileLeftCol col-3">มือถือ</div>
              <div class="col-9 text-secondary">{{phone}}</div>
            </div>
            <hr />
            <div class="profileCol row">
              <div class="profileLeftCol col-3">วันเกิด</div>
              <div class="col-9 text-secondary">{{birthDate}}</div>
            </div>
            <hr />
            <div class="profileCol row">
              <div class="profileLeftCol col-3">เพศ</div>
              <div class="col-9 text-secondary">{{sex}}</div>
            </div>
            <hr />
            <div class="profileCol row">
              <div class="profileLeftCol col-3">ที่อยู่</div>
              <div class="col-9 text-secondary">{{address}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "narutoKonoha",
      firstname: "Uzumaki",
      lastname: "Naruto",
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
.leftSide.card {
  padding-top: 20px;
  width: 300px;
  height: 300px;
}
.leftSide.card-title {
  font-size: 22px;
}
.leftSide.card-img-top {
  width: 150px;
  margin: 0 auto;
}

.leftSideBottom.card {
  margin-top: 20px;
  padding-top: 20px;
  width: 300px;
  height: 140px;
}

.rightSide.card-title {
  text-align: left;
  padding-left: 30px;
  padding-top: 12px;
  font-weight: 500;
  font-size: 22px;
}
.profileCol {
  text-align: left;
}
.profileLeftCol {
  padding-left: 30px;
}
</style>