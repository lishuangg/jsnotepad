var $dlgSearch = (function(){
    var html = ''
            +'<div class="notepad-dlg-search notepad-dlg">'
            +'    <div class="dialogbox notepad-dlgbox">'
            +'        <div class="notepad-dlg-titlebar">'
            +'            <p class="title">查找</p>'
            +'            <span class="close-btn">x</span>'
            +'        </div>'
            +'        <div class="notepad-dlg-main">'
            +'           <label for="">查找内容(N):</label>'
            +'            <input class="text-content" type="text" autofocus>'
            +'            <br>'
            +'            <input type="checkbox" value="capital" class="capital">区分大小写(C)'
            +'            <br>'
            +'            <input type="checkbox" value="loop" class="loop">循环(R)'
            +'            <fieldset class="search-direction">'
            +'              <legend>方向</legend>'
            +'              <input type="radio" value="up" class="up">向上(U)'
            +'            <input type="radio" value="down" class="down" checked>向下(D)'
            +'            </fieldset>'
            +'            <input class="btn-search btn" type="button" value="查找下一个(F)">'
            +'            <input class="btn-cancel btn" type="button" value="取消">'
            +'        </div>'
            +'    </div>'
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