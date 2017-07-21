$(document).ready(function() {
  setNav()
})

$(window).resize(function() {
  setNav();
});


// Fixes navbar closing on click flashes
function setNav() {
  if($(window).width() > 767) {
    $('.nav-heading').removeAttr('data-toggle').removeAttr('data-target');
    $('.nav-heading').addClass("hidden-xs").removeClass("visible-xs");
    console.log("Hello wide screen");
  } else {
    $('.nav-heading').attr('data-toggle', 'collapse').attr('data-target', '.navbar-collapse');
    $('.nav-heading').addClass("visible-xs").removeClass("hidden-xs");
    console.log("Hello Small Screen");
  }
}

// class="visible-xs" data-toggle="collapse" data-target=".navbar-collapse"