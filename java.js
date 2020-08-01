function load() {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth()+1;
    var day = today.getDate();
    if (month < '10') {
      month = '0'+ month;
    }
    if(day < '10'){
      day = '0'+ day;
    }
    var date = year + '-' +month + '-' + day;
    document.getElementById("datemax").defaultValue = date;
    document.getElementById("loading").style.display = "none";
}
var Timer;
var roll;
var maxdate;
var mindate;
go = function()
{
  document.getElementById("button1").style.display = "none";
  document.getElementById("loading").style.display = "block";
  roll = document.forms["myForm"]["Roll No."].value;
  maxdate = document.forms["myForm"]["datemax"].value;
  mindate = document.forms["myForm"]["datemin"].value;
  window.open("http://172.26.142.92/Smartrollcall", '_blank');
  Timer = setInterval(web, 10000);
}
function web(){
  //clearInterval(Timer);
  var link = 'http://172.26.142.92/Smartrollcall/Reports/ReportViewer.aspx?ReportID=11&Category=1&from=' + mindate + '&to=' + maxdate + '&RollNumber=' + roll;
  window.open(link, '_parent');
  document.getElementById("loading").style.display = "none";
  document.getElementById("button1").style.display = "block";
}
