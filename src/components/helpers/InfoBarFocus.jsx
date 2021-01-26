import React, { useEffect } from 'react'

const InfoBarFocus = ({ focus }) => {

    useEffect(() => {
        const noClick = document.getElementById('no-click');
        const helperBack = document.getElementById('helper-back');
        const messageHelperInfoFocus = document.getElementById('message-helper-info-focus');
        const messageHelperInfoDetail = document.getElementById('message-helper-info-detail');
        const messageHelperInfoQuick = document.getElementById('message-helper-info-quick');
        const messageHelperTourDetail = document.getElementById('message-helper-tour-detail');

        noClick.classList.replace('d-none', 'd-flex');
        helperBack.style.display = 'flex';
        // helperBack.style.opacity = 0;
        helperBack.style.zIndex = '400';


        setTimeout(() => {
            helperBack.classList.replace('black-background-init', 'black-background');
            // helperBack.style.opacity = .8;
            messageHelperInfoFocus.style.display = 'flex';
        }, 500)

        setTimeout(() => {
            messageHelperInfoFocus.classList.replace('slide-in-bottom-anim', 'slide-out-bottom-anim');
            messageHelperInfoDetail.style.display = 'flex';
        }, 3500);

        setTimeout(() => {
            messageHelperInfoDetail.classList.replace('slide-in-bottom-anim', 'slide-out-bottom-anim');
            messageHelperInfoQuick.style.display = 'flex';
        }, 7000);

        setTimeout(() => {
            messageHelperInfoQuick.classList.replace('slide-in-bottom-anim', 'slide-out-bottom-anim');
        }, 10000);

        setTimeout(() => {
            messageHelperTourDetail.classList.replace('d-none', 'd-flex');
        }, 10500)

        setTimeout(() => {
            noClick.classList.replace('d-flex', 'd-none');
            helperBack.classList.replace('black-background', 'black-background-init');
            messageHelperTourDetail.classList.replace('d-flex', 'd-none');
        }, 13000)

        setTimeout(() => {
            helperBack.style.display = 'none';
        }, 14500)

    }, [])

    return (
        <>
            < div id="message-helper-info-focus" className="message-helper-infobar-nav alert alert-primary recommended text-white slide-in-bottom-anim">
                <img className='scroll-icon' src="../../img/tap.svg" alt="tap" />
            Barra de Navegación</div >
            < div id="message-helper-info-detail" className="message-helper-infobar-detail alert alert-primary recommended text-white slide-in-bottom-anim">
                Detalle Ruta
            <img className='scroll-icon-right' src="../../img/tap.svg" alt="tap" />
            </div >
            < div id="message-helper-info-quick" className="message-helper-infobar-quick alert alert-primary recommended text-white slide-in-bottom-anim">
                <img className='scroll-icon' src="../../img/cohete.svg" alt="tap" />
                Navegación Rápida
            </div >
            <div id="message-helper-tour-detail" className="message-helper-tour-detail  d-none">
                <img className="scroll-down slide-in-top-anim" src="../../img/scroll-down.svg" alt="scroll down" />
                <p className="scroll-down-text slide-in-top-anim loading--background-default-delay3">Detalle Ruta</p>
            </div>
        </>
    )
}

export default InfoBarFocus;
