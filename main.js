$(document).ready(function(){
  $(".works").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{enabled:true}
  });
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $(".navbar").addClass("sticky");
    }
    else{
      $(".navbar").removeClass("sticky");
    }
  });
  $('.menu-toggler').click(function(){
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });
/******** AD. ***********/
  /*$(".ad").delay(2000).show(100);
  $("#closeBtn").click(function(){
    $(".ad").animate({left: '-100%', opacity: '0'},500).slideUp();
  });
  $(".slide__block").delay(2000).slideDown(400);
  function loop() {
    $('#ad__img').animate({width:'140px', height:'140px',opacity:'1'},800);
    $('#ad__img').animate ({
      width:'120px',
      height:'120px',
      opacity:'0.6'
    }, 800, 'linear', function() {
      loop();
    });
  }
  loop();
  $("#closeBtn_2").click(function(){
    $(".slide__block").slideUp();
    $('#ad__img').stop();
  });*/
 /* function toggleAutoplay(){
    var vid = document.getElementById('video2');
    if (vid.autoplay == true) {
      vid.autoplay = false;
    } else {
      vid.autoplay = true;
    }
    vid.load();
  };*/
  $(".form_info_block").fadeOut();
  $('#resetBtn').click(function(){
    reset();
    validate();
  });
  function reset() {
    document.getElementById("form").reset();
  }

  $(".btn").click(function(){
    const email = document.getElementById('email').value;
    if (email != "" && email != null && email != NaN) {
    $(".form_info_block").delay(200).fadeIn().delay(1500);
    $(".form_info_block").fadeOut().delay(1500);
    reset();
    validate();
  };
  });
});