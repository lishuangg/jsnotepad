var $menubar = (function(){
    var $menub = $('<div class="notepad-menu-bar"></div>'); 
    var menuData;//所有菜单数据
    var menuBox;//容器
    var id;
    var num = 1;

    function show(data,box){
        menuData = data;
        menuBox = box;
        init();
    }
    //构建菜单栏DOM结构
    function init() {
        $(menuBox).append($menub);
        //创建菜单栏
        var $menuFrist = $('<ul class="menu-frist"></ul>');
        $menub.append($menuFrist);

        for(var i=0; i<menuData.length; i++) {
            //创建菜单栏
            var $title = $('<li class="title">'+menuData[i].title+'</li>'); 
            $title.attr('data-id', i);
            $menuFrist.append($title);
            //创建二级菜单
            var $menuSecond = $('<ul class="menu-second"></ul>');
            $title.append($menuSecond);
            $menuSecond.css({
                width: menuData[i].width,
                left: menuData[i].left,
                display: 'none'
            });

            var items = menuData[i].menuItems;
            for(var j=0; j<items.length; j++) {
                if(items[j].title === 'hr') {
                  var $hr = $('<li class="menu-hr"></li>');
                  $menuSecond.append($hr);
                  continue;
                }
                //二级菜单
                var $menu = $('<li class="menu-item">'+items[j].title+'</li>');
                $menu.attr('data-x', i);
                $menu.attr('data-y', j);
                //右侧快捷键
                if(items[j].shortcut !== '') {
                    var $shorcut = $('<span class="shortcut">'+items[j].shortcut+'</span>');
                    $menu.append($shorcut);
                } 
                //按钮禁用         
                if(!items[j].enabled) $menu.addClass('disabled');
                //添加二级菜单标题
                $menuSecond.append($menu);
            }
        }
        titleClick();
        menuClick();
    }
    //点击菜单，显示二级菜单
    function titleClick(){
        $(".title").click(function(e){
            if(num===1){
                $(this).children().css({ display: 'inline-block' });
                var i = Number(this.dataset.id);
                id = i;
                num++;
            }
            else{
                var i = Number(this.dataset.id);
                if(id == i){
                    $(this).children().css({ display: 'none' });
                    num--;
                }
                else{
                    $(this).children().css({ display: 'inline-block' });  
                    id = i;
                }    
            }
            $(this).siblings().children().css({ display: 'none' });
            e.stopPropagation();
        });
    }
    //点击二级菜单中的功能
    function menuClick(){
        $('.menu-item').click(function(e) {
            e.stopPropagation();
            if($(this).hasClass('disabled')) return;
            var i = this.dataset.x, j = this.dataset.y;
            $(this).parent().css({ display: 'none' });
            num--;
            menuData[i].menuItems[j].handler();
        });
    }
    return({
        show:show
    })
})()