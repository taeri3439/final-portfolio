export function menu() {
    const headerToggle = document.getElementById('headerToggle')

    const headerNav = document.querySelector('.header__nav')
    if (headerToggle) {
        headerToggle.addEventListener('click', function () {
            headerToggle.classList.add('show')

            headerToggle.getAttribute('aria-expanded') === 'true'
                ? headerToggle.setAttribute('aria-expanded') === 'false'
                : headerToggle.setAttribute('aria-expanded') === 'true'
        }
        )
    }

    let prevScrollTop = 0 //type 을 숫자로 하기 위해
    let header = document.getElementById('header');
    const sectionElems = document.querySelectorAll('section')
    window.addEventListener('scroll', function () {
        let currentScrollTop = window.pageYOffset //현재 스크롤 위치
        // console.log(currentScrollTop)
        if (currentScrollTop > prevScrollTop) {
            header.classList.add('on')
        } else {
            header.classList.remove('on')
        }
        prevScrollTop = currentScrollTop //
        console.log(prevScrollTop)
        // sectionElems.forEach(function (section) {
        //     const sectionTop = section.offsetTop
        //     const threshold = sectionTop + 300

        //     if (stickyTitle) {
        //         if (currentScrollTop > threshold) {
        //             header.classList.add('on')
        //         } else {
        //             header.classList.remove('on')
        //         }
        //     }

        // })
    })
}