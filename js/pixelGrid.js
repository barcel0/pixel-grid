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
      $(this).addClass('pixelHovered');
   });
   
   
});
