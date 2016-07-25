class ReceiptItem {

  constructor(cartItem = [], saved = 0, subtotal = 0) {
    this.cartItem = cartItem;
    this.saved = saved;
    this.subtotal = subtotal;
  }

  getName() {
    return this.cartItem.getName();
  }

  getBarcode() {
    return this.cartItem.getBarcode();
  }

  getUnit() {
    return this.cartItem.getUnit();
  }

  getPrice() {
    return this.cartItem.getPrice();
  }

  getCount() {
    return this.cartItem.count;
  }

  static buildReceiptItems(cartItems, allPromotions) {

    const discount = (cartItem, promotionType) => {

      let subtotal = cartItem.getSubtotal();
      let saved = 0;

      if (promotionType === 'BUY_TWO_GET_ONE_FREE') {
        saved = parseInt(cartItem.count / 3) * cartItem.getPrice();
      }

      subtotal -= saved;

      return {saved, subtotal};
    };

    const findPromotionType = (barcode, promotions) => {

      const promotion = promotions.find(promotion => promotion.barcodes.some(b => b === barcode));

      return promotion ? promotion.type : undefined;
    };

    return cartItems.map(cartItem => {

      const promotionType = findPromotionType(cartItem.getBarcode(), allPromotions);

      const {saved, subtotal} = discount(cartItem, promotionType);

      return new ReceiptItem(cartItem, saved, subtotal);
    });
  }
}

module.exports = ReceiptItem;
