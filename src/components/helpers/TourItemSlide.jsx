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
        const beerAgain = document.getElementById('appy--navbar-help-beer-viewagain');
        const helpBeer = document.getElementById('appy--navbar-help-beer');
        const searchFormInput = document.getElementById('appy--search-form-input');
        const navbar = document.getElementById('appy--navbar');
        const messageHelperHomeRoute = document.getElementById('message-helper-home-route');
        const circleClick = document.getElementById('circle-click');


        if (focus === 'active') {
            setTimeout(() => {
                swiperNext[0].classList.replace('filter-item-dark', 'filter-item-focus');
                messageHelperHomeDrag.style.top = `${yItemNext + heightItemNext + 20}px`;
                messageHelperHomeDrag.style.width = `${widthItemNext}px`;
                circleSlide.style.top = `${yItemNext + (heightItemNext / 2) - 40}px`;
                circleSlide.style.right = `${xItemNext - (widthItemNext / 2) - 40}px`;
                circleSlide.classList.replace('circle-drag-init', 'circle-drag');
                circleSlide.classList.replace('d-none', 'd-flex');
            }, 2500)

            setTimeout(() => {
                circleSlide.classList.add('heartbeat-inf-anim');
            }, 2900)

            setTimeout(() => {
                circleSlide.classList.remove('heartbeat-inf-anim');
                circleSlide.classList.add('slide-out-left-anim');
                messageHelperHomeDrag.classList.replace('d-none', 'd-flex');
            }, 3200)

            setTimeout(() => {
                swiperActive[0].classList.replace('filter-item-dark', 'filter-item-focus');
                messageHelperHomeDrag.classList.replace('slide-in-bottom-anim', 'slide-out-bottom-anim')
                helperBack.classList.replace('black-background', 'black-background-init');
            }, 5000)

            setTimeout(() => {
                noClick.classList.replace('d-flex', 'd-none');
                helperBack.style.display = 'none';
                // localStorage.setItem('tourItem', 'show')
                // localStorage.setItem('beerHelp', 'active')
                circleSlide.classList.replace('d-none', 'd-flex');
                searchFormInput.classList.add('appy--search-input-help');
                // navbar.classList.add('appy--navbar-help')
                beerAgain.classList.replace('d-none', 'd-flex');
                helpBeer.classList.replace('d-none', 'd-flex');

                // Reinicio Elementos
                helperBack.classList.replace('black-background', 'black-background-init');
                messageHelperHomeRoute.style.display = 'none';
                messageHelperHomeRoute.classList.replace('slide-out-bottom-anim', 'slide-in-bottom-anim');
                circleClick.classList.replace('circle-click', 'circle-click-init');
                circleClick.classList.remove('slide-out-anim');
                circleClick.style.display = 'flex';
                swiperNext[0].classList.remove('filter-item-dark');
                messageHelperHomeDrag.classList.replace('d-flex', 'd-none');
                messageHelperHomeDrag.classList.replace('slide-out-bottom-anim', 'slide-in-bottom-anim');
                // circleSlide.classList.replace('circle-drag', 'circle-drag-init');

            }, 6000)
        }

    });

    return (
        <>
            < div id="message-helper-home-drag" className="message-helper alert alert-primary recommended text-white slide-in-bottom-anim d-none">
                <img className='scroll-icon' src="../../img/scroll.svg" alt="scroll" />
                Descubrir Rutas</div >
            < div id="circle-drag" className="circle-drag-init scale-in-center-anim d-none" ></div >
        </>
    );

};
export default TourItemSlide;