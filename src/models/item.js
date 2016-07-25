class Item {

  constructor(barcode, name, unit, price = 0) {
    this.barcode = barcode;
    this.name = name;
    this.unit = unit;
    this.price = price;
  }
}

module.exports = Item;