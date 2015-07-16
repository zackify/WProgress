"use strict"
var $ = jQuery

$(document).on('ready', function() {
  var wprogress = new WProgress()
  wprogress.create().start()
})

function WProgress() {

  this.create = function(){
    var progress = document.createElement("progress")
    progress.id = "wprogress"
    progress.value = 0
    document.body.insertBefore(progress,document.body.firstChild)
    return this
  }

  this.start = function(){
    var winHeight = $(window).height(),
    postHeight = $('.wprogress-post').height(),
    value = $(window).scrollTop(),
    max = postHeight - winHeight;

    $('#wprogress').attr('max', max);
    $('#wprogress').attr('value', value);

    this.updateOnScroll()
    this.onResize()
    return this
  }

  this.updateOnScroll = function(){
    $(document).on('scroll', function() {
      var value = $(window).scrollTop();
      $('#wprogress').attr('value', value);
      var max = $('#wprogress').attr('max')
      if(value > max){
        $('#wprogress').fadeOut(100)
      }
      if(value < max && $('#wprogress').css('display') == "none"){
          $('#wprogress').fadeIn(100)
      }
    });
  }

  this.onResize = function(){
    $(window).on('resize', function() {
      var winHeight = $(window).height(),
      postHeight = $('.wprogress-post').height();

      var max = postHeight - winHeight;
      $('#wprogress').attr('max', max);

      value =  $(window).scrollTop();
      $('#wprogress').attr('value', value);
    });
  }

  return this
}
