(function() {
  'use strict';

  // レコード詳細画面の表示後イベント
  kintone.events.on('app.record.index.show', (event) => {
    // 0件Hit対策
    if (!event.size) {
      return;
    }

    const myListTable = document.createElement('table');
    myListTable.id = 'my_list_table';
    myListTable.style.border = '1px solid';
    myListTable.width = '600px';

    for (let i = 0; i < event.records.length; i++) {
      const record = event.records[i];

      // レコード番号
      const myRecordTd1 = document.createElement('td');
      myRecordTd1.id = `my_record_td_${i}_1`;
      myRecordTd1.style.border = '1px solid';
      myRecordTd1.innerHTML = record.レコード番号.value;

      // 信号の色
      const myRecordTd2 = document.createElement('td');
      myRecordTd2.id = `my_record_td_${i}_2`;
      myRecordTd2.style.border = '1px solid';
      myRecordTd2.innerHTML = record.信号の色.value;

      // 作成日時
      const myRecordTd3 = document.createElement('td');
      myRecordTd3.id = `my_record_td_${i}_3`;
      myRecordTd3.style.border = '1px solid';
      myRecordTd3.innerHTML = record.作成日時.value;

      const myRecordTr = document.createElement('tr');
      myRecordTr.id = `my_record_tr_${i}`;
      myRecordTr.appendChild(myRecordTd1);
      myRecordTr.appendChild(myRecordTd2);
      myRecordTr.appendChild(myRecordTd3);

      myListTable.appendChild(myRecordTr);
    }

    const myHeaderSpace = kintone.app.getHeaderSpaceElement();
    myHeaderSpace.innerHTML = '';
    myHeaderSpace.appendChild(myListTable);
  });
})();
