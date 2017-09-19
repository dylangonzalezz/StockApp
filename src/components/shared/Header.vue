<template>
  <div>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <router-link to='/'><a class="navbar-brand">StockApp</a></router-link>
          </div>
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <li><router-link to='/stocks'><a>Stocks</a></router-link></li>
              <li><router-link to='/portfolio'><a>Portfolio</a></router-link></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li><a v-on:click="endDay()">End Day</a></li>
              <li class="dropdown">
                <a class="dropdown-toggle" v-on:click="savenload = !savenload">Save & Load</a>
                <ul v-show="savenload" class="dropdown-savenload">
                  <li><a v-on:click="saveData()">Save Data</a></li>
                  <li><a v-on:click="loadData()">Load Data</a></li>
                </ul>
              </li>
              <li><a><b>Funds: {{ getFunds }} Fr</b></a></li>
            </ul>
          </div>
        </div>
      </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      savenload: false,
    }
  },
  computed: mapGetters([
    'getFunds'
  ]),
  methods: {
    endDay() {
      console.log("end");
      console.log(this.savenload);
    }
  }
}
</script>

<style lang="scss">
.dropdown-savenload{
  position: absolute;
  box-shadow: 2px 2px 8px grey;
  text-align: center;
  width: 150px;
}

</style>
