// 移动端响应式匹配
(function () {
  document.addEventListener('DOMContentLoaded', function () {
	var deviceWidth = document.documentElement.clientWidth;
	console.log(deviceWidth)
	document.documentElement.style.fontSize = deviceWidth / 31.25 + 'px';
	   }, false);
	window.onresize = function(){
		var deviceWidth = document.documentElement.clientWidth;
		document.documentElement.style.fontSize = deviceWidth / 31.25 + 'px';
	};
})();

// 顶部手动轮播图1
$('top-slider-imgbox li').each(function(){
	$(this).touchesStart(function(){
		console.log(111)
	})
});
