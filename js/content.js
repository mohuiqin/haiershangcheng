//$('.goods-category>ul').hide();
$('.goods-category').hover(function(){
	$('.goods-category>ul').show();
},function(){
	$('.goods-category>ul').hide();
})
//切换图片
$('.srcoll-picture>ul>li').click(function(){
	$('.picture-box img').eq($(this).index()).addClass('show01').siblings().removeClass('show01');
})
//放大图片
// 鼠标经过盒子 显示遮罩和大图 
$('.picture-box').mouseenter(function(){
	$('.zoomplepopup').css('display','block');
	$('.big-show').css('display','block');
})
// 鼠标离开盒子 隐藏遮罩和大图
$('.picture-box').mouseleave(function(){
	$('.zoomplepopup').css('display','none');
	$('.big-show').css('display','none');
})
//  鼠标在盒子上移动的时候
//  让遮罩跟着鼠标移动
$('.picture-box').mousemove(function(event){
	var event = event || window.event;
	//鼠标在页面中的坐标
//	console.log($(window).scrollTop());
//	console.log(document.documentElement.scrollTop);
    var pageX = event.pageX || event.clientX + $(window).scrollLeft();
    var pageY = event.pageY || event.clientY + $(window).scrollTop();
 //  计算鼠标的位置 距 盒子 的距离
 var boxX = pageX - $('.picture-box').offset().left;
 var boxY = pageY - $('.picture-box').offset().top;
 // 计算遮罩的位置
 var maskX = boxX - $('.zoomplepopup').get(0).offsetWidth / 2;
 var maskY = boxY - $('.zoomplepopup').get(0).offsetHeight / 2;
 // 限定遮罩可移动范围
if(maskX < 0) {
	maskX = 0;
}
if(maskX > $('.picture-box').get(0).offsetWidth - $('.zoomplepopup').get(0).offsetWidth) {
	maskX = $('.picture-box').get(0).offsetWidth - $('.zoomplepopup').get(0).offsetWidth;
}
if(maskY < 0) {
	maskY = 0;
}
if(maskY > $('.picture-box').get(0).offsetHeight - $('.zoomplepopup').get(0).offsetHeight) {
	maskY = $('.picture-box').get(0).offsetHeight - $('.zoomplepopup').get(0).offsetHeight;
}
//  修改遮罩的显示位置
//$('.zoomplepopup').style.left = maskX + 'px';
$('.zoomplepopup').css('left',maskX + 'px');
//$('.zoomplepopup').style.top = maskY + 'px';
$('.zoomplepopup').css('top',maskY + 'px');
// 按照比例移动大图 大图片能够移动的总距离 = 大图的宽度 - 大盒子的宽度
var bigImgToMove = $('.bigImg').get(0).offsetWidth - $('.big-show').get(0).offsetWidth;
// 遮罩能够移动的总距离 = 小盒子的宽度 - 遮罩的宽度
var maskToMove = $('.picture-box').get(0).offsetWidth - $('.zoomplepopup').get(0).offsetWidth;
// 计算移动比例rate = 大图片能够移动的总距离/遮罩能够移动的总距离
var rate = bigImgToMove / maskToMove;
// 设置大图片当前的位置 = rate * 遮罩当前的位置
//$('bigImg').style.left = -rate * maskX + 'px';
$('.bigImg').css('left',-rate * maskX + 'px');
//$('bigImg').style.top = -rate * maskY + 'px';
$('.bigImg').css('top',-rate * maskY + 'px');

	
})

//tab栏
var distance = $('.tab-details').offset().top;
$(window).scroll(function(){
//	console.log(distance);
 //   console.log($(window).scrollTop());
	if ($(window).scrollTop() > distance) {
		$('.tab-details').addClass('currents');
		$('.tab-details').children('a').show();
	}
	
	if($(window).scrollTop() < distance){
		$('.tab-details').removeClass('currents');
		$('.tab-details').children('a').hide();
	}
})
$('.detail-ul>li').click(function(){
//	alert('aa');
	$(this).addClass('current').siblings().removeClass('current');
	$('.proinfo>div').eq($(this).index()).css({'display':'block'});
	$('.proinfo>div').eq($(this).index()).siblings().css({'display':'none'});
	
})
