$(document).ready(function () {

    $('.house__btn-plus').on('click', function (e) {
        e.preventDefault();
        let $that = $(e.target),
            container = $that.siblings('.house__content'),
            parent = $that.closest('.house__btn-plus'),
            allElements = $('.house__btn-plus');

        let com;
        allElements.each(function(index){
            com = $(this).find('.house__content');
            com.fadeOut();
        });

        // console.log(allElements);
        container.fadeIn();

    });


    let blogContainer = $('.blog__content'),
        aboutContainer = $('.about-data');

    if (blogContainer.length) menuBlog.init(blogContainer);
    if (aboutContainer.length) skillLoad.init(aboutContainer);


    $('.welcome__btn-auth').on('click', function (e) {
        e.preventDefault();
        let intro = $('.flipper__container'),
            btnAuth = $('.welcome__btn-auth');
        intro.addClass('flipper__container_rotate');
        btnAuth.fadeOut();
    });


    $('.intro__on-main').on('click', function (e) {
        e.preventDefault();
        let intro = $('.flipper__container'),
            btnAuth = $('.welcome__btn-auth');
        intro.removeClass('flipper__container_rotate');
        btnAuth.fadeIn();
    });

    $('.hero__btn-arrow').on('click', function (e) {

        e.preventDefault();
        let container = $('.hero'),
            sublings = container.siblings(),
            offset = sublings.eq(0).offset().top;

        $('body,html').animate({
            scrollTop: offset
        },500);

    });

    $('.about-say__btn-arrow').on('click', function (e) {
        e.preventDefault();
        let container = $('.works'),
            offset = container.offset().top;

        $('body,html').animate({
            scrollTop: offset
        },500);
    });


    $('.blog__btn-mobile').on('click', function (e) {
        let container = $('.blog__aside');
        container.toggleClass('blog__aside_active');
    });

    $('.btn-upload__input').on('change', function() {

        let splitFakePath = this.value.split('\\'),
            container = $('.btn-upload__text');

        container.text('Загрузить картинку (' + splitFakePath[splitFakePath.length - 1] + ')');
    });


    $('.tabs__link').on('click', function (e) {
        e.preventDefault();

        let $that = $(e.target),
            itemMenu = $that.closest('.tabs__item'),
            indexItemMenu = itemMenu.index(),
            itemContent = $('.tabs__content').eq(indexItemMenu),
            parentItemsMenu = itemMenu.closest('.tabs__title-list'),
            currentItemMenu = parentItemsMenu.find('.tabs__item_active'),
            parentItemsContent = $('.tabs__content-list'),
            currentItemContent = parentItemsContent.find('.tabs__content_active');

        currentItemMenu.removeClass('tabs__item_active');
        currentItemContent.removeClass('tabs__content_active');
        itemMenu.addClass('tabs__item_active');
        itemContent.addClass('tabs__content_active');
    })

});



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAkKCcuaG91c2VfX2J0bi1wbHVzJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0ICR0aGF0ID0gJChlLnRhcmdldCksXHJcbiAgICAgICAgICAgIGNvbnRhaW5lciA9ICR0aGF0LnNpYmxpbmdzKCcuaG91c2VfX2NvbnRlbnQnKSxcclxuICAgICAgICAgICAgcGFyZW50ID0gJHRoYXQuY2xvc2VzdCgnLmhvdXNlX19idG4tcGx1cycpLFxyXG4gICAgICAgICAgICBhbGxFbGVtZW50cyA9ICQoJy5ob3VzZV9fYnRuLXBsdXMnKTtcclxuXHJcbiAgICAgICAgbGV0IGNvbTtcclxuICAgICAgICBhbGxFbGVtZW50cy5lYWNoKGZ1bmN0aW9uKGluZGV4KXtcclxuICAgICAgICAgICAgY29tID0gJCh0aGlzKS5maW5kKCcuaG91c2VfX2NvbnRlbnQnKTtcclxuICAgICAgICAgICAgY29tLmZhZGVPdXQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYWxsRWxlbWVudHMpO1xyXG4gICAgICAgIGNvbnRhaW5lci5mYWRlSW4oKTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgbGV0IGJsb2dDb250YWluZXIgPSAkKCcuYmxvZ19fY29udGVudCcpLFxyXG4gICAgICAgIGFib3V0Q29udGFpbmVyID0gJCgnLmFib3V0LWRhdGEnKTtcclxuXHJcbiAgICBpZiAoYmxvZ0NvbnRhaW5lci5sZW5ndGgpIG1lbnVCbG9nLmluaXQoYmxvZ0NvbnRhaW5lcik7XHJcbiAgICBpZiAoYWJvdXRDb250YWluZXIubGVuZ3RoKSBza2lsbExvYWQuaW5pdChhYm91dENvbnRhaW5lcik7XHJcblxyXG5cclxuICAgICQoJy53ZWxjb21lX19idG4tYXV0aCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBpbnRybyA9ICQoJy5mbGlwcGVyX19jb250YWluZXInKSxcclxuICAgICAgICAgICAgYnRuQXV0aCA9ICQoJy53ZWxjb21lX19idG4tYXV0aCcpO1xyXG4gICAgICAgIGludHJvLmFkZENsYXNzKCdmbGlwcGVyX19jb250YWluZXJfcm90YXRlJyk7XHJcbiAgICAgICAgYnRuQXV0aC5mYWRlT3V0KCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJCgnLmludHJvX19vbi1tYWluJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGludHJvID0gJCgnLmZsaXBwZXJfX2NvbnRhaW5lcicpLFxyXG4gICAgICAgICAgICBidG5BdXRoID0gJCgnLndlbGNvbWVfX2J0bi1hdXRoJyk7XHJcbiAgICAgICAgaW50cm8ucmVtb3ZlQ2xhc3MoJ2ZsaXBwZXJfX2NvbnRhaW5lcl9yb3RhdGUnKTtcclxuICAgICAgICBidG5BdXRoLmZhZGVJbigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmhlcm9fX2J0bi1hcnJvdycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgY29udGFpbmVyID0gJCgnLmhlcm8nKSxcclxuICAgICAgICAgICAgc3VibGluZ3MgPSBjb250YWluZXIuc2libGluZ3MoKSxcclxuICAgICAgICAgICAgb2Zmc2V0ID0gc3VibGluZ3MuZXEoMCkub2Zmc2V0KCkudG9wO1xyXG5cclxuICAgICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiBvZmZzZXRcclxuICAgICAgICB9LDUwMCk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmFib3V0LXNheV9fYnRuLWFycm93Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9ICQoJy53b3JrcycpLFxyXG4gICAgICAgICAgICBvZmZzZXQgPSBjb250YWluZXIub2Zmc2V0KCkudG9wO1xyXG5cclxuICAgICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiBvZmZzZXRcclxuICAgICAgICB9LDUwMCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJCgnLmJsb2dfX2J0bi1tb2JpbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSAkKCcuYmxvZ19fYXNpZGUnKTtcclxuICAgICAgICBjb250YWluZXIudG9nZ2xlQ2xhc3MoJ2Jsb2dfX2FzaWRlX2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmJ0bi11cGxvYWRfX2lucHV0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBsZXQgc3BsaXRGYWtlUGF0aCA9IHRoaXMudmFsdWUuc3BsaXQoJ1xcXFwnKSxcclxuICAgICAgICAgICAgY29udGFpbmVyID0gJCgnLmJ0bi11cGxvYWRfX3RleHQnKTtcclxuXHJcbiAgICAgICAgY29udGFpbmVyLnRleHQoJ9CX0LDQs9GA0YPQt9C40YLRjCDQutCw0YDRgtC40L3QutGDICgnICsgc3BsaXRGYWtlUGF0aFtzcGxpdEZha2VQYXRoLmxlbmd0aCAtIDFdICsgJyknKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKCcudGFic19fbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBsZXQgJHRoYXQgPSAkKGUudGFyZ2V0KSxcclxuICAgICAgICAgICAgaXRlbU1lbnUgPSAkdGhhdC5jbG9zZXN0KCcudGFic19faXRlbScpLFxyXG4gICAgICAgICAgICBpbmRleEl0ZW1NZW51ID0gaXRlbU1lbnUuaW5kZXgoKSxcclxuICAgICAgICAgICAgaXRlbUNvbnRlbnQgPSAkKCcudGFic19fY29udGVudCcpLmVxKGluZGV4SXRlbU1lbnUpLFxyXG4gICAgICAgICAgICBwYXJlbnRJdGVtc01lbnUgPSBpdGVtTWVudS5jbG9zZXN0KCcudGFic19fdGl0bGUtbGlzdCcpLFxyXG4gICAgICAgICAgICBjdXJyZW50SXRlbU1lbnUgPSBwYXJlbnRJdGVtc01lbnUuZmluZCgnLnRhYnNfX2l0ZW1fYWN0aXZlJyksXHJcbiAgICAgICAgICAgIHBhcmVudEl0ZW1zQ29udGVudCA9ICQoJy50YWJzX19jb250ZW50LWxpc3QnKSxcclxuICAgICAgICAgICAgY3VycmVudEl0ZW1Db250ZW50ID0gcGFyZW50SXRlbXNDb250ZW50LmZpbmQoJy50YWJzX19jb250ZW50X2FjdGl2ZScpO1xyXG5cclxuICAgICAgICBjdXJyZW50SXRlbU1lbnUucmVtb3ZlQ2xhc3MoJ3RhYnNfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgY3VycmVudEl0ZW1Db250ZW50LnJlbW92ZUNsYXNzKCd0YWJzX19jb250ZW50X2FjdGl2ZScpO1xyXG4gICAgICAgIGl0ZW1NZW51LmFkZENsYXNzKCd0YWJzX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgIGl0ZW1Db250ZW50LmFkZENsYXNzKCd0YWJzX19jb250ZW50X2FjdGl2ZScpO1xyXG4gICAgfSlcclxuXHJcbn0pO1xyXG5cclxuXHJcbiJdfQ==
