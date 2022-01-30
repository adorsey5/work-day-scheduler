 //From Moment API
 var currentDay = moment().format("dddd, MMMM DD, YYYY  h:mm a");
 $("#currentDay").text(currentDay);

 $(document).ready(function () {   
   
    //defined the function
    function timeTracer(){

        //Generates the current time (from moment library)
        var currentTime = moment().hour();
        
        // the time block changes color based on the current hour
        $(".time-block").each(function() {
            // colors every time block 
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);          
            //colors the time blocks as  present, past, & future.
            if (timeBlock === currentTime){
                $(this).addClass("present");
            }
            else if (timeBlock < currentTime) {
                $(this).addClass("past");
            }
            else {
                $(this).addClass("future");
            }
        })
    }
    
            //Retrieves the saved task from local Storage
            $("#hour7 .task-item").val(localStorage.getItem("hour7"));
            $("#hour8 .task-item").val(localStorage.getItem("hour8"));
            $("#hour9 .task-item").val(localStorage.getItem("hour9"));
            $("#hour10 .task-item").val(localStorage.getItem("hour10"));
            $("#hour11 .task-item").val(localStorage.getItem("hour11"));
            $("#hour12 .task-item").val(localStorage.getItem("hour12"));
            $("#hour13 .task-item").val(localStorage.getItem("hour13"));
            $("#hour14 .task-item").val(localStorage.getItem("hour14"));
            $("#hour15 .task-item").val(localStorage.getItem("hour15"));
            $("#hour16 .task-item").val(localStorage.getItem("hour16"));
            $("#hour17 .task-item").val(localStorage.getItem("hour17"));

      //saves the task by clicking the save button
      $(".saveBtn").on("click", function () {
         let time = $(this).parent().attr("id");
         let task = $(this).siblings(".task-item").val();         
         //setting the time and task values in the local storage
         localStorage.setItem(time, task);
     })
    //called the function
    timeTracer();
})