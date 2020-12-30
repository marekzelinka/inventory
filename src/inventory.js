export class Inventory {
  /**
   * @param {string[]} items
   */
  constructor() {
    this.items = [];
  }

  addItem(item) {
    return this.items.push(item);
  }

  getItems() {
    return this.items;
  }

  getCount() {
    return this.items.length;
  }

  exists(name) {
    return this.items.find((item) => item.name === name);
  }
}
