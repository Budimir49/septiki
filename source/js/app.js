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


