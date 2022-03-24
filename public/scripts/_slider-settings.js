export default () => {
    try {
        new Splide('.single-slider', {
            type: 'loop',
            speed: 400,
            autoplay: true,
            arrows: true,
            interval: 2000,
            pauseOnHover: true,
            pauseOnFocus: true,
            perPage: 1,
            perMove: 1,
            gap: '30px',
            pagination: false
        }).mount()
        new Splide('.feedback-slider', {
            type: 'loop',
            speed: 400,
            autoplay: true,
            arrows: false,
            interval: 2000,
            pauseOnHover: true,
            pauseOnFocus: true,
            perPage: 2,
            perMove: 2,
            gap: '20px',
            pagination: false
        }).mount()
    } catch (e) {}
}
