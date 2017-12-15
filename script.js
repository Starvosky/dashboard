var day = new Date();
var weekday = new Array(7);
weekday[0] = 'Sunday';
weekday[1] = 'Monday';
weekday[2] = 'Tuesday';
weekday[3] = 'Wednesday';
weekday[4] = 'Thursday';
weekday[5] = 'Friday';
weekday[6] = 'Saturday';

var month = new Date();
var months = new Array(12);
months[0] = 'January';
months[1] = 'Febuary';
months[2] = 'March';
months[3] = 'April';
months[4] = 'May';
months[5] = 'June';
months[6] = 'July';
months[7] = 'August';
months[8] = 'September';
months[9] = 'October';
months[10] = 'November';
months[11] = 'December';

var n = weekday[day.getDay()];
var m = months[month.getMonth()];
var time = new Date();
console.log(n + ', ' + m + ' ' + time.getDay() + ', ' + time.getFullYear());

document.getElementById("body-Header").innerHTML = (n + ', ' + m + ' ' + time.getDate() + ', ' + time.getFullYear());

function getEmail() {
  var str = document.getElementById('emailId').value;
  var text = document.forms['emailValidation']['email'].value;

  if  (str.slice(-19) == '@stevenscollege.edu'){
    alert('This works');
    return false;
  } else {
    alert('Not an email');
  }
}
