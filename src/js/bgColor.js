import {gsap} from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";


export function bgColor() {

    gsap.registerPlugin(ScrollTrigger)

    //각 parallax__item에 대해 scrollTrigger 생성
    document.querySelectorAll('section').forEach((item) => {
        console.log(item.getAttribute('data-bg'))
        let color = item.getAttribute('data-bg');
        ScrollTrigger.create({
            trigger: item,
            start: 'top 50%',
            end: 'bottom 5%',
            markers:true,

            onEnter: () => gsap.to('body', {
                backgroundColor: color,
                duration: 1.5
            }),
            onEnterBack: () => gsap.to('body', {
                backgroundColor: color,
                duration: 1.5
            })

        })
    })
}