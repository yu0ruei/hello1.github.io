document.addEventListener('DOMContentLoaded', function() {
    const toggleModeButton = document.querySelector('#toggleModeButton');
    const body = document.querySelector('body');

    // 點擊按鈕時，切換夜間模式和日間模式
    toggleModeButton.addEventListener('click', function() {
        // 切換 body 的 CSS class
        body.classList.toggle('dark-mode');
    });
});
