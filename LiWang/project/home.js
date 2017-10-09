$(function () {
    // 初始化轮播图
    $(document).ready(function () {
        $('#circleContent').carousel({interval: 2000});//每隔5秒自动轮播
    });
    //鼠标进入进行显示,鼠标离开则消失
    var _paging = $('.carousel-control');
    $('#circleContent').hover(function () {
        _paging.removeClass('unShow')
    }, function () {
        _paging.addClass('unShow')
    });
    // 头部点击事件
    $('.navClick>li').click(function () {
        $(this).addClass('activeH').siblings().removeClass('activeH')
    });
    //铲平中心

    var _productCenterMobile = `<div class=" proMobCen">产品中心</div>
                        <div class="materialsMob">
                        
                            <img src="./images/btn_-FluorescentPigments.png" alt="图片加载失败">
                       
                            <img src="./images/btn_ColorPaste.png" alt="图片加载失败">
                     
                            <img src="./images/btn_OrganicPigments.png" alt="图片加载失败">
                        </div>`;

    //转换图片文字位置
    var _growUp = `   <div class="row">
                            <div class="row">
                                <div class="historyT col-sm-4 col-sm-offset-4 col-xs-4 col-xs-offset-4 "><img
                                        src="./images/title_history.png" alt="图片加载失败"></div>
                            </div>
                            <div class="row">
                                <div class="col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 con_history con_historyMobile"><img
                                        src="./images/con_history.png" alt="图片加载失败" class="con_historyMobile"></div>
                            </div>
                        </div>`
    var journalism = ` <div class="col-md-6 col-xs-12">
                    <img src="./images/history_img.png" alt="图片加载失败" class="img-responsive">
                </div>
                    <div class="journalism-content">
                    <div class="col-md-6 col-xs-12">
                        <div class="row">
                            <div class="col-xs-6 col-xs-offset-3 col-sm-6 col-sm-offset-3"><img
                                    src="./images/title_news.png" alt="图片加载失败"></div>
                        </div>
                        <div class="row">
                            <ul class="col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 journalismMobile">
                                <li>
                                    <h3>剖析有机颜料用在印花中的方法</h3>
                                    <p>随着科技的进步，在印花的生产中，用的不再是一些随便的颜料，现在用的最多的就属有机颜料了，<br>
                                        在印花中用有机颜料，可以使印花看上去更加的美观，逼真。
                                    </p>
                                    <div class="found"><a href="javascript:;">了解更多>></a></div>
                                </li>
                                <li>
                                    <h3>剖析有机颜料用在印花中的方法</h3>
                                    <p>随着科技的进步，在印花的生产中，用的不再是一些随便的颜料，现在用的最多的就属有机颜料了，<br>
                                        在印花中用有机颜料，可以使印花看上去更加的美观，逼真。
                                    </p>
                                     <div class="found"><a href="javascript:;">了解更多>></a></div>
                                </li>
                                <li>
                                    <h3>剖析有机颜料用在印花中的方法</h3>
                                    <p>随着科技的进步，在印花的生产中，用的不再是一些随便的颜料，现在用的最多的就属有机颜料了，<br>
                                        在印花中用有机颜料，可以使印花看上去更加的美观，逼真。
                                    </p>
                                     <div class="found"><a href="javascript:;">了解更多>></a></div>
                                </li>
                                <li>
                                    <h3>剖析有机颜料用在印花中的方法</h3>
                                    <p>随着科技的进步，在印花的生产中，用的不再是一些随便的颜料，现在用的最多的就属有机颜料了，<br>
                                        在印花中用有机颜料，可以使印花看上去更加的美观，逼真。
                                    </p>
                                     <div class="found"><a href="javascript:;">了解更多>></a></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>`;
    // 当小于768的时候，进行只轮播一个
    var _example = `  <div class="row">
                    <div class="col-md-2 col-sm-6 col-xs-6 col-md-offset-5 col-sm-offset-3 col-xs-offset-3 dreamSlogan">
                        <img src="./images/title_honor.png" alt="图片加载失败">
                    </div>
                </div>
<div id="example" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <ul class="row item active">
                            <li class="col-xs-12 one">
                                <img src="images/1.png" srcset="images/1.png 1x,images/1.png 2x" class="img-responsive" style="width: 80%;height: 3rem;">
                            </li>
                        </ul>
                        <ul class="row item">
                            <li class="col-xs-12 six">
                                <img src="images/1.png" srcset="images/1.png 1x,images/1.png 2x" class="img-responsive" style="width: 80%;height: 3rem;">
                            </li>
                        </ul>
                    </div>
                    <a class="carousel-control left" href="#example" data-slide="prev">Previous</a>
                    <a class="carousel-control right" href="#example" data-slide="next">Next</a>
                </div>`;
    //根据屏幕宽度进行适配

    if (_homeHt > 768) {
        $('.advantage-1').css({
            margin: '0 1.8rem'
        });
        $('.Pro_one').css({marginLeft: '35'})
    } else {
        $('.HomeProduct>div>div:nth-child(1)').addClass('productCenter');
        //图片交换位置
        $('.journalism').html(journalism);
        $('.bottomLun').html(_example);
        $('.growUp').html(_growUp);
        $('.productCenterMobile').html(_productCenterMobile);
        //添加点击事件
        $('.MobileSearch').click(function () {
            $('.pull-down').addClass('navClickAn');
        });
        $('.close-search').click(function () {
            $('.pull-down').removeClass('navClickAn');
        })
    }
    if (_homeHt <= 1024) {
        $('.search').addClass('unShow');
    }
    //荣誉轮播
    var carousels = $('.carousel');
    carousels.each(function () {
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

    $(window).scroll(function () {
        var _heigth = $('#circleContent').height();
        $('#circleContent').animate({marginTop:-_heigth},1000)
    })
    //滑动置顶
});