$(document).ready(function(){
   
   function initGrid(){
         $('.grid').empty('div');
         var gridSize = prompt('Choose grid size');
 
         for (i = 0; i < gridSize; ++i) {
            $('.grid').append('<div class="gridRow"></div>');
         }
            for (i = 0; i < gridSize; ++i) {
            $('.gridRow').append('<div class="pixel"></div>');
         }

          
         $('.pixel').mouseenter(function(){
            var bgColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            $(this).css('background-color', bgColor);

         });
         
   };

   initGrid();

   $('.resetButton').click(function(){
      initGrid();
   });

});
