var random=Math.floor(Math.random()*100)+1;
var attempts=0;
document.getElementById('btn').addEventListener('click',function(){
    attempts++;
    var guess=parseInt(document.getElementById('guessinput').value);
    if(guess===random){
        display("Congratulations "+attempts);
        document.getElementById('btn').disabled=true;
    }
    else if(guess<random){
        display("too low ,try again");
    }
    else if(guess>random){
        display("too high, try again");
    }
});
function display(message){
    document.getElementById("msg").textContent=message;

}
