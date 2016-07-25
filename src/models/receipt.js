class Receipt {

  constructor(receiptItems = [], total = 0, savedTotal = 0) {
    this.receiptItems = receiptItems;
    this.total = total;
    this.savedTotal = savedTotal;
  }

  static buildReceipt(receiptItems) {

    let total = 0;
    let savedTotal = 0;

    for (const receiptItem of receiptItems) {
      total += receiptItem.subtotal;
      savedTotal += receiptItem.saved;
    }

    return new Receipt(receiptItems, total, savedTotal);
  }
}

module.exports = Receipt;