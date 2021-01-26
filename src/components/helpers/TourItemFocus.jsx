import React, { useEffect } from 'react';

const TourItemFocus = ({ focus }) => {

    useEffect(() => {
        const noClick = document.getElementById('no-click');
        const tourItemFocusFirst = document.getElementById('appy--tours-item-first');
        const swiperContainer = document.getElementsByClassName('swiper-container');
        const swiperNext = document.getElementsByClassName('swiper-slide-next');
        const swiperActive = document.getElementsByClassName('swiper-slide-active');
        const helperBack = document.getElementById('helper-back');
        const messageHelperHomeRoute = document.getElementById('message-helper-home-route');
        const yItemFirst = tourItemFocusFirst.getBoundingClientRect().y;
        const heightItemFirst = tourItemFocusFirst.getBoundingClientRect().height;
        const widthItemFirst = tourItemFocusFirst.getBoundingClientRect().width;

        helperBack.classList.replace('black-background', 'black-background-init');

        if (focus === 'active') {
            noClick.classList.replace('d-none', 'd-flex');
            helperBack.style.display = 'flex';
            helperBack.style.zIndex = '2';
            messageHelperHomeRoute.style.width = `${widthItemFirst}px`;

            setTimeout(() => {
                helperBack.classList.replace('black-background-init', 'black-background');
                swiperContainer[0].style.zIndex = '200';
                swiperNext[0].classList.add('filter-item-dark');
                messageHelperHomeRoute.style.top = `${yItemFirst + heightItemFirst + 20}px`;
                messageHelperHomeRoute.style.display = 'flex';
            }, 1500);

            setTimeout(() => {
                swiperActive[0].classList.add('filter-item-dark');
                // swiperNext[0].classList.replace('filter-item-dark', 'filter-item-focus');
                messageHelperHomeRoute.classList.replace('slide-in-bottom-anim', 'slide-out-bottom-anim');
            }, 5500);
        }

    }, []);

    return (
        < div id="message-helper-home-route" className="message-helper alert alert-primary recommended text-white slide-in-bottom-anim">
            <img className='scroll-icon' src="../../img/tap.svg" alt="tap" />
            Detalle Ruta</div >
    );
};

export default TourItemFocus;