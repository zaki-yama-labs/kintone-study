(function() {
  'use strict';

  // レコード詳細画面の表示後イベント
  kintone.events.on('app.record.detail.show', (event) => {
    const myMenuButton = document.createElement('button');
    myMenuButton.id = 'my_menu_button';
    myMenuButton.innerHTML = '04.メニュー部ボタン';
    myMenuButton.onclick = () => {
      const mySpaceField = kintone.app.record.getSpaceElement('my_space_field');
      mySpaceField.parentNode.style.width = '400px';

      // 更新日時を取得する
      let updatedAt = '';
      const rec = kintone.app.record.get();
      if (rec) {
        updatedAt = rec.record['更新日時'].value;
      }
      kintone.app.record.getSpaceElement('my_space_field').innerHTML = updatedAt;
    };
    kintone.app.record.getHeaderMenuSpaceElement().appendChild(myMenuButton);
  });
})();
