import gsap from "gsap";
import Splide from '@splidejs/splide';

export function about() {
    const sideElements = document.querySelectorAll(".side");
    const topElements = document.querySelectorAll(".top");
    const bottomElements = document.querySelectorAll(".bottom");
    
    function setInitialPositions() {
      // 초기 위치 설정
      gsap.set(sideElements, { x: -100, opacity: 0 });
      gsap.set(topElements, { y: -100, opacity: 0 });
      gsap.set(bottomElements, { y: 100, opacity: 0 });
    }
    
    function animateOnScroll() {
   
      animateElements(sideElements, { x: 0 }); // .
      animateElements(topElements, { y: 0 }); // .top 
      animateElements(bottomElements, { y: 0 }); // .
    }
    
    function animateElements(elements, animationProps) {
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
    
        if (rect.top < windowHeight && rect.bottom > 0) {
          // 화면 안에 들어왔을 때
          gsap.to(element, {
            ...animationProps,
            opacity: 1,
            duration: 1,
            delay: index * 0.2, // stagger 효과
          });
        } else {
          // 화면을 벗어났을 때 초기 위치로 복귀
          gsap.to(element, {
            ...animationProps,
            x: animationProps.x !== undefined ? -100 : 0,
            y: animationProps.y !== undefined ? animationProps.y > 0 ? 100 : -100 : 0,
            opacity: 0,
            duration: 1,
          });
        }
      });
    }
    
    // 초기 위치 설정
    setInitialPositions();
    
    // 스크롤 이벤트 감지
    window.addEventListener("scroll", animateOnScroll);
    
    // 초기 실행
    animateOnScroll();



    const splide2 = new Splide('#about .splide', {
        type: 'loop',
        drag: false,
        gap: 30,
        autoWidth: true,
        arrows: false,
        pagination: false,
        autoScroll: {
            speed: -1,
            pauseOnHover: true,
            rewind: false,
        },
        breakpoints: {
            1200: { perPage: 3 },
            640: { perPage: 2 }
        }
    })
    splide2.mount(window.splide.Extensions)

}
