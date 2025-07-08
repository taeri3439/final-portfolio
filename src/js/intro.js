export function intro() {
    let mouseX = 0; /* 초기 X위치값 Number */
    let mouseY = 0; /* 초기 Y위치값 Number */

    // 마우스 움직임 감지하여 위치 업데이트
    document.onmousemove = function (e) {
        e = e || window.event;
        mouseX = e.clientX; /* dom에서 커서 x 위치 */
        mouseY = e.clientY; /* dom에서 커서 y 위치 */
        // console.log(mouseX);
        // console.log(mouseY);
    };
    slogan_logo_motion();

    // 마우스에 따라 circle 움직임
    function slogan_logo_motion() {
        // SVG 요소들과 속성 가져오기
        const mouseCircleEl = document.getElementById("svgCircle");
        const mouseCircle = mouseCircleEl.querySelector("circle");
        const svgText = document.getElementById("svgLogo");
        const svgTitleViewBox = document
            .getElementById("svgTitle")
            .getAttribute("viewBox"); /* svgTitle 의 viewBox 속성을 가져옴 */
        const stViewBoxValue =
            svgTitleViewBox.split(/\s+|,/); /* viewBox 값을 배열로 변환 */
        const stViewBoxWidth = stViewBoxValue[2]; /* svgTitle 의 너비(x)값 */

        // 원 객체 정의
        var circle = {
            el: mouseCircleEl,
            x: mouseCircleEl.getAttribute("cx") /* 초기 cx 값 저장 */,
            y: mouseCircleEl.getAttribute("cy") /* 초기 cy 값 저장 */,
            update: function () {
                mouseCircle.setAttribute("cx", this.x); /* cicle cx 값 업데이트  */
                mouseCircle.setAttribute("cy", this.y); /* cicle cy 값 업데이트  */
            },
        };

        // 주기적으로 마우스 커서에 따라 SVG 원 이동
        let mouseArea = document.getElementById("intro");
        let MouseAreaIntervalId;
        mouseArea.addEventListener("mouseenter", function () {
            MouseAreaIntervalId = setInterval(move, 0)
        });
        mouseArea.addEventListener("mouseleave", function () {
            clearInterval(MouseAreaIntervalId);
        });

        function move() {
            const rect =
                svgText.getBoundingClientRect(); /* 부모 크기값을 rect에 부여 */
            const scale =
                stViewBoxWidth / rect.width; /* 보이는영역(viewBox) / 부모너비 */
            circle.x = lerp(
                circle.x,
                (mouseX - rect.left) * scale,
                0.1
            ); /* circle cx에 변경된 값 지정 */
            circle.y = lerp(
                circle.y,
                (mouseY - rect.top) * scale,
                0.1
            ); /* circle cy에 변경된 값 지정 */
            circle.update(); /* circle의 위치값 업데이트 */
        }

        // 선형 보간 함수
        function lerp(start, end, amt) {
            // console.log(start);
            // console.log(end);
            // console.log(amt);
            return (1 - amt) * start + amt * end;
        }
    }

    setInterval(function () {
        $('.title').stop().animate({'marginTop': '-60px'},300, function () {
            $('.title p:first').appendTo('.title')
            $('.title').css({ 'marginTop': '0 ' })
        })
    }, 3000)

}