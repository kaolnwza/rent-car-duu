<template>
  <div class="card mainCard">
    <div class="card-body" style="padding-top:60px">
      <div class="row">
        <div class="col-1"></div>
        <div class="col-3 text-center">
          <div style="height: 200px;width:200px; ">
            <img class="card imageCard" src />

            <button class="btn btn-outline-primary mt-3" style="font-weight: 400;">Add Image</button>
          </div>
        </div>
        <div class="col">
          <table>
            <tbody>
              <tr>
                <td>
                  <label class="inputLabel">Car Model</label>
                </td>
                <td>
                  <input class="inputBox form-control" placeholder="ex. " />
                </td>
              </tr>
              <tr>
                <td>
                  <label class="inputLabel">Car Type</label>
                </td>
                <td>
                  <input class="inputBox form-control" placeholder="ex. " />
                </td>
              </tr>
              <tr>
                <td>
                  <label class="inputLabel">Car Model</label>
                </td>
                <td>
                  <input class="inputBox form-control" placeholder="ex. " />
                </td>
              </tr>
              <tr>
                <td>
                  <label class="inputLabel">Car Registration Number</label>
                </td>
                <td>
                  <input class="inputBox form-control" placeholder="ex. " />
                </td>
              </tr>
              <tr>
                <td>
                  <label class="inputLabel">Car Location</label>
                </td>
                <td>
                  <input class="inputBox form-control" placeholder="ex. " />
                </td>
              </tr>
              <tr>
                <td>
                  <label class="inputLabel">Price</label>
                </td>
                <td>
                  <input class="inputBox form-control" placeholder="ex. " />
                </td>
              </tr>
              <tr>
                <td></td>
                <td class="text-right">
                  <button class="btn btn-danger">Save</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style  scoped>
.imageCard {
  height: 200px;
  width: 200px;
  max-height: 200px;
  max-width: 200px;
}
.mainCard {
  height: 430px;
}
.inputBox {
  width: 400px;
}
.inputLabel {
  margin-right: 10px;
}
.card {
  border: solid #f8f9fa;
  border-width: 0.2rem;
}
</style>