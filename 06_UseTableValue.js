/**
 * @file 第6回 テーブルの値を利用する
 */
(function() {
  'use strict';

  kintone.events.on('app.record.detail.show', event => {
    if (!event.record) {
      return;
    }

    // フィールドコード "order_items"のレコードオブジェクトを取得
    const tableRecords = event.record.order_items.value;

    // 2個目の "商品名" フィールドの値を取得
    const secondItemName = tableRecords[1].value['商品名'].value;

    alert(secondItemName);
  });
})();
