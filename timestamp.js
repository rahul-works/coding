let timestamp = function () {
    console.log( Date.now());
    
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
var dateTime = date+' '+time; 
console.log(dateTime);
var datetime = new Date().toLocaleString();
console.log(datetime);
}
timestamp();
