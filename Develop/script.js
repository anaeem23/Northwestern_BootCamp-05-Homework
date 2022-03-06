var timeBlockContainer = $('.timeBlock');
var timeCont = $('#Time');
var inputCont = $('#Input');
var btnCont = $('#Btn');


function setTimeBlocks() {

    
    for (i=9; i < 21; i++) {
        var time = moment().hour(i)
        var timeBlocks = $('<div>').addClass("row");
        var timeBlocksTime = $('<div>').addClass("col-1 text-center bg-primary word-wrap").text(time.format("hA")).attr('id', 'Time');
        var timeBlocksInput = $('<input type="text">').addClass("col-9").text(i).attr('id', 'Input');
        var timeBlocksBtn = $('<button type="button">').addClass("col-2").attr('id', 'Btn');

         timeBlockContainer.append(timeBlocks);
         timeBlocks.append(timeBlocksTime);
         timeBlocks.append(timeBlocksInput);
         timeBlocks.append(timeBlocksBtn);

        var currentTime = moment().hour();

        
         if (time.format("H") < currentTime) {
             timeBlocksInput.css('background-color', 'red');
         } else if (time.format("H") == currentTime) {
            timeBlocksInput.css('background-color', 'green');
         } else {
            timeBlocksInput.css('background-color', 'blue');
         }

         
    }
    
  
}


function setTime() {
    currentTime = moment().hour()
    if (time < currentTime) {
        inputCont.css('background-color', 'red');
    } else if (time === currentTime) {
        inputCont.css('background-color', 'green');
    } else {
        inputCont.css('background-color', 'blue');
    }
}





setTimeBlocks()