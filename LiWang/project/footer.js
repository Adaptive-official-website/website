(function () {
    document.write(`<link rel="stylesheet" href="./style/footer.css">`)
})();
var _footer = `
    <footer>
    <div class="container">
        <div class="row">
            <div class="col-sm-2 col-md-2 col-lg-2 col-xs-2">
                <div class="Lw-logo"><img src="./images/" alt="图片加载失败" ></div>
            </div>
            <div class="col-sm-2 col-md-2 col-lg-2 col-xs-2">
                <h3>有机颜料</h3>
                <p>油墨用有机颜料</p>
                <p>塑胶用有机颜料</p>
                <p>涂料用有机颜料</p>
            </div>
            <div class="col-sm-2 col-md-2 col-lg-2 col-xs-2">
                <h3>荧光颜料</h3>
                <p>水性荧光颜料</p>
                <p>塑胶荧光颜料</p>
            </div>
            <div class="col-sm-2 col-md-2 col-lg-2 col-xs-2">
                <h3>水性色浆</h3>
                <p>8系列水性色浆</p>
                <p>B系列水性色浆</p>
                <p>F系列水性色浆</p>
                <p>Q系列水性色浆</p>
            </div>
            <div class="col-sm-2 col-md-2 col-lg-2 col-xs-2 col-sm-offset-2 col-md-offset-2 col-lg-offset-2">
                <img src="./images/PC_wechart.png" alt="图片加载失败" class="WeChat">
            </div>
            <div class="col-lg-offset-2 col-md-offset-2 col-sm-offset-2 friendship">
                    <span>友情链接：</span>
                    <a href="javascriot:;">内置百叶遮阳</a>
                    <a href="javascriot:;">工业杀菌剂</a>
                    <a href="javascriot:;">石膏线</a>
                    <a href="javascriot:;">彩瓦漆</a>
                    <a href="javascriot:;">工业铝型材</a>
                    <a href="javascriot:;">酒店四件套</a>
            </div>
        </div>
        </div>
        <div class="provide ">
        <div class="col-sm-10 col-md-10 col-xs-10 col-lg-10 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
            <span>丽王竭诚为您提供:有机颜料、油墨用有机颜料、塑胶用有机颜料、涂料用有机颜料</span>
            <span>电话：0513-86592888-811    公司详细地址：江苏省盐城市阜宁县高新技术产业园    版权所有：江苏丽王科技股份有限公司</span>
        </div>
        </div>
    
</div>
     </footer>`
var _selfAdaption = `<div class="_selfAdaption">
<div class="accordion" data-toggle="collapse" data-target="#content"><a href="javascript:;">荧光颜料</a><i>+</i></div>  
<div class="collapse" id="content"> 
    <ul>
        <li>油墨用有机颜料</li>
        <li>塑胶用有机颜料</li>
        <li>涂料用有机颜料</li>
    </ul>
   </div>
   <div class="accordion" data-toggle="collapse" data-target="#content-2"><a href="javascript:;">有机颜料</a><i>+</i></div>  
<div class="collapse" id="content-2"> 
    <ul>
        <li>水性荧光颜料</li>
        <li>塑胶荧光颜料</li>
    </ul>
   </div>
   <div class="accordion" data-toggle="collapse" data-target="#content-3"><a href="javascript:;">水性色浆</a><i>+</i></div>  
<div class="collapse" id="content-3"> 
    <ul>
        <li>8系列水性色浆</li>
        <li>B系列水性色浆</li>
        <li>F系列水性色浆</li>
        <li>Q系列水性色浆</li>
    </ul>
   </div>
   <div class="WeChat-mob">
   <img src="./images/PC_wechart.png" alt="图片加载失败">
</div>
  <div class="friendship-mob">
                    <p>友情链接：</p>
                    <a href="javascriot:;">内置百叶遮阳</a>
                    <a href="javascriot:;">工业杀菌剂</a>
                    <a href="javascriot:;">石膏线</a>
                    <a href="javascriot:;">彩瓦漆</a>
                    <a href="javascriot:;">工业铝型材</a>
                    <a href="javascriot:;">酒店四件套</a>
    </div>
</div>`


$(function () {
    var _ht = $(window).width();
    if(_ht < 970){
        $('body').append(_selfAdaption)
    }else{
        $('body').append(_footer)
    }
    //点击加好变为减号
    var _c = true
    $('.accordion').click(function () {
        _c = !_c;
        if(_c){
            $(this).find('i').html('+')
        }else{
            $(this).find('i').html('-')

        }

    })
});