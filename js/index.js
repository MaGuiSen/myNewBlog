$(document).ready(function () {

    /*回到顶部效果*/
    (function () {
        $(window).scroll(function () {
            $(window).scrollTop() > 100 ? $("#returnTop").css("bottom", "100px") : $("#returnTop").css("bottom", "-200px");
        });
        $("#returnTop").bind("click", function () {
            if ($(window).scrollTop != 0) {
                if (!$("html,body").is(":animated")) {
                    $("html,body").animate({scrollTop: 0}, 500)
                }
            }
        });
        $(".goBlogList").bind("click", function () {
            $(".goBlogList").attr('href','../html/blog_list.html');
        });
        $(".goGiveMoney").bind("click", function () {
            $(".goGiveMoney").attr('href','../html/give_money.html');
        });
        $(".goLeaveMsg").bind("click", function () {
            $(".goLeaveMsg").attr('href','../html/leave_msg.html');
        });
        $(".goAboutMe").bind("click", function () {
            $(".goAboutMe").attr('href','../html/about_me.html');
        });
    })();
});




    
