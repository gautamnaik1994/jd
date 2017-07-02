$(window).load(function () {
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: false
  });
});
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// Set Search filter 
function setFilter() {
  let elem = document.querySelector('#selectSearchFilter');
  // switch (elem.options[elem.selectedIndex].value)
  // {
  //   case 'sortBy':
  // }
  document.querySelector('.sort-btn').classList.toggle('hide');
  document.querySelector('.search-by').classList.toggle('hide');
}