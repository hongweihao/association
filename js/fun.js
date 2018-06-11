var flog;
$(document).ready(function(){
	//alert("test");
	$(".image").hide();
	$("#m1").show();
	$(".num").css("background-color","#F2F2F2");
	$("#1").css("background-color","#FFE793");
	flog=1;
	setInterval(time,4000);//设置图片每隔4秒换一次
	
	$("#1").click(
		function(){
			$(".image").hide();
			$("#m1").show("slow");
			$(".num").css("background-color","#F2F2F2");
			$("#1").css("background-color","#FFE793");
			flog=1;
		});
	$("#2").click(
		function(){
			$(".image").hide();
			$("#m2").show("slow");
			$(".num").css("background-color","#F2F2F2");
			$("#2").css("background-color","#FFE793");
			flog=2;
});
function time(){
	flog=flog%3;
	if (flog==0) {
		$(".image").hide();
		$("#m1").show("slow");
		$(".num").css("background-color","#F2F2F2");
		$("#1").css("background-color","#FFE793");
	}else if (flog==1) {
		$(".image").hide();
		$("#m2").show("slow");
		$(".num").css("background-color","#F2F2F2");
		$("#2").css("background-color","#FFE793");
	}else{
		$(".image").hide();
		$("#m3").show("slow");
		$(".num").css("background-color","#F2F2F2");
		$("#3").css("background-color","#FFE793");
	}
	flog=flog+1;
}
});
