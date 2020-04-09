function fontList() {
  var html = ''
        +'<div class="notepad-list">'
        +'  <input class="editor" type="text"><br>'
        +'  <ul class="list">'
        +'  </ul>'
        +'</div>';
  var $fontList = $(html),
      $editor = $fontList.find('.editor'),
      $list = $fontList.find('.list'),
      $items;

  var cfg = {
    container: '',
    list: [],
    selectIndex: 0,
    width: '200px',
    isFontFamily: false,
    isFontStyle: false,
    isFontSize: false,
    select: null
  };

  function setFontStyle(item, style) {
    if(style === '斜体') {
      item.css({'font-style': 'italic'});
    }else if(style === '粗体') {
      item.css({'font-weight': 'bold'});
    }else if(style === '粗偏斜体') {
      item.css({'font-weight': 'bold', 'font-style': 'italic'});
    }
    return ;
  }

  function writeData() {
    var $item;
    if(cfg.isFontFamily) {
      for(var i=0; i<cfg.list.length; i++) {
        $item = $('<li class="item"></li>');
        $item.css({'font-family': cfg.list[i]});
        $list.append($item.html(cfg.list[i]));
      }
    } else if(cfg.isFontStyle) {
      for(var i=0; i<cfg.list.length; i++) {
        $item = $('<li class="item"></li>');
        setFontStyle($item, cfg.list[i]);
        $list.append($item.html(cfg.list[i]));
      }
    } else if(cfg.isFontSize) {
      for(var i=0; i<cfg.list.length; i++) {
        $item = $('<li class="item"></li>');
        $list.append($item.html(cfg.list[i]));
      }
    }
    $items = $list.find('.item');
  }

  function setSelect(n) {
    $($items[n]).addClass('selected');
    $editor.val(cfg.list[n]);
  }

  function init() {
    var $oldList = $(cfg.container).find('.notepad-list');
    if($oldList.length !== 0) 
      $oldList.remove();
    $(cfg.container).append($fontList);
    $fontList.css('width',cfg.width);
    writeData();
    setSelect(cfg.selectIndex);
  }

  this.show = function(conf) {
    $.extend(cfg, conf);
    init();

    $list.click(function(e) {
      $($items[cfg.selectIndex]).removeClass('selected');
      cfg.selectIndex = cfg.list.indexOf($(e.target).html());
      $($items[cfg.selectIndex]).addClass('selected');
      $editor.val(cfg.list[cfg.selectIndex]);
      cfg.select(cfg.selectIndex);
    });

    $editor.keyup(function() {
      var i = 0;
      for(i=0; i<cfg.list.length; i++) {
        if(cfg.list[i].indexOf($editor.val()) === 0) break;
      }
      if(i === cfg.list.length) return;
      $items[i].scrollIntoView({behavior: 'smooth', block: 'start'});
      $($items[cfg.selectIndex]).removeClass('selected');
      $($items[i]).addClass('selected');
      cfg.selectIndex = i;
    });
  };
}