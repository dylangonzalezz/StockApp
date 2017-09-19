<template>
  <div>
    <app-header></app-header>
    <div v-show="getMyStockBMW.quantity > 0 ">
      <div class="container__mystock container__mystock--BMW">
        <div class="mystock__header">
          <h4>BMW</h4>
          <p>(Price: {{ getMyStockBMW.price }} | Quantity: {{ getMyStockBMW.quantity }})</p>
        </div>
        <input type="number" class="stock__input--quantity"></input>
        <button class="mystock__button--sell">Sell</button>
      </div>
    </div>
    <div v-show="getMyStockApple.quantity > 0">
      <div class="container__mystock container__mystock--BMW">
        <div class="mystock__header">
          <h4>Apple</h4>
          <p>(Price: {{ getMyStockApple.price }} | Quantity: {{ getMyStockApple.quantity }})</p>
        </div>
        <input type="number" class="stock__input--quantity"></input>
        <button class="mystock__button--sell">Sell</button>
      </div>
    </div>
    <div v-show="getMyStockABC.quantity > 0">
      <div class="container__mystock container__mystock--BMW">
        <div class="mystock__header">
          <h4>ABC</h4>
          <p>(Price: {{ getMyStockABC.price }} | Quantity: {{ getMyStockABC.quantity }})</p>
        </div>
        <input type="number" class="stock__input--quantity"></input>
        <button class="mystock__button--sell">Sell</button>
      </div>
    </div>
    <div v-show="getMyStockTwitter.quantity > 0">
      <div class="container__mystock container__mystock--BMW">
        <div class="mystock__header">
          <h4>Twitter</h4>
          <p>(Price: {{ getMyStockTwitter.price }} | Quantity: {{ getMyStockTwitter.quantity }})</p>
        </div>
        <input type="number" class="stock__input--quantity"></input>
        <button class="mystock__button--sell">Sell</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './shared/Header.vue';
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';

export default {
  components: {
    'app-header': Header,
  },
  computed: mapGetters([
    'getMyStockBMW',
    'getMyStockTwitter',
    'getMyStockABC',
    'getMyStockApple'
  ]),
}
</script>

<style lang="scss">
.mystock__header{
    background-color: lightblue;
}
.mystock__button--sell{
  float: right;
  background-color: rgb(237, 106, 106);
  border-radius: 5px;
  box-shadow: none;
  border: none;
  padding: 5px 10px 5px 10px;
  color: white;
}
.container__mystock{
  padding: 10px;
  border-radius: 10px;
  height: 150px;
  box-shadow: 2px 2px 10px gray;
  margin: 20px 20px 20px 20px;
  width: 40%;
  float: left;
}
</style>
