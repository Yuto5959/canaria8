// 簡単なアニメーションを追加
window.onload = function() {
    document.querySelector('#about p').style.opacity = 0;
    setTimeout(() => {
        document.querySelector('#about p').style.transition = 'opacity 2s';
        document.querySelector('#about p').style.opacity = 1;
    }, 500);
};