let slideIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    // 현재 이미지 인덱스를 업데이트
    slideIndex = (slideIndex + step + totalSlides) % totalSlides;

    // 슬라이드 이동 (이미지들을 가로로 이동시키는 방식)
    const slider = document.querySelector(".slider");
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// 자동 슬라이드 기능 (선택 사항)
setInterval(() => moveSlide(1), 3000);  // 3초마다 자동으로 슬라이드
