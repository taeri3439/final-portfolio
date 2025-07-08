import Splide from '@splidejs/splide';
// import { gsap } from 'gsap';

export function work() {
    const list = gsap.utils.toArray('.work-list li');

    function resizeFunc() {
        const bodyWidth = window.innerWidth;
        const workList = document.querySelectorAll("#work .link");
        let w = 0;
        
        workList.forEach((work)=>{
            w = work.offsetWidth;
        })
        const slideW = w * list.length;
        console.log(slideW)
        if (bodyWidth > 700) {
            // console.log(bodyWidth)
            gsap.to(list, {
                xPercent: -118 * (list.length - 1),
                ease: 'none',
                scrollTrigger: {
                    trigger: '#work',
                    start: 'top top',
                    end: `+=${slideW}`,
                    pin: true,
                    scrub: 1,
                    // snap: 'none',
                }
            });
        }
    }
    resizeFunc();

    // window.addEventListener('resize', resizeFunc);
    



    const splide = new Splide('.splide', {
        type: 'loop',
        drag: false,
        gap: 30,
        autoWidth: true,
        arrows: false,
        pagination: false,
        autoScroll: {
            speed: .7,
            pauseOnHover: true,
            rewind: false,
        },
        breakpoints: {
            1200: { perPage: 3 },
            640: { perPage: 2 }
        }
    })
    splide.mount(window.splide.Extensions)



    $('.work-list li').mouseenter(function () {
        let idx = $(this).index()
        $('.desc-index>li').removeClass('on')
        $('.desc-index>li').eq(idx).addClass('on')
    })
    $('.work-list li').mouseleave(function () {

        $('.desc-index>li').removeClass('on')
    })

}

