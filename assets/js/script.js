// Displays the current day at the header

$("#currentDay").append(moment().format("dddd, MMMM Do YYYY"));

var hoursArray = $(".row .hour");
        for(let i = 0; i < hoursArray.length; i++){
            var hourLine = JSON.stringify(i+9) + ":00";
                 
    $(".row .hour span")[i].append(moment(hourLine, ["HH.mm"]).format("hh:mm A"));
                }
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

