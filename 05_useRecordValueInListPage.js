(function() {
  'use strict';

  // レコード詳細画面の表示後イベント
  kintone.events.on('app.record.index.show', (event) => {
    // 0件Hit対策
    if (!event.size) {
      return;
    }

    const records = event.records;
    const signalColorParts = kintone.app.getFieldElements('信号の色');
    for (let i = 0; i < records.length; i++) {
      const color = records[i].信号の色.value;
      const part = signalColorParts[i];

      switch (color) {
        case '赤':
          part.style.fontWeight = 'bold';
          part.style.color = '#ffffff';
          part.style.backgroundColor = '#ff0000';
          break;
        case '青':
          part.style.fontWeight = 'bold';
          part.style.color = '#ffffff';
          part.style.backgroundColor = '#0000ff';
          break;
        case '黄':
          part.style.fontWeight = 'bold';
          part.style.color = '#ffffff';
          part.style.backgroundColor = '#ffd700';
          break;
      }
    }
  });
})();
