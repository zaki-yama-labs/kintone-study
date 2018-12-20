(function() {
  'use strict';

  // レコード詳細画面の表示後イベント
  kintone.events.on('app.record.detail.show', (event) => {
    // メニュー右側の空白部分にボタンを設置
    const myIndexButton = document.createElement('button');
    myIndexButton.id = 'my_index_button';
    myIndexButton.innerHTML = 'メニュー部ボタン';
    myIndexButton.onclick = () => {
      window.alert('メニュー部');
    };
    kintone.app.record.getHeaderMenuSpaceElement().appendChild(myIndexButton);

    // 任意のスペースフィールドにボタンを設置
    const mySpaceFieldButton = document.createElement('button');
    mySpaceFieldButton.id = 'my_space_field_button';
    mySpaceFieldButton.innerHTML = 'スペースボタン';
    mySpaceFieldButton.onclick = () => {
      window.alert('スペースフィールド');
    };
    kintone.app.record.getSpaceElement('my_space_field').appendChild(mySpaceFieldButton);
  });
})();
