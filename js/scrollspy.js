$(document).ready(function(){
    $('.boxtrai a').click(function(event){
        event.preventDefault();
        part = $(this).attr('href'); // lấy id của thẻ h2 tương ứng
        position = $(part).offset().top; // tìm vị trí thẻ 
        $('html, body').animate({scrollTop: position},1500,'easeInOutSine');
    });
});