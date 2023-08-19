import './styles/main.scss';
import useSearch from './script/useSearch';
import useDropdown from './script/useDropdown';
const { handleSearchOn, handleSearchClose, handleMoblieSearchOn, handleMobileSearchClose } = useSearch();
const { handleDropdownShow, handleDropdownClose } = useDropdown();


// STATES
let isSearching = false;
let isDropdownVisible = false;


// SEARCH
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', handleSearchClick);

function handleSearchClick() {
    if (isSearching === false) {
        handleSearchOn();
        if(isDropdownVisible) {
            handleDropdownClose();
        }
    } else {
        handleSearchClose();
    }
    isSearching = !isSearching;
}

// MOBILE SEARCH
const mobileSearchBtn = document.getElementById('mobile-search-btn');
const mobileSearchCancelBtn = document.getElementById('mobile-search-cancel-btn');



mobileSearchBtn.addEventListener('click', handleMoblieSearchOn);
mobileSearchCancelBtn.addEventListener('click', handleMobileSearchClose);



// DROPDOWN

const dropdownButtonList = document.querySelectorAll('.nav__contents__menus__bottom__dropdown-list__item');

dropdownButtonList.forEach((element, index) => {
    element.id = `dropdown-button-${index + 1}`
    element.addEventListener('click', toggleDropdown);
});

function toggleDropdown() {
    if (isDropdownVisible === false) {
        handleDropdownShow();
    } else {
        handleDropdownClose();
    }

    isDropdownVisible = !isDropdownVisible;
}