class Receipt {

  constructor(receiptItems = [], total = 0, savedTotal = 0) {
    this.receiptItems = receiptItems;
    this.total = total;
    this.savedTotal = savedTotal;
  }
}

module.exports = Receipt;