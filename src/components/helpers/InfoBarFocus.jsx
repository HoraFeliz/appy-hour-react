import React, { useEffect } from 'react'

const InfoBarFocus = ({ focus }) => {

    useEffect(() => {
        const noClick = document.getElementById('no-click');
        const helperBack = document.getElementById('helper-back');
        const messageHelperInfoFocus = document.getElementById('message-helper-info-focus');
        const messageHelperInfoDetail = document.getElementById('message-helper-info-detail');
        const messageHelperInfoQuick = document.getElementById('message-helper-info-quick');
        const messageHelperTourDetail = document.getElementById('message-helper-tour-detail');

        noClick && noClick.classList.replace('d-none', 'd-flex');
        if (helperBack) {
            helperBack.style.display = 'flex';
            // helperBack.style.opacity = 0;
            helperBack.style.zIndex = '400';
        }


        setTimeout(() => {
            helperBack && helperBack.classList.replace('black-background-init', 'black-background');
            // helperBack.style.opacity = .8;
            if (messageHelperInfoFocus) { messageHelperInfoFocus.style.display = 'flex'; }
        }, 500)

        setTimeout(() => {
            messageHelperInfoFocus && messageHelperInfoFocus.classList.replace('slide-in-bottom-anim', 'slide-out-bottom-anim');
            if (messageHelperInfoDetail) { messageHelperInfoDetail.style.display = 'flex'; }
        }, 2500);

        setTimeout(() => {
            messageHelperInfoDetail && messageHelperInfoDetail.classList.replace('slide-in-bottom-anim', 'slide-out-bottom-anim');
            if (messageHelperInfoQuick) { messageHelperInfoQuick.style.display = 'flex'; }
        }, 3000);

        setTimeout(() => {
            messageHelperInfoQuick && messageHelperInfoQuick.classList.replace('slide-in-bottom-anim', 'slide-out-bottom-anim');
        }, 4000);

        setTimeout(() => {
            messageHelperTourDetail.classList.replace('d-none', 'd-flex');
        }, 4500)

        setTimeout(() => {
            noClick && noClick.classList.replace('d-flex', 'd-none');
            helperBack && helperBack.classList.replace('black-background', 'black-background-init');
            messageHelperTourDetail && messageHelperTourDetail.classList.replace('d-flex', 'd-none');
        }, 9000)

        setTimeout(() => {
            if (helperBack) { helperBack.style.display = 'none'; }
        }, 14500)

    }, [])

    return (
        <></>
        // <>
        //     < div id="message-helper-info-focus" className="message-helper-infobar-nav alert alert-primary recommended text-white slide-in-bottom-anim">
        //         <img className='scroll-icon' src="../../img/tap.svg" alt="tap" />
        //         Barra de Navegación</div >
        //     < div id="message-helper-info-detail" className="message-helper-infobar-detail alert alert-primary recommended text-white slide-in-bottom-anim">
        //         Detalle Ruta
        //         <img className='scroll-icon-right' src="../../img/tap.svg" alt="tap" />
        //     </div >
        //     < div id="message-helper-info-quick" className="message-helper-infobar-quick alert alert-primary recommended text-white slide-in-bottom-anim">
        //         <img className='scroll-icon' src="../../img/cohete.svg" alt="tap" />
        //         Navegación Rápida
        //     </div >
        //     <div id="message-helper-tour-detail" className="message-helper-tour-detail  d-none">
        //         <img className="scroll-down slide-in-top-anim" src="../../img/scroll-down.svg" alt="scroll down" />
        //         <p className="scroll-down-text slide-in-top-anim loading--background-default-delay3">Detalle Ruta</p>
        //     </div>
        // </>
    )
}

export default InfoBarFocus;
