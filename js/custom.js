$(document).ready(function () { 
    size_li = $(".prod-list li").length;
    console.log(size_li)
    x=8;
    $('.prod-list li:lt('+x+')').show();
    $('.knowmore').click(function () {
        x= (x+4 <= size_li) ? x+4 : size_li;
        $('.prod-list li:lt('+x+')').fadeIn();
        if(x == size_li){
            $('.knowmore').hide();
        }
    });
    
    // $('#showLess').click(function () {
    //     x=(x-5<0) ? 3 : x-5;
    //     $('#myList li').not(':lt('+x+')').hide();
    // });

});