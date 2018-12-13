(function() {
  'use strict';

  // レコード一覧イベントを取得
  kintone.events.on('app.record.index.show', function(event) {
    // アプリIDを取得
    var appID = kintone.app.getId();
    // ログインユーザ情報
    var user = kintone.getLoginUser();

    // クエリ文の設定
    var qryInfo = 'ユーザー選択 in (LOGINUSER())';

    // リクエストを行う
    const data = {
      app: appID,
      query:qryInfo,
    };
    kintone.api('/k/v1/records', 'GET', data, (resp) => {
      if (resp['records'].length > 0) {
        var msg = '';
        resp['records'].forEach(record => {
          msg += `・ ${record['文字列__1行_']['value']}\n`;
        });
        alert(`【${user.name}】が担当している会社\n\n${msg}`);
      }
    });
  });
})();