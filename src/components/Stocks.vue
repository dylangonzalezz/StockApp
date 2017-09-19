<template>
  <div>
    <app-header></app-header>
    <div class="container container__stocks">
      <div class="row">
        <div class="container__stock container__stock--BMW">
          <div class="stock__header">
            <h4>BMW</h4>
            <p>(Price: {{ getRealStockBMW }} )</p>
          </div>
          <input type="number" class="stock__input--quantity" v-model="inputQuantityBMW"></input>
          <button class="stock__button--buy">Buy</button>
          <div class="sk-circle stock__loadingOverlay" v-show="getLoadingOverlay">
            <div class="sk-circle1 sk-child"></div>
            <div class="sk-circle2 sk-child"></div>
            <div class="sk-circle3 sk-child"></div>
            <div class="sk-circle4 sk-child"></div>
            <div class="sk-circle5 sk-child"></div>
            <div class="sk-circle6 sk-child"></div>
            <div class="sk-circle7 sk-child"></div>
            <div class="sk-circle8 sk-child"></div>
            <div class="sk-circle9 sk-child"></div>
            <div class="sk-circle10 sk-child"></div>
            <div class="sk-circle11 sk-child"></div>
            <div class="sk-circle12 sk-child"></div>
          </div>
        </div>
        <div class="container__stock container__stock--Apple">
          <div class="stock__header">
            <h4>Apple</h4>
            <p>(Price: {{ getRealStockApple }} )</p>
          </div>
          <input type="number" class="stock__input--quantity" v-model="inputQuantityApple"></input>
          <button class="stock__button--buy">Buy</button>
          <div class="sk-circle stock__loadingOverlay" v-show="getLoadingOverlay">
            <div class="sk-circle1 sk-child"></div>
            <div class="sk-circle2 sk-child"></div>
            <div class="sk-circle3 sk-child"></div>
            <div class="sk-circle4 sk-child"></div>
            <div class="sk-circle5 sk-child"></div>
            <div class="sk-circle6 sk-child"></div>
            <div class="sk-circle7 sk-child"></div>
            <div class="sk-circle8 sk-child"></div>
            <div class="sk-circle9 sk-child"></div>
            <div class="sk-circle10 sk-child"></div>
            <div class="sk-circle11 sk-child"></div>
            <div class="sk-circle12 sk-child"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="container__stock container__stock--ABC">
          <div class="stock__header">
            <h4>ABC</h4>
            <p>(Price: {{ getRealStockABC }} )</p>
          </div>
          <input type="number" class="stock__input--quantity" v-model="inputQuantityABC"></input>
          <button class="stock__button--buy">Buy</button>
          <div class="sk-circle stock__loadingOverlay" v-show="getLoadingOverlay">
            <div class="sk-circle1 sk-child"></div>
            <div class="sk-circle2 sk-child"></div>
            <div class="sk-circle3 sk-child"></div>
            <div class="sk-circle4 sk-child"></div>
            <div class="sk-circle5 sk-child"></div>
            <div class="sk-circle6 sk-child"></div>
            <div class="sk-circle7 sk-child"></div>
            <div class="sk-circle8 sk-child"></div>
            <div class="sk-circle9 sk-child"></div>
            <div class="sk-circle10 sk-child"></div>
            <div class="sk-circle11 sk-child"></div>
            <div class="sk-circle12 sk-child"></div>
          </div>
        </div>
        <div class="container__stock container__stock--Twitter">
          <div class="stock__header">
            <h4>Twitter</h4>
            <p>(Price: {{ getRealStockTwitter }} )</p>
          </div>
          <input type="number" class="stock__input--quantity" v-model="inputQuantityTwitter"></input>
          <button class="stock__button--buy" v-on:click="buyMyStockTwitter()">Buy</button>
          <div class="sk-circle stock__loadingOverlay" v-show="getLoadingOverlay">
            <div class="sk-circle1 sk-child"></div>
            <div class="sk-circle2 sk-child"></div>
            <div class="sk-circle3 sk-child"></div>
            <div class="sk-circle4 sk-child"></div>
            <div class="sk-circle5 sk-child"></div>
            <div class="sk-circle6 sk-child"></div>
            <div class="sk-circle7 sk-child"></div>
            <div class="sk-circle8 sk-child"></div>
            <div class="sk-circle9 sk-child"></div>
            <div class="sk-circle10 sk-child"></div>
            <div class="sk-circle11 sk-child"></div>
            <div class="sk-circle12 sk-child"></div>
          </div>
        </div>
      </div>
    </div>
    <button class="button__refresh" @click="refreshStock()">Refresh</button>
    <!-- <p>{{ getDis }}</p>
    <button class="button__refresh" v-on:click="setDis('kek')">Kek</button>
    <button class="button__refresh" v-on:click="setDis('wot')">Wot</button> -->
  </div>
</template>

