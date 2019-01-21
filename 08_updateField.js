(function() {
  'use sctict';

  // レコード一覧画面
  kintone.events.on(['app.record.create.submit', 'app.record.edit.submit'], event => {
    const record = event.record;
    const price = record['単価'].value;
    const amount = record['個数'].value;

    // 合計金額の算出
    let subTotal = price * amount;

    // \10,000 以上は 20 % 割引
    if (subTotal >= 10000) {
      subTotal = subTotal * 0.8;
    }

    // \5,000 以上は 10 % 割引
    if (subTotal >= 10000) {
      subTotal = subTotal * 0.9;
    }

    record['合計'].value = subTotal;

    return event;
})();
