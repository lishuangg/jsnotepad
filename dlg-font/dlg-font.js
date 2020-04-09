/* global fontList: true */
var $dlgFont = (function(){
    var html = ''
            +'<div class="notepad-dlg notepad-dlg-font">'
            +'     <div class="dialogbox">'
            +'        <div class="notepad-dlg-titlebar">'
            +'            <p class="title">字体</p>'
            +'            <span class="close-btn">x</span>'
            +'        </div>'
            +'        <div class="notepad-dlg-main">'
            +'        <div class="font-family"><p>字体(F):</p></div>'
            +'        <div class="font-style"><p>字形(Y):</p></div>'
            +'        <div class="font-size"><p>大小(S):</p></div>'
            +'        <fieldset class="example" id="example">'
            +'            <legend>示例</legend>'
            +'            <p>AaBbYyZz</p>'
            +'       </fieldset>'
            +'        <div class="script">'
            +'           <label>'
            +'                脚本(R):<br>'
            +'                <select>'
            +'                    <option value="西欧语言">西欧语言</option>'
            +'                    <option value="中文 GB2312">中文 GB2312</option>'
            +'                </select>'
            +'            </label>'
            +'        </div>'
            +'            <input class="btn-sure btn" type="button" value="确定">'
            +'            <input class="btn-cancel btn" type="button" value="取消">'
            +'        </div>'
            +'    </div>'
            +'</div>'
        $dlg = $(html),
        cfg = {
            container:'body',
            family: 'Arial',
            style: '常规',
            size: '16',
            onClick:null
        };
    var $example = $dlg.find('#example>p');
    var fonts = ['宋体','黑体','微软雅黑','仿宋','楷体','隶书','幼圆','华文楷体','华文宋体','方正舒体','方正姚体','Agency FB', 'Algerian', 'Arial', 'Arial Rounded MT', 'Axure Handwriting', 'Bahnschrift', 'Baskerville Old Face', 'Bauhaus 93', 'Bell MT', 'Berlin Sans FB', 'Bernard MT', 'BlackAdder ITC'];
    var styles = ['常规', '斜体', '粗体', '粗偏斜体'];
    var sizes = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72'];

    function write() {
        $example.css({ 'font-family': cfg.family, 'font-size': cfg.size + 'px' });
        if(cfg.style === '斜体') {
            $example.css({'font-style': 'italic'});
            return;
        }
        if(cfg.style === '粗体') {
            $example.css({'font-weight': 'bold'});
            return;
        }
        if(cfg.style === '粗偏斜体') {
            $example.css({'font-weight': 'bold', 'font-style': 'italic'});
            return;
        }
    }

    function init() {
        var fontFamily = new fontList();
        fontFamily.show({
          container: '.notepad-dlg-font .font-family',
          width: '176px',
          list: fonts,
          selectIndex: fonts.indexOf(cfg.family),
          isFontFamily: true,
          select: function(e) {
            cfg.family = fonts[e];
            write();
          }
        });
        var fontStyle = new fontList();
        fontStyle.show({
          container: '.notepad-dlg-font .font-style',
          width: '132px',
          list: styles,
          selectIndex: styles.indexOf(cfg.style),
          isFontStyle: true,
          select: function(e) {
            cfg.style = styles[e];
            write();
          }
        });
        var fontSize = new fontList();
        fontSize.show({
          container: '.notepad-dlg-font .font-size',
          width: '64px',
          list: sizes,
          selectIndex: sizes.indexOf(cfg.size),
          isFontSize: true,
          select: function(e) {
            cfg.size = sizes[e];
            write();
          }
        });
        write();
      }

    function show(conf){
        $(cfg.container).append($dlg);
        $.extend(cfg,conf);
        init();
    }
    return {
        show:show
    }
}())