$(function(){

    //header menu 
    $('.panelbtn a').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');

        $('.menu_open').toggleClass('on');
        $('header .logo_area').toggleClass('on');

        $('body').toggleClass('scroll_h')

    });

    $('body').on('mousewheel',function(e){
        curr = $(window).scrollTop();
        var wheel = e.originalEvent.wheelDelta;

        if(!$('body').hasClass('scroll_h')){
            if(curr > $(window).height()){
                if(wheel>0){
                    $('header .logo_area').removeClass('hide') 
                } else {
                   $('header .logo_area').addClass('hide')
                }
            }  
        }
    
    });

    //header menu_gnb 
    $('.menu_open .maingnb').click(function(e){
        e.preventDefault();

        h = $(this).siblings('.gnb').children('ul').outerHeight();

        if($(this).siblings('.gnb').height() > 0){
            $('.hmenu .gnb').stop().animate({height:0},300);
            $('.menu_open .maingnb').removeClass('on');

        }else{
            $('.hmenu .gnb').stop().animate({height:0},300);
            $(this).siblings('.gnb').animate({height:h},300);

            $('.menu_open .maingnb').removeClass('on');
            $(this).addClass('on');
        }

    });

    // main_vis
    $('.main_vis .scroll').click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 700);
    });

    //sc01_product
    var swiper = new Swiper(".sc01_pro", {
        navigation: {
          nextEl: ".sc01_pro .btn .prev",
          prevEl: ".sc01_pro .btn .next",
        },
        loop: true,
        autoplay: {
            delay: 3000,
          },
        on:{
        touchStart:function(){
            $('.sc01_pro .swiper-slide').addClass('scale');
        },
        touchEnd:function(){
            $('.sc01_pro .swiper-slide').removeClass('scale');
        }
        }
      });

    //sc03_story
    gsap.from('.sc03_story .img_wrap img',{
        scrollTrigger:{
            trigger:'.sc03_story',
            start:'top 60%',
            bottom:'bottom top',
            //markers:true,
        },
        opactity:0,
        duration:1,
        stagger:0.3,
        yPercent:30,
        'filter':'blur(6px)',
    })

    //sc05_cup
    gsap.from('.sc05_cup h2',{
        scrollTrigger:{
            trigger:'.sc05_cup h2',
            start:'top 100%',
            //markers:true,
            scrub:1
        },
        y:300,
    })

    //sc06_wine
    gsap.from('.sc06_wine .img_wrap img',{
        scrollTrigger:{
            trigger:'.sc06_wine',
            start:'top 70%',
            bottom:'bottom top',
            //markers:true,
        },
        duration:1,
        yPercent:30,
        opacity:0,
        stagger:0.3,
        'filter':'blur(6px)',
    })

    //sc08_biscuit
    var swiper = new Swiper(".sc08_swiper", {
    navigation: {
        nextEl: ".sc08_swiper .btn .prev",
        prevEl: ".sc08_swiper .btn .next",
    },
    loop: true,
    autoplay: {
        delay: 3000,
        },
    on:{
        touchStart:function(){
            $('.sc08_biscuit .swiper-slide').addClass('scale');
        },
        touchEnd:function(){
            $('.sc08_biscuit .swiper-slide').removeClass('scale');
        }
        }
    });

    //sc09_long
    var swiper = new Swiper(".sc09_long", {
        slidesPerView: 3,
        spaceBetween: 5,
        navigation: {
            nextEl: ".sc09_long .btn .prev",
            prevEl: ".sc09_long .btn .next",
        },
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            },  
        });
        

    // video
    $('#videoPlay img').click(function(){
        $('.sc02_christmas video').get(0).play();
        $('.sc02_christmas button img').addClass('on');
    })


    //footer
    $('footer .maingnb').click(function(e){
        e.preventDefault();

        h = $(this).siblings('.gnb').children('ul').outerHeight();
                console.log(h);

        if($(this).siblings('.gnb').height() > 0){
            $('.fmenu .gnb').stop().animate({height:0},300);
            $('footer .maingnb').removeClass('on');
        }else{
            $('.fmenu .gnb').stop().animate({height:0},300);
            $('footer .maingnb').removeClass('on');
            $(this).siblings('.gnb').animate({height:h},300);
            $(this).addClass('on');
        }
        
    });

    //footer form
    $('#form').submit(function(){

        var name01 = $('#firstName');
        var name02 = $('#lastName');
        var email = $('#email');
        var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

        if(name01.val() == ''){
            alert('Enter your firstName');
            name01.focus();
            return false;

        }else if(name02.val() == ''){
            alert('Enter your lastName');
            name02.focus();
            return false;

        }else if(!regExp.test( email.val()  ) ){
            alert('Enter your email');
            email.focus();
            return false;

        }else{
            alert('ok');
            return;
        }
    })  

});