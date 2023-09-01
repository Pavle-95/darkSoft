// Carousel for products
$('.products-carousel-holder').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  infinite: true,
  prevArrow:  `<svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_1_251)">
    <rect x="10" y="10" width="48" height="48" fill="white"/>
    </g>
    <path d="M41 34L27 34" stroke="#292647" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M34 41L27 34L34 27" stroke="#292647" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <defs>
    <filter id="filter0_d_1_251" x="0" y="0" width="68" height="68" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset/>
    <feGaussianBlur stdDeviation="5"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_251"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_251" result="shape"/>
    </filter>
    </defs>
  </svg> `,
  nextArrow: `<svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_1_256)">
    <rect x="58" y="58" width="48" height="48" transform="rotate(-180 58 58)" fill="white"/>
    </g>
    <path d="M27 34L41 34" stroke="#292647" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M34 27L41 34L34 41" stroke="#292647" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <defs>
    <filter id="filter0_d_1_256" x="0" y="0" width="68" height="68" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset/>
    <feGaussianBlur stdDeviation="5"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_256"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_256" result="shape"/>
    </filter>
    </defs>
  </svg>`,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

// Carousel for testimponial
$('.testimonial-carousel-holder').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  centerMode: true,
  slidesToShow: 5,
  infinite: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
