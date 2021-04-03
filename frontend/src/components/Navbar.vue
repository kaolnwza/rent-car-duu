<template >
  <nav class="navbar navbar-expand-lg bg-dark text-dark" style="background-color: grey">
    <div class="container">
      <div class="collapse navbar-collapse row" id="navbarText">
        <div class="logo col-4" style="text-align:left">ส่งพี่ไปเช่ารถดู๊</div>
        <div class="col-4" style="text-align: center"></div>
        <div class="col-4" style="text-align: right">
          <label
            class="login btn btn-primary mr-3"
            data-toggle="modal"
            data-target="#loginModal"
          >เข้าสู่ระบบ</label>
          <label
            class="login btn btn-outline-light"
            data-toggle="modal"
            data-target="#registerModal"
          >สร้างบัญชีผู้ใช้</label>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
.logo {
  color: #f8f5f1;

  text-decoration-line: none;
  font-size: 1.8rem;
  font-style: italic;
}
.btn.login {
  font-size: 0.9rem;
}
</style>



