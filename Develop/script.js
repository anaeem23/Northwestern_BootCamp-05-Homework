var timeBlockContainer = $('.timeBlock');


function TimeBlocks() {

    
    for (i=0; i < 11; i++) {
        var timeBlocks = $('<div>').addClass("row");
        var timeBlocksTime = $('<div>').addClass("col-sm").text(i);
        var timeBlocksInput = $('<input type="text">').addClass("col-sm").text(i);
        var timeBlocksBtn = $('<button type="button">').addClass("col-sm");

         timeBlockContainer.append(timeBlocks);
         timeBlocks.append(timeBlocksTime);
         timeBlocks.append(timeBlocksInput);
         timeBlocks.append(timeBlocksBtn);

                                    
        
    }
    


}

TimeBlocks()