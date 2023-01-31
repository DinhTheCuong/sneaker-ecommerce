// Search
let searchIcon = document.querySelector('.header-item-search');
let hideSearchIcon = document.querySelector('.hide-search-icon');

// Show search
searchIcon.addEventListener('click', showSearch);

function showSearch()  {
    let search = document.querySelector('.search');
    search.style.display = 'block';
}

// Hide Search
hideSearchIcon.addEventListener('click', hideSearch);

function hideSearch()  {
    let search = document.querySelector('.search');
    search.style.display = 'hide';
}