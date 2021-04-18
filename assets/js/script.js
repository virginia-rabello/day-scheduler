// Displays the current day at the header

$("#currentDay").append(moment().format("dddd, MMMM Do YYYY"));

var tasks = [];

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

var loadTasks = function() {
  tasks= JSON.parse(localStorage.getItem("tasks"));
  if(tasks){
     for(let i = 0; i < tasks.length; i++){
         var text = tasks[i].text;
         var place = tasks[i].place;
         var placeId = "#" + place;
         $(placeId).val(text);
     }
    }
     else {
      var tasks = {};
      console.log("entrei else");
     }
    
};
var hoursArray = $(".row .hour");
        for(let i = 0; i < hoursArray.length; i++){
            var hourLine = JSON.stringify(i+9) + ":00";
                 
    $(".row .hour span")[i].append(moment(hourLine, ["HH.mm"]).format("hh:mm A"));
                }

    $("body > div > table > tbody > tr > td.save > button").click(function() {
            
        var prevSib = $(this).parent().siblings()[1];
        var nefew = $(prevSib).children();
        var taskText = $(nefew).val();
        var taskPlace = nefew.attr("id");
        console.log(taskPlace);
        
        if (taskText) {
            tasks.push({
            text: taskText,
            place: taskPlace
         });

             
           saveTasks();
        }
        
    });
    

var auditTask = function(hourEl) {
        
    var hour = $(hourEl)
        .find("span")
        .text()
        .trim();
    var time = moment().format("H");
    var t = parseInt(time);
    var hourC = moment(hour,"hh:mm A").format("H");
    var h = parseInt(hourC);
      
    if (t === h) {
        $(hourEl).next().addClass("present");
    } 
    if (t > h) {
        $(hourEl).next().addClass("past");
    }
    if (t < h) {
        $(hourEl).next().addClass("future");        
    }
    };

   
  
    setInterval(function() {
    $(".row .hour").each(function() {
      auditTask($(this));
    });
  }, 1000);

 loadTasks();