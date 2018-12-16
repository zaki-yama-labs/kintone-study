(function() {
  'use strict';

  // レコード一覧画面の表示後イベント
  kintone.events.on('app.record.index.show', (event) => {
    // ここに具体的な処理の内容を記述する
    kintone.app.getHeaderMenuSpaceElement().innerHTML = '<button id=\'my_index_button\'>一覧のボタン</button>';
  });
})();