export function cursor() {
    (function () {

        const link = document.querySelectorAll('.link');
        const cursor = document.querySelector('.cursor');

        const animateit = function (e) {
            const span = this.querySelector('.link .txt');
            const { offsetX: x, offsetY: y } = e,
                { offsetWidth: width, offsetHeight: height } = this,

                move = 25,
                xMove = x / width * (move * 2) - move,
                yMove = y / height * (move * 2) - move;

            // span.style.transform = `translate(${xMove}px, ${yMove}px)`;

            // if (e.type === 'mouseleave') span.style.transform = '';
        };

        const editCursor = e => {
            const { clientX: x, clientY: y } = e;
            cursor.style.left = x + 'px';
            cursor.style.top = y + 'px';
        };

        link.forEach(b => b.addEventListener('mousemove', animateit));
        link.forEach(b => b.addEventListener('mouseleave', animateit));
        link.forEach(function (item) {
            item.addEventListener('mouseenter', function () {
                cursor.style.transform='translate(-50%, -50%) scale(5)';
                cursor.style.backgroundColor='var( --mainColor100-color)'
            })
            item.addEventListener('mouseleave', function () {
                cursor.style.transform='translate(-50%, -50%) scale(1)';
                cursor.style.backgroundColor='#fff'
            })
        });
        window.addEventListener('mousemove', editCursor);


    })();
}