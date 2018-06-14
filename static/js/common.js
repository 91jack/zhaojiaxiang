// 移动端响应式匹配
(function () {
  document.addEventListener('DOMContentLoaded', function () {
	var deviceWidth = document.documentElement.clientWidth;
	console.log(deviceWidth)
		if(deviceWidth >= 375){
			document.documentElement.style.fontSize = deviceWidth / 31.25 + 'px';
		}else{
			document.documentElement.style.fontSize = deviceWidth / 26.66 + 'px';
		}
	
	   }, false);
	   
	window.onresize = function(){
		var deviceWidth = document.documentElement.clientWidth;
		if(deviceWidth >= 375){
			document.documentElement.style.fontSize = deviceWidth / 31.25 + 'px';
		}else{
			document.documentElement.style.fontSize = deviceWidth / 26.66 + 'px';
		}
	};
})();


