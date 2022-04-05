function myFunction() {
    let x = document.getElementById("numb").value;
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
      text = "Please fill correct info.";
    } else {
      text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
  }

  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

//sideBar
$(document).ready(function(){
    $('.sub-btn').click(function(){
      $(this).next('.sub-menu').slideToggle();
	  $(this).find('.dropdown').toggleClass('rotate');
	});
});


$( '.parent' ).hover(
  function() {
    $('.active-parent').removeClass('active-parent');
    $(this).addClass('active-parent');
  },

  //   Hover reveal for wrapper 1
  $('.hoverReveal1').click(
    function() {
      $('.wrapper2, .wrapper3').hide();
      $('.wrapper1').show();
    }
  ),

  //   Hover reveal for wrapper 2
  $('.hoverReveal2').click(
    function() {
      $('.wrapper1, .wrapper3').hide();
      $('.wrapper2').show();
    }
  ),

  //   Hover reveal for wrapper 3
  $('.hoverReveal3').click(
    function() {
      $('.wrapper1, .wrapper2').hide();
      $('.wrapper3').show();
    }
  )
);

//--tabs
jQuery(function(){
  jQuery('#showall').click(function(){
        jQuery('.targetDiv').show();
 });
 jQuery('.showSingle').click(function(){
       jQuery('.targetDiv').hide();
       jQuery('#div'+$(this).attr('target')).show();
 });
});