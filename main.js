import './styles/main.scss';
import { testScript } from './script/test.js';
import { searchScript } from './script/search';


// console.log('Main Script Runnig!');
// console.log(testScript());

// SEARCH

let isSearching = false;
const searchBtn = document.getElementById('search-btn');
const navMenu = document.getElementById('nav-bottom-menu');

searchBtn.addEventListener('click', handleSearchClick) ;

function handleSearchClick () {
     // Show Input Field And Show Cancel Button
    if(isSearching === false) {
        navMenu.classList.add('search-active');
    } else {
        navMenu.classList.remove('search-active');
    }

    isSearching = !isSearching;
    
}


// DROPDOWN
let isDropdownVisible = false;
const dropdownMenu = document.getElementById('dropdown-menu');
const dropdownButtonList = document.querySelectorAll('.nav__contents__menus__bottom__dropdown-list__item');

dropdownButtonList.forEach((element, index) => {
    element.id = `dropdown-button-${index+1}`
    element.addEventListener('click', handleShowDropdown);
});

function handleShowDropdown () {
    if(isDropdownVisible === false) {
        dropdownMenu.classList.remove('d-none');
        dropdownMenu.classList.remove('slide-out-top');
        dropdownMenu.classList.add('slide-in-top');
    } else {
        dropdownMenu.classList.remove('slide-in-top');
        dropdownMenu.classList.add('slide-out-top');
        setTimeout(function () {
            dropdownMenu.classList.add('d-none');
        },[300])
    }

    isDropdownVisible = !isDropdownVisible;
}