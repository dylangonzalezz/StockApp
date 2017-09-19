const state = {
    myStockBMW: {quantity: 10, price: 0},
    myStockApple: {quantity: 0, price: 0},
    myStockABC: {quantity: 0, price: 0},
    myStockTwitter: {quantity: 0, price: 0}
}

const getters = {
  getMyStockBMW(state) {
      return state.myStockBMW;
  },
  getMyStockApple(state) {
    return  state.myStockApple;
  },
  getMyStockABC(state) {
    return  state.myStockABC;
  },
  getMyStockTwitter(state) {
    return  state.myStockTwitter;
  }
}

const mutations = {
  buyMyStockBMW: (state, payload) => {
    if (this.state.myStockBMW.quantity != 0) {
      alert("You already have this Stock");
      return;
    }
    this.state.myStockBMW.quantity + payloadQuantity;
    this.state.myStockBMW.price + this.state.stockBMW;
  },
  buyMyStockApple: (state, payload) => {
    if (state.myStockApple.quantity != 0) {
      alert("You already have this Stock");
      return;
    }
    this.state.myStockApple.quantity + payloadQuantity;
    this.state.myStockApple.price + this.state.stockApple;
  },
  buyMyStockTwitter: (state, payload) => {
    if (state.myStockTwitter.quantity != 0) {
      alert("You already have this Stock");
      return;
    }
    state.myStockTwitter.quantity = payload;
    state.myStockTwitter.price = this.realStockTwitter;

    var minusFunds = state.myStockTwitter.quantity * state.myStockTwitter.price;
    console.log(minusFunds);
    this.funds = this.funds - minusFunds;
    console.log(this.funds);
  },
  buyMyStockABC: (state, payload) => {
    if (this.state.myStockABC.quantity != 0) {
      alert("You already have this Stock");
      return;
    }
    this.state.myStockABC.quantity + payloadQuantity;
    this.state.myStockABC.price + this.state.stockABC;
  },
  sellMyStockBMW: (state, payloadQuantity) => {
    if (payloadQuantity > this.state.myStockBMW.quantity) {
      alert("Insufficent Stock");
      return;
    }
    else if (payloadQuantity <= 0) {
      alert("You can't sell this amount of Stock");
      return;
    }
    this.state.myStockBMW.quantity - payloadQuantity;
    return payloadQuantity * this.state.myStockBMW.price;
  },
  sellMyStockApple: (state, payloadQuantity) => {
    if (payloadQuantity > this.state.myStockApple.quantity) {
      alert("Insufficent Stock");
      return;
    }
    else if (payloadQuantity <= 0) {
      alert("You can't sell this amount of Stock");
      return;
    }
    this.state.myStockApple.quantity - payloadQuantity;
    return payloadQuantity * this.state.myStockApple.price;
  },
  sellMyStockTwitter: (state, payloadQuantity) => {
    if (payloadQuantity > this.state.myStockTwitter.quantity) {
      alert("Insufficent Stock");
      return;
    }
    else if (payloadQuantity <= 0) {
      alert("You can't sell this amount of Stock");
      return;
    }
    this.state.myStockTwitter.quantity - payloadQuantity;
    return payloadQuantity * this.state.myStockTwitter.price;
  },
  sellMyStockABC: (state, payloadQuantity) => {
    if (payloadQuantity > this.state.myStockABC.quantity) {
      alert("Insufficent Stock");
      return;
    }
    else if (state, payloadQuantity <= 0) {
      alert("You can't sell this amount of Stock");
      return;
    }
    this.state.myStockABC.quantity - payloadQuantity;
    return payloadQuantity * this.state.myStockABC.price;
  }
}

const actions = {

}

export default {
  state,
  getters,
  mutations,
  actions
}
