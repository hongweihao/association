$(document).ready(function(){
	var window_h=1191;	//获取窗口的高度
	var	window_w=$(window).width();		//获取窗口的宽度
	var img_h=$("#img").height();		//获取图片的高度
	var img_w=$("#img").width();			//获取图片的宽度
	var h=window_h-img_h;				//最大高度差
	var w=window_w-img_w;				//最大宽度查
	var x=0;							//图片距离左边界的长度
	var y=0;							//图片距离上边界的长度
	var xspeed=10;						//水平移动速度
	var yspeed=10;						//图片垂直移动速度
	var timer;
	timer=setInterval(function(){time()},200);//设置图片隔100毫秒移动
	function time(){
		if (x>=w) {
			x=w;
			xspeed=-10;
		}
		if (x<=0) {
			xspeed=10;
		}
		if (y>=h) {
			y=h;
			yspeed=-10;
		}
		if (y<=0) {
			yspeed=10;
		}
		x+=xspeed;
		y+=yspeed;
		$("#img").animate({top:y,left:x},200);
	}
	/*直接写时间处理函数有局限*/
	$("#img").bind("mouseover",function(){
		clearInterval(timer);//kill
	});
	$("#img").bind("mouseout",function(){
		timer=setInterval(function(){time()},200);//重启timer
	});
});