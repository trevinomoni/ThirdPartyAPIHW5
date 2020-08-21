// use JavaScript Date to display current date in a div (#displayJsDate)
var NowDate = new Date();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var sDay = NowDate.getDate();
var sMonth = NowDate.getMonth() + 1;
var sYear = NowDate.getFullYear();
var eDisplayDate = document.getElementById('displayJsDate');
var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
var workingHours = 10
var timeSlot = 9
var amHour = "am"
var currentHour = moment().format('HH');
var classTime = "present"

var schedules = []

// use Moment.js to display current date in a div (#displayMoment)
var NowMoment = moment();
var eDisplayMoment = document.getElementById('displayMoment');

$("#currentDay").text(currentDay);

for (var i = 9; i < 19; i++) {
    if (i < currentHour) {
        classTime = "past"
    } else if (i === currentHour) {
        classTime = "present"
    } else {
        classTime = "future"
    }
    $('.container').append(`<div class="row">
            <label class="time-block hour" id="time-${i}">${timeSlot} ${amHour}</label>
            <textarea class="description ${classTime}" id="desc-${i}"></textarea>
            <button class="saveBtn" id="${i}"><i class="fa fa-save"></i></button>
        </div>`);
    timeSlot++
    if (timeSlot > 12) {
        timeSlot = 1
    }
    if (i >= 12) {
        amHour = "pm"
    }
}
$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var clickButton = $(this)
    var id = clickButton.attr("id")
    schedules = JSON.parse(localStorage.getItem("schedules"))
    if (!schedules) {
        schedules = []
    }
    schedules.push({ "hour": $(`#time-${id}`).text(), "description": $(`#desc-${id}`).val() });
    localStorage.setItem("schedules", JSON.stringify(schedules))
    console.log($("#time-" + id).text())
    console.log($("#desc-" + id).val())
})
