// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar - DONE
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours - DONE
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block - DONE
// THEN I can enter an event - DONE
// WHEN I click the save button for that time block - DONE
// THEN the text for that event is saved in local storage - DONE
// WHEN I refresh the page
// THEN the saved events persist - DONE

// Pseudocode
    // Date
        // Current date is displayed - DONE

    // Time Blocks
        // 900-500 - DONE
        // Text Box - DONE
        // Save Button - DONE
        // Color Coded: Red = Passed ; Green = Available and Entered ; Yellow = Available
    
    // Local Storage
        // Text entered into text box is saved to local storage

// Adding the date to the webpage
var date = new Date();

var currentMonth = date.getMonth();
var currentDay = date.getDate();
var currentYear = date.getFullYear();

$("#currentDay").append(date);

// Save what was entered into the textbox in local storage
    $(".button").on("click", function(){
        var storedInfo = $(".textbox").val();
        localStorage.setItem("storedInfo", storedInfo);
        console.log(storedInfo);
    });

// Attaching storedInfo below text

// Changing the color of the textbox