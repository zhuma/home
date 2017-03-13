/**
 * Created by hanshaojie-pc on 2017/3/12.
 */
$(function () {
   $(".project-list>li").hover(function () {
       $(this).find(".code").show().addClass("a-fadeinR");
   },function () {
       $(this).find(".code").hide().removeClass("a-fadeinR");
   });
    $(".project-list>li").each(function (i) {
        $(this).css({
            zIndex:100 - i
        })
    })
});