
var nowpage=0;


$(function(){
	
	$(".content").swipe({
		
		swipe:function(event,direction,distance,duration,fingerCount){
			if(direction=="up"){
				nowpage++;
			}
			if(direction=="down"){
				nowpage--;
			}
			if(nowpage>3){
				nowpage=0;
			}
			if(nowpage<0){
				nowpage=0;
			}
			$(".content").animate({top:nowpage*-100+"%"},500,function(){
				
				otheranimation();
			});
		}
	});
	$(".page1-text").fadeIn(2000);
	$(".page1-title").fadeIn(3000,function(){
		$(".page1-people").animate({width:'60%'},2000);
		$(".page1-people2").animate({width:'60%'},3000);
	});
	
	
});

function PlayPause(image){
	var player =document.getElementById("audioId");
	if(player.paused){
		player.play();
		image.src="img/pic3.png";
	}
	else{
		player.pause();
		image.src="img/pic6.png";
	}
	
}
function otheranimation(){
	//第二页
	if (nowpage==1) {
		$(".page2-bg").fadeIn(1000,function(){
			$(".page2-it").fadeIn(2000,function(){
				$(".page2-it").fadeOut(2000,function(){
					$(".page2-it1").fadeIn(2000,function(){
						$(".page2-it1").fadeOut(2000,function(){
							$(".page2-it3").fadeIn(2000,function(){
								$(".page2-it3").fadeOut(2000,function(){
									$(".page2-it2").fadeIn(2000,function(){
										$(".page2-it2").fadeOut(2000,function(){
											$(".page2-it4").fadeIn(2000);
											$(".page2-it5").fadeIn(2000);
										});
									});
								});
							});
						});
					});	
				});
			});
		});
	}
	else if (nowpage==2) {
		$(".page3-it1").animate({left:'20%'},2000);
		$(".page3-it3").animate({right:'20%'},2000);
		$(".page3-it2").fadeIn(4000,function(){
			$(".page3-it1").animate({left:'-120%'},2000);
			$(".page3-it3").animate({right:'-120%'},2000);
			$(".page3-it2").fadeOut(2000,function(){
				$(".page3-it4").animate({right:'0'},2000);
				$(".page3-text1").fadeIn(2000);
			});
		});	
	}
	else if(nowpage==3){
		$(".page4-it1").animate({left:'-100%'},6000,function(){
			$(".page4-it2").animate({left:'-100%'},6000,function(){
				$(".page4-it3").animate({left:'-100%'},6000,function(){
					$(".page4-it4").animate({left:'-100%'},6000,function(){
						$(".page4-it5").animate({left:'0'},2000);
						$(".page4-people").animate({width:'50%'},2000);
						$(".page4-text1").animate({width:'14%'},2000);
						$(".page4-logo").fadeIn(2000);
						$(".page4-bg").fadeOut(1000);
					});
				});
			});
		});
		
	}
	
}
function pagedown1(image){
	$(".page3-it4").animate({right:'150%'},2000);
	$(".page3-text1").animate({width:'0'},2000);
	$(".page3-bg2").fadeIn(2000);

}
