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
    const subTotals = [];

    tableRecords.forEach(record => {
      // カテゴリ別に金額を集計
      const category = record.value['カテゴリ'].value;
      const unitPrice = record.value['単価'].value;
      const amount = record.value['個数'].value;

      if (!subTotals[category]) {
        subTotals[category] = 0;
      }

      subTotals[category] += unitPrice * amount;
    });

    // 集計結果をスペースフィールドに表示する
    const myTotalSpace = document.createElement('ul');
    for (const category in subTotals) {
      const categorySpace = document.createElement('li');
      categorySpace.innerHTML = `${category}: ${subTotals[category]}円`;
      myTotalSpace.appendChild(categorySpace);
    }

    kintone.app.record.getSpaceElement('sub_total_area').appendChild(myTotalSpace);
  });
})();
