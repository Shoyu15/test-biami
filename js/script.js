// 平成フォント
(function(d) {
var config = {
kitId: 'uju1vqi',
scriptTimeout: 3000,
async: true
},
h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);


// グローバルナビゲーション 固定
$(function() {
    var $win = $(window),
        $cloneNav = $('header').clone().addClass('clone-nav').appendTo('body'),
        showClass = 'is-show';

    $win.on('load scroll', function() {
        var value = $(this).scrollTop();
        if ( value > 800 ) {
        $cloneNav.addClass(showClass);
        } else {
        $cloneNav.removeClass(showClass);
        }
    });
});


// スクロールアニメーション：ふわっとフェードイン
$(window).on('load scroll', function (){
    var box = $('.fadeIn01');
    var animated = 'animated';
    
    box.each(function(){
    
    var boxOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if(scrollPos > boxOffset - wh + 600 ){
        $(this).addClass(animated);
        }
    });

});


// スクロールアニメーション：上下左右
$(function(){
    $(window).on('load scroll', function() {
        var winScroll = $(window).scrollTop();
        var winHeight = $(window).height();
        var scrollPos = winScroll + (winHeight * 0.8);

    $(".fadeIn").each(function() {
        if($(this).offset().top +200 < scrollPos) {
            $(this).css({opacity: 1, transform: 'translate(0, 0)'});
        }
        });
    });
});


// スクロールアニメーション：順番
$(function(){
    $(window).scroll(function (){
        $('.fadeIn02-box').each(function(){
            var elemPos = $(this).offset().top;
			var winScroll = $(window).scrollTop();
			var winHeight = $(window).height();
            var speed = 1000;
            if(winScroll > elemPos - winHeight ){
                $(this).find('.fadeIn02-1').addClass('show');
				$(this).delay(speed).queue(function(){
					$(this).find('.fadeIn02-2').addClass('show');
					$(this).find('.fadeIn02-2').delay(speed).queue(function(){
                        $(this).find('.fadeIn02-3').addClass('show').dequeue();
                        $(this).delay(speed).queue(function(){
                            $(this).find('.fadeIn02-4').addClass('show').dequeue();
                        });
					});
				});
            }
        });
    });
});


// スムーズスクロール
$(function(){
    $('a[href^=#]').click(function(){
    var adjust = 160;
    var speed = 600;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
    });
});
