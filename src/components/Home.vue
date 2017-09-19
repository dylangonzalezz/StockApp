<template>
  <div>
    <app-header></app-header>
    <div class="container container__home">
      <br>
      <h1>Trade or View your Portfolio</h1>
      <p>You may Save & Load your Data</p>
      <p>Click on 'EndDay' to begin anew Day!</p>
      <hr>
      <h3>Your Starting Funds: 10000Fr</h3>
      <br>
    </div>
  </div>
</template>

<script>
import Header from './shared/Header.vue';

export default {
  components: {
    'app-header': Header,
  }
}
</script>

<style lang="scss">
.container__home{
  border: solid 1px lightgray;
  margin: 0 0 0 0;
  width: 100%;
}
</style>
