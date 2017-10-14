/**
 * Created by Administrator on 2016/10/24.
 */
$(function(){
    $("#tab .js_index").mouseover(
        function(){
            var $target = $(this),
                 _index = $(this).index();
                 $target.addClass("active").siblings(".js_index").removeClass("active");
                 $("#showTab").find(".js_tab").eq(_index).show().siblings(".js_tab").hide();

        });
    (function(){
        var __index = 0,
            __loop = -1,
            isAnimate = false,
            imgLegnth = $("#scroll").find("img").length;
//滚动图片以及显示对应索引图标的方法
        function move( $target,$dotObj ){
            isAnimate = false;
            $target.stop().animate({"top":-__index*($target.find("img:first").height())},500,function(){
                //console.log("完成动画");
                isAnimate = false;
            });
            $dotObj.find(".js_dot").eq(__index).addClass("active").siblings(".js_dot").removeClass("active");
        }
        $("#scroll").hover(function(){
            clearInterval(__loop);
        },function(){
            var $self = $(this);
            __loop = setInterval(function(){
                move($self,$("#scrollDot"));
                __index++;
                if( __index == imgLegnth ){
                    __index = 0;
                }
            },2000);
        }).mouseleave();
        $("#scrollDot .js_dot").click(function(){
            if(!isAnimate){
                var $target = $(this);
                __index = $target.index();
                move($("#scroll"),$target.parent());
            }
        });
    })();
    (function(){
        var __timer = -1,//定时器索引
                 __top = 0;//top值
        $("#verticalScroll").hover(
            function(){
             clearInterval(__timer);
        },function(){
              var $target = $(this);
             __timer = setInterval(function(){
                 __top--;
                 //如果当前的top值+(4*img的高度)>=verticalScroll的高度
                 console.log(Math.abs(__top)+","+($target.find("li").eq(0).outerHeight()+12)*12);
                 //console.log(Math.abs(__top)+(4*$target.find("li").eq(0).outerHeight())+","+$target.outerHeight());
                 //id为verticalScroll的div的高度才等于所有li的高度的和
                 if(Math.abs(__top)== ($target.find("li").eq(0).outerHeight()+12)*($target.find("img").length-4)){
                     __top = 0;
                     $("#verticalScroll").css("top",__top+"px");
                 }else {
                     scroll ();
                 }

             },10);
        }).mouseleave();
        function scroll (){
            $("#verticalScroll").css("top",__top+"px");
        }
    })();
});

