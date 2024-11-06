$(document).ready(function() {
    // 모바일 사이드바 토글
    const sidebarToggle = $('.sidebar-toggle');
    const sidebar = $('.sidebar');
    sidebarToggle.on('click', function() {
        sidebar.toggleClass('show');
    });

    // 반응형 처리
    function handleResize() {
        if ($(window).width() > 768) {
            sidebar.removeClass('show');
            const side_width = $('.sidebar').width();
            const window_width = $(window).width();
            $('.container').css('margin-left', side_width + 20);
            $('.container').css('width', window_width - side_width - 50);
        } else {
            $('.container').css('margin-left', 20)
            $('.container').css('width', window_width - 50);
        }
    }

    $(window).resize(handleResize);
});


function fun_left_menu(arg) {
    var tabHtml = ''

    if (arg == "ml_01") {
        tabHtml = '<a class="nav-link " href="ml_01.html"> <i class="bi bi-caret-right" ></i>머신러닝 개념</a>';
    }

    $('#side-menu').html(tabHtml);
}