import React, { useEffect } from 'react';

const TourItemFocus = ({ focus }) => {

    console.log('focus');

    useEffect(() => {
        const circleClick = document.getElementById('circle-click');
        const noClick = document.getElementById('no-click');
        const tourItemFocusFirst = document.getElementById('appy--tours-item-first');
        const swiperContainer = document.getElementsByClassName('swiper-container');
        const swiperNext = document.getElementsByClassName('swiper-slide-next');
        const swiperActive = document.getElementsByClassName('swiper-slide-active');
        const helperBack = document.getElementById('helper-back');
        const messageHelperHomeRoute = document.getElementById('message-helper-home-route');
        const xItemFirst = tourItemFocusFirst.getBoundingClientRect().x;
        const yItemFirst = tourItemFocusFirst.getBoundingClientRect().y;
        const heightItemFirst = tourItemFocusFirst.getBoundingClientRect().height;
        const widthItemFirst = tourItemFocusFirst.getBoundingClientRect().width;
        const messageHelperHomeDrag = document.getElementById('message-helper-home-drag');

        helperBack && helperBack.classList.replace('black-background', 'black-background-init');

        if (focus === 'active') {
            noClick && noClick.classList.replace('d-none', 'd-flex');
            if (helperBack) {
                helperBack.style.display = 'flex';
                helperBack.style.zIndex = '2';
            }
            if (messageHelperHomeRoute) { messageHelperHomeRoute.style.width = `${widthItemFirst}px`; }


            setTimeout(() => {
                helperBack && helperBack.classList.replace('black-background-init', 'black-background');
                if (swiperContainer) { swiperContainer[0].style.zIndex = '200'; }
                // if (swiperNext) { swiperNext[0].classList.add('filter-item-dark'); }
                if (messageHelperHomeRoute) {
                    messageHelperHomeRoute.style.top = `${yItemFirst + heightItemFirst + 20}px`;
                    messageHelperHomeRoute.style.display = 'flex';
                }
                if (circleClick) {
                    circleClick.style.top = `${yItemFirst + (heightItemFirst / 2) - 40}px`;
                    circleClick.style.left = `${xItemFirst + (widthItemFirst / 2) - 40}px`;
                    circleClick.classList.replace('circle-click-init', 'circle-click');
                    circleClick.classList.replace('d-none', 'd-flex');
                }
            }, 500);

            setTimeout(() => {
                circleClick && circleClick.classList.add('heartbeat-anim');
                circleClick && circleClick.classList.add('slide-out-anim');
            }, 1000)

            setTimeout(() => {
                // swiperActive && swiperActive[0].classList.add('filter-item-dark');
                // swiperNext[0].classList.replace('filter-item-dark', 'filter-item-focus');
                messageHelperHomeRoute && messageHelperHomeRoute.classList.replace('slide-in-bottom-anim', 'slide-out-bottom-anim');
                circleClick && circleClick.classList.remove('heartbeat-anim');
                circleClick && circleClick.classList.replace('d-flex', 'd-none');
                // circleClick.style.display = 'none';
            }, 2500);
        }

    });

    return (
        <></>
        // <>
        //     <div id="message-helper-home-route" className="message-helper alert alert-primary recommended text-white slide-in-bottom-anim">
        //         <img className='scroll-icon' src="../../img/tap.svg" alt="tap" />
        //         Detalle Ruta
        //     </div >
        //     < div id="circle-click" className="circle-click-init scale-in-center-anim d-none" ></div >
        // </>

    );
};

export default TourItemFocus;