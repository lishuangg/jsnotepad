var $editor = (function() {
    var $editing = $(''
      + '<div class="notepad-editor">'
        + '<textarea spellcheck="false" auto-size="none"></textarea>'
      + '</div>');

    var $textArea = $editing.find('textarea');

    var cfg = {
        container:'body'
    };

    function show(conf) {
      $.extend(cfg, conf);
      $(cfg.container).append($editing);
      $textArea.trigger('focus');
    }
    
    function setFont(e) {
      console.log(e);
      $textArea.css({'font-family': e.family, 'font-size': e.size + 'pt'});
  
      if(e.style === '斜体') {
        $textArea.css({'font-style': 'italic'});
        return;
      }
      if(e.style === '粗体') {
        $textArea.css({'font-weight': 'bold'});
        return;
      }
      if(e.style === '粗偏斜体') {
        $textArea.css({'font-weight': 'bold', 'font-style': 'italic'});
        return;
      }
    }
  
    return({
      show:show,
      setFont:setFont
    })
})();