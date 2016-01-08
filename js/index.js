$(document).ready(function () {
    /*回到顶部效果*/
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
        $(".goBlogList").attr('href', '/html/blog_list.html');
    });
    $(".goGiveMoney").bind("click", function () {
        $(".goGiveMoney").attr('href', '/html/give_money.html');
    });
    $(".goLeaveMsg").bind("click", function () {
        $(".goLeaveMsg").attr('href', '/html/leave_msg.html');
    });
    $(".goAboutMe").bind("click", function () {
        $(".goAboutMe").attr('href', '/html/about_me.html');
    });
    /**
     * 菜单动作按钮
     */
    $("#mobile_menu_pull").bind("click", function () {
        $("#mobile_menu").slideToggle();
    });
    /**
     * 分类点击事件
     */
    function categoryList() {
        $(".cates").hide();
        $(".category-list div").css({"background-color": "transparent",
            //"margin-bottom":5,
            "border-bottom":"transparent 3px solid",
            "color": "#555555"});
        $(".category-list div:first-child").css({"background-color": "transparent",
                                                    "border-bottom":"#00A9A9 3px solid",
                                                    "color": "#00A9A9"});
        $(".category-list div").bind("click", function () {
            $(this).css({
                "background-color": "transparent",
                "border-bottom":"#00A9A9 3px solid",
                "border-radius": 0,
                "color": "#00A9A9"
            }).siblings().css({"background-color": "transparent",
                                "border-bottom":"transparent 3px solid",
                                "border-radius":0,
                                "color": "#555555"});
            var cateName = $(this).attr("data-cate");
            $(".cate-posts > div[data-cate != " + cateName + "]").hide(280);
            $(".cate-posts > div[data-cate = " + cateName + "]").show(400);
        });
        setScrollWidth();
    }

    categoryList();
    /**
     * 设置分类滑动背景宽度,在分类之后进行
     */
    function setScrollWidth() {
        var num = $("#scroll_bg div").size();
        var wz = 0;
        $("#scroll_bg div").each(function () {
            wz += $(this).outerWidth(true);
        });
        $("#scroll_bg").css("width", wz+5);
    }
})
;




    
