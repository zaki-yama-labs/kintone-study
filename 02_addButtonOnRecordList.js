(function() {
  'use strict';

  // レコード一覧画面の表示後イベント
  kintone.events.on('app.record.index.show', (event) => {
    // 増殖バグを防ぐ
    if (document.getElementById('my_index_button') !== null) {
      return;
    }

    const myIndexButton = document.createElement('button');
    myIndexButton.id = 'my_index_button';
    myIndexButton.innerHTML = '一覧のボタン';
    myIndexButton.onclick = function() {
      window.confirm('いま押しましたね？');
    };

    kintone.app.getHeaderMenuSpaceElement().appendChild(myIndexButton);
  });
})();