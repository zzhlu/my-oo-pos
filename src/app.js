const CartItem = require('./models/cart-item');
const ReceiptItem = require('./models/receipt-item');
const Receipt = require('./models/receipt');
const Item = require('./models/item');
const Promotion = require('./models/promotion');

function printReceipt(tags) {

  const cartItems = CartItem.buildCartItems(tags, Item.all());
  const receiptItems = ReceiptItem.buildReceiptItems(cartItems, Promotion.all());
  const receipt = Receipt.buildReceipt(receiptItems);
  const receiptText = buildReceiptText(receipt);

  console.log(receiptText);
}

function buildReceiptText(receipt) {

  let receiptItemsText = receipt.receiptItems
    .map(receiptItem => {
      const cartItem = receiptItem.cartItem;
      return `名称：${cartItem.item.name}，\
数量：${cartItem.count}${cartItem.item.unit}，\
单价：${formatMoney(cartItem.item.price)}(元)，\
小计：${formatMoney(receiptItem.subtotal)}(元)`;
    })
    .join('\n');

  return `***<没钱赚商店>收据***
${receiptItemsText}
----------------------
总计：${formatMoney(receipt.total)}(元)
节省：${formatMoney(receipt.savedTotal)}(元)
**********************`;
}

function formatMoney(money) {
  return money.toFixed(2);
}

exports.printReceipt = printReceipt;
