 //From Moment API
 var currentDay = moment().format("dddd, MMMM DD, YYYY  h:mm a");
 $("#currentDay").text(currentDay);

 $(document).ready(function () {   
   
    //defined the function
    function timeTracer(){

        //Generates the current time (from moment library)
        var currentTime = moment().hour();