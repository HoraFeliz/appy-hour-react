import React, { useEffect } from 'react';

const TourItemSlide = ({ focus }) => {

    useEffect(() => {
        const circleSlide = document.getElementById('circle-drag');
        const swiperContainer = document.getElementsByClassName('swiper-container');
        const swiperNext = document.getElementsByClassName('swiper-slide-next');
        const swiperActive = document.getElementsByClassName('swiper-slide-active');
        const tourItemFocusNext = document.getElementById('appy--tours-item-next');
        const yItemNext = tourItemFocusNext.getBoundingClientRect().y;
        const xItemNext = tourItemFocusNext.getBoundingClientRect().x;
        const heightItemNext = tourItemFocusNext.getBoundingClientRect().height;
        const widthItemNext = tourItemFocusNext.getBoundingClientRect().width;
        const helperBack = document.getElementById('helper-back');
        const messageHelperHomeDrag = document.getElementById('message-helper-home-drag');
        const noClick = document.getElementById('no-click');

        if (focus === 'active') {
            setTimeout(() => {
                swiperNext[0].classList.replace('filter-item-dark', 'filter-item-focus');
                messageHelperHomeDrag.style.top = `${yItemNext + heightItemNext + 20}px`;
                messageHelperHomeDrag.style.width = `${widthItemNext}px`;
                circleSlide.style.top = `${yItemNext + (heightItemNext / 2) - 40}px`;
                circleSlide.style.left = `${xItemNext - (widthItemNext / 2) - 40}px`;
                messageHelperHomeDrag.style.display = 'flex';
                circleSlide.classList.replace('circle-drag-init', 'circle-drag');
            }, 5500)

            setTimeout(() => {
                circleSlide.classList.add('heartbeat-anim');
            }, 6000)

            setTimeout(() => {
                circleSlide.classList.remove('heartbeat-anim');
                circleSlide.classList.add('slide-out-left-anim');
            }, 6800)

            setTimeout(() => {
                swiperActive[0].classList.replace('filter-item-dark', 'filter-item-focus');
                messageHelperHomeDrag.classList.replace('slide-in-bottom-anim', 'slide-out-bottom-anim')
                helperBack.classList.replace('black-background', 'black-background-init');
            }, 8000)

            setTimeout(() => {
                noClick.classList.replace('d-flex', 'd-none');
                helperBack.style.display = 'none';
            }, 8500)
        }

    }, []);

    return (
        <>
            < div id="message-helper-home-drag" className="message-helper alert alert-primary recommended text-white slide-in-bottom-anim">
                <img className='scroll-icon' src="../../img/scroll.svg" alt="scroll" />
                Descubrir Rutas</div >
            < div id="circle-drag" className="circle-drag-init scale-in-center-anim" ></div >
        </>
    );

};
export default TourItemSlide;