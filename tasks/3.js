'use strict';

class Goods {
    name = null;
    price = null;
    quantity = null;
    description = null;
  constructor(name, price, quantity, description) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
  }

  contains(property, str) {
    return this[`${property}`].includes(str);
  }
  ends(property, str) {
    return this[`${property}`].endsWith(str);
  }
  starts(property, str) {
    return this[`${property}`].startsWith(str);
  }
  compareNumber(property, comparison) {
    if (comparison.startsWith('==')) return this[`${property}`]==+comparison.split('==')[1];
    if (comparison.startsWith('>=')) return this[`${property}`]>=+comparison.split('>=')[1];
    if (comparison.startsWith('<=')) return this[`${property}`]<=+comparison.split('<=')[1];
    if (comparison.startsWith('<')) return this[`${property}`]<+comparison.split('<')[1];
    if (comparison.startsWith('>')) return this[`${property}`]>+comparison.split('>')[1];
    return true;
  }

  static filterGoods(goods, request) {
    let result=[];
    console.log(request);
    let unpackedRequest = this.unpackRequest(request);
    for (let good of goods) {
      if (good.filterGood(unpackedRequest)) result.push(good);
    }
     return result;
  }

  static unpackRequest(request) {
    let result=[];
    let conditions = request.split('&');
    for (let condition of conditions) {
      result.push(condition.split('-'));
    }
    return result;
  }

  filterGood(unpackedRequest) {
    let result=true;
    for (let condition of unpackedRequest) {
      if (condition.length == 2) {
          let [property, comparison] = condition;
          result &&= this.compareNumber(property, comparison);
      } else if (condition.length == 3) {
          let [property, funcName, str] = condition;
          result &&= this[`${funcName}`](property, str);
      }
    }
    return result;
  }
};

let goods = [];
for (let i=1;i<50;i++) {
    goods.push(new Goods('good'+i,i+1,i,'descr'+i));
}

for (let good of Goods.filterGoods(goods, "name-starts-go&price->2&quantity-<=5")) {
  console.log(good);
}
for (let good of Goods.filterGoods(goods, "name-starts-go&quantity->5&quantity-<=10")) {
  console.log(good);
}