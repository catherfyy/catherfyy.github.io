function mouseOver01()
{
document.b1.src ="images/index/1.1.png"
}
function mouseOut01()
{
document.b1.src ="images/index/1.png"
}


function mouseOver02()
{
document.b2.src ="images/index/2.2.png"
}
function mouseOut02(){
document.b2.src ="images/index/2.png"
}

function mouseOver03()
{
document.b3.src ="images/index/3.3.png"
}
function mouseOut03(){
document.b3.src ="images/index/3.png"
}

function mouseOver04()
{
document.b4.src ="images/index/4.4.png"
}
function mouseOut04(){
document.b4.src ="images/index/4.png"
}

function mouseOver05()
{
document.b5.src ="images/index/5.5.png"
}
function mouseOut05(){
document.b5.src ="images/index/5.png"
}

function mouseOver06()
{
document.b6.src ="images/index/6.6.png"
}
function mouseOut06(){
document.b6.src ="images/index/6.png"
}

function mouseOver07()
{
document.b7.src ="images/index/7.7.png"
}
function mouseOut07(){
document.b7.src ="images/index/7.png"
}

function mouseOver08()
{
document.b8.src ="images/index/8.8.png"
}
function mouseOut08(){
document.b8.src ="images/index/8.png"
}

function mouseOver09()
{
document.b9.src ="images/index/9.9.png"
}
function mouseOut09(){
document.b9.src ="images/index/9.png"
}


$(function() {

        //返回顶部===>出现与消失
        //当屏幕滚动，触生 scroll 事件
        $(window).scroll(function() {

           var top1 = $(this).scrollTop();     //获取相对滚动条顶部的偏移

           if (top1>200) {      //当偏移大于200px时让图标淡入（css设置为隐藏）

            $(".top").stop().fadeIn();

           }else{
                 //当偏移小于200px时让图标淡出
            $(".top").stop().fadeOut();
           }
        });

        //去往顶部
        $(".top").click(function(){
            $("body , html").animate({scrollTop:0},300);   //300是所用时间
        });

    });