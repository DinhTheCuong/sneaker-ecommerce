let searchIcon = document.querySelector('.header-item-search');
let hideSearchIcon = document.querySelector('.hide-search-icon');
let search = document.querySelector('.search');

// Show search
function showSearch()  {
    search.style.display = 'block';
}

// Hide Search
function hideSearch()  {
    console.log(search)
    search.style.display = 'none';
} 