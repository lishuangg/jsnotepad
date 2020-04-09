var $dlgReplace = (function(){
    var html = ''
            +'<div class="notepad-dlg-replace notepad-dlg">'
            +'  <div class="dialogbox">'
            +'      <div class="notepad-dlg-titlebar">'
            +'          <p class="title">替换</p>'
            +'          <span class="close-btn">x</span>'
            +'      </div>'
            +'      <div class="notepad-dlg-main">'
            +'          <label>查找内容(N):<input class="text-search" type="text" autofocus><br></label>'
            +'          <label>替换为(P):<input class="text-replace" type="text"><br></label>'
            +'          <input type="checkbox" value="capital" class="capital">区分大小写(C)'
            +'          <br>'
            +'          <input type="checkbox" value="loop" class="loop">循环(R)'
            +'          <input class="btn-search btn" type="button" value="查找下一个(F)">'
            +'          <input class="btn-replace btn" type="button" value="替换(R)">'
            +'          <input class="btn-replace-all btn" type="button" value="全部替换(A)">'
            +'          <input class="btn-cancel btn" type="button" value="取消">'
            +'      </div>'
            +'  </div>'
            +'</div>'
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