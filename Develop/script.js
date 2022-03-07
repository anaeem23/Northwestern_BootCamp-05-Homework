var timeBlockContainer = $(".timeBlock");
var todaysDate = $(".todays-date");

setTimeBlocks();

function setTimeBlocks() {
  todaysDate.text(moment().format("dddd MMMM Do"));

  for (i = 9; i < 21; i++) {
    var time = moment().hour(i);
    var timeBlocks = $("<div>").addClass("row");
    var timeBlocksTime = $("<div>")
      .addClass("col-2 col-lg-1 text-center bg-primary word-wrap")
      .text(time.format("hA"))
      .attr("id", "Time");
    var timeBlocksInput = $('<input type="text">')
      .addClass(`col-8 col-lg-9 ${i}`)
      .text(i)
      .attr("id", `${i}-input`);
    var timeBlocksBtn = $("<button>")
      .addClass(`col-2 col-lg-2 Btn`)
      .attr("id", `${i}`);

    timeBlockContainer.append(timeBlocks);
    timeBlocks.append(timeBlocksTime);
    timeBlocks.append(timeBlocksInput);
    timeBlocks.append(timeBlocksBtn);

    var currentTime = moment().hour();

    if (time.format("H") < currentTime) {
      timeBlocksInput.css("background-color", "red");
    } else if (time.format("H") == currentTime) {
      timeBlocksInput.css("background-color", "green");
    } else {
      timeBlocksInput.css("background-color", "blue");
    }
  }

  storage();
}

function storage() {
  if (moment().hour() == 0) {
    for (i = 9; i < 21; i++) {
      localStorage.setItem(`${i}`, "");
    }
  } else {
    for (i = 9; i < 21; i++) {
      $(`#${i}-input`).val(localStorage.getItem(`${i}`));
    }
  }
}



$(".Btn").on("click", function (event) {
  var id = event.target.id;
  for (i = 9; i < 21; i++) {
    if (event.target.id == i)
      localStorage.setItem(`${i}`, $(`#${i}-input`).val());
  }
});
