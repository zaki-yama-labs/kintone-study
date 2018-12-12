(function() {
  'use strict';

  // レコード一覧イベントを取得
  kintone.events.on('app.record.detail.show', function(event) {
    // レコード情報を取得
    var record = event.record;

    // ユーザー数が500人以上であればメッセージを表示
    if (record['ユーザー数']['value'] >= 500) {
      alert('ユーザー数500人以上の案件です\n【見込み期限】' + record['日付_0']['value']);
    }
  });
})();