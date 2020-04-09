function Menu(){
    var html =''
                +'<div class="menu-box">'
                +'    <ul class="menu-name">'
                +'    </ul>'
                +'</div>',
            cfg;
    var index = -1;
    var active = false;
    var active_num = 0;
    this.show = function show(conf){
        cfg = {
            container:'body',
        };
        $.extend(cfg,conf);
        var $dlg = $(html);
        $(cfg.container).append($dlg);
        adddata();
    }
    function adddata(){
        var len = menuData.length;
        for(var i=0;i<len;i++){
            var $liT = $('<li class="menu-title"></li>');
            $('.menu-name').append($liT.html(menuData[i].title));
            var $ul = $('<ul class="menu-context"></ul>');
            $ul.css('left',70*i+'px')
            $('.menu-box').append($ul);
            (function(i){
                for(var a=0;a<menuData[i].menuItems.length;a++){
                    if(menuData[i].menuItems[a].title =='hr'){
                        var $hr = $('<hr/>')
                        $ul.append($hr)
                    }else{
                        var $liC = $('<li class="menu-item"></li>');
                        var $sp1 = $('<span class="menu-item-left"></span>')
                        var $sp2 = $('<span class="menu-item-right"></span>')
                        if(!menuData[i].menuItems[a].enabled){//区分不能使用和能够使用的按钮
                            $liC.css('color','#6d6d6d')
                        }
                        $ul.append($liC)
                        $liC.append($sp1.html(menuData[i].menuItems[a].title))
                        $liC.append($sp2.html(menuData[i].menuItems[a].shortcut));
                        (function(a){
                            $liC.click(function(e){
                                active_num = 0;
                                active = false;
                                index = -1;
                                $('.menu-context').css('display','none')
                                $('.menu-title').css('background','white')
                                menuData[i].menuItems[a].handler();
                            })
                            $liC.mouseover((e)=>{showSpan(e)})
                        }(a))
                    }
                }
            }(i));
            (function(i){
                $liT.click(()=>{titleClick(i)})
                // $ul.mouseleave(()=>{titleout(i)})
                $ul.mouseover(()=>{ulOver(i)})
                $liT.mouseover(()=>{titleStyle(i)})
                $liT.mouseout(()=>{
                    $('.menu-title').css('background','white')
                })
            }(i))
        }
    }
    function titleStyle(i){//滑过菜单
        index = i;
        $('.menu-title').css('background','white')
        $('.menu-title').eq(i).css('background','#87CEFA')
        if(active){
            $('.menu-context').css('display','none')
            $('.menu-context').eq(i).css('display','block')
        }
    }
    function titleClick(i){//点击每项
        active_num++;
        if(active_num!=2){
            active = true;
            index = i;
            $('.menu-context').eq(i).css('display','block')
            $('.menu-title').eq(i).css('background','#87CEFA')
        }else{//点了俩下关闭子菜单
            active_num = 0;
            active = false;
            index = -1;
            $('.menu-context').css('display','none')
        }
    }
    function ulOver(i){//划过子菜单
        $('.menu-title').eq(i).css('background','#87CEFA')
    }
    function titleout(i){//划出子菜单
        $('.menu-title').css('background','white')
        $('.menu-context').eq(i).css('display','none')
    }
    function showSpan(e){//显示子菜单滑动背景变化
        $('.menu-item').css('background','white')
        var a = e.target.parentNode
        console.log(a)
        $(a).css({background:'#87CEFA'})
    }
}