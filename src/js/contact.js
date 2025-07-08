import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";


// ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger, SplitText);

export function contact() {
  // SplitText로 텍스트 분리
  const split = new SplitText('.contact-title h2, .contact-endless p', { type: 'chars words' });
  const chars = split.chars;

  // 타임라인 생성 및 ScrollTrigger 연결
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.contact-title', // 애니메이션을 트리거할 요소
      start: 'top 80%', // 뷰포트에서 시작 위치
      end: 'bottom top', // 뷰포트에서 끝 위치
      toggleActions: 'restart none none none', // 애니메이션 실행 설정
      markers: true, // 디버깅용 마커 (필요 시 제거 가능)
    },
  });

  // 애니메이션 설정
  tl.from(chars, {
    opacity: 0,
    y: gsap.utils.shuffle([-300, 300]), // 랜덤 방향 이동
    stagger: {
      each: 0.009,
      from: 'end', // 끝에서 시작
    },
    duration: 1, // 애니메이션 지속 시간
  }).to(chars, {
    opacity: 1,
    stagger: {
      each: 0.009,
      from: 'start', // 시작에서 앞으로
    },
    duration: 1,
  });
}
