(function() {
  'use strict';

  // レコード詳細画面の表示後イベント
  kintone.events.on('app.record.detail.show', (event) => {
    // メニュー右側の空白部分にボタンを設置
    const myIndexButton = document.getElementById('button');
    myIndexButton.id = 'my_index_button';
    myIndexButton.innerHTML = 'メニュー部ボタン';
    myIndexButton.onclick = () => {
      window.alert('メニュー部');
    };

    kintone.app.getHeaderMenuSpaceElement().appendChild(myIndexButton);
  });
})();
