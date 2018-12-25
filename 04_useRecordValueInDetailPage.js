(function() {
  'use strict';

  // レコード詳細画面の表示後イベント
  kintone.events.on('app.record.detail.show', (event) => {
    const myMenuButton = document.createElement('button');
    myMenuButton.id = 'my_menu_button';
    myMenuButton.innerHTML = 'メニュー部ボタン';
    myMenuButton.onclick = () => {
      // 取得したレコードIDを出力する
      window.alert('id: ' + kintone.app.record.getId());
    };
    kintone.app.record.getHeaderMenuSpaceElement().appendChild(myMenuButton);
  });
})();
