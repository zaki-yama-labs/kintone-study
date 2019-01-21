(function() {
  'use sctict';

  // レコード一覧画面
  kintone.events.on('app.record.index.show', event =>{
    if (event.viewId !== 5520256) {
      return;
    }

    const records = event.records;
    if (!records || !records.length) {
      document.getElementById('my-customized-view').innerHTML = '表示するレコードがありません');
      return;
    }

    const recUrl = `${location.protocol}//${location.hostname}/k/${kintone.app.getId()}/show#record=`;
    const myRecordSpace = document.getElementById('my-tbody');
    myRecordSpace.innerHTML = '';

    records.forEach(record => {
      const row = myRecordSpace.insertRow(myRecordSpace.rows.length);
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);

      const tmpA = document.createElement('a');
      tmpA.href = recUrl + record.レコード番号.value;
      tmpA.innerHTML = record.レコード番号.value;
      cell1.appendChild(tmpA);

      cell2.innerHTML = record.信号の色.value;
      const createdAt = new Date(record.作成日時.value);

      cell3.innerHTML = createdAt.toLocaleString();
  });
})();
