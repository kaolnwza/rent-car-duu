<template >
  <div class="mt-4">
    <button class="btn btn-outline-danger" @click="$router.push('/userprofile')">Profile LINK test</button>
    <button
      class="btn btn-outline-danger"
      @click="$router.push('/LoaneeCarHistory')"
    >LoaneeCarHistory</button>
    <button
      class="btn btn-outline-danger"
      @click="$router.push('/LoanerCarHistory')"
    >LoanerCarHistory</button>
    <button class="btn btn-danger" @click="testLogedIn()">Toggle Loged in</button>
    <button class="btn btn-outline-danger" @click="$router.push('/RegisterCar')">RegisterCar</button>
    <button class="btn btn-outline-danger" @click="$router.push('/CarMarketplace')">CarMarketplace</button>

    <button class="btn btn-outline-danger" @click="$router.push('/PaymentHistory')">PaymentHistory</button>
    <button class="btn btn-outline-danger" @click="$router.push('/managecar')">managecar</button>
    <button class="btn btn-outline-danger" data-toggle="modal" data-target="#RentCar">RentCar</button>
    <button
      class="btn btn-outline-danger"
      data-toggle="modal"
      data-target="#ViewUserProfile"
    >viewuserprofile</button>
    <button
      class="btn btn-outline-danger"
      @click="$router.push('/LoaneeRentingCar')"
    >LoaneeRentingCar</button>
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      logedIn: this.$loginStatus
    };
  },
  methods: {
    testLogedIn: function() {
      this.logedIn = this.$loginStatus = !this.$loginStatus;
      this.logedIn;
      console.log(this.$loginStatus);
    }
  },
  watch: {
    $loginStatus() {
      console.log("kuy");
    }
  }
};
</script>