<template >
  <div class="mt-4">
    <button class="btn btn-outline-danger" @click="$router.push('/userprofile')">Profile LINK test</button>
    <button class="btn btn-outline-danger" @click="$router.push('/RegisterCar')">Register car</button>
    <button
      class="btn btn-outline-danger"
      @click="$router.push('/LoaneeCarHistory')"
    >LoaneeCarHistory</button>
    <button
      class="btn btn-outline-danger"
      @click="$router.push('/LoanerCarHistory')"
    >LoanerCarHistory</button>
    <button class="btn btn-outline-danger" @click="$router.push('/AddCar')">AddCar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>