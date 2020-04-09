var $dlgGoto = (function(){
    var html = ''
            +'<div class="notepad-dlg-goto notepad-dlg">'
            +'<div class="dialogbox">'
            +' <div class="notepad-dlg-titlebar">'
            +'      <p class="title">跳转到指定行</p>'
            +'      <span class="close-btn">×</span>'
            +'  </div>'
            +'  <div class="notepad-dlg-main">'
            +'      <label for="">行号(L):</label>'
            +'      <br>'
            +'      <input type="text" class="text-line-num">'
            +'      <br>'
            +'      <input type="button" value="转到" class="btn-goto btn">'
            +'      <input type="button" value="取消" class="btn-cancel btn">'
            +'   </div>'
            +' </div>'
            +' </div>',
        $dlg = $(html),
        cfg = {
            container:'body',
            onClick:null
        };
    function show(conf){
        $(cfg.container).append($dlg);
        $.extend(cfg,conf);
    }
    return {
        show:show
    }
}())