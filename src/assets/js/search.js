let searchIcon = document.getElementById('nut-sear-ma-dit-me-cuong');
let hideSearchIcon = document.querySelector('.hide-search-icon');
let search = document.querySelector('.search');

// Show search
function showSearch()  {
    if(search.style.display !== 'block'){
        search.style.display = 'block';
    }
}

// Hide Search
function hideSearch()  {
    search.style.display = 'none';
} 