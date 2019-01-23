function showContainer(){
  $('.loader').css({'display':'none'});
  $('.container').css({'display':'block'});
}

$('.logo').mouseenter(function(){
  $('#bg-logo img').attr('src', './img/rocket-launch2.png');
  $('#bg-logo span').css({
    'color':'rgb(251, 60, 89)',
    'text-shadow':'none'
  });
});

$('.logo').mouseleave(function(){
  $('#bg-logo img').attr('src', './img/rocket-launch.png');
  $('#bg-logo span').css({
    'color':'white',
    'text-shadow':'1px 1px 4px black'
  });
});

setTimeout(showContainer, 1000);

// page scroll click effect
$('.page-scroll').on('click', function(e){
  let href = $(this).attr('href');
  let section = $(href);
  $('html, body').animate({
    scrollTop: section.offset().top - 70
  }, 1000);
  $('nav').removeClass('responsive');
  e.preventDefault();
});

// responsive nav-bar effect
$('.icon').click(function(e){
  $('nav').toggleClass('responsive');
  e.preventDefault();
});

// scrollTop button effect
$('.top').click(function(){
  $('html, body').animate({
    scrollTop: 0
  }, 1000);
});

// window scroll effects
$(window).scroll(function(){
  // scrollTop button show
  if ($('html, body').scrollTop() > 1000){
    $('.top').css('display', 'block');
  } else {
    $('.top').css('display', 'none');
  }

  // landing elements whyus
  let wScroll = $(this).scrollTop();
  let why = $('#whyus').offset().top - 200;
  if (wScroll > why){
    $('#whyus .serv').each(function(e){
      setTimeout(function(){
        $('#whyus .serv').eq(e).addClass('show');
      }, (700 * (Math.exp(e * 0.14))) - 700);
    });
  }

  // floating elements
  if (wScroll > $('#portfolio').offset().top - $(window).height()){
    let offset = (Math.min(0, wScroll - $('#portfolio').offset().top + $(window).height() - 400)).toFixed();
    $('.ft1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});
    $('.ft2').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});
  }

  if (wScroll > $('#portfolio').offset().top - $(window).height()){
    $('.slider').css('display', 'none');
  } else {
    $('.slider').css('display', 'block');
  }
});

// slider image effect
let sIndex = 0;

function pSlide(n){
  showSlides(sIndex += n);
}

function showSlides(n){
  let i;
  let slides = $('.slide');

  if (n > slides.length) sIndex = 1;

  if (n < 1) sIndex = slides.length;

  for (i = 0; i < slides.length; i++){
    slides[i].style.display = 'none';
  }

  slides[sIndex-1].style.display = 'block';
}

sSlides();
function sSlides(){
  let i;
  let slides = $('.slide');
  for (i = 0; i < slides.length; i++){
    slides[i].style.display = 'none';
  }
  sIndex++;
  if (sIndex > slides.length) sIndex = 1;
  slides[sIndex-1].style.display = 'block';
  setTimeout(sSlides, 5000);
}
