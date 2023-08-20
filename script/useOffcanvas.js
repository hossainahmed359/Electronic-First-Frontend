export default function useOffcanvas() {

    // Dropdown
    const offcanvas = document.getElementById('ef-offcanvas');


    function handleOffcanvasShow() {
        offcanvas.classList.remove('d-none');
        offcanvas.classList.remove('slide-out-right');
        offcanvas.classList.add('slide-in-left');
    }

    function handleOffcanvasClose() {
        offcanvas.classList.remove('slide-in-left');
        offcanvas.classList.add('slide-out-right');
        setTimeout(function () {
            offcanvas.classList.remove('slide-out-right');
            offcanvas.classList.add('d-none');

        }, [200])
    }

    return {
        handleOffcanvasShow, handleOffcanvasClose
    }
}