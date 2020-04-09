var $menubar = (function(){
    var $bar = $('<div class="notepad-menubar"></div>'); 
    var menuData;//所有菜单数据
    var menuBox;//容器
    var id;
    var num = 1;

    function show(data,box){
        menuData = data;
        menuBox = box;
        console.log(menuData);
        init();
    }
    //构建菜单栏DOM结构
    function init() {
        $(menuBox).append($bar);
        //创建菜单栏
        var $titles = $('<ul class="menu-title"></ul>');
        $bar.append($titles);
        console.log(menuData.length)

        for(var i=0; i<menuData.length; i++) {
            //创建菜单栏
            var $title = $('<li class="title">'+menuData[i].title+'</li>'); 
            $title.attr('data-id', i);
            $titles.append($title);
            //创建二级菜单
            var $menus = $('<ul class="menus"></ul>');
            $title.append($menus);
            $menus.css({
                width: menuData[i].width,
                left: menuData[i].left,
                display: 'none'
            });

            var items = menuData[i].menuItems;
            for(var j=0; j<items.length; j++) {
                if(items[j].title === 'hr') {
                  var $hr = $('<li class="menu-hr"></li>');
                  $menus.append($hr);
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
                $menus.append($menu);
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
            // $(this).children().css({ display: 'inline-block' });
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
    //设置菜单项是否为勾选状态
    //isEnabled true 为勾选，false 为取消勾选
    function checked(row, col, isChecked) {
        var menuItem = $('.title').eq(row).children('ul').find('.menu-item')[col];

        if(isChecked) {
            $(menuItem).prepend($('<span class="checked">✓</span>')[0]);
        } else {
            $(menuItem).find('.checked').remove();
        }
    }

    //设置菜单项为启用或禁用状态
    //isEnabled true 为启用，false 为禁用
    function enabled(row, col, isEnabled) {
        var menuItem = $('.title').eq(row).children('ul').find('.menu-item')[col];

        if(isEnabled) {
            $(menuItem).removeClass('disabled');
        } else {
            $(menuItem).addClass('disabled');
        }
    }
    
    return({
        show:show,
        checked:checked,
        enabled:enabled
    })
})()