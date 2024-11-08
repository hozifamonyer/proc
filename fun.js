var div = document.getElementById('show');
var display = 1;

function hideandshow() {
    if (display === 1) {
        div.style.display = 'block'; // اجعل العنصر مرئياً
        setTimeout(() => {
            div.classList.add('visible'); // أضف الكلاس بعد فترة قصيرة للسماح بالتأثير
        }, 10); // تأخير بسيط
        display = 0;
    } else {
        div.classList.remove('visible'); // أزل الكلاس لبدء الانتقال
        setTimeout(() => {
            div.style.display = 'none'; // أخفي العنصر بعد الانتهاء من الانتقال
        }, 500); // يجب أن يتطابق مع مدة الانتقال في CSS
        display = 1;
    }
}