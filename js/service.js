$(function(){

	var direction=null;
  if(scrollT($('.serv_con01'))){
  	$('.serv_c01_left').animate({
  		'opacity':'1',
  		'left':'0'
  	},1000);
  	$('.serv_c01_right').animate({
  		'opacity':'1',
  		'right':'0'
  	},1000);
  }
  $(window).scroll(function(){
    scroll_anim();
  });
  scroll_anim();
  $('.serv_con02').mousemove(function(e){
		var x=e.pageX/$(window).width()-0.5;
		var y=(e.pageY-$(window).scrollTop())/$(window).height()-0.5;
		var intensity=20;
		$('.serv_con02 .serv_c02_left .c02_l_con p:nth-child(3)').css({
			'transform':'translate3d('+x*70+'px, '+y*70+'px, 0)'
		});
		$('.serv_con02 .serv_c02_left .c02_l_con p:nth-child(2)').css({
			'transform':'translate3d('+-x*100+'px, '+-y*100+'px, 0)'
		});
	});
	$('.serv_con02').mouseout(function(e){
		$('.serv_con02 .serv_c02_left .c02_l_con p:nth-child(3)').css({
			'transform':'translate3d('+0+'px, '+0+'px, 0)'
		});
		$('.serv_con02 .serv_c02_left .c02_l_con p:nth-child(2)').css({
			'transform':'translate3d('+0+'px, '+0+'px, 0)'
		});
	})

})
function scroll_anim(){

    if(scrollT($('.serv_con02'))){
      $('.serv_con02 .serv_c02_right').animate({
        'opacity':'1'
      },1000);
    }
    if(scrollT($('.serv_con03'))){
      $('.serv_con03 .serv_c03_right').animate({
        'opacity':'1',
        'right':0
      },1000);
      $('.serv_con03 .serv_c03_left').animate({
        'opacity':'1',
        'left':'0px'
      },1000);
    }
    if ($('.serv_con04')[0]) {
      if(scrollT($('.serv_con04'))){
        $('.serv_con04 .serv_c04_left').animate({
          'opacity':'1'
        },1000);
        $('.serv_con04 .serv_c04_right .c04_r_con').animate({
          'opacity':'1',
          'right':0
        },1000);
      }
    }
    
}