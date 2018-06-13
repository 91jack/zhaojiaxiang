// 移动端响应式适配
(function () {
    var html = document.documentElement;

    function onWindowResize() {
        html.style.fontSize = html.getBoundingClientRect().width /10 + 'px';
    }

    window.addEventListener('resize', onWindowResize);
    onWindowResize();
})();