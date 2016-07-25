class ReceiptItem {

  constructor(cartItem = [], saved = 0, subtotal = 0) {
    this.cartItem = cartItem;
    this.saved = saved;
    this.subtotal = subtotal;
  }
}

module.exports = ReceiptItem;
