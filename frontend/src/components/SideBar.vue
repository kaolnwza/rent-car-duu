<template>
  <div class="sideNav text-left">
    <!-- general -->
    <div class="menu_header">GENERAL</div>
    <div class="inside">
      <table>
        <tr @click="$router.push('/CarMarketplace')">
          <td>
            <fa icon="home" class="iconStyle fa-lg" />
          </td>
          <td>
            <label class="text_label">Home</label>
          </td>
        </tr>
        <tr @click="$router.push('/userprofile')">
          <td>
            <fa icon="user" class="iconStyle fa-lg" />
          </td>
          <td>
            <label class="text_label">Profile</label>
          </td>
        </tr>
      </table>
      <hr />
    </div>
    <!-- loaner -->
    <div class="menu_header">LOANER</div>
    <div class="inside">
      <table>
        <tr @click="$router.push('/managecar')">
          <td>
            <fa icon="cog" class="iconStyle fa-lg" />
          </td>
          <td style="width: 150px;">
            <label class="text_label">Manage Vehicle</label>
          </td>
        </tr>
        <tr @click="$router.push('/RegisterCar')">
          <td>
            <fa icon="car" class="iconStyle fa-lg" />
          </td>
          <td>
            <label class="text_label">Add Vehicle</label>
          </td>
        </tr>
        <tr @click="$router.push('/LoanerCarHistory')">
          <td>
            <fa icon="window-maximize" class="iconStyle fa-lg" />
          </td>
          <td>
            <label class="text_label">Loaner History</label>
          </td>
        </tr>
      </table>
      <hr />
    </div>
    <!-- loanee -->
    <div class="menu_header">LOANEE</div>
    <div class="inside">
      <table>
        <tr @click="$router.push('/LoaneeRentingCar')">
          <td>
            <fa icon="tasks" class="iconStyle fa-lg" />
          </td>
          <td style="width: 150px;">
            <label class="text_label">My Renting</label>
          </td>
        </tr>
        <tr @click="$router.push('/LoaneeCarHistory')">
          <td>
            <fa icon="window-maximize" class="iconStyle fa-lg" />
          </td>
          <td>
            <label class="text_label">Loanee History</label>
          </td>
        </tr>
        <tr @click="$router.push('/PaymentHistory')">
          <td>
            <fa icon="industry" class="iconStyle fa-lg" />
          </td>
          <td>
            <label class="text_label">Payment History</label>
          </td>
        </tr>
      </table>
      <hr />
    </div>
    <!-- admin -->
    <div v-if="is_admin == 'true'">
      <div class="menu_header">Admin Panel</div>
      <div class="inside">
        <table>
          <tr @click="$router.push('/adminUser')">
            <td>
              <fa icon="tasks" class="iconStyle fa-lg" />
            </td>
            <td style="width: 150px;">
              <label class="text_label">User Managing</label>
            </td>
          </tr>
          <tr @click="$router.push('/adminCar')">
            <td>
              <fa icon="window-maximize" class="iconStyle fa-lg" />
            </td>
            <td>
              <label class="text_label">Car Managing</label>
            </td>
          </tr>
        </table>
        <hr />
      </div>
    </div>
    <div v-else></div>
  </div>
</template>

<style  scoped>
.sideNav {
  height: 200px;
  padding-left: 30px;
  padding-top: 30px;
  font-size: 18px;
}
.iconStyle {
  margin-right: 7px;
  margin-bottom: 5px;
}
hr {
  width: 220px;
  margin-top: 30px;
}
.inside {
  padding-left: 20px;
}
.menu_header {
  font-size: 10px;
  opacity: 50%;
  margin-bottom: 5px;
}
.text_label {
  margin: 0px;
  font-size: 14px;
  opacity: 80%;
}
.text_label:hover {
  cursor: pointer;
}

tr:hover {
  color: tomato;
  cursor: pointer;
}
</style>

<script>
export default {
  data() {
    return {
      is_admin: false
    };
  },
  mounted() {
    this.is_admin = localStorage.getItem("is_admin");
    console.log("sidebar", this.is_admin);
  },
  methods: {
    test() {
      alert("asd");
    }
    // isAdmin() {
    //   axios.get(`http://localhost/getUserDetail`).then(res => {
    //     if (res.data.username == "admin") {
    //       this.isAdminStatus = true;
    //     }
    //   });
    // }
  }
};
</script>