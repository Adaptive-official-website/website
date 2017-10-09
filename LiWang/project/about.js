/**
 * Created by Administrator on 2017/10/6/006.
 */


$(function () {
    // 头部点击事件
    $('.navClick>li').click(function () {
        $(this).addClass('activeH').siblings().removeClass('activeH')
    });
    var _aboutHTml = `<div class='col-sm-12 col-md-9 col-sm-offset-0 col-md-offset-1 about-container-right'>
					<div class="tittle">
						<p class="left">企业简介</p>
					</div>
					<p class="  MobRight-top">您的位置:主页>企业简介</p>
					<img src="images/KV/1.jpg" class="introMobile"/>
					<div class="container">
						<header style="   margin-top: -30px; margin-bottom: 30px;">企业简介</header>
						<p>
							丽王科技是一家致力于有机颜料、水性色浆的研发与生产的科技创新型企业，占地约40万平方米，产房近9万平方米。公司下设丽王化工（南通）有限公司，南通乐彩颜料化工有限公司，江苏丽王科技股份有限公司。
						</p>
						<p>
							公司经过近20年的不懈努力，现成为国内最大的有机颜料及水性色浆生产商之一，并通过了ISO9001:2008认证及ISO14001:2004认证，荣获“国家高新技术企业”，“Intertek绿色环保认证”，“中国家纺面料印染色浆研发基地”，“中国著名品牌”的荣誉称号并通过了欧盟REACH认证。“彩豚”商标被评为“江苏省著名商标，“丽王”商标被评盐城市著名商标。
						</p>
						<p>
							公司注重科技创新，现已形成红、黄、蓝、绿、橙、荧光系列有机颜料、环保系列有机颜料、水性色浆、印染助剂等产品，广泛应用于油墨、涂料、油漆、塑胶、印染、造纸等行业。产品畅销全国各地，并出口欧美等国家，深受国内外客户的青睐。

						</p>
						<p>
							丽王科技始终秉承“科技为动力，市场为导向”的生产理念，“信誉第一，用户至上”的经营理念，“持续创造客户价值”的服务理念，不断开拓创新，创世界品牌，铸百年丽王！ 丽王科技为梦想添色彩！
						</p>
					</div>
				</div>`
    if (_aboutHt <= 1024) {
        $('.search').addClass('unShow');
    }
    if(_aboutHt>786){

    }else{  //添加点击事件
        $('.MobileSearch').click(function () {
            $('.pull-down').addClass('navClickAn');
        });
        $('.close-search').click(function () {
            $('.pull-down').removeClass('navClickAn');
        });
        $('.about-container').css({
            marginBottom:'1rem'
        });
        $('.about-container-left').addClass('unShow');
        $('.intro').html(_aboutHTml);
    }
});