<script>
import Header from './shared/Header.vue';
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      inputQuantityBMW: 0,
      inputQuantityApple: 0,
      inputQuantityABC: 0,
      inputQuantityTwitter: 0
    }
  },
  computed: {
    buyMyStockABC() {
      this.$store.commit('buyMyStockABC');
    },
    buyMyStockApple() {
      this.$store.commit('buyMyStockApple');
    },
    buyMyStockBMW() {
      this.$store.commit('buyMyStockBMW');
    },
    getStockApple() {
      this.$store.commit('getStockApple');
    },
    setLoadingOverlay() {
      this.$store.commit('setLoadingOverlay');
    },
  },
  components: {
    'app-header': Header,
  },
  computed:mapGetters([
    'getRealStockApple',
    'getRealStockABC',
    'getRealStockTwitter',
    'getRealStockBMW',
    'getLoadingOverlay',
    'getDis'
  ]),
  methods: {
    refreshStock() {
      this.$store.dispatch('updateBMW');
    },
    buyMyStockTwitter() {
      this.$store.commit('buyMyStockTwitter', this.inputQuantityTwitter);
    },
    // setDis(x) {
    //   this.$store.dispatch('setDis', x);
    // }
  }
}
</script>

<style lang="scss">
.container__stock{
  padding: 10px;
  height: 150px;
  box-shadow: 2px 2px 10px gray;
  margin: 20px 20px 20px 20px;
  width: 40%;
  float: left;
}

.stock__{

  &button--buy {
    float: right;
    background-color: rgb(69, 176, 69);
    border-radius: 5px;
    box-shadow: none;
    border: none;
    padding: 5px 10px 5px 10px;
    color: white;
  }

  &header{
    background-color: lightgreen;
  }

  &loadingOverlay {
    margin: 0 0 0 200px;
  }
}

.button__refresh{
  float: left;
  background-color: rgb(76, 168, 198);
  border-radius: 5px;
  box-shadow: none;
  border: none;
  padding: 5px 10px 5px 10px;
  color: white;
  margin: 0 0 0 20px;
}

.row{
  width: 100%;
}
.sk-circle {
  width: 40px;
  height: 40px;
  position: relative;
}
.sk-circle .sk-child {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.sk-circle .sk-child:before {
  content: '';
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: #333;
  border-radius: 100%;
  -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
          animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
}
.sk-circle .sk-circle2 {
  -webkit-transform: rotate(30deg);
      -ms-transform: rotate(30deg);
          transform: rotate(30deg); }
.sk-circle .sk-circle3 {
  -webkit-transform: rotate(60deg);
      -ms-transform: rotate(60deg);
          transform: rotate(60deg); }
.sk-circle .sk-circle4 {
  -webkit-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
          transform: rotate(90deg); }
.sk-circle .sk-circle5 {
  -webkit-transform: rotate(120deg);
      -ms-transform: rotate(120deg);
          transform: rotate(120deg); }
.sk-circle .sk-circle6 {
  -webkit-transform: rotate(150deg);
      -ms-transform: rotate(150deg);
          transform: rotate(150deg); }
.sk-circle .sk-circle7 {
  -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
          transform: rotate(180deg); }
.sk-circle .sk-circle8 {
  -webkit-transform: rotate(210deg);
      -ms-transform: rotate(210deg);
          transform: rotate(210deg); }
.sk-circle .sk-circle9 {
  -webkit-transform: rotate(240deg);
      -ms-transform: rotate(240deg);
          transform: rotate(240deg); }
.sk-circle .sk-circle10 {
  -webkit-transform: rotate(270deg);
      -ms-transform: rotate(270deg);
          transform: rotate(270deg); }
.sk-circle .sk-circle11 {
  -webkit-transform: rotate(300deg);
      -ms-transform: rotate(300deg);
          transform: rotate(300deg); }
.sk-circle .sk-circle12 {
  -webkit-transform: rotate(330deg);
      -ms-transform: rotate(330deg);
          transform: rotate(330deg); }
.sk-circle .sk-circle2:before {
  -webkit-animation-delay: -1.1s;
          animation-delay: -1.1s; }
.sk-circle .sk-circle3:before {
  -webkit-animation-delay: -1s;
          animation-delay: -1s; }
.sk-circle .sk-circle4:before {
  -webkit-animation-delay: -0.9s;
          animation-delay: -0.9s; }
.sk-circle .sk-circle5:before {
  -webkit-animation-delay: -0.8s;
          animation-delay: -0.8s; }
.sk-circle .sk-circle6:before {
  -webkit-animation-delay: -0.7s;
          animation-delay: -0.7s; }
.sk-circle .sk-circle7:before {
  -webkit-animation-delay: -0.6s;
          animation-delay: -0.6s; }
.sk-circle .sk-circle8:before {
  -webkit-animation-delay: -0.5s;
          animation-delay: -0.5s; }
.sk-circle .sk-circle9:before {
  -webkit-animation-delay: -0.4s;
          animation-delay: -0.4s; }
.sk-circle .sk-circle10:before {
  -webkit-animation-delay: -0.3s;
          animation-delay: -0.3s; }
.sk-circle .sk-circle11:before {
  -webkit-animation-delay: -0.2s;
          animation-delay: -0.2s; }
.sk-circle .sk-circle12:before {
  -webkit-animation-delay: -0.1s;
          animation-delay: -0.1s; }

@-webkit-keyframes sk-circleBounceDelay {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
            transform: scale(0);
  } 40% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}

@keyframes sk-circleBounceDelay {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
            transform: scale(0);
  } 40% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
</style>
