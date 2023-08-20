import './styles/main.scss';
import useOffcanvas from './script/useOffcanvas';
import useSearch from './script/useSearch';
import useDropdown from './script/useDropdown';
import useAddEvent from './script/useAddEvent';

const { handleOffcanvasShow, handleOffcanvasClose } = useOffcanvas();
const { handleSearchOn, handleSearchClose, handleMoblieSearchOn, handleMobileSearchClose } = useSearch();
const { handleDropdownShow, handleDropdownClose } = useDropdown();
const { addEventToMultitpleElements } = useAddEvent();


// STATES
let isSearching = false;
let isDropdownVisible = false;


function handleSearchClick() {
    if (isSearching === false) {
        handleSearchOn();
        if (isDropdownVisible) {
            handleDropdownClose();
        }
    } else {
        handleSearchClose();
    }
    isSearching = !isSearching;
}


function toggleDropdown() {
    if (isDropdownVisible === false) {
        handleDropdownShow();
    } else {
        handleDropdownClose();
    }

    isDropdownVisible = !isDropdownVisible;
}


const arrayOfListedElements = [
    {
        id: 'search-btn',
        event: 'click',
        callback: handleSearchClick
    },
    {
        id: 'mobile-search-btn',
        event: 'click',
        callback: handleMoblieSearchOn
    },
    {
        id: 'mobile-search-cancel-btn',
        event: 'click',
        callback: handleMobileSearchClose
    },
    {
        className: 'nav__contents__menus__bottom__dropdown-list__item',
        event: 'click',
        callback: toggleDropdown
    },
    {
        id: 'show-offcanvas-btn',
        event: 'click',
        callback: handleOffcanvasShow
    },
    {
        id: 'close-offcanvas-btn',
        event: 'click',
        callback: handleOffcanvasClose
    },
]

addEventToMultitpleElements(arrayOfListedElements);