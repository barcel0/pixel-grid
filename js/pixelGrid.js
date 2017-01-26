$(document).ready(function(){
   var gridSize = prompt('Choose grid size');
   var gridTotal = gridSize*gridSize;
   
   for (i = 0; i < gridSize; ++i) {
      $('.grid').append('<div class="gridRow"></div>');
   }
      for (i = 0; i < gridSize; ++i) {
      $('.gridRow').append('<div class="pixel"></div>');
   }
   
   
  
   $('.pixel').mouseenter(function(){
      var bgColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      $(this).css('background-color', bgColor);
      //$(this).addClass('pixelHovered');
   });
   

});
