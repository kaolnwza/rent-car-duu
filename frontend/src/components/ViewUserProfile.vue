<template>
  <div
    class="modal fade"
    id="ViewUserProfile"
    tabindex="-1"
    role="dialog"
    aria-labelledby="ViewUserProfile"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle" style="font-size: 25px"></h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="leftSide">
            <img
              class="leftSide card-img-top rounded-circle"
              src="../assets/images/user.png"
              alt="Card image cap"
            />
            <h5 class="leftSide card-title mt-3 mb-0">{{userDetail.fname + ' ' + userDetail.lname}}</h5>
            <div class="leftSide card-body">
              <div class="row">
                <div class="col-12">
                  <button class="btn btn-outline-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="iconStyle"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                      />
                    </svg>
                    {{userDetail.phone}}
                  </button>
                </div>
                <div class="col-12 mt-2">
                  <button class="btn btn-outline-primary">
                    <fa icon="envelope" class="iconStyle" />
                    {{userDetail.email}}
                  </button>
                </div>
                <div class="col-12 mt-2">
                  <button class="btn btn-outline-primary">
                    <fa icon="car-alt" class="iconStyle" />รถที่ให้บริการ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
<script>
export default {
  props: ["userDetail"],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.leftSide.card {
  padding-top: 20px;
  width: 300px;
  height: 340px;
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
  padding-top: 0px;
  width: 300px;
  height: 250px;
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
.functionButton {
  text-align: left;
  width: 100%;
  margin-bottom: 5px;
}
.iconStyle {
  margin-right: 5px;
}
</style>
