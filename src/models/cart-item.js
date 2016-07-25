class CartItem {

  constructor(item, count = 1) {
    this.item = item;
    this.count = count;
  }

  static buildCartItems(tags, allItems) {

    const cartItems = [];

    for (const tag of tags) {

      const tagArray = tag.split('-');
      const barcode = tagArray[0];
      const count = parseFloat(tagArray[1] || 1);

      const cartItem = cartItems.find(cartItem => cartItem.item.barcode === barcode);

      if (cartItem) {
        cartItem.count += count;
      } else {
        const item = allItems.find(item => item.barcode === barcode);
        cartItems.push(new CartItem(item, count));
      }
    }

    return cartItems;
  }
}

module.exports = CartItem;