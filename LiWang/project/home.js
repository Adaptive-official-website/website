$(function () {
    // 初始化轮播图
    $(document).ready(function(){
        $('#circleContent').carousel({interval:5000});//每隔5秒自动轮播
    });
    //鼠标进入进行显示,鼠标离开则消失
    var _paging = $('.carousel-control');
    $('#circleContent').hover(function () {
        _paging.removeClass('unShow')
    },function () {
        _paging.addClass('unShow')
    });
    // 头部点击事件
    $('.navClick>li').click(function () {
       $(this).addClass('activeH').siblings().removeClass('activeH')
    });
    // 更改按钮
    // var _btnHt = `<span class="icon-bar deg"></span>
    //                 <span class="icon-bar _deg"></span>`;
    // var _OldBtn = `   <span class="icon-bar"></span>
    //                         <span class="icon-bar"></span>
    //                         <span class="icon-bar"></span>`
    // var _btn = true;
    // $('.NavBtn').click(function () {
    //     _btn = !_btn;
    //     if(!_btn){$(this).html(_btnHt)}else{$(this).html(_OldBtn)}
    // })
    var journalism = `  
                    
                      <div class="col-md-6 col-xs-12">
                    <img src="./images/history_img.png" alt="图片加载失败" class="img-responsive">
                </div>
                <div class="journalism-content">
                <div class="col-md-6 col-xs-12">
                        <ul>
                            <li><img src="./images/title_news.png" alt="图片加载失败"></li>
                            <li>
                                <h3>剖析有机颜料用在印花中的方法</h3>
                                <p>随着科技的进步，在印花的生产中，用的不再是一些随便的颜料，现在用的最多的就属有机颜料了，
                                    在印花中用有机颜料，可以使印花看上去更加的美观，逼真。
                                </p>
                                <a href="javascript:;">了解更多>></a>
                            </li>
                            <li>
                                <h3>剖析有机颜料用在印花中的方法</h3>
                                <p>随着科技的进步，在印花的生产中，用的不再是一些随便的颜料，现在用的最多的就属有机颜料了，
                                    在印花中用有机颜料，可以使印花看上去更加的美观，逼真。
                                </p>
                                <a href="javascript:;">了解更多>></a>
                            </li>
                            <li>
                                <h3>剖析有机颜料用在印花中的方法</h3>
                                <p>随着科技的进步，在印花的生产中，用的不再是一些随便的颜料，现在用的最多的就属有机颜料了，
                                    在印花中用有机颜料，可以使印花看上去更加的美观，逼真。
                                </p>
                                <a href="javascript:;">了解更多>></a>
                            </li>
                            <li>
                                <h3>剖析有机颜料用在印花中的方法</h3>
                                <p>随着科技的进步，在印花的生产中，用的不再是一些随便的颜料，现在用的最多的就属有机颜料了，
                                    在印花中用有机颜料，可以使印花看上去更加的美观，逼真。
                                </p>
                                <a href="javascript:;">了解更多>></a>
                            </li>
                        </ul>
                    </div>
                </div>`
    //根据屏幕宽度进行适配
    var _homeHt = $(window).width();
    if(_homeHt > 768){
        $('.advantage').css({
            margin:'0 45px 40px 45px'
        });
        $('.Pro_one').css({marginLeft:'35'})
    }else{
        $('.HomeProduct>div>div:nth-child(1)').addClass('productCenter');
        //图片交换位置
        $('.journalism').html(journalism);
        //添加点击事件
        $('.MobileSearch').click(function () {
            $('.pull-down').addClass('navClickAn');
        });
        $('.close-search').click(function () {
            $('.pull-down').removeClass('navClickAn');
        })
    }
    //荣誉轮播
    var carousels = $('.carousel');
    carousels.each(function() {
        var $obj = $(this);
        var $inner = $obj.find('.carousel-inner');

        var id = 'uuid' + new Date().getTime();
        $obj.addClass(id);

        if ($obj.data('shift') === 1) {
            var items = $obj.find('.item > [class*="col-"]'),
                visibleCnt = $obj.find('.item:first [class*="col-"]').length,
                wrapper = "";

            // 内置CSS样式
            var rule_base = '.carousel.' + id + ' .carousel-inner > .item',
                styles = $('<style></style>'),
                rules = [];
            rules[0] = rule_base + '.next {left: ' + (100 / visibleCnt) + '%; transform: none;}';
            rules[1] = rule_base + '.active {left: 0;}';
            rules[2] = rule_base + '.active.left {left: -' + (100 / visibleCnt) + '%; transform: none;}';
            rules[3] = rule_base + '.next.left {left: 0;}';
            rules[4] = rule_base + '.active.right {left: ' + (100 / visibleCnt) + '%; transform: none;}';
            rules[5] = rule_base + '.prev.right {left: 0;}';
            rules[6] = rule_base + '.prev {left: -' + (100 / visibleCnt) + '%; transform: none;}';
            for (var i = 0; i < rules.length; i++) {
                styles.append(rules[i]);
            }
            $obj.prepend(styles);

            // 重构旋转木马的HTML结构
            for (var i = 0; i < $(items).length; i++) {
                var $item = $(items[i]);
                var parent = $item.parent();
                if (parent.hasClass('item')) {
                    if (!wrapper.length) {
                        wrapper = parent.clone().removeClass('active').html('');
                    }
                    $item.unwrap();
                }
                var itemGroup = [$item];
                for (var x = 1; x < visibleCnt; x++) {
                    var a = i + x;
                    var next = $(items[a]);
                    if (!next.length) {
                        next = $(items[(a - $(items).length)]);
                    }
                    itemGroup[x] = next.clone();
                }
                var newSet = wrapper.clone().html(itemGroup);
                if (i == 0) {
                    newSet.addClass('active');
                }
                newSet.appendTo($inner);
            }
        }
    });
    if(_homeHt <1024){
        $('.search').addClass('unShow');
    }
});