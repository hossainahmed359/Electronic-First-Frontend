import './styles/main.scss';
import { testScript } from './script/test.js';
import { searchScript } from './script/search';


// console.log('Main Script Runnig!');
// console.log(testScript());

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


