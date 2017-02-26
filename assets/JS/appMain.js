$(function () {
    var $btn2 = $("#btn2");
    $btn2.click(function () {

        var ans1 = parseInt($("input[id=select1]:checked").val());
        var ans2 = parseInt($("input[id=select2]:checked").val());
        var ans3 = parseInt($("input[id=select3]:checked").val());

        if (isNaN(ans1)) {
            ans1 = 0;
        }
        if (isNaN(ans2)) {
            ans2 = 0;
        }
        if (isNaN(ans3)) {
            ans3 = 0;
        }

        var ans = ans1 + ans2 + ans3;
        $("[id^=result]").hide();
        $("#result" + ans).slideDown();

    });

});
