(function() {
  'use sctict';

  // レコード一覧画面
  kintone.events.on('app.record.index.show', event =>{
    if (event.viewId !== 5520256) {
      return;
    }

    window.alert('カスタマイズビュー');
  });
})();